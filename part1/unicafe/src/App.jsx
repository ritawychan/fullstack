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

const Statistics = ({good, neutral, bad, all}) => {
  const average = all === 0? 0: (good - bad)/ all
  const positive = all === 0? 0: (good/all) *100

  return (
    <>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>All {all}</div>
      <div>Average {average}</div>
      <div>Positive {positive}%</div>
    </>

  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const handleGoodClick = () => setGood(good +1)
  const handleNeutralClick = () => setNeutral(neutral +1)
  const handleBadClick = () => setBad(bad +1)

  return (
    <>
      <h1>Give feedback</h1>
      <div>
      <Button onClick = {handleGoodClick} text = 'Good'/>
      <Button onClick = {handleNeutralClick} text = 'Neutral'/>
      <Button onClick = {handleBadClick} text = 'Bad'/>
      </div>
      <div>
        <h1>Statistics</h1>
      {all === 0 ? <p> No feedback</p>:
        <Statistics good ={good} neutral = {neutral} bad ={bad}  all = {all}/>
      }
      </div>
    </>
  )
}

export default App