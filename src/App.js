import "../src/styles/app.scss";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
