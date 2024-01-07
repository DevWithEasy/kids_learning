import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import useAlphabetStore from '../../../store/alphabateStore';
import apiurl from '../../../utils/apiurl';

const AdminDays = () => {
    const { addLetters, letters } = useAlphabetStore()
    const getData = async () => {
        try {
            const res = await axios.get(`${apiurl}/api/admin/day`)
            addLetters(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div
            className='space-y-3'
        >
            <h2
                className=' py-2 text-2xl font-bold border-b-2'
            >
                সকল দিন
            </h2>
            <div
                className='grid grid-cols-8 gap-4'
            >
                {letters &&
                    letters.map(l =>
                        <Link
                            key={l._id}
                            to={`/day/update/${l._id}`}
                            className='p-4 bg-gray-50 text-center border'
                        >
                            {l.name}
                        </Link>
                    )

                }
            </div>
        </div>
    );
};

export default AdminDays;