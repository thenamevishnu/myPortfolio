import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProjectPage from "./Pages/ProjectPage"


const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/projects" element={<ProjectPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App