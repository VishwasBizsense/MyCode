/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className="space-x-3-mt-12">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a todo..."></input>
                <button type='submit'>+</button>
            </form>
        </div>
    )
}
