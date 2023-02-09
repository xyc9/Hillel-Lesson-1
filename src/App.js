import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Main/Profile/Profile";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-side">
        <Sidebar/>
        <Profile/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
