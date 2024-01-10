import React from 'react';

const A_NumberArea = ({numbers,wrong,wrongId,handleAnswer,ans}) => {
    return (
        <div
            className='flex justify-center p-5 bg-white space-x-3 rounded-md border'
        >
            {numbers &&
                numbers.map((number, i) =>
                    <button
                        key={i}
                        onClick={() => handleAnswer(ans, number, i)}
                        className={`px-6 py-2 border rounded-md ${wrong && wrongId == i ? 'bg-red-500 text-white' : !wrong && wrongId == i ? 'bg-green-500 text-white' : ''}`}
                    >
                        {number}
                    </button>
                )
            }
        </div>
    );
};

export default A_NumberArea;