import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipe from './components/AddRecipe.jsx';
import ShowRecipe from './components/ShowRecipe.jsx';
import EditRecipe from './components/EditRecipe.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="recipes/add" element={<AddRecipe />}></Route>
          <Route path="recipes/show/:id" element={<ShowRecipe />}></Route>
          <Route path="recipes/edit/:id" element={<EditRecipe />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
