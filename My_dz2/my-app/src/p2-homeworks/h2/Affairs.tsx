import React from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }
    
    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {// Укороченный вариант
        props.setFilter(e.currentTarget.value as FilterType)// принимать value как FilterType
    }
    const setClass = (filter: FilterType) => {
        return s.filterButton + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {mappedAffairs}
            </div>
            <div className={s.footer}>
                {/* <button className={s.filterButton} onClick={setAll}>All</button>
                <button className={s.filterButton} onClick={setHigh}>High</button>
                <button className={s.filterButton} onClick={setMiddle}>Middle</button>
                <button className={s.filterButton} onClick={setLow}>Low</button> */}
                
                <button className={setClass('all')} onClick={set} value={'all'}>All</button>
                <button className={setClass('high')} onClick={set} value={'high'}>High</button>
                <button className={setClass('middle')} onClick={set} value={'middle'}>Middle</button>
                <button className={setClass('low')} onClick={set} value={'low'}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
