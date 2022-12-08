// import logo from './logo.svg';
import './App.css';
// import MainLayout from './Components/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostView from './Pages/PostView/Posts';
import CreatePost from './Pages/PostView/CreatePost';
import ViewPosts from './Pages/PostView/ViewPosts';
import LandingPage from './Pages/LandingPage/landing_page';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}>
          </Route>

          <Route path="post_view" element={<PostView />} >
            <Route index element={<ViewPosts />} />
            <Route path='add' element={<CreatePost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;