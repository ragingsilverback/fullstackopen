const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const numbers = parts.map(part => part.exercises)
  const sum = numbers.reduce((sum,number) => {
    return sum + number
  },0)
  return(
    <>
    <h4>total of {sum} exercises</h4>
    </>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =><Part key = {part.id} part = {part}></Part>)}     
  </>

const Course = ({course}) => {
    
  return(
  <>
  <Header course = {course.name}></Header>
  <Content parts = {course.parts}></Content>
  <Total parts = {course.parts}></Total>
  </>
  )

}

export default Course