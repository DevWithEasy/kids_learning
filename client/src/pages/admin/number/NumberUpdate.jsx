import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import useAlphabetStore from '../../../store/alphabateStore';
import Input from '../../../components/Input';
import axios from 'axios';
import apiurl from '../../../utils/apiurl';

const NumberUpdate = () => {
    const navigate = useNavigate()
    const { letters } = useAlphabetStore()
    const { id } = useParams()
    const [value, setValue] = useState(letters.find(l => l._id == id))
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${apiurl}/api/admin/number/en/update/${id}`, value)
            if (res.data.success) {
                navigate('/numbers/')
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(value)
    return (
        <div
            className='space-y-3'
        >
            <h2
                className=' py-2 text-2xl font-bold border-b-2'
            >
                নাম্বার আপডেট করুনঃ
            </h2>
            <form
                onSubmit={handleUpdate}
                className='space-y-2'
            >

                <Input {...{
                    label: 'Letter',
                    name: 'letter',
                    currentValue: value.letter,
                    value, setValue
                }} />
                <Input {...{
                    label: 'Punctuation',
                    name: 'punctuation',
                    currentValue: value.punctuation,
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

export default NumberUpdate;