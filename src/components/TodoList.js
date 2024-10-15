import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
// import { useTodoState } from '../TodoContext';
import axios from "axios";
import useTodo from "../utils/useToDo";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;


function TodoList() {
    // const todos = useTodoState();

    const [todoList, setTodoList] = useState();

    // useEffect(() => {
    //     console.log(todoList)
    // }, [todoList])

    return (
        <TodoListBlock>
            {todoList.map(todo => (
                <TodoItem
                  key={todo?.id}
                  id={todo?.id}
                  text={todo?.value}
                  done={todo?.done}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;