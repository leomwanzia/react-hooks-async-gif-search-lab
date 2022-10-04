import React, { useState, useEffect } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {

    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("dolphins")
    const apiKey = "0w2b8fH1AZg8gn7gbOKMtKbPKoFpEngS"

    useEffect(() => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then (r => r.json())
        .then (data => {
            setGifs(data.data.slice(0,3))
        })

    },[search])

  return (
    <div style={{
        'display': 'flex',
        'margin':'20px'}}>
        <GifSearch search={search} setSearch = {setSearch} />
        <GifList gifs={gifs}/>
        
    </div>
  )
}

export default GifListContainer;