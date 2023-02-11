import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Createblog from './Createblog';
import BlogDetails from './BlogDetails';
import Error from './Error';

function App() {
  
  const a=10;
  const b="hello motherfucker";
  const list=[1,2,3];
  const link='http://www.google.com'; 
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
           <Route exact path="/">
               <Home />
            </Route>
       <Route path="/create">
        <Createblog />
       </Route>
       <Route path="/Blogs/:id">
        <BlogDetails />
       </Route>
       <Route path="*">
        <Error />
       </Route>
      


        </Switch>
        
        
      </div>
      
    </div>
    </Router>
  );
}

export default App;
