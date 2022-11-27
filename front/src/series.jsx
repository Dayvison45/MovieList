
import Header from './header';
import React,{ useState, useEffect } from 'react';
import  axios from 'axios'
import { Carousel } from '@trendyol-js/react-carousel';
export default function Series(){

   const [data,setData] = useState([]) 
useEffect(() => {
    run()
 async function run(){await axios.get('http://localhost:3000/series').then(response=>setData([response.data[0].results, response.data[1].results,response.data[2].results,response.data[3].results]))}
   
}, []);


return(<div className='w-screen overflow-hidden'>
<Header></Header>

<h1 className='w-screen text-center '>filmes mais populares</h1>
{data.length>1?<Carousel show={3} slide={3} swiping={true}>
{data[0].map(e=> <div className='p-4  shadow-2xl ' key={e.id}><img src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" /></div>)}
</Carousel>:"carregando"}
<h1 className='w-screen text-center'>filmes de ações</h1>
{data.length>1?<Carousel show={3} slide={3} swiping={true}>
{data[2].map(e=> <div className='p-4  shadow-2xl ' key={e.id}><img src={"https://image.tmdb.org/t/p/w500/"+e.poster_path} alt="" /></div>)}
</Carousel>:"carregando"}
<h1 className='w-screen text-center'>Filmes de aventuras</h1>
{data.length>1?<Carousel show={3} slide={3} swiping={true}>
{data[1].map(e=> <div className='p-4 shadow-2xl ' key={e.id}><img src={"https://image.tmdb.org/t/p/w500/"+e.poster_path} alt="" /></div>)}
</Carousel>:"carregando"}
<h1 className='w-screen text-center'>filmes de animações</h1>
{data.length>1?<Carousel show={3} slide={3} swiping={true}>
{data[3].map(e=> <div className='p-4 shadow-2xl ' key={e.id}><img src={"https://image.tmdb.org/t/p/w500/"+e.poster_path} alt="" /></div>)}
</Carousel>:"carregando"}


</div>)

}