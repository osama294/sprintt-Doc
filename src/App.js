import logo from './logo.svg';
import './App.css';
import  SignaturePad from 'react-signature-canvas';
function App() {
  return (
    <div className="App">
      <SignaturePad penColor='green'
    canvasProps={{width: "100vw", height: "100vh", className: 'sigCanvas'}} />,
    </div>
  );
}

export default App;
