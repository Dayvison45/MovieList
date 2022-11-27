import Header from "./header";
import movies from './data'
import genres from "./moviesGenres";
export default function List(){  
 
  function genero(x){
    const result = genres.find( e => e.id === x );
    console.log("result"+result)
    return result.name

  }
    return(<div className="bg-gray-700 w-screen h-screen">
    <Header></Header>
<div className="w-screen h-screen flex flex-col items-center justify-center overflow-scroll">

   <div className="flex mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
    <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+movies.poster_path} alt="" />
  
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{movies.original_title}</p>
   <p>{movies.overview}</p> 
   <div className="w-full flex justify-between"><span>{movies.release_date.substring(0,4)}</span> <span>{movies.vote_average}</span> <span>{genero(movies.genre_ids[0])}</span> </div>
   </div>
   </div>

   <div className="flex mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
    <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+movies.poster_path} alt="" />
  
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{movies.original_title}</p>
   <p>{movies.overview}</p> 
   <div className="w-full flex justify-between"><span>{movies.release_date.substring(0,4)}</span> <span>{movies.vote_average}</span> <span>{genero(movies.genre_ids[0])}</span> </div>
   </div>
   </div>

   <div className="flex mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
    <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+movies.poster_path} alt="" />
  
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{movies.original_title}</p>
   <p>{movies.overview}</p> 
   <div className="w-full flex justify-between"><span>{movies.release_date.substring(0,4)}</span> <span>{movies.vote_average}</span> <span>{genero(movies.genre_ids[0])}</span> </div>
   </div>
   </div>


   <div className="flex mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
    <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+movies.poster_path} alt="" />
  
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{movies.original_title}</p>
   <p>{movies.overview}</p> 
   <div className="w-full flex justify-between"><span>{movies.release_date.substring(0,4)}</span> <span>{movies.vote_average}</span> <span>{genero(movies.genre_ids[0])}</span> </div>
   </div>
   </div>

   <div className="flex mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
    <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+movies.poster_path} alt="" />
  
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{movies.original_title}</p>
   <p>{movies.overview}</p> 
   <div className="w-full flex justify-between"><span>{movies.release_date.substring(0,4)}</span> <span>{movies.vote_average}</span> <span>{genero(movies.genre_ids[0])}</span> </div>
   </div>
   </div>

   

</div></div>)}