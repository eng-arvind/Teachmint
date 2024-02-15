import './App.css';
import UserDirectoryComponent from './Components/UserComponent/UserDirectoryComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './Components/ProfileComponent/UserProfile';

function App() {
  return (
    <div className='App-header'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserDirectoryComponent />}/>
      <Route path="/profile/:userId" element={<UserProfile />}/>
    </Routes>
  </BrowserRouter>      
  </div>
  );
}

export default App;
