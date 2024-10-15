import {useEffect, useState} from "react";
import axios from "axios";

function useTodo() {
    const [todoList , setTodoList] = useState([]);
    const [update, setUpdate] = useState(false)


    const getTodo = async () => {
        const resp = await axios.get('http://localhost:8060/todo/');
        setTodoList(resp.data);


    const addTodo = async (value) => {
        // const data = {
        //     value
        // }
        // eslint-disable-next-line no-unused-vars
        const req = await axios.post('http://localhost:8060/todo/create', {value});
        setTodoList([]);
        await getTodo();
    }

    useEffect( () => {
        setUpdate((res => !res))
        }, [todoList]);
    return {
        addTodo,
        update
    }
}



export default useTodo;