export interface Todo {
  id: string,
  text: string,
  completed: boolean
}

export interface TaskState {
  todos: Todo[],
  length: number,
  completed: number, 
  pending: number
}

export type TaskAction =  
  | { type: 'ADD_TODO', payload: string } 
  | { type: 'DELETE_TODO', payload: string } 
  | { type: 'TOGGLE_TODO', payload: string }

/**
 * Initial State for useReducer
 */
export const getTaskInitialState = (): TaskState => {
  return {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  }
} 


export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

  switch(action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false
      }
      return {
        ...state,
        todos: [ 
          ...state.todos, 
          newTodo
        ],
        length: state.todos.length + 1,
        pending: state.pending + 1
      }
    }
    case 'TOGGLE_TODO': {
      const updateTodos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
      return {
        ...state,
        todos: updateTodos,
        completed: updateTodos.filter(t => t.completed).length,
        pending: updateTodos.filter(t => !t.completed).length,
      }
    }
    case 'DELETE_TODO': {
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }


}