import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGallery from "./Components/ImageGallery";
import ImageDetails from "./Components/ImageDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/:id" element={<ImageDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
