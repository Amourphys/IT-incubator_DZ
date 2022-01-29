import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import {v1} from "uuid";
import s from './Greeting.module.css';

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState <Array<UserType>>([]) // need to fix any

    const addUserCallback = (userName: string) => { // need to fix any
        const newUser = () =>  {
            return (
            {_id: v1(), name: userName}
        ) }
        setUsers([newUser(), ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            <h2 className={s.title}>homeworks 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
