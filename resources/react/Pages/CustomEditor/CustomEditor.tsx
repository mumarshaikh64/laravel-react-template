import { BaseApi } from '@/Context/MainContext';
import { isAxiosError } from 'axios';
import grapesjs, { Editor } from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import customCodePlugin from 'grapesjs-custom-code';

const CustomEditor = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [editor, setEditor] = useState<Editor | null>(null);
  useEffect(() => {
    const editorContainer = document.getElementById("editor");
    if (editorContainer) {
      const initEditor: Editor = grapesjs.init({
        container: editorContainer,
        height: '90vh',
        plugins: [gjsPresetWebpage, customCodePlugin],
        storageManager: false, // Optional: prevent auto-saving

        pluginsOpts: {
          customCodePlugin: {},
          gjsPresetWebpage: {}
        },
        fromElement: true, // Load HTML content from the DOM (optional)
        canvas: {
          styles: [
            'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', // Link to Tailwind CSS
          ],
        },
        blockManager: {
          blocks: [
            {
              id: 'image',
              label: '<i class="fa fa-image" style="font-size:2.5rem;margin-bottom:5px"></i>Image',
              select: true,
              content: { type: 'image' },
              activate: true,
            },
            {
              id: 'row',
              label: '<i class="fa fa-cogs" style="font-size:2.5rem;margin-bottom:5px"></i>Row',
              select: true,
              content: `
                   <div class="grid grid-cols-1 md:grid-cols-2  gap-4 w-[100%]">
                    <div class="col-span-1 p-4 bg-gray-200 border border-gray-300 rounded" data-gjs-editable="true">
                      <p>Row content goes here</p>
                    </div>
                  </div>
              `,
              activate: true,
            },
            {
              id: 'add-column',
              label: '<i class="fa fa-columns" style="font-size:2.5rem;margin-bottom:5px"></i><br/>Add Column',
              select: true,
              content: `
                   <div class="grid grid-cols-1 sm:grid-cols-2  gap-4 w-[100%]">
                    <div class="col-span-1 p-2 bg-gray-200 border border-gray-300 rounded" data-gjs-editable="true">
                      <p>Column 1 Content</p>
                    </div>
                    <div class="col-span-1 p-2 bg-gray-200 border border-gray-300 rounded" data-gjs-editable="true">
                      <p>Column 2 Content</p>
                    </div>
                  </div>
              `,
              activate: true,
            },

            // Button to dynamically add columns
            {
              id: 'add-dynamic-column',
              label: 'Add Dynamic Column',
              select: true,
              content: '<button class="add-column-btn">Add Column</button>',
              activate: true,

            }

          ]
        }
      });
      setEditor(initEditor);

      initEditor?.onReady(() => {
        if (id != '0') {
          getHtmlFile(initEditor);
        }
      })
    }
  }, []);







  const getHtmlFile = async (initEditor: Editor) => {
    try {
      const res = await BaseApi.get(`/pages/${id}`);
      if (res.status == 200) {
        setTitle(res?.data?.title);
        fetchFileContent(res?.data?.content, initEditor);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        alert(`${error.response?.data?.message ?? error.message}`)
      }
    }
  }




  const fetchFileContent = async (link: any, initEditor: Editor) => {
    try {
      const response = await fetch(`${link}`);
      if (response.ok) {
        const text = await response.text();
        initEditor?.setComponents(`${text}`);
      } else {
        console.error("Failed to fetch file:", response.statusText);
      }
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };




  const [title, setTitle] = useState<string | null>(null);
  const navigate = useNavigate();


  const exportHtml = async () => {
    if (title == null || title == '') {
      alert("Please Enter Page Title");
      return;
    }
    const htmlContent = editor?.getHtml();
    const cssContent = editor?.getCss();
    if (!htmlContent || !cssContent) {
      alert("Content is missing");
      return;
    }

    const blob = new Blob([htmlContent!, `<style>${cssContent}</style>`], { type: 'text/html' });
    const file = new File([blob], "page.html", { type: 'text/html' });
    const formattedUri = title.toLowerCase().replace(/\s+/g, '-');
    const data = new FormData();
    data.append("title", title);
    data.append("uri", "/" + formattedUri);
    data.append("html", file);
    if (id == '0') {
      try {
        const response = await BaseApi.post("/pages/store", data, {
          headers: {
            "Content-Type": 'multipart/form-data'
          }
        });
        if (response.status == 200) {
          alert("Add Pages Success");
          window.location.replace("/admin/pages");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await BaseApi.post("/pages/update-page/" + id,
          data, {
          headers: {
            "Content-Type": 'multipart/form-data'
          }
        });
        if (response.status == 200) {
          alert("Update Pages Success");
          window.location.replace("/admin/pages");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }



  return (
    <div>
      <div className='py-2 flex justify-between px-4'>
        <input
          value={title!}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder='Enter Page Title' className='px-4 outline-none w-[30rem]  rounded' />
        <div className='flex'>
          <button className='bg-[#bdbdbdf7] px-4 py-2 mx-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#bdbdbdf7] outline-one' onClick={() => { window.location.replace("/admin/pages") }}>Cancel</button>
          <button className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one' onClick={exportHtml}>Publish</button>
        </div>
      </div>
      <div className='editor' id='editor'></div>
    </div>
  )
}

export default CustomEditor