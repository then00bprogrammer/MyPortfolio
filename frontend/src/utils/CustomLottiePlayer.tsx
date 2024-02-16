import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';

const CustomLottiePlayer: React.FC<{ src: string, width?:string }> = ({ src,width }) => {
  console.log(width)
  return (
    <DotLottiePlayer
      autoplay
      loop
      src={`/animations/${src}.lottie`}
      style={{ width:width?width:'100%' }}
    />
  );
};

export default CustomLottiePlayer;
