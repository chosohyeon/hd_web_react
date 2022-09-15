import './App.css';
import Header from './component/Header.js';
import MainVisual from './component/MainVisual.js';
import MainContent from './component/MainContent.js';
import Portfolio from './component/Portfolio.js';
import Solution from './component/Solution.js';
import Promotion from './component/Promotion.js';

const App = () => {

  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual/>
        <MainContent/>
        <Portfolio/>
        <Solution/>
        <Promotion/>
      </main>
    </div>
  );
}

export default App;
