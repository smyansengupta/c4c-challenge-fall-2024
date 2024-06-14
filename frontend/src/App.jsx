import './App.css'
import Dashboard from './components/Dashboard'
import PartnerForm from './components/PartnerForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <h1 className="title">
        C4C: Projects
      </h1>
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<PartnerForm />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
