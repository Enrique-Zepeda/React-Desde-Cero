import React, { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/cute/says/${threeFirstWord}?fontSize=50&fontColor=red`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                
                const threeFirstWord = fact.split(' ', 3).join(' ')
                console.log(threeFirstWord)
                fetch(`https://cataas.com/cat/cute/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
                .then(res => res.json())
                .then(response => {
                    const{ url } = response
                    setImageUrl(url)
            })
        })
    }, [])
    

  return (
    <main>
        <h1>App de gatos</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cat'/>}
    </main>
  )
}
