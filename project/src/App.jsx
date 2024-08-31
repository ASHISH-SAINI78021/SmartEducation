import './App.css';
import Login from './component/Login';
import Main from './component/Main';
import { Routes, Route } from "react-router-dom";
import Signup from './component/Signup';
import Page from './component/Page';
import Private from './component/Routes/Private';
import Video from './component/Video/Video';
import VideoApp from './component/VideoApp/VideoApp';
import ZegoCloud from './component/VideoApp/ZegoCloud/ZegoCloud';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='dashboard/*' element={<Private />} >
          <Route path="main" element={<Main />} />
          <Route path="video" element={<Video />} />
          <Route path='videoApp' element={<VideoApp />} />
          <Route path='videoApp/room/:id' element={<ZegoCloud />} />
          <Route path="*" element={<Page />} />
        </Route>
        <Route path="*" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
