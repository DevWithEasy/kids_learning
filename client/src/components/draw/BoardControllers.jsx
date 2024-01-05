import React from 'react';

const BoardControllers = ({ canvasRef, strokColor, setStrokColor, strokSize, setStrokSize, earse, setEarse, wordVisible, setWordVisible }) => {
    const handleUpdateBrushSize = (e) => {
        const value = Number(e.target.value);

        if (value > 20)
            setStrokSize(20);
        else if (value < 1)
            setStrokSize(1);
        else
            setStrokSize(value);
    }
    const handleEarse = () => {
        if (earse) {
            setEarse(false)
            canvasRef?.current?.eraseMode(false)
        } else {
            setEarse(true)
            canvasRef?.current?.eraseMode(true)
        }
    }
    return (
        <div
            className='flex items-center space-x-2 text-sm'
        >
            <label
                htmlFor='color'
                style={{ background: strokColor }}
                className='p-1 text-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-10 p-0.5 -top-6 -left-1 text-center bg-slate-500 text-white text-xs rounded'
                >
                    রঙ
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                </svg>
            </label>
            <input
                id='color'
                type='color'
                value={strokColor}
                onChange={(e) => setStrokColor(e.target.value)}
                className='hidden'
            />
            <input
                type='number'
                min={0}
                max={20}
                value={strokSize}
                onChange={(e) => handleUpdateBrushSize(e)}
                className='py-1 border rounded focus:outline-none text-center'
            />
            <button
                onClick={() => canvasRef?.current.resetCanvas()}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    ডিলিট করুন
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

            </button>
            <button
                onClick={() => canvasRef?.current.clearCanvas()}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    মুছে ফেলুন
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </button>
            <button
                onClick={() => handleEarse()}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    রাবার
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>

            </button>
            <button
                onClick={() => canvasRef?.current.undo()}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    পূর্বাবস্থা
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>

            </button>
            <button
                onClick={() => canvasRef?.current.redo()}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    পুনরায়
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                </svg>

            </button>
            <button
                onClick={() => setWordVisible(!wordVisible)}
                className='p-1 bg-white border rounded relative group '
            >
                <span
                    className='absolute hidden group-hover:block w-20 p-0.5 -top-6 -left-5 bg-slate-500 text-white text-xs rounded'
                >
                    {wordVisible ? 'অক্ষর লুকান' : 'অক্ষর দেখান'}
                </span>
                {wordVisible ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                }

            </button>
        </div>
    );
};

export default BoardControllers;