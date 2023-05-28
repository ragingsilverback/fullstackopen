import { useState } from "react";


const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => (
  <>
  <td>{text}</td>
  <td>{value}</td>
  </>
)

const Statistics = (props) => {

  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = good + neutral + bad


  if(total===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
  return(
  <div>
  <table>
  <tr><StatisticsLine text ="good" value = {good}/></tr>
  <tr><StatisticsLine text ="neutral" value = {neutral} /></tr>
  <tr><StatisticsLine text ="bad" value = {bad} /></tr>
  <tr><StatisticsLine text ="all" value = {good + neutral + bad} /></tr>
  <tr><StatisticsLine text ="average" value = {(good - bad)/(good + neutral + bad)} /></tr>
  <tr><StatisticsLine text ="positive" value = {(good)/(good+neutral+bad)*100} /></tr>
  </table>
  </div>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }


return (
  <>
  <div>
    <h1>give feedback</h1>
    <Button handleClick = {handleGood} text = 'good'/>
    <Button handleClick = {handleNeutral} text = 'neutral'/>
    <Button handleClick = {handleBad} text = 'bad'/>
  </div>
  <div>
  <h1>statistics</h1>
  <Statistics good = {good} neutral = {neutral} bad = {bad}/>
  </div>
  </>
)

}

export default App;
