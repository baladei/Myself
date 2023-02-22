import './App.css'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { Technologies } from './components/Technologies'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <About />
      <Technologies />
      <Projects />
    </div>
  )
}

export default App
