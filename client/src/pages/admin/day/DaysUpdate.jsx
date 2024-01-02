import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import useAlphabetStore from '../../../store/alphabateStore';
import Input from '../../../components/Input';
import axios from 'axios';

const DaysUpdate = () => {
    const navigate = useNavigate()
    const { letters } = useAlphabetStore()
    const { id } = useParams()
    const [value, setValue] = useState(letters.find(l => l._id == id))
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${apiurl}/api/alphabet/day/update/${id}`, value)
            if (res.data.success) {
                navigate('/day/all/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className='space-y-3'
        >
            <h2
                className=' py-2 text-2xl font-bold border-b-2'
            >
                দিন আপডেট করুনঃ
            </h2>
            <form
                onSubmit={handleUpdate}
                className='space-y-2'
            >
                <Input {...{
                    label: 'অর্ডার নং',
                    type: 'number',
                    name: 'order_no',
                    currentValue: value.order_no,
                    value, setValue
                }} />

                <Input {...{
                    label: 'নাম',
                    name: 'name',
                    currentValue: value.name,
                    value, setValue
                }} />
                <button
                    className='px-6 py-2 bg-gray-100'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DaysUpdate;