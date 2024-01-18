import { useState } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import Title from './components/Title/Title';
import ContainerContent from './components/ContainerContent/ContainerContent';
import './App.css';
import CustomButtons from './components/Button/CustomButtons'




function App() {
  const [sound, setSound] = useState(true);



  return (
    <section className='app'>
      <Wrapper>
        <ContainerContent>
          <div>
            <Title text='Memory Game' />
            <h3>Monsters</h3>
          </div>
          <CustomButtons sound={sound} />
        </ContainerContent>
      </Wrapper>
    </section>
  )
}

export default App
