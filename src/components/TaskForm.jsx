import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

const TaskForm = () => {

  const [task, setTask] = useState()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state) => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(params.id){
      dispatch(editTask(task))
    }else{
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      )
    }

    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      const result = tasks.find(task => task.id == params.id)
      setTask(result)
    }
  }, [])

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} defaultValue={task && task.title} />
        <textarea name="description" onChange={handleChange} defaultValue={task && task.description}></textarea>
        <button type="submit">save</button>
      </form>
    </>
  )
}

export default TaskForm