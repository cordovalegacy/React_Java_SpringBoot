
// !Packages
import Nav from './components/Nav'
import Form from './components/Form'
import { useState } from "react"

// !Styles
import './App.css'
import Display from './components/Display'

function App() {

  const [studentList, setStudentList] = useState([])

  return (
    <main className='flex flex-col w-screen h-screen gap-20 pb-10'>
      <Nav />
      <Form studentList={studentList} setStudentList={setStudentList}/>
      <Display studentList={studentList} setStudentList={setStudentList}/>
    </main>
  )
}

export default App
