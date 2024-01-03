import React, { useEffect } from 'react';
import useAlphabetStore from '../store/alphabateStore';
import { getData } from '../utils/api_crud';

const Alphabets = () => {
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