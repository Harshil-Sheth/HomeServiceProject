import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/HomePage.jsx';
import 'antd/dist/antd.css';
import BookServicePage from './views/BookServicePage/BookServicePage';

function App() {
  return (
    <Router>
      {/* <Home /> */}
    <Route exact path='/' component={Home} />
    <Route path='/book' component={BookServicePage} />
      {/* <BookServicePage /> */}
    </Router>
  );
}

export default App;
