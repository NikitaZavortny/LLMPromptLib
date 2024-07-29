import "flowbite"
import './output.css'
import Navbar from './components/Navbar.jsx'
import BaseLayout from "./layouts/BaseLayout.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <BaseLayout>
          <Home />
        </BaseLayout>
      </div>
    </>
  )
}

export default App;
