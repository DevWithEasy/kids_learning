import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import bangla from "../assets/image/bangla.png";
import english from "../assets/image/english.png";
import arabic from "../assets/image/arabic.png";
import math from "../assets/image/math.png";
import board from "../assets/image/whiteboard.png";
import game from "../assets/image/game.png";

const Home = () => {
    const [view, setView] = useState(true)
    const navigate = useNavigate()
    const lists = [
        {
            path: '/arabic',
            img: arabic,
            title: 'আরবি'
        },
        {
            path: '/bangla',
            img: bangla,
            title: 'বাংলা'
        },
        {
            path: '/english',
            img: english,
            title: 'ইংরেজি'
        },
        {
            path: '/math',
            img: math,
            title: 'অংক'
        },
        {
            path: '/game',
            img: game,
            title: 'খেলা'
        },
        {
            path: '/whiteboard',
            img: board,
            title: 'অংকন বোর্ড'
        },
    ]
    useEffect(() => {
        setTimeout(() => {

        }, 2500)
    })
    return (
        <div
            className=""
        >
            <div
                className="p-4 grid grid-cols-2 gap-4 text-2xl font-kalpurush"
            >
                {lists.map((list, i) =>
                    <div
                        key={i}
                        onClick={() => navigate(list?.path)}
                        className="p-4 flex flex-col items-center space-y-2 border rounded-md cursor-pointer"
                    >
                        <img
                            src={list?.img}
                            className="w-24 h-24"
                        />
                        <p
                            className=""
                        >
                            {list?.title}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
