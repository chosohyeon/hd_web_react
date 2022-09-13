import './App.css';
import Header from './component/Header.js';
import MainVisual from './component/MainVisual.js';

const App = () => {

  return (
    <div className="Wrap">

      <Header />
      <main>
        <MainVisual/>
      </main>
    </div>
  );
}

export default App;
