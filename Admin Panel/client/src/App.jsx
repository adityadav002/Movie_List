import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <main style={{ flex: 1, padding: '20px', border: '1px solid rgba(255, 255, 255, 0.2)',  borderRadius: '8px', margin: '20px' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
