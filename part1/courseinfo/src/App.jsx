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
      <Header header = {header}/>
      <Content part1 = {part1} part1total ={exercises1} part2 ={part2} part2total = {exercises2} part3 = {part3} part3total = {exercises3}/>
      <Total total = {total}/>
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
      <Part part = {props.part1} parttotal = {props.part1total}/>
      <Part part = {props.part2} parttotal = {props.part2total}/>
      <Part part = {props.part3} parttotal = {props.part3total}/>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part} {props.parttotal}</p>
    </>

  )

}

export default App