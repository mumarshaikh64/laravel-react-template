import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseApi } from '../../Context/MainContext';
import { BiTrash } from 'react-icons/bi';
const AddHolistic = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [deposit_from, setDepositFrom] = useState("");
    const [deposit_to, setDepositTo] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("membership");
  const [discount, setDiscount] = useState("0");


    useEffect(() => {
        if (id != '0') {
            getData();
        }
    }, [id])


    const getData = async () => {
        const res = await BaseApi.get(`/planProduct/${id}`);
        if (res.status == 200 && res.data) {
            setType(res.data?.type);
            setName(res.data?.name);
            setShortDescription(res.data?.short_description);
            setDepositFrom(res.data?.deposit_from);
            setDepositTo(res?.data?.deposit_to);
            setPrice(res?.data?.price);
            setListText(res?.data?.list_text.map(v => ({ li: v })));
            setDiscount(res?.data?.discount);

        } else {
            setDepositFrom("");
            setDepositTo("");
            setName("");
            setType("membership");
            setShortDescription("");
            setPrice("");
            setListText(e => [...e, { li: "" }]);
            setDiscount("0");

        }
    }


    const [listText, setListText] = useState([
        { li: '' }
    ]);


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

    const handleInputChange = (index, event) => {
        const values = [...listText];
        values[index]['li'] = event.target.value;
        setListText(values);
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('deposit_from', deposit_from);
        formData.append('deposit_to', deposit_to);
        formData.append("type", type);
        formData.append('price', price);
        formData.append('short_description', shortDescription);
        formData.append("discount", discount);
        listText.forEach((item, index) => {
            formData.append('list_text[]', item['li']); // This will add each `li` as a separate field
        });
        if (id != "0") {
            formData.append("id", id!);
            try {
                const response = await BaseApi.post(`/productUpdate`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Data submitted:', response.data);
                if (response.status == 200) {
                    alert("Add Holistic Success");
                    window.location.replace("/page/holistic")
                }
            } catch (error) {
                console.error('Error submitting data:', error.response.data);
            }
        } else {
            try {
                const response = await BaseApi.post('/planProduct/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Data submitted:', response.data);
                if (response.status == 200) {
                    alert("Add Holistic Success");
                    window.location.replace("/page/holistic")
                }
            } catch (error) {
                console.error('Error submitting data:', error.response.data);
            }
        }

    }

    const handleAddNew = () => {
        setListText([
            ...listText,
            { li: '' }
        ]);
    };

    const handleRemove = (index) => {
        const values = [...listText];
        values.splice(index, 1);
        setListText(values);
    };

    return (
        <div className='px-5 py-10'>
            <div className='flex items-center '>
                <button
                    onClick={() => {
                        navigate('/page/holistic')
                    }} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Back</button>
                <h2 className='text-[25px] mx-4 font-bold'>Add Holistic </h2>
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
                        <label>Depoist</label>
                        <div className='flex justify-between'>
                            <input
                                onChange={(e) => setDepositFrom(e.target.value)}
                                value={deposit_from}
                                type='number'
                                placeholder='From Price' className='w-[47%] my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                            <input
                                onChange={(e) => setDepositTo(e.target.value)}
                                value={deposit_to}
                                placeholder='To Price'
                                type='number'
                                className='w-[47%] my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                        </div>
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Price</label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type='number'

                            placeholder='Enter Price' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 w-full'>
                        <label>Package Type</label>
                        <select onChange={(e) => setType(e.target.value)} className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded'>
                            <option value={"membership"}>Membership</option>
                            <option value={"beauty"}>Beauty</option>
                        </select>
                        {/* <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type='number'

                            placeholder='Enter Price' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' /> */}
                    </div>
                    <div className='md:w-[48%]  mx-1 w-full'>
                        <label>Short Description</label>
                        <textarea
                            onChange={(e) => setShortDescription(e.target.value)}
                            value={shortDescription}
                            placeholder='Enter Short Description' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                    </div>
                    <div className='md:w-[48%] mx-1 mt-1 w-full'>
                                            <label>Discount</label>
                                            <input
                                                onChange={(e) => setDiscount(e.target.value)}
                                                value={discount!}
                                                placeholder='Enter discount %' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                                        </div>
                    <div className='w-full mt-2 mx-1 rounded-xl'>
                        <div className='flex py-4 justify-between'>
                            <label>List Text</label>
                            <button onClick={handleAddNew} className='bg-[#4091ca] px-4 py-2 rounded font-[700] text-[#fff] shadow-md hover:bg-[#4091cade] outline-one'>Add New</button>
                        </div>
                        {listText.map((socialLink, index) => (
                            <div key={index} className='flex justify-between'>
                                <div className='md:w-[100%] w-full'>
                                    <input
                                        name='platformName'
                                        placeholder='Enter List Text'
                                        value={socialLink.li}
                                        onChange={(event) => handleInputChange(index, event)}
                                        className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded'
                                    />
                                </div>


                                {/* Show Remove button if socialLinks array length is greater than 1 */}
                                {listText.length > 1 && (
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
                            onClick={() => navigate('/page/holistic')}
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




export default AddHolistic