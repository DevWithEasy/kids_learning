import React, { useState } from 'react';
import {Input} from '../../components/Index';

const Bangla_Add_Alphabate = () => {
    const [value,setValue] = useState({
        letter : '',
        word : '',
        sentence : '',
    })

    return (
        <div
            className='space-y-2'
        >
            <h2
                className='py-2 text-2xl border-b-2'
            >
                Add Bangla Alphbate
            </h2>
            <form
                onSubmit={()=>{}}
                className='space-y-2 ms:space-y-0 md:grid md:grid-cols-2 md:gap-4'
            >
                <Input {...{
                    label : 'Letter',
                    name : 'letter',
                    currentValue : value.letter,
                    value,setValue
                }}/>
                <Input {...{
                    label : 'Word',
                    name : 'word',
                    currentValue : value.word,
                    value,setValue
                }}/>
                <Input {...{
                    label : 'Sentence',
                    name : 'sentence',
                    currentValue : value.sentence,
                    value,setValue
                }}/>
                <div
                    className='space-y-2'
                >
                <label htmlFor="">Image : </label>
                <input 
                    type='file'
                    className='px-2 py-1 w-full border rounded'
                />
                </div>
                <div
                    className='space-y-2'
                >
                <label htmlFor="">Audio : </label>
                <input 
                    type='file'
                    className='px-2 py-1 w-full border rounded'
                />
                </div>
            </form>
        </div>
    );
};

export default Bangla_Add_Alphabate;