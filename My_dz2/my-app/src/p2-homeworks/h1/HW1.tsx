import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './Message.module.css'

let dataNow = new Date();
let hours: number | string = dataNow.getHours();
let minutes: number | string = dataNow.getMinutes();

if (minutes < 10) minutes = '0' + minutes;
if (hours < 10) hours = '0' + hours;

const time: string = `${hours}:${minutes}`;

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: time,
    mood: 'some mood',
    status: 'some status'
}

function HW1() {
    return (
        <div>
            <hr />
            <h2 className={s.hwtitle}>homeworks 1</h2>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData.avatar}
                name={messageData.name}
                mood={messageData.mood}
                status={messageData.status}
                time={messageData.time}
            />
            <hr />
        </div>
    )
}

export default HW1
