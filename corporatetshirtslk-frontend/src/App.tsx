import { Route, Routes } from 'react-router-dom';
import './App.css';
import ClientLayout from './layout/ClientLayout';
import HomePage from './pages/home/Page';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ClientLayout />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
