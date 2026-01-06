const App = () => {
 const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}


  return (
    <div>
      <Header course={course} />
      <Content course= {course} />
      <Total course = {course} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({course}) => {
  const partItems = course.parts.map(part => <Part key = {part.name} part = {part}/>)
  return (
    <>
    {partItems}
    </>
  )
}

  

const Total = ({course}) => {
  const total = course.parts.reduce((acc, p) => acc + p.exercises , 0)
  return (
    <>
   <p>Number  of exercises {total}</p>
   </>
  )
}


const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  


export default App
