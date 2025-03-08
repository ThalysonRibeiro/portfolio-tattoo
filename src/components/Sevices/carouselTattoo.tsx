"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './styles.css';

import { EffectCards } from 'swiper/modules';
import { ImagemProps } from '@/utils/home-type';
import Image from 'next/image';

interface CarrosselProps {
  titulo: string;
  imagem: ImagemProps[];
};

export function CarouselTattoo({ carrousel }: { carrousel: CarrosselProps }) {
  return (
    <div className='w-70 h-80 mb-10'>
      <h1 className='mb-2 text-gray-200 text-lg capitalize'>{carrousel?.titulo}</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-full h-full"
      >
        {carrousel?.imagem.map(item => (
          <SwiperSlide key={item?.titulo_imagem}>
            <Image
              src={item?.imagem_carrossel?.url}
              alt={item?.titulo_imagem}
              width={500}
              height={500}
              className="bg-cover h-full w-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  )
}