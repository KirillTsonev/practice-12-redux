const initialState = [
    {id: 0, text: "Learn Reaact", completed: true},
    {id: 1, text: "Learn Redux", completed: false, color: "purple"},
    {id: 2, text: "Build something fun", completed: false, color: "blue"},
]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case "todoAdded": {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                }
            ]
        }
        case "todoToggled": {
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                } else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })
        }
        case "colorSelected": {
            return state.map(todo => {
                if (todo.id !== action.payload.todoId) {
                    return todo
                } else {
                    return {
                        ...todo,
                        color: action.payload.color
                    }
                }
            })
        }
        case "todoDeleted": {
            return state.filter(todo => todo.id !== action.payload)
        }
        case "allCompleted": {
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        }
        case "completedCleared": {
            return state.filter(todo => !todo.completed)
        }
        default:
            return state
    }
}