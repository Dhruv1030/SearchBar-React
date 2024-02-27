import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./Api";

function App() {
  const [images, setImages] = useState([]);
  const handelSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
