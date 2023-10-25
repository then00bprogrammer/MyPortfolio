import React from "react";
import { Box } from "@chakra-ui/react";

const VideoPlayer: React.FC<{
  thumbnail: string;
  videoLink: string;
}> = ({ thumbnail, videoLink }) => {
  return (
    <Box>
      <video
        poster={thumbnail}
        src={videoLink}
        preload="none"
        data-video="0"
        controls
      />
    </Box>
  );
};

export default VideoPlayer;
