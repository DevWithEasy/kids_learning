import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import useAlphabetStore from '../store/alphabateStore';
import { getData } from '../utils/api_crud';

const Alphabets = () => {
    const {query} = useParams()
    const { addLetters, letters } = useAlphabetStore()

    useEffect(() => {
        getData({
            path : '',
            setData : addLetters
        })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Alphabets;