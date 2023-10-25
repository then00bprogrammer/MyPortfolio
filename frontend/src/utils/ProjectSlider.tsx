import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from '@chakra-ui/react';
import client from '@/client';

type ProjectSlide = {
  projectPhoto: string;
  id: string;
};

const ProjectSlider: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<ProjectSlide[]>();
  const fetchPost = async () => {
    try {
      const res = await client.fetch(`*[_type == 'post'] | order(priority) {
        'projectPhoto':projectPhoto.asset->url,
        'id':_id
      }`);
      setData(res);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {data &&
        data.map((slide, id) => (
          <SwiperSlide key={id}>
            <Image
              src={slide.projectPhoto}
              onClick={() => router.push(`./project/${slide.id}`)}
              _hover={{ filter: 'brightness(80%)', cursor: 'pointer' }}
            ></Image>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProjectSlider;
