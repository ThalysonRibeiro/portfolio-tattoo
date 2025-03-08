"use client"
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
interface WhatsProps {
  phone: string
  message: string
}

export function ButtonWhats({ phone, message }: WhatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function toggleVisibility() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  function enviarMensagem() {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };
  return (
    <div>
      <button
        onClick={enviarMensagem}
        className="fixed bottom-5 right-2 z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-green-500 animate-bounce cursor-pointer">
        <FaWhatsapp size={30} className="text-gray-100 animate-ping absolute" />
        <FaWhatsapp size={30} className="text-gray-100" />
      </button>
    </div>
  )
}