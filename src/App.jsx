import { useState } from 'react'
import Wrapper from './components/Wrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='app'>
      <Wrapper>
        Hello
      </Wrapper>
    </section>
  )
}

export default App
