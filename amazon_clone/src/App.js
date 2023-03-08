import './App.css';
import NavBar from './Components/Navbar/Navigation';
//  import MainPage from './Components/HomePage/MainPage';
//  import DisplayPage from './Components/DisplayPage/DisplayPage';
import PlaceOrder from './Components/PlaceOrder/Placeorder';

function App() {
  return (
    <div className="App">
      <NavBar/>
       {/* <MainPage/>  */}
       {/* <DisplayPage/> */}
       <PlaceOrder/>
    </div>
  );
}

export default App;
