// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style/App.css'
import Home from "./component/Home.tsx";

import StorageRoute from "./route/StoragePage/StorageRoute";

import {BrowserRouter, Routes, Route} from "react-router-dom";

export interface IAppProps {}


const  App:React.FunctionComponent<IAppProps> = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
              <Route path="/storage" element={<StorageRoute />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
