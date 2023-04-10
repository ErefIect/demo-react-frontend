import LoginPage from "./views/LoginPage";
import SearchPage from './views/SearchPage';

import { slides } from "./data/carouselDta.json";
import "./App.css";
import Carousel from './components/Slide/Carousel';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: 'pic', 
    element: <Carousel data={slides}/>
  }
]) 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>

  );
}

export default App;
