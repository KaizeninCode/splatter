import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Services from './sections/Services'
import Nav from './Nav'
import './index.css'


 function App() {
  return (
  <main>
    <Nav/>
    <section className='w-full min-h-screen'>
      <Home/>
    </section>
    <section className='w-full min-h-screen'>
      <About/>
    </section>
    <section className='w-full min-h-screen'>
      <Services/>
    </section>
    <section className='w-full min-h-screen'>
      <Contact/>
    </section>
  </main>
  )
}

export default App