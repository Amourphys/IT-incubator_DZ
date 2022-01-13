import React from 'react'
import style from './Message.module.css'

type MessageTypeProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const Message:React.FC<MessageTypeProps> = ({avatar, name, message, time}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <img className={style.img} alt={'img'} src={avatar}/>
            </div>
            <div className={style.message}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.text}>{message}</p>
                <span className={style.time}>{time}</span>
            </div>
        </div>
    )
}

export default Message
