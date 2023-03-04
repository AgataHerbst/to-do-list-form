import Header from '../components/Header/Header';
import  { useState } from 'react';

import AddTodo from '../components/AddTodo/AddTodo';
import TodoList from '../components/TodoList/TodoList';

function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: '',
            status: true
        },
        {
            id: 2,
            title: '',
            status: true
        },
        {
            id: 3,
            title: '',
            status: false
        }
    ])
     return <>
      <div className="App">
          <Header />
          <AddTodo todo={todo} setTodo={setTodo} />
          <TodoList todo={todo} setTodo={setTodo} />
          </div>
      </>
}

export default App;