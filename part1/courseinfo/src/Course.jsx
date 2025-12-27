const Header = ({course}) => (<h2>{course.name}</h2>)

const Content = ({parts}) => (parts.map(part => <Part key={part.id} part = {part}/>))

const Part = ({part}) => <div>{part.name} {part.exercises}</div>

const Total = ({parts}) => <div> Total of {(parts.reduce((total, part) =>  total + part.exercises, 0))} exercises </div>

const Course = ({course}) => {

  return (
    <>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )
}

export default Course