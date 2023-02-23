import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Sidebar } from './components/Sidebar'
import { Technologies } from './components/Technologies'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
