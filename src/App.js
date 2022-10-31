import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContexts";
import { useState } from "react";
import AllArticles from "./components/AllArticles";
import Header from "./components/Header"



function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username: "grumpy19" }}>
        <div className="App">
          <Header />
          <Routes>
          <Route path="AllArticles" element={<AllArticles />} />
  
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;