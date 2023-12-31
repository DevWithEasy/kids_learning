import React, { useEffect, useState } from "react";
import WordGame from "./WordGame/WordGame";

const Home = () => {
    const [view, setView] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{

        },2500)
    })
    return (
        <div>
            <WordGame/>
        </div>
    );
};

export default Home;
