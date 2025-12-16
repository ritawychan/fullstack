const App = () => {
  const header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <>
      <div><Header header = {header}/></div>
      <div><Content part1 = {part1} part1total ={exercises1} part2 ={part2} part2total = {exercises2} part3 = {part3} part3total = {exercises3}/></div>
      <div><Total total = {total}/></div>
    </>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.header}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part1} {props.part1total}</p>
      <p>{props.part2} {props.part2total}</p>
      <p>{props.part3} {props.part3total}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.total}</p>
  )
}


export default App