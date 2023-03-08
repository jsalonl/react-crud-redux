import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteTask } from "../features/tasks/taskSlice"

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  // console.log(tasks)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
    // console.log(`Delete ${id}`)
  }

  return (
    <>
      <header>
        <h1>Task List {tasks.length}</h1>
        <Link to={"/create-task"} >Crear tarea</Link>
      </header>
      <div>
        {
          tasks.map(task => (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Borrar</button>
              <Link to={`/edit-task/${task.id}`}>Editar</Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default TaskList