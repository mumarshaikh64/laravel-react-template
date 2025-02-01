// web

import { createContext, useContext, useEffect, useState } from "react";
import { MainContextTypes } from "./@types/MainContext";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";

const MainContext = createContext<MainContextTypes | null>(null);


export const BaseUrl = "https://universalhpc.com/api"
// 
// export const BaseUrl = "http://127.0.0.1:8000/api"

export const BaseApi = axios.create({
    baseURL: BaseUrl
})
const MainContextProvider = ({ children }: any) => {

    const [allCategory, setAllCategoryId] = useState<any>(null);
    const [allPages, setAllPages] = useState<any>(null);
    const [allEvents, setAllEvents] = useState<any>(null);
    const [allCategories, setAllCategories] = useState<any>(null);
    const [allBlogs, setAllBlogs] = useState<any>(null);
    const [allPdf, setAllPdf] = useState<any>(null);
    const [allHolistic, setAllHolistic] = useState<any>(null);




    const [token, setToken] = useState<string | null>(null);



    useEffect(() => {
        getLocalToken();
        getAllCategories();
        getAllPages();
        getAllEventData();
        getAllProductCategory();
        getAllBlogs();
        getAllPdf();
        getAllHolistic();
    }, []);



    const getLocalToken = async () => {
        const token = window.localStorage.getItem("jwtToken") ?? "";
        console.log(token);
        setToken(token!);
    }

    const getAllHolistic = async () => {
        try {
            const response = await BaseApi.get("/planProduct/");
            if (response.status == 200) {
                setAllHolistic(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategories = async () => {
        try {
            const response = await BaseApi.get("/directories/web");
            if (response.status == 200) {
                setAllCategoryId(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllPdf = async () => {
        try {
            const response = await BaseApi.get("/pdf/");
            if (response.status == 200) {
                setAllPdf(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const getAllBlogs = async () => {
        try {
            const response = await BaseApi.get("/blogs/web");
            if (response.status == 200) {
                setAllBlogs(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const getAllProductCategory = async () => {
        try {
            const response = await BaseApi.get("/category/web");
            if (response.status == 200) {
                setAllCategories(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }



    const getAllPages = async () => {
        try {
            const response = await BaseApi.get("/pages/");
            if (response.status == 200) {
                setAllPages(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // http://localhost:8000/api/directories/event

    const getAllEventData = async () => {
        try {
            const response = await BaseApi.get("/Event/");
            if (response.status == 200) {
                setAllEvents(response.data['data']);
            }
        } catch (error) {
            console.log(error);
        }
    }




    const subscribeToMail = async ({ email, content }: { email: string, content: string }) => {
        try {
            const response = await BaseApi.post("/subscribe/store", { email, content });
            if (response.status == 200) {
                toast.success("User Subscribe Success");
                window.location.reload();
            }
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error?.response?.data || error.message);
            }
        }
    }


    return (
        <MainContext.Provider
            value={{

                allCategory,
                setAllCategoryId,
                allPages,
                setAllPages,
                allEvents,
                setAllEvents,
                token,
                allCategories,
                setAllCategories,
                allBlogs,
                setAllBlogs,
                allPdf,
                setAllPdf,
                allHolistic,
                setAllHolistic,
                subscribeToMail
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

const useMainContext = () => useContext(MainContext);
export {
    useMainContext,
    MainContextProvider
}