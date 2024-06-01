import "./Clock.css"
import React, { useEffect, useState } from "react"

const Clock = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const HandleHours = () => {
        const seconds = currentTime.getHours();
        return seconds < 10 ? "0" + seconds : seconds;
    }

    const HandleMinutes = () => {
        const seconds = currentTime.getMinutes();
        return seconds < 10 ? "0" + seconds : seconds;
    }

    const HandleSeconds = () => {
        const seconds = currentTime.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    }

    return (
        <div className="clock">
            {HandleHours()}:
            {HandleMinutes()}:
            {HandleSeconds()}

        </div>
    )
};

export default Clock;