import './App.css';
import About from './components/About-Me';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <br></br>
        <About></About>
        <br></br>
        <Portfolio></Portfolio>
        <br></br>
        <Contact></Contact>
        <br></br>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
