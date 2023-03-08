import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    completed: false
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    completed: false
  },
]

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) =>{
      // console.log(state, action)
      // return [...state, action.payload]
      state.push(action.payload)
    },
    editTask: (state, action) => {
      // console.log(action.payload)
      const { id, title, description, completed } = action.payload
      const taskFound = state.find(task => task.id === id)
      if(taskFound){
        taskFound.title = title
        taskFound.description = description
      }
    },
    deleteTask: (state, action) => {
      // console.log(action.payload)
      // const taskFound = state.find(task => task.id === action.payload)
      // if(taskFound){
      //   state.splice(state.indexOf(taskFound), 1)
      // }
      return state.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer