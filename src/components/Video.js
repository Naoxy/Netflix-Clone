import React from 'react';
//import { useParams } from 'react-router-dom';
import "./Video.scss"


function Video() {
  //let { id } = useParams();
  // ?rel=0&showinfo=0&vq=720;autoplay=1

  let id = "8lZki_Z35N0"
  console.log(id);
  return <div className='video'>
    <iframe src={`https://www.youtube.com/embed/${id}`} 
    title="video"
    frameborder="0"
    allowFullScreen
    ></iframe>
  </div> 
}

export default Video