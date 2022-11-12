import Header from "./header";
import movies from './data'
export default function List(){
    return(<div className="bg-gray-700 w-screen h-screen">
    <Header></Header>
<div className="w-screen h-screen justify-center"></div>
    
    <div className="bg-red-800 w-3/5">
 <img  src={"https://image.tmdb.org/t/p/original/"+movies.backdrop_path} alt="" />

    </div>

    </div>)}