import React , {useState , useEffect} from 'react'
import instance from '../baseUrl'
import "./Row.css"

function Row({isLargeRow,title,fetchUrl}) {
    const [movies,setmovies]=useState([])

    async function fetchData(){
        const result=await instance.get(fetchUrl)
        console.log(result);
        console.log(result.data.results)
        setmovies(result.data.results)
    }

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        fetchData() 
    },[])
 
console.log(movies);

  return (
    <div className='row'>

        <h1>{title}</h1>
        <div  className='movies'>
                {
                    movies.map(movie=>(
                        <img className={`movie ${isLargeRow && 'largemovie'}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.title}/>
                    ))
                }
        </div>
    </div>
  )
}

export default Row