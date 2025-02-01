

export interface MainContextType {
    allCategory?: Array<any> | null
    setAllCategoryId?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allPages?: Array<any> | null
    setAllPages?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allCertificates?: Array<any> | null
    setAllCertificates?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allUsers?: Array<any> | null
    setAllUsers?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allCategories?: Array<any> | null
    setAllCategories?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allProducts?: Array<any> | null
    setAllProducts?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allBlogs?: Array<any> | null
    setAllBlogs?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allEvents?: Array<any> | null
    setAllEvents?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allHolistic?: Array<any> | null
    setAllHolistic?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allPdf?: Array<any> | null
    setAllPdf?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    subscriber?: Array<any> | null
    setSubscriber?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    contact?: Array<any> | null
    setContact?: React.Dispatch<React.SetStateAction<Array<any> | null>>
}