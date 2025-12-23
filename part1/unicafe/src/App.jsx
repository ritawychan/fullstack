import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  const {onClick, text} = props
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
  }

  return (
    <>
      <h1>Give feedback</h1>
      <div>
      <Button onClick = {handleGoodClick} text = 'Good'/>
      <Button onClick = {handleNeutralClick} text = 'Neutral'/>
      <Button onClick = {handleBadClick} text = 'Bad'/>
      </div>
      <h1>Statistics</h1>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
    </>
  )
}

export default App