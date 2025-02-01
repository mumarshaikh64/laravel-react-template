


export interface MainContextTypes {
    allCategory?: Array<any> | null
    setAllCategoryId?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    allPages?: Array<any> | null
    setAllPages?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allEvents?: Array<any> | null
    setAllEvents?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    token?: string | null
    setToken?: React.Dispatch<React.SetStateAction<string | null>>
    setAllCategories?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allCategories?: Array<any> | null
    setAllBlogs?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allBlogs?: Array<any> | null,
    setAllPdf?: React.Dispatch<React.SetStateAction<Array<any> | null>>
    allPdf?: Array<any> | null,
    allHolistic?: Array<any> | null
    setAllHolistic?: React.Dispatch<React.SetStateAction<Array<any> | null>>,
    subscribeToMail?: ({ email, content }: { email: string, content: string }) => Promise<void>
}