import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContexts";
import AllArticles from "./components/AllArticles";
import { SingleArticle } from "./components/SingleArticle";
import Header from "./components/Header"
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ username: "grumpy19" }}>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/topic/:slug" element={<AllArticles />} />
          <Route path="/:article_id" element={<SingleArticle />} />
          <Route path='/404' element={<Error />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;