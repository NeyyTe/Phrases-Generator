import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/Home/HomePage";
import LostPage from "./pages/Lost/LostPage";
import NotFoundPage from './pages/NotFound/NotFoundPage';
import HttpCodePage from './pages/HttpCode/HttpCodePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lost" element={<LostPage />} />
          <Route path="/:http_code" element={<HttpCodePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
