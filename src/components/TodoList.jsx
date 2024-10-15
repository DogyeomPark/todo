import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
// import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList({ todoList = [], onClickDone, onClickDelete }) {
  return (
    <TodoListBlock>
      {todoList.map((todo) => (
        <TodoItem
          key={todo?.id}
          id={todo?.id}
          text={todo?.value}
          done={todo?.done}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
