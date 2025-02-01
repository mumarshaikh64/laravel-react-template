import { BaseApi, useMainContext } from '@/Context/MainContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BgBanner from '../../assets/images/header-gradient-bg.png'

const CustomPage = () => {
    const appContext = useMainContext();
    const { uri } = useParams();
    const [content, setContent] = useState<any>(null)
    const [fileContent, setFileContent] = useState("");


    useEffect(() => {
        if (appContext?.allPages) {
            const contentFilter = appContext.allPages.filter(d =>
                d?.uri.split("/")[1] == uri);
            if (contentFilter && contentFilter.length > 0) {
                setContent(contentFilter[0]);
            } else {
                setContent(null);
                setFileContent("");
            }
        }
    }, [uri, appContext?.allPages])



    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const resp = await BaseApi.get(`/pages/content/${uri}`);
                // console.log(resp.data);
                // const url = `${content?.content}`;
                // // console.log("Fetching file from URL:", url);
                // const response = await fetch(url);

                // if (response.ok) {
                if(resp.data){
                    setFileContent(resp.data[0]['content']);
                }
                //     const text = await response.text();
                // } else {
                //     console.error("Failed to fetch file:", response.statusText);
                // }
            } catch (error) {
                console.error("Error reading file:", error);
            }
        };
        fetchFileContent();
    }, [content]);


    return (
        <div className='mt-[8rem]'>
            <div className={`hero-section  md:mt-0 mt-[-40px]  flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: "100% 100%" }}>
                <div className="px-[4rem] py-[5.5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">{content?.title}</h3>
                </div>
            </div>
            {fileContent ? (
                <div dangerouslySetInnerHTML={{ __html: fileContent }} />
            ) : (
                <p>Loading content...</p>
            )}
        </div>
    )
}

export default CustomPage 