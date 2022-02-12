import React, { useState } from 'react'
import TestingAddInput from './testingAddInput'
import TestingHeader from './testingHeader'
import TestingTodoList from './testingTodoList'

function TestingTodo() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <TestingHeader title="Todo" />
            <TestingAddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TestingTodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default TestingTodo