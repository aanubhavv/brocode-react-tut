import Student from "./components/Student"

function App() {
  return (
    <>
      <Student name="Anubhav" age="30" isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
    </>
  )
}

export default App
