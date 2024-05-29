import {  useState } from 'react';
import './App.css'
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Test } from './Test';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user:   User = {
  name:"haruya",
  // hobby:["pg","fittness"]
}


function App() {
  const [todos,setTodos] = useState<Array<TodoType>>([])


  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res)=>{
      setTodos(res.data);
    });
  };

  return (
    <>
      <UserProfile user={user}/>

      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo)=>(
        <Todo key = {todo.id}
              // id ={todo.id}
              title={todo.title}
              userId={todo.userId}
              completed ={todo.completed}
              />

      ))}
      <Test >テストです。</Test>

    </>




  );
}

export default App
