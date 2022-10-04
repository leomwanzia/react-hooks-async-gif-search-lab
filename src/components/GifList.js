import React from 'react'

const GifList = ({ gifs }) => {
  return (
    <ul>
        {gifs.map(gif => (
        <li 
            key={gif.images.original.url}
            style={{
                'listStyle':'none'
            }}
            >
            <img src={gif.images.original.url} alt="gif"/> 
        </li>))}
    </ul>
  )
}

export default GifList