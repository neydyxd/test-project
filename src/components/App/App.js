import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "../../pages/Login/index.tsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
        path='/login'
        element={<Login />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
