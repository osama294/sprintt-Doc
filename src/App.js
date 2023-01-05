import logo from './logo.svg';
import './App.css';
import  SignaturePad from 'react-signature-canvas';
function App() {
  return (
    <div className="App">
      <SignaturePad penColor='green'
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />,
    </div>
  );
}

export default App;
