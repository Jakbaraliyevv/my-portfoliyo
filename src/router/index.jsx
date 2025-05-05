import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import StudentTable from "../components/information";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/information",
    element: <StudentTable />,
  },
]);

export default root;
