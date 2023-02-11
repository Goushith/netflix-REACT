import React , {useState , useEffect}from 'react'

import instance from '../baseUrl'
import Row from './Row'
import './Row.css'
import './Banner.css'
function Banner({fetchUrl}) {

    const [movie,setmovies]=useState([])

    async function fetchData(){
        const result=await instance.get(fetchUrl)
        console.log(result);
        console.log(result.data.results)
        //setmovies(result.data.results[0])
        setmovies(result.data.results[
            Math.floor(Math.random()*result.data.results.length-1)

        ])
    
    }

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        fetchData() 
    },[])
 
function truncate(str,n){
  return str?.length > n ? str.substring(0,n+1)+"...":str;
}

// function truncate(str,n){
//   if (!str) return "";
//   return str.length > n ? str.substring(0,n-3)+"...":str;
//   }

console.log(movie);

  return (
    <>
  
     <div className='banner'
    style={{backgroundImage: `url(${base_url}${movie.backdrop_path})`,
      
    
    }}>

      <div className='banner-content'>

        <h1 className='banner-title'>{movie.name}</h1>
        <h3 className='banner-des'>{truncate(movie.overview,100)}</h3>
        {/* <button>Play</button> */}
      </div>
  
    

    </div>
    </>
  )
}

export default Banner