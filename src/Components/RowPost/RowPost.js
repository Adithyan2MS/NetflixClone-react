import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [ytKey,setYtKey] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!=0){
        setYtKey(response.data.results[0])
      }
      else{
        console.log("not avilable");
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
        {  ytKey && <Youtube opts={opts} videoId={ytKey.key} />  }
    </div>
  )
}

export default RowPost