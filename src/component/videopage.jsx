import React from 'react'

const Videopage = () => {
  let videoData = JSON.parse(localStorage.getItem("youtubeVideo"))
  return (
    <div>
      <iframe allowFullScreen src={`https://www.youtube.com/embed/${videoData}`}></iframe>
    </div>
  )
}

export default Videopage