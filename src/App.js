import './App.css';
import MainRouter from './MainRouter';
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop>
      <MainRouter />
      </ScrollToTop> 
    </div>
  );
}

export default App;
