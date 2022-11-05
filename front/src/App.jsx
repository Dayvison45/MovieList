import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Home from './home';
import Movies from './movies';
import Series from './series';
import Login from './login';
import Subscribe from './subscribe';
import List from './list';
import Profile from "./profile";


function App() {
  

  return (
   <BrowserRouter>
   <Routes>
   <Route path="/"  element={<Home />} />
   <Route path="/movies" element={<Movies />} />
   <Route path="/series" element={<Series />} />
   <Route path="/list" element={<List />} />
   <Route path="/login" element={<Login />} />
   <Route path="/subscribe" element={<Subscribe />} />
   <Route path="/profile" element={<Profile />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
