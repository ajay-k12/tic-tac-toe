import './App.css';
import Board from './components/Board';
import Start from './components/start/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main-body'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start />} />
          <Route path='play-game' element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
