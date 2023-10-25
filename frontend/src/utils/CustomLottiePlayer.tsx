import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';

const CustomLottiePlayer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <DotLottiePlayer
      autoplay
      loop
      src={`/animations/${src}.lottie`}
      style={{ width: '100%' }}
    />
  );
};

export default CustomLottiePlayer;
