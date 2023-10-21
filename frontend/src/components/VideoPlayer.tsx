import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {};

const VideoPlayer = ({
  thumbnail,
  videoLink,
}: {
  thumbnail: string;
  videoLink: string;
}) => {
  console.log(thumbnail);
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
