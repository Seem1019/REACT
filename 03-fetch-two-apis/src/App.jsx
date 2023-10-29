import { useState, useEffect } from 'react'
const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_IMAGE_ENDPOINT = 'https://cataas.com/cat/says/'
function App () {
  const [fact, setFact] = useState()
  const [firstWord, setFirstWord] = useState()
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    async function getFact () {
      const response = await fetch(CAT_FACT_ENDPOINT)
      const data = await response.json()
      const firstWord = data.fact.split(' ')[0]
      setFact(data.fact)

      console.log(firstWord)
      setFirstWord(firstWord)
    }
    getFact()
  }, [refresh])

  return (
    <main>
      <h2>Hello World</h2>
      {fact && <p>{fact}</p>}
      {firstWord && <h3>{firstWord}</h3>}
      {firstWord && <img src={`${CAT_IMAGE_ENDPOINT}${firstWord}`} />}
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
    </main>
  )
}

export default App
