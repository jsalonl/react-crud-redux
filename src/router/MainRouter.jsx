import { createBrowserRouter } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <TaskList />,
      },
      {
        path: "/create-task",
        element: <TaskForm />,
      },
      {
        path: "/edit-task/:id",
        element: <TaskForm />,
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      }
    ]
  },
])

export default MainRouter