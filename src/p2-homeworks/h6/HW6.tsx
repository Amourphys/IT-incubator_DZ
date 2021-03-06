import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "./HW6.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
         setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <hr/>
            <h2 className={s.hwtitle}>homeworks 6</h2>

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <div className={s.span}>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <div className={s.button_block}>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>


                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperEditableSpan/>*/}
                <hr/>
            </div>

        </div>
    )
}

export default HW6
