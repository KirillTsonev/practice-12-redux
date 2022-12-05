import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as TimesSolid } from './times-solid.svg'

import { availableColors, capitalize } from '../filters/colors'

const selectById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectById(state, id))
  const { text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({
      type: "todos/todoToggled",
      payload: todo.id,
    })
  }

  const handleColorChanged = () => {
    dispatch({
      type: "colorSelected",
      payload: {
        color: todo.color,
        todoId: todo.todoId,
      }
    })
  }

  const onDelete = () => {
    dispatch({
      type: "todoDeleted",
      payload: todo.id,
    })
  }

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem