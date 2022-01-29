import React from 'react'
import style from "./Message.module.css";

type AlternativeMessageTypeProps = {
    avatar: string,
    name: string,
    mood: string,
    status: string,
    time: string
}

const AlternativeMessage:React.FC<AlternativeMessageTypeProps> = ({avatar, name, mood, status, time}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <img className={style.img} alt={'img'} src={avatar}/>
            </div>
            <div className={style.message}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.text}>{mood}</p>
                <p className={style.status}>{status}</p>
                <span className={style.time}>{time}</span>
            </div>
        </div>
    )
}


export default AlternativeMessage
