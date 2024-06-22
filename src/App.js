import NameQuestion from './component/nameQuestion';
import PleaseEnter from './component/pleaseEnter';
import UnderBar from './component/underBar';
import ContinueButton from './component/continueButton';
import Button from './Button';
import styles from './App.module.css';
import Background from './Background';
import Greeting from './Greeting';

function App() {
  console.log('App component rendered'); // 디버그 메시지 추가

  return (
    <div className="App">
      <Background />
      <Greeting />
      {/* <NameQuestion /> */}
      {/* <UnderBar /> */}
      {/* <PleaseEnter /> */}
      {/* <ContinueButton /> */}
      <Button text="Continue" />
    </div>
  );
}

export default App;
