import Context from "./components/Context"
import { useContext } from "react"
import Buttons from "./components/Buttons"
import Header from "./components/Header"

function App() {
  const { step, onSubmit, handleSubmit, onErrors } = useContext(Context)
  
  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        {step}
      </form>
      <Buttons />
    </div>
  )
}

export default App
