// App.js
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  const buttons = ['Home', 'About Us', 'Help', 'Contact Us'];
  const selected = 'Home';
  return (
    <div>
      <Navbar buttons={buttons} selected={selected} />
      <HomePage />
    </div>
  );
};

export default App;
