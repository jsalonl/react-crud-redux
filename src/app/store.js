import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../features/tasks/taskSlice"

// Tienda de Redux, es un objeto que contiene el estado de la aplicación
const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export { store }