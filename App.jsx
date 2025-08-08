// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

const PaginaEnBlanco = () => <div style={{ height: '100vh', backgroundColor: 'white' }}></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pagina-en-blanco" element={<PaginaEnBlanco />} />
      </Routes>
    </Router>
  );
}

export default App;
