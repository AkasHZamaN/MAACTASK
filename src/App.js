import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Dashboard from './Pages/Dashboard/Dashboard';
import RegionList from './Pages/Dashboard/RegionList';
import CreateRegion from './Pages/Dashboard/CreateRegion';
import AreaList from './Pages/Dashboard/AreaList';
import CreateArea from './Pages/Dashboard/CreateArea';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>

      <Route path='dashboard' element={<Dashboard></Dashboard>}>
        <Route index element={<RegionList></RegionList>}></Route>
        <Route path='createRegion' element={<CreateRegion></CreateRegion>}></Route>
        <Route path='areaList' element={<AreaList></AreaList>}></Route>
        <Route path='createArea' element={<CreateArea></CreateArea>}></Route>
      </Route>

      </Routes>



    </div>
  );
}

export default App;
