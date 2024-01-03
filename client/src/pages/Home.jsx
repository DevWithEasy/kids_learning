import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import bangla from "../assets/image/bangla.png";
import english from "../assets/image/english.png";
import arabic from "../assets/image/arabic.png";
import math from "../assets/image/math.png";

const Home = () => {
    const [view, setView] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{

        },2500)
    })
    return (
        <div
            className=""
        >
            <div
                className="p-4 grid grid-cols-2 gap-4 text-2xl font-kalpurush"
            >
                <div
                    onClick={()=>navigate('/arabic')}
                    className="p-4 flex flex-col items-center space-y-2 border rounded-md cursor-pointer"
                >
                    <img 
                        src={arabic}
                        className="w-24"
                    />
                    <p
                        className=""
                    >
                        আরবি
                    </p>
                </div>
                <div
                    onClick={()=>navigate('/bangla')}
                    className="p-4 flex flex-col items-center space-y-2 border rounded-md cursor-pointer"
                >
                    <img 
                        src={bangla}
                        className="w-24"
                    />
                    <p
                        className=""
                    >
                        বাংলা
                    </p>
                </div>
                <div
                    onClick={()=>navigate('/english')}
                    className="p-4 flex flex-col items-center space-y-2 border rounded-md cursor-pointer"
                >
                    <img 
                        src={english}
                        className="w-24"
                    />
                    <p
                        className=""
                    >
                        ইংরেজি
                    </p>
                </div>
                <div
                    onClick={()=>navigate('/math')}
                    className="p-4 flex flex-col items-center space-y-2 border rounded-md cursor-pointer"
                >
                    <img 
                        src={math}
                        className="w-24"
                    />
                    <p
                        className=""
                    >
                        অংক
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;
