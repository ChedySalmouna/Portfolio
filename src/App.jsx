import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './components/HomePage'
import { ProjectsPage } from './components/ProjectsPage'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
