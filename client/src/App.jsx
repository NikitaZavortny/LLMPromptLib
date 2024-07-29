import "flowbite"
import './output.css'
import Navbar from './components/Navbar.jsx'
import BaseLayout from "./layouts/BaseLayout.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <BaseLayout>
        <Home/>
      </BaseLayout>
    </>
  )
}

export default App;
