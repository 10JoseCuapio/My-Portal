import { Routes, Route } from 'react-router-dom';
import Navegation from './components/Navegation';
import My from './components/My';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<  Navegation/>} />
        <Route path="/informacion" element={< My/>} />
    </Routes>
  );
}
