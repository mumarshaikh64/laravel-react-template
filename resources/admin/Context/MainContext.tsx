import { createContext, useContext, useEffect, useState } from "react";
import { MainContextType } from "./@types/MainContextType";
import React from 'react';
import axios from 'axios';


const MainContext = createContext<MainContextType | null>(null);


export const BaseUrl = "https://universalhpc.com/api"
// export const BaseUrl = "http://127.0.0.1:8000/api";
export const BaseApi = axios.create({
    baseURL: BaseUrl
})
const MainContextProvider = ({ children }: any) => {

    const [allCategory, setAllCategoryId] = useState<any>(null);
    const [allPages, setAllPages] = useState<any>(null);
    const [allCertificates, setAllCertificates] = useState<any>(null);
    const [allUsers, setAllUsers] = useState<any>(null);
    const [allCategories, setAllCategories] = useState<any>(null);
    const [allProducts, setAllProducts] = useState<any>(null);
    const [allBlogs, setAllBlogs] = useState<any>(null);
    const [allEvents, setAllEvents] = useState<any>(null);
    const [allHolistic, setAllHolistic] = useState<any>(null);
    const [allPdf, setAllPdf] = useState<any>(null);
    const [subscriber, setSubscriber] = useState<any>(null);
    const [contact, setContact] = useState<any>(null);













    useEffect(() => {
        getAllCategories();
        getAllPages();
        getAllCategory();
        getAllProdcutsProfile();
        getAllCertificates();
        getAllUsers();
        getAllSubscriber();
        getAllContac();
        getAllBlogs();
        getAllEvents();
        getAllHolistic();
        getAllPdf();
    }, [])

    const getAllCategories = async () => {
        try {
            const response = await BaseApi.get("/directories/");
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


    const getAllBlogs = async () => {
        try {
            const response = await BaseApi.get("/blogs/");
            if (response.status == 200) {
                setAllBlogs(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllProdcutsProfile = async () => {
        try {
            const response = await BaseApi.get("/product/");
            if (response.status == 200) {
                setAllProducts(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getAllEvents = async () => {
        try {
            const response = await BaseApi.get("/Event/");
            if (response.status == 200) {
                setAllEvents(response.data['data']);
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


    const getAllCategory = async () => {
        try {
            const response = await BaseApi.get("/category/");
            if (response.status == 200) {
                setAllCategories(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }



    const getAllCertificates = async () => {
        try {
            const response = await BaseApi.get("/certificate/");
            if (response.status == 200) {
                setAllCertificates(response.data?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllUsers = async () => {
        try {
            const response = await BaseApi.get("/users/");
            if (response.status == 200) {
                setAllUsers(response.data?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }



    const getAllSubscriber = async () => {
        try {
            const response = await BaseApi.get("/subscribe/");
            if (response.status == 200) {
                setSubscriber(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getAllContac = async () => {
        try {
            const response = await BaseApi.get("/pages/contact");
            if (response.status == 200) {
                setContact(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (<MainContext.Provider value={{
        setAllCategoryId,
        allCategory,
        allPages,
        setAllPages,
        allCertificates,
        setAllCertificates,
        allUsers,
        setAllUsers,
        allCategories,
        setAllCategories,
        allProducts,
        setAllProducts,
        allBlogs,
        setAllBlogs,
        allEvents,
        setAllEvents,
        allHolistic,
        setAllHolistic,
        allPdf,
        setAllPdf,
        setSubscriber,
        subscriber,
        contact,
        setContact
    }}>
        {children}
    </MainContext.Provider>)
}

const useMainContext = () => useContext<MainContextType | null>(MainContext);

export { useMainContext, MainContextProvider }