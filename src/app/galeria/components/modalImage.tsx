"use client";
import Image from "next/image";

export function ModalImage({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages
}: {
  image: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
}) {
  return (
    <div
      className="bg-zinc-950/80 backdrop-blur-sm w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative p-4 sm:max-w-[80%] sm:h-[80%]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image}
          alt="imagem tattoo"
          width={500}
          height={500}
          className="bg-cover rounded-lg h-full w-full object-cover transition-all duration-300"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-gray-200"
          aria-label="Fechar modal"
        >
          X
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-gray-200"
          aria-label="Imagem anterior"
        >
          &#10094;
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 text-gray-200"
          aria-label="Próxima imagem"
        >
          &#10095;
        </button>

        <div className="absolute bottom-4 left-0 right-0 text-center text-gray-200 bg-black/50 py-1">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );
}