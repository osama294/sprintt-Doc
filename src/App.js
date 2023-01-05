import logo from './logo.svg';
import './App.css';
import  SignaturePad from 'react-signature-canvas';
function App() {
  return (
    <div className="App">
      <SignaturePad penColor='black'
    canvasProps={{width: "1000", height: "1000", className: 'sigCanvas'}} />,
    </div>
  );
}

export default App;
