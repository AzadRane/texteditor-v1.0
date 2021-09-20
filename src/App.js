
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
 <Navbar title="TEXTEDITOR" about="ABOUT"/>
 <div className="container my-3">
 <TextForm heading="Enter the text to analysie"/>
   </div>
   </>
  );
}

export default App;
