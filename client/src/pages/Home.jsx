import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { bangla,math,arabic,english,color,game,board,month,days,season } from "../utils/homeImages";

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
            path: '/day',
            img: days,
            title: 'সাত দিনের নাম'
        },
        {
            path: '/month',
            img: month,
            title: 'বার মাসের নাম'
        },
        {
            path: '/season',
            img: season,
            title: 'ছয় ঋতুর নাম'
        },
        {
            path: '/colors',
            img: color,
            title: 'রঙ পরিচিতি'
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
                className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xl font-kalpurush"
            >
                {lists.map((list, i) =>
                    <div
                        key={i}
                        onClick={() => navigate(list?.path)}
                        className="p-4 flex flex-col items-center space-y-4 border rounded-md cursor-pointer"
                    >
                        <img
                            src={list?.img}
                            className="w-16 h-16"
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
