
import React, { useRef, useState } from 'react'
import EmailEditor, { EditorRef, EmailEditorProps, Unlayer, UnlayerOptions } from 'react-email-editor';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { BaseApi } from '../../../Context/MainContext';

const DefaultEmailContent = {
    // Example design (this would normally be the JSON structure of your template)
    "body": {
        "rows": [
            {
                "columns": [
                    {
                        "items": [
                            {
                                "type": "text",
                                "values": {
                                    "content": "Welcome to our newsletter!"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};


const PageEditor = () => {


    const emailEditorRef = useRef<EditorRef>(null);
    const [title, setTitle] = useState<any>(null)
    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml(async (data) => {
            if (title == null || title == "") {
                toast.error("Please Enter The Page Title");
                return;
            }
            const { design, html } = data;
            console.log('exportHtml', html);

            try {
                const response = await BaseApi.post("/pages/store", { title: title, content: html });
                if (response.status == 200) {
                    toast.success("Add Pages Success");
                    window.location.replace("/admin/pages");;
                }
            } catch (error) {
                console.log(error);
            }
        });
    };


    const convertHtmlToJson = (html: string) => {
        // You can use libraries or your own method to convert HTML to the design JSON format
        return {
            body: {
                rows: [
                    {
                        columns: [
                            {
                                items: [
                                    {
                                        type: 'html',
                                        values: {
                                            content: html,
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        };
    };


    const htmlTemplate = `
  <html>
    <body>
      <div style="padding: 20px;">
        <h1>Welcome to Our Newsletter!</h1>
        <p>This is a sample email with HTML content.</p>
      </div>
    </body>
  </html>
`;


    // const dataNew:


    const onReady: EmailEditorProps['onReady'] = async (unlayer) => {
    }


    const navigate = useNavigate();


    const onDesignLoad = () => {
        console.log("Design Loaded!");
        const rawHtml = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="font-size: 28px; color: #1d1d1d;">Welcome to Our Newsletter</h1>
          <p style="font-size: 16px; color: #555;">This is an example of raw HTML content loaded into the editor.</p>
          <p style="font-size: 14px;">Feel free to modify it as needed.</p>
        </div>
      `;

        if (emailEditorRef.current) {
            const editor = emailEditorRef.current.editor;

            // Convert the raw HTML into a valid email design structure
            const emailDesign = {
                counters: {
                    totalImages: 3,
                    totalTextBlocks: 5
                },
                body: {
                    id: "page-123",  // A unique ID for the page
                    rows: {
                        id: "row-1",
                        columns: [
                            {
                                contents: [
                                    {
                                        type: "html",
                                        value: "<h1>Welcome to Our Newsletter</h1>"
                                    }
                                ]
                            }
                        ]
                    },
                    headers: {
                        id: "header-1",
                        columns: [
                            {
                                contents: [
                                    {
                                        type: "html",
                                        value: "<h2>Our Latest Updates</h2>"
                                    }
                                ]
                            }
                        ]
                    },
                    footers: {
                        id: "footer-1",
                        columns: [
                            {
                                contents: [
                                    {
                                        type: "html",
                                        value: "<p>Thank you for subscribing!</p>"
                                    }
                                ]
                            }
                        ]
                    },
                    // values: {
                    //     unsubscribeLink: "https://example.com/unsubscribe",
                    //     contactEmail: "contact@example.com"
                    // }
                },
            };

            // // Load the design into the editor
            // editor?.loadDesign({
            //     counters: {
            //         totalImages: 3,
            //         totalTextBlocks: 5
            //     },
            //     body: {
            //         id: "page-123",  // A unique ID for the page
            //         rows: {
            //             id: "row-1",
            //             columns: [
            //                 {
            //                     contents: [
            //                         {
            //                             type: "html",
            //                             value: "<h1>Welcome to Our Newsletter</h1>"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         headers: {
            //             id: "header-1",
            //             columns: [
            //                 {
            //                     contents: [
            //                         {
            //                             type: "html",
            //                             value: "<h2>Our Latest Updates</h2>"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         footers: {
            //             id: "footer-1",
            //             columns: [
            //                 {
            //                     contents: [
            //                         {
            //                             type: "html",
            //                             value: "<p>Thank you for subscribing!</p>"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //     }
            // });
        }
    };

    return (
        <div>
            <div className='py-2 flex justify-between px-4'>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    placeholder='Enter Page Title' className='px-4 outline-none w-[25rem] shadow rounded' />
                <div className='flex'>
                    <button className='bg-[#bdbdbdf7] px-4 py-2 mx-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#bdbdbdf7] outline-one' onClick={() => { navigate("/admin/pages") }}>Cancel</button>
                    <button className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one' onClick={exportHtml}>Publish</button>
                </div>
            </div>
            <EmailEditor

                // onLoad={onDesignLoad}
                options={{
                    amp: true,
                    displayMode: "web",
                    editor: {
                        contentType: "page"
                    }
                }}
                style={{ width: "100%" }}
                ref={emailEditorRef} onReady={onReady} />
        </div>
    )
}

export default PageEditor













// import React, { useState, useEffect } from 'react';
// import {
//     BlockEditorProvider,
//     BlockCanvas,
//     BlockList,
//     MediaUpload, MediaUploadCheck
// } from '@wordpress/block-editor';
// import { registerBlockType } from '@wordpress/blocks';
// // import { MediaUpload, MediaUploadCheck } from '@wordpress/media-utils';
// import '@wordpress/block-editor/build-style/style.css';
// import '@wordpress/components/build-style/style.css';


// // PageEditor Component
// const PageEditor = () => {
//     const [blocks, updateBlocks] = useState([]);

// // Register the image block
// useEffect(() => {
//     registerBlockType('my-block/image-block', {
//         title: 'Image Block',
//         icon: 'format-image',
//         category: 'common',
//         attributes: {
//             imageUrl: {
//                 type: 'string',
//                 default: '',
//             },
//             imageAlt: {
//                 type: 'string',
//                 default: '',
//             },
//         },
//         edit: (props) => {
//             const { attributes, setAttributes } = props;
//             const { imageUrl, imageAlt } = attributes;

//             const onSelectImage = (media) => {
//                 setAttributes({
//                     imageUrl: media.url,
//                     imageAlt: media.alt,
//                 });
//             };

//             return (
//                 <div className="image-block">
//                     <MediaUploadCheck>
//                         <MediaUpload
//                             onSelect={onSelectImage}
//                             allowedTypes={['image']}
//                             render={({ open }) => (
//                                 <button type="button" onClick={open}>
//                                     Select Image
//                                 </button>
//                             )}
//                         />
//                     </MediaUploadCheck>
//                     {imageUrl && (
//                         <div>
//                             <img src={imageUrl} alt={imageAlt} width="100%" />
//                         </div>
//                     )}
//                 </div>
//             );
//         },
//         save: (props) => {
//             const { attributes } = props;
//             const { imageUrl, imageAlt } = attributes;
//             return (
//                 <div className="image-block">
//                     <img src={imageUrl} alt={imageAlt} width="100%" />
//                 </div>
//             );
//         },
//     });
// }, []);
//     return (
//         <BlockEditorProvider
//             value={blocks}
//             onInput={(blocks) => updateBlocks(blocks)}
//             onChange={(blocks) => updateBlocks(blocks)}
//         >
//             <BlockCanvas height="400px" />
//             <BlockList />
//         </BlockEditorProvider>
//     );
// };

// export default PageEditor;



// const [content, setContent] = useState('');

// useEffect(() => {
//     // Register a simple Gutenberg block
//     registerBlockType('my-block/text-block', {
//         title: 'Text Block',
//         icon: 'editor-paragraph',
//         category: 'common',
//         edit: () => (
//             <RichText
//                 tagName="p"
//                 value={content}
//                 onChange={setContent}
//                 placeholder="Enter your text here..."
//             />
//         ),
//         save: () => <RichText.Content tagName="p" value={content} />,
//     });
// }, [content]);

// return (
//     <BlockEditorProvider>
//         <BlockList />
//         <BlockInspector />
//     </BlockEditorProvider>
// );