import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom'
import useAlphabetStore from '../../../store/alphabateStore';
import Input from '../../../components/Input';
import axios from 'axios';

const BnUpdateAlphabet = () => {
    const navigate = useNavigate()
    const { letters } = useAlphabetStore()
    const { id } = useParams()
    const [value, setValue] = useState(letters.find(l => l._id == id))
    const handleUpdate=async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`${apiurl}/api/alphabet/bn/update/${id}`,value)
            if(res.data.success){
                navigate('/bn/all/alphabet')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form
                onSubmit={handleUpdate}
                className='space-y-2'
            >
                <Input {...{
                    label: 'Letter',
                    type : 'number',
                    name: 'order_no',
                    currentValue: value.order_no,
                    value, setValue
                }} />

                <Input {...{
                    label: 'Letter',
                    name: 'letter',
                    currentValue: value.letter,
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

export default BnUpdateAlphabet;