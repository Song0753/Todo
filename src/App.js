import './App.css';
import NameQuestion from './component/nameQuestion';
import PleaseEnter from './component/pleaseEnter';
import UnderBar from './component/underBar';
import ContinueButton from './component/continueButton';
function App() {
  const name = 'Hyeongyun';
  return (
    <div className="App">
      <NameQuestion></NameQuestion>
      <UnderBar></UnderBar>
      <PleaseEnter></PleaseEnter>
      <ContinueButton></ContinueButton>
    </div>
  );
}

export default App;
