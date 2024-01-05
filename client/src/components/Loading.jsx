import React from 'react';
import loadingImage from '../assets/image/giphy.gif'

const Loading = () => {
    return (
        <div
            className="fixed -top-3 left-0 h-screen w-full flex justify-center items-center bg-slate-500/50 p-4"
        >
            <div
                className=''
            >
                <img 
                    src={loadingImage}
                    className='w-56'
                />
                <div
                    className='-m-8 bg-white h-5 border-[10px] border-dashed'
                >

                </div>
            </div>
        </div>
    );
};

export default Loading;