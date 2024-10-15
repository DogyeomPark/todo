import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([]);

  const getToDo = async () => {
    try {
      const data = await (
        await axios.get("https://2f3d-221-149-119-100.ngrok-free.app/todo/")
      ).data;

      setTodos([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAdd = async (value) => {
    try {
      await axios.post(
        "https://2f3d-221-149-119-100.ngrok-free.app//todo/create",
        { value }
      );
      await getToDo();
    } catch (error) {
      console.error(error);
    }
  };
  const onClickDone = async (id) => {
    try {
      await axios.put(`https://2f3d-221-149-119-100.ngrok-free.app/todo/${id}`);
      await getToDo();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async (id) => {
    try {
      await axios.delete(
        `https://2f3d-221-149-119-100.ngrok-free.app/todo/${id}`
      );
      await getToDo();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDo();
  }, []);
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList
          todoList={todos}
          onClickDelete={onClickDelete}
          onClickDone={onClickDone}
        />
        <TodoCreate onClickAdd={onClickAdd} />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
