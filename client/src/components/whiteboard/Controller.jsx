import React, { useState } from 'react';
import pen_color from '../../assets/image/wb_pen_color.png'
import bg_palette from '../../assets/image/wb_bg_palette.png'
import color_palette from '../../assets/image/wb_color_palette.png'
import eraser_color from '../../assets/image/wb_eraser_color.png'
import save_image from '../../assets/image/wb_image_save.png'
import w_delete from '../../assets/image/wb_delete.png'
import clear from '../../assets/image/wb_cleaning.png'
import undo from '../../assets/image/wb_undo.png'
import redo from '../../assets/image/wb_redo.png'
import pen_size from '../../assets/image/wb_pen_width.png'
import eraser_size from '../../assets/image/wb_eraser_width.png'

const Controller = ({
    canvasRef,
    strokSize,
    setStrokSize,
    eraserSize,
    setEraserSize,
    setStrokColor,
    setCanvasColor,
    earse,
    setEarse
}) => {
    const [bgColor, setBgColor] = useState(false)
    const [penColor, setPenColor] = useState(false)
    const [penSize, setPenSize] = useState(false)
    const [eraser, setEraser] = useState(false)
    const bg_colors = [
        'rgba(255, 255, 255, 0)','#030712', '#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#3b82f6', '#14b8a6', '#22c55e', '#84cc16', '#eab308', '#ef4444', '#f97316'
    ]
    const pen_colors = [
        '#ffffff','#030712', '#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6', '#3b82f6', '#14b8a6', '#22c55e', '#84cc16', '#eab308', '#ef4444', '#f97316'
    ]
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
    const pen = () => {
        setEarse(false)
        canvasRef?.current?.eraseMode(false)
    }
    console.log(strokSize)
    return (
        <div
            className='absolute top-0 left-0 w-10 md:w-16 h-full pt-16 flex flex-col items-center space-y-2 font-kalpurush'
        >
            <button
                onClick={() => setBgColor(!bgColor)}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 z-10 text-center bg-slate-500 text-white text-xs rounded'
                >
                    বোর্ডের রঙ
                </span>
                <img
                    src={bg_palette}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
                {bgColor &&
                    <div
                        className='absolute top-1 left-[56px] p-2 space-y-3 bg-gray-100 border rounded'
                    >
                        {bg_colors.map((color, i) => <button
                            onClick={() => setCanvasColor(color)}
                            style={{ background: color }}
                            className={`w-5 h-5 border rounded-full`}
                        />)

                        }
                    </div>
                }
            </button>
            <button
                onClick={() => setPenColor(!penColor)}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    পেন্সিলের রঙ
                </span>
                <img
                    src={color_palette}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
                {penColor &&
                    <div
                        className='absolute -top-9 left-[56px] p-2 space-y-3 bg-gray-100 border rounded'
                    >
                        {pen_colors.map((color, i) => <button
                            onClick={() => setStrokColor(color)}
                            style={{ background: color }}
                            className={`w-5 h-5 border rounded-full`}
                        />)

                        }
                    </div>
                }
            </button>
            <button
                onClick={() => pen()}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    পেন্সিল
                </span>
                <img
                    src={pen_color}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => setPenSize(true)}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    পেন্সিল সাইজ
                </span>
                <img
                    src={pen_size}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
                {penSize &&
                    <div
                        className='absolute -top-9 left-[56px] p-2 space-y-3 bg-gray-100 border rounded'
                    >
                        <input
                            type='number'
                            value={strokSize}
                            onChange={(e)=>handleUpdateBrushSize(e)}
                            onBlur={()=>setPenSize(false)}
                            className='w-12 p-2 text-black focus:outline-none rounded'
                        />
                    </div>
                }
            </button>
            <button
                onClick={() => handleEarse()}
                className={`p-1  text-white border border-gray-300 rounded relative group cursor ${earse ? 'bg-pink-500' : 'bg-white'}`}
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    ইরেজার
                </span>
                <img
                    src={eraser_color}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => setEraser(true)}
                className={`p-1 bg-white text-white border border-gray-300 rounded relative group cursor`}
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    ইরেজার সাইজ
                </span>
                <img
                    src={eraser_size}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
                {eraser &&
                    <div
                        className='absolute -top-9 left-[56px] p-2 space-y-3 bg-gray-100 border rounded'
                    >
                        <input
                            type='number'
                            value={eraserSize}
                            onChange={(e)=>setEraserSize(Number(e.target.value))}
                            onBlur={()=>setEraser(false)}
                            className='w-12 p-2 text-black focus:outline-none rounded'
                        />
                    </div>
                }
            </button>
            <button
                onClick={() => canvasRef?.current.exportImage('png')}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    ছবি সংরক্ষণ
                </span>
                <img
                    src={save_image}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => canvasRef?.current.undo()}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    পুর্বাস্থায় আনুন
                </span>
                <img
                    src={undo}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => canvasRef?.current.redo()}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    পরের ধাপ
                </span>
                <img
                    src={redo}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => canvasRef?.current.clearCanvas()}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    মুছে ফেলুন
                </span>
                <img
                    src={clear}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
            <button
                onClick={() => canvasRef?.current.resetCanvas()}
                className='p-1 bg-white text-white border border-gray-300 rounded relative group cursor'
            >
                <span
                    className='absolute hidden group-hover:block w-16 p-0.5 top-1 left-9 text-center bg-slate-500 text-white text-xs rounded'
                >
                    ডিলিট করুন
                </span>
                <img
                    src={w_delete}
                    className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                />
            </button>
        </div>
    );
};

export default Controller;