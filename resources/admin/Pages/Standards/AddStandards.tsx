import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseApi } from '../../Context/MainContext';
const AddStandards = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
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
        if (!shortDescription) {
            newErrors.value = 'Short Description is required';
            toast.error('Short Description is required');
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
        formData.append('short_description', shortDescription);
        if (image) {
            formData.append('pdf', image);
        }
        try {
            const response = await BaseApi.post('pdf/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Data submitted:', response.data);
            if (response.status == 200) {
                alert("Add Pdf Success");
                window.location.replace("/admin/page/standards")
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
                        navigate('/admin/page/standards')
                    }} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Back</button>
                <h2 className='text-[25px] mx-4 font-bold'>Add Standards </h2>
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
                        <label>Pdf</label>
                        <input
                            onChange={(e) => {
                                if (e.target.files?.length! > 0) {
                                    setImages(e.target.files![0])
                                }
                            }}
                            type='file'
                            placeholder='Enter Name' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-1 rounded' />
                    </div>
                    <div className='md:w-[100%]  mx-1 w-full'>
                        <label>Short Description</label>
                        <textarea
                            onChange={(e) => setShortDescription(e.target.value)}
                            value={shortDescription}
                            placeholder='Enter Short Description' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className="mt-4 flex w-full justify-end">
                        <button
                            onClick={() => navigate('/admin/page/standards')}
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




export default AddStandards