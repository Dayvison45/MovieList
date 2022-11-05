
import Header from './header';
import React,{ useState, useEffect } from 'react';
import  axios from 'axios'
export default function Movies(){

   const [data,setData] = useState([]) 
useEffect(() => {
    run()
 async function run(){await axios.get('http://localhost:3000/movies').then(response=>setData([response.data[0].results, response.data[1].results,response.data[2].results,response.data[3].results]))}
   
}, []);


return(<div className='w-screen overflow-hidden'>
<Header></Header>
<div>{data.length>1?<div>{data[0].map(e=> <p key={e.id}>{e.title}</p>)}</div>:"carregando"}</div>
<br />
<div>{data.length>1?<div>{data[1].map(e=> <p key={e.id}>{e.title}</p>)}</div>:"carregando"}</div>
<br />
<div>{data.length>1?<div>{data[2].map(e=> <p key={e.id}>{e.title}</p>)}</div>:"carregando"}</div>
<br />
<div>{data.length>1?<div>{data[3].map(e=> <p key={e.id}>{e.title}</p>)}</div>:"carregando"}</div>
</div>)

}