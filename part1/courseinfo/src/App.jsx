const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({parts}) => {
  const partItems = parts.map(part => <Part key = {part.name} part = {part}/>)
  return (
    <>
    {partItems}
    </>
  )
}

  

const Total = ({parts}) => {
  const total = parts.reduce((acc, p) => acc + p.exercises , 0)
  return (
    <>
   <p>Number  of exercises {total}</p>
   </>
  )
}


const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  


export default App
