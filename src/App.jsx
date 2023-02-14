import './App.css'
import { About } from './components/About'
import { Sidebar } from './components/Sidebar'
import { Technologies } from './components/Technologies'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <About />
      <Technologies />
    </div>
  )
}

export default App
