import { Suspense } from "react";
import { RouterProvider } from 'react-router-dom';
//import Loading from "./components/Loading";
import './App.scss'
import {routes} from './Routes';


function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;