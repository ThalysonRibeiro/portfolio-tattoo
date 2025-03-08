"use client"
import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { CardContatos } from './cardContatos';
import { AddNumeroProps } from '@/utils/home-type';

export interface FooterProps {
  contato: {
    titulo_localizacao: string;
    url: string;
    instagram: string;
    add_numero: AddNumeroProps[];
  };
}

export function Footter({ metadata }: { metadata: FooterProps }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    let L: any;
    let map: any;

    const initMap = async () => {
      if (mapRef.current) {
        const leaflet = await import('leaflet');
        L = leaflet.default;

        delete (L.Icon.Default.prototype as any)._getIconUrl;

        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });

        map = L.map(mapRef.current).setView([-5.75403, -35.26791], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([-5.75403, -35.26791]).addTo(map);
      }
    };

    if (isMounted) {
      initMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [isMounted]);

  return (
    <footer id="contato" className="w-full h-[500px] flex flex-col justify-center">
      <CardContatos metadata={metadata} />
      <div className="w-full flex flex-col absolute z-0">
        <div
          ref={mapRef}
          id="map"
          className="w-full h-[436px]"
        />
        <div className="w-full h-16 flex items-center justify-center flex-col text-gray-400 bg-zinc-950 text-sm z-10">
          <p> &copy; {new Date().getFullYear()} - STIG tattoo Todos os direitos reservados.</p>
          <p>Desenvolvido por <span>Thalyson.dev</span></p>
        </div>
      </div>


    </footer>
  )
}