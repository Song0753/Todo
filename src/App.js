import NameQuestion from './component/nameQuestion';
import PleaseEnter from './component/pleaseEnter';
import UnderBar from './component/underBar';
import ContinueButton from './component/continueButton';
import Button from './Button';
import styles from './App.module.css';
import Background from './Background';

function App() {
  const name = 'Hyeongyun';
  console.log('App component rendered'); // 디버그 메시지 추가

  return (
    <div className="App">
      <Background />
      <NameQuestion />
      <UnderBar />
      <PleaseEnter />
      <ContinueButton />
      <Button text="Continue" />
      <h1 className={styles.title}>Hello {name}!</h1>
    </div>
  );
}

export default App;
