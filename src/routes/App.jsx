import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home.jsx"
import Exemplo_de_post_1 from "../pages/posts/exemplo_de_post_1.jsx"
import NotFound from "../pages/NotFound.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/exemplo-de-post-1" Component={Exemplo_de_post_1} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}


export default App