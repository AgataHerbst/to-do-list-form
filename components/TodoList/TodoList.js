import React from 'react';
import  { useState } from 'react';
import s from './TodoList.module.css'


function TodoList ({ todo, setTodo }) {

const [edit, setEdit] = useState(null)
const[value, setValue] = useState('')

function deleteTodo(id){
const newTodo = [...todo].filter(item => item.id!=id)
setTodo(newTodo)
}

function statusTodo(id) {
    const newTodo = [...todo].filter(item => {
    if(item.id == id) {
        item.status = !item.status
    }
    return item
})
setTodo(newTodo)
}

function editTodo (id, title) {
setEdit(id)
setValue(title)
}

function saveTodo(id){
const newTodo =[...todo].map(item => {
    if(item.id ==id) {
item.title = value
    }
    return item
})
setTodo(newTodo)
setEdit(null)

}

    return <>
    <div>
        {
        todo.map( item => (
             <div key ={item.id} className={s.list}>
                {
                    edit == item.id ? 
                    <div>
                    <input value={value} onChange={(e) =>setValue(e.target.value)} />
                    </div> : 
                        <div className={ !item.status ? s.close : ''} >{ item.title }</div>
                }

              {
                 edit == item.id ? 
                 <div>
                   <button onClick={ () =>saveTodo(item.id)}>Сохранить</button>
                 </div> :
                 <div> 
                     <button onClick={ ()=>deleteTodo(item.id) }className={s.delete}>Удалить</button>
                     <button onClick={ ()=>editTodo(item.id, item.title) }className={s.btn}>Редактировать</button>
                     <button onClick={ ()=>statusTodo(item.id) }className={s.btn}>
                     {
                        item.status ? <span>Открыть</span> : <span>Закрыть</span>
                    } 
                    </button>
                     
                 </div>
              }
                
                </div>
        ))
}
    </div>
    </>
}

export default TodoList