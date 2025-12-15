const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header header = {course}/>
      <div style={{ display: 'flex',  alignItems: 'center', gap: '12px'}}><Content content = {part1}/>{exercises1}</div>
      <div style={{ display: 'flex',  alignItems: 'center', gap: '12px'}}><Content content = {part2}/>{exercises2}</div>
      <div style={{ display: 'flex',  alignItems: 'center', gap: '12px'}}><Content content = {part3}/>{exercises3}</div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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
    <p>{props.content}</p>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>{props.total}</p>
  )
}


export default App