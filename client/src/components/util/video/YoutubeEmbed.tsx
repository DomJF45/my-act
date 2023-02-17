import React from 'react';
import './Embed.css';

interface Props {
  embedId: string
}

const YoutubeEmbed = ({ embedId }: Props) => {
  return (
    <div className='responsive-video'>
      <iframe 
        width="100%" 
        height="315" 
        src={`https://www.youtube.com/embed/${embedId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeEmbed