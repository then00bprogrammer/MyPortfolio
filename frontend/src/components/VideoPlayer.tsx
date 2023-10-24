import React from "react";
import { Box } from "@chakra-ui/react";

const VideoPlayer = ({
  thumbnail,
  videoLink,
}: {
  thumbnail: string;
  videoLink: string;
}) => {
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
