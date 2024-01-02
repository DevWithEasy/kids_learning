import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import useAlphabetStore from '../../../store/alphabateStore';
import Input from '../../../components/Input';
import axios from 'axios';

const MonthUpdate = () => {
    const navigate = useNavigate()
    const { letters } = useAlphabetStore()
    const { id } = useParams()
    const [value, setValue] = useState(letters.find(l => l._id == id))
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`${apiurl}/api/alphabet/month/update/${id}`, value)
            if (res.data.success) {
                navigate('/month/all/')
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
                মাস আপডেট করুনঃ
            </h2>
            <form
                onSubmit={handleUpdate}
                className='space-y-2'
            >
                <Input {...{
                    label: 'Order no',
                    type: 'number',
                    name: 'order_no',
                    currentValue: value.order_no,
                    value, setValue
                }} />

                {/* <Input {...{
                    label: 'Letter',
                    name: 'letter',
                    currentValue: value.capital,
                    value, setValue
                }} />
                <Input {...{
                    label: 'Letter',
                    name: 'letter',
                    currentValue: value.small,
                    value, setValue
                }} />
                <Input {...{
                    label: 'Word',
                    name: 'word',
                    currentValue: value.word,
                    value, setValue
                }} />
                <Input {...{
                    label: 'Sentence',
                    name: 'sentence',
                    currentValue: value.sentence,
                    value, setValue
                }} /> */}
                <button
                    className='px-6 py-2 bg-gray-100'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MonthUpdate;