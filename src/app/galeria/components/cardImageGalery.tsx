"use client";
import { ImageGaleryProps } from "@/utils/galery-type";
import Image from "next/image";
import { useState } from "react";
import { ModalImage } from "./modalImage";

interface CardImageGaleryProps {
  galeria: {
    imagem_galeria: ImageGaleryProps[]
  }
}

export default function CardImageGalery({ metadata }: { metadata: CardImageGaleryProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = metadata?.galeria?.imagem_galeria || [];

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {isModalOpen && images.length > 0 && (
        <ModalImage
          image={images[currentImageIndex]?.imagem?.url}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
          totalImages={images.length}
          currentIndex={currentImageIndex}
        />
      )}

      {metadata?.galeria.imagem_galeria.map((image, index) => (
        <div key={image?.imagem?.url} className="w-50 h-50" onClick={() => openModal(index)}>
          <Image
            src={image?.imagem?.url}
            alt="imagem tattoo"
            width={500}
            height={500}
            className="bg-cover rounded-lg h-full w-full object-cover transition-all duration-300 hover:scale-110 hover:rotate-1"
          />
        </div>
      ))}
    </div>
  );
}