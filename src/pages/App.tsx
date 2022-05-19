import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import List from '../components/List'
import '../index.css'
import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="AppStyle">
      <Form />
      <List />
    </div>
  )
}

export default App
