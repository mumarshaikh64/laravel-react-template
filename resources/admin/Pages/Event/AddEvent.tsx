import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseApi } from '../../Context/MainContext';
const AddEvent = () => {

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
    const [value, setValue] = useState('');
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [email, setEmail] = useState("");
    const [uName, setUNmae] = useState("");

    const [webLink, setWebLink] = useState("");

    const [image, setImages]: any = useState(null);



    const validateForm = () => {
        const newErrors: any = {};

        // Validate name
        if (!name) {
            newErrors.name = 'Name is required';
            toast.error('Name is required');
        } else if (name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long';
            toast.error("Name must be at least 3 characters long")
        }

        // Validate value
        if (!value) {
            newErrors.value = 'Value is required';
            toast.error('Content is required');
        }
        // Validate value
        if (!startDate) {
            newErrors.value = 'Start Date is required';
            toast.error('Start Date is required');
        }

        if (!email) {
            newErrors.value = 'Email is required';
            toast.error('Email is required');
        }

        if (!uName) {
            newErrors.value = 'Username is required';
            toast.error('Username is required');
        }

        if (!webLink) {
            newErrors.value = 'Web Link is required';
            toast.error('Web Link is required');
        }




        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('content', value);
        formData.append('email', email);
        formData.append('webLink', webLink);
        formData.append('start_date', startDate);
        formData.append('end_date', endDate);
        formData.append('username', uName);

        if (image) {
            formData.append('featured_image', image);
        }
        try {
            const response = await BaseApi.post('Event/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Data submitted:', response.data);
            if (response.status == 200) {
                alert("Add Blog Success");
                window.location.replace("/admin/page/addEvent")
            }
        } catch (error) {
            console.error('Error submitting data:', error.response.data);
        }

    }
    return (
        <div className='px-5 py-10'>
            <div className='flex items-center '>
                <button
                    onClick={() => {
                        navigate('/admin/page/addEvent')
                    }} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Back</button>
                <h2 className='text-[25px] mx-4 font-bold'>Add Event </h2>
            </div>
            <div className='my-4'>
                <div className='bg-[#fff] rounded-xl shadow-lg px-4 py-4 flex flex-wrap  justify-between '>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Featured Image</label>
                        <input
                            onChange={(e) => {
                                if (e.target.files?.length! > 0) {
                                    setImages(e.target.files![0])
                                }
                            }}
                            type='file'
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-1 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Start Date</label>
                        <input
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                            type='date'
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>End Date</label>
                        <input
                            onChange={(e) => setEndDate(e.target.value)}
                            value={endDate}
                            type='date'
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type='email'
                            placeholder='Enter Email' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Username</label>
                        <input
                            onChange={(e) => setUNmae(e.target.value)}
                            value={uName}
                            type='text'
                            placeholder='Enter Email' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[100%] mx-1 w-full'>
                        <label>Web Link</label>
                        <input
                            onChange={(e) => setWebLink(e.target.value)}
                            value={webLink}
                            type='url'
                            placeholder='Enter Web Link' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='w-full mx-1 rounded-xl'>
                        <label>Content</label>
                        <ReactQuill className='mt-2' theme="snow"
                            modules={modules}
                            value={value} onChange={setValue} />
                    </div>


                    <div className="mt-4 flex w-full justify-end">
                        <button
                            onClick={() => navigate('/admin/page/addEvent')}
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
                        <input type="text" placeholder='Enter Tags' onKeyDown={this.inputKeyDown} />
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




export default AddEvent