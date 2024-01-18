import { useState } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import ContainerContent from './components/ContainerContent/ContainerContent';
import PageComp1 from './components/PageComp1/PageComp1';
import './App.css';





function App() {
  const [sound, setSound] = useState(true);

  return (
    <section className='app'>
      <Wrapper>
        <ContainerContent>
          <PageComp1 setSound={setSound} sound={sound} />
        </ContainerContent>
      </Wrapper>
    </section>
  )
}

export default App
