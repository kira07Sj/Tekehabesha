import Navigation from "./components/Navigation.jsx"
import Hero from "./components/Hero"
import About from "./components/About.jsx"


function App() {
  
  return (
    <div className="flex flex-col items-center  w-[100dvw] h-[100dvh]">
    <Navigation/>
    <Hero/>
    <About/>

    </div>
  )
}

export default App
