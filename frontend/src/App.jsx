import './App.css';
import Dashboard from './components/Dashboard';
import PartnerForm from './components/PartnerForm';

function App() {
  return (
    <>
      <h1 className="title">
        C4C: Projects
      </h1>
      <PartnerForm />
      <Dashboard />
    </>
  );
}

export default App;
