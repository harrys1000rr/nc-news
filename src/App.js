import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContexts";
import Nav from "./components/Nav";
import AllArticles from "./components/AllArticles";
import { SingleArticle } from "./components/SingleArticle";
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username: "grumpy19" }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/topic/:slug" element={<AllArticles />} />
          <Route path="/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;