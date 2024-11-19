import React, { useState } from "react";

import { ImageData } from "./types/types";

import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import ChatList from "./components/ChatList/ChatList";
import ImagePopup from "./components/ImagePopup/ImagePopup";

import "./index.scss";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentGallery, setCurrentGallery] = useState<ImageData[] | null>(
    null
  );
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (images: ImageData[], item: number) => {
    setCurrentGallery(images);
    setCurrentImage(item - 1);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentGallery(null);
    setCurrentImage(0);
  };

  return (
    <div className="root">
      <ImagePopup
        isOpen={isOpen}
        images={currentGallery}
        currentImage={currentImage}
        onClose={closeModal}
      />
      <About />
      <Reviews openModal={openModal} />
      <ChatList />
    </div>
  );
};

export default App;
