import React from 'react';
import  { useState } from 'react';
import s from './AddTodo.module.css'

function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
         [...todo, {
        id: Math.random(),
        title: value,
        status: true
    }]
)
setValue('')
    }

    return <>
    <div class={s.addTodoForm}>
        <input placeholder='Ваши планы, уважаемый!' value={value} onChange={ (e)=>setValue(e.target.value) }className={s.input} />
        <button onClick={saveTodo} className={s.btn}>Сохранить</button>
    </div>
    </>
}
export default AddTodo