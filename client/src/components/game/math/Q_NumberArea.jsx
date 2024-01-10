import React from 'react';

const Q_NumberArea = ({n_1,n_2,answer,sign}) => {
    return (
        <div
                    className='flex flex-col justify-center items-center p-5 bg-white rounded-md border'
                >
                    <p>
                        {n_1} {sign} {n_2}
                    </p>
                    <p>
                        =
                    </p>
                    <p
                        className={`px-6 py-2 border rounded-md ${answer === '?' ? 'text-gray-300' : ' border-green-500'}`}
                    >
                        <span
                            className={`${answer === '?' ? 'inline-block px-2 text-4xl  animate-bounce' : 'text-green-500'}`}
                        >
                            {answer}
                        </span>
                    </p>
                </div>
    );
};

export default Q_NumberArea;