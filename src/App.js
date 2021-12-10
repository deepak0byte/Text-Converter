import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextConverter" />
      <div className='container'>
        <TextForm heading="Enter Your Text to Anaylize"/>
      </div>
    </>
  );
}

export default App;
