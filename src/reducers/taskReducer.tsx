interface Todos {
  id: string,
  text: string,
  completed: boolean
}

interface TaskState {
  todos: Todos[],
  length: number,
  completed: number,
  pending: number
}

export type TaskAction = 
  | { type: 'ADD_TODO', payload: string } 
  | { type: 'DELETE_TODO', payload: number } 
  | { type: 'TOGGLE_TODO', payload: number }


export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
}