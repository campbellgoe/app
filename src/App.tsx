import React from 'react';
// import styles from './App.module.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
]);

class App extends React.Component {
  render(){
    return (
      <RouterProvider router={router}/>
    )
  }
}


export default App;

/*

*/