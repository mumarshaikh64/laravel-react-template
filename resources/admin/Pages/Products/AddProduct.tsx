import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseApi, useMainContext } from '../../Context/MainContext';

const AddProduct = () => {
    const navigate = useNavigate();
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'size': ['small', 'medium', 'large', 'huge'] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            [{ 'color': [] }, { 'background': [] }],
            ['blockquote', 'code-block'],
            ['clean'] // to add a "clear" button
        ],
    };



    const [socialLinks, setSocialLinks] = useState([
        { platformName: '', platformLink: '' }
    ]);
    const [value, setValue] = useState('');
    const [name, setName] = useState("");
    const [destination, setDestinasion] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [level, setLevel] = useState("");
    const [webLink, setWebLink] = useState("");
    const [address, setAddres] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [tags, setTags]: any = useState([]);

    const mainContext = useMainContext();


    // Handler to update the social platform fields
    const handleInputChange = (index, event) => {
        const values = [...socialLinks];
        values[index][event.target.name] = event.target.value;
        setSocialLinks(values);
    };

    // Handler to add a new social platform input field
    const handleAddNew = () => {
        setSocialLinks([
            ...socialLinks,
            { platformName: '', platformLink: '' }
        ]);
    };

    const handleRemove = (index) => {
        const values = [...socialLinks];
        values.splice(index, 1);
        setSocialLinks(values);
    };



    // Custom validation function
    const validate = () => {
        const errors: any = {};

        if (!name) {
            errors.name = 'Name is required';
            toast.error('Name is required')
        }
        if (!destination) {
            errors.destination = 'Destination is required';
            toast.error('Destination is required')
        }
        if (!email) {
            errors.email = 'Email is required';
            toast.error('Email is required')
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
            toast.error("Email address is invalid")
        }
        if (!number) {
            errors.number = 'Number is required';
            toast.error("Number is required")
        }
        if (!level) {
            errors.level = 'Level is required';
            toast.error("Level is required")
        }
        if (!webLink) {
            errors.webLink = 'Web Link is required';
            toast.error("Web Link is required")
        }
        else if (!/^https?:\/\/.+/.test(webLink)) {
            errors.webLink = 'Web Link must be a valid URL';
            toast.error("Web Link must be a valid URL")
        }
        if (!address) {
            errors.address = 'Address is required';
            toast.error('Address is required');
        }
        if (!value) {
            errors.value = 'About is required';
            toast.error('About is required');
        }
        if (!categoryId) {
            errors.categoryId = 'Category ID is required';
            toast.error('Category is required');
        }

        // Validate social links if more than one
        socialLinks.forEach((link, index) => {
            if (!link.platformName) {
                errors[`socialLinks[${index}].platformName`] = 'Platform name is required';
                toast.error('Platform name is required');
            }
            if (!link.platformLink) {
                errors[`socialLinks[${index}].platformLink`] = 'Platform link is required';
                toast.error('Platform link is required');
            }
            else if (!/^https?:\/\/.+/.test(link.platformLink)) {
                errors[`socialLinks[${index}].platformLink`] = 'Platform link must be a valid URL';
                toast.error('Platform link must be a valid URL');
            }
        });

        return Object.keys(errors).length === 0;
    };







    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!validate()) {
                return;
            }
            const response = await BaseApi.post('/product/store', {
                name,
                destination,
                email,
                number,
                level,
                web_link: webLink,
                address,
                about: value,
                categoryId: categoryId,
                social_links: socialLinks,
                tags: tags,
            });
            if (response.status == 200) {
                alert("Add Product Profile Success");
                window.location.replace("/admin/page/products");
            }
            console.log('Item Created:', response.data);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };




    return (
        <div className='px-5 py-10'>
            <div className='flex items-center '>
                <button
                    onClick={() => {
                        navigate('/admin/page/products')
                    }} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Back</button>
                <h2 className='text-[25px] mx-4 font-bold'>Add Product Profile </h2>
            </div>
            <div className='my-4'>
                <div className='bg-[#fff] rounded-xl shadow-lg px-4 py-4 flex flex-wrap  justify-between '>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Name</label>
                        <input
                            onChange={(e) => setName(e.target.value!)}
                            value={name!}
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full '>
                        <label>Destination</label>
                        <input
                            onChange={(e) => setDestinasion(e.target.value!)}
                            value={destination!}
                            placeholder='Enter Destination' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value!)}
                            value={email!}
                            placeholder='Enter Email' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Number</label>
                        <input
                            onChange={(e) => setNumber(e.target.value!)}
                            value={number!}
                            placeholder='Enter Number' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Address</label>
                        <input
                            onChange={(e) => setAddres(e.target.value!)}
                            value={address!}
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>


                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Category</label>
                        <select
                            className='w-full my-4 border-none bg-[#fff] shadow outline-none px-4 py-2 rounded'
                            onChange={(e) => setCategoryId(e.target.value!)}
                        >
                            <option>--Select Category--</option>
                            {
                                mainContext?.allCategories && mainContext?.allCategories?.map((v, i) => {
                                    return <option key={i} value={v?.id} >{v?.title}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Level</label>
                        <select
                            className='w-full my-4 border-none bg-[#fff] shadow outline-none px-4 py-2 rounded'
                            onChange={(e) => setLevel(e.target.value!)}
                        >
                            <option>--Select Level--</option>
                            <option value={"Corporate Member"}>Corporate Member</option>
                            <option value={"Executive Practitioner"}>Executive Practitioner</option>
                            <option value={"Practitioner"}>Practitioner</option>
                        </select>
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Website Link</label>
                        <input
                            onChange={(e) => setWebLink(e.target.value!)}
                            value={webLink!}
                            placeholder='Enter Website link' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[100%] mx-1 w-full'>
                        <label>Courses Offered</label>
                        <InputTag

                            onUpdateTags={(d) => setTags(d)} />

                        {/* <ReactTags   
                        className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' 
                        inline={false} /> */}
                    </div>
                    <div className='w-full mx-1 rounded-xl'>
                        <label>About</label>

                        <ReactQuill className='mt-2' theme="snow"
                            modules={modules}
                            value={value} onChange={setValue} />
                    </div>
                    <div className='w-full mt-2 mx-1 rounded-xl'>
                        <div className='flex py-4 justify-between'>
                            <label>Social Links</label>
                            <button onClick={handleAddNew} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Add New</button>
                        </div>
                        {socialLinks.map((socialLink, index) => (
                            <div key={index} className='flex justify-between'>
                                <div className='md:w-[48%] w-full'>
                                    <input
                                        name='platformName'
                                        placeholder='Enter Social Platform Name'
                                        value={socialLink.platformName}
                                        onChange={(event) => handleInputChange(index, event)}
                                        className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded'
                                    />
                                </div>
                                <div className='md:w-[48%] w-full'>
                                    <input
                                        name='platformLink'
                                        placeholder='Enter Social Platform Link'
                                        value={socialLink.platformLink}
                                        onChange={(event) => handleInputChange(index, event)}
                                        className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded'
                                    />
                                </div>

                                {/* Show Remove button if socialLinks array length is greater than 1 */}
                                {socialLinks.length > 1 && (
                                    <button
                                        onClick={() => handleRemove(index)}
                                        className='text-red-500 ml-1 mt-4'>
                                        <BiTrash />
                                    </button>
                                )}

                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex w-full justify-end">
                        <button
                            onClick={() => navigate('/admin/page/products')}
                            className="px-5 py-2 mx-2 bg-[#d0d3d4] text-white rounded hover:bg-[#ecf0f1]"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-5 py-2 bg-[#4091ca] text-white rounded hover:bg-[#5dade2]"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



// Define the state interface
interface InputTagState {
    tags: string[]; // The tags array holds strings
}
interface InputTagProps {
    onUpdateTags: (tags: string[]) => void;  // Define the onUpdateTags function prop
}

class InputTag extends React.Component<InputTagProps, InputTagState> {
    constructor(props: InputTagProps) {
        super(props);
        this.state = {
            tags: []  // Initialize the tags array as an empty array
        };
    }

    // Method to handle the input keydown event
    inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        if (e.key === 'Enter' && val) {
            // Add the new tag to the tags array
            this.setState({ tags: [...this.state.tags, val] });
            this.props.onUpdateTags(this.state.tags);
        }
    }

    render() {
        return (
            <div className="input-tag mt-2 mb-2 py-1 rounded shadow px-2">
                <ul className="input-tag__tags">
                    {this.state.tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                            <button type="button" onClick={() => this.removeTag(index)}>+</button>
                        </li>
                    ))}
                    <li className="input-tag__tags__input">
                        <input type="text" placeholder='Enter Courses' onKeyDown={this.inputKeyDown} />
                    </li>
                </ul>
            </div>
        );
    }

    // Remove a tag from the list
    removeTag = (index: number) => {
        const newTags = this.state.tags.filter((_, i) => i !== index);
        this.setState({ tags: newTags });
        this.props.onUpdateTags(this.state.tags);
    }
}




export default AddProduct
