import React from "react";
import { Media, Video } from "@vidstack/player-react";
import { Box } from "@chakra-ui/react";

type Props = {};

const VideoPlayer = ({thumbnail,videoLink}: {thumbnail:string, videoLink:string}) => {
  console.log(thumbnail)
  return (
    <Box>
      <Media>
        <Video
          loading="visible"
          poster={thumbnail}
          controls
          preload="true"
        >
          <video
            poster={thumbnail}
            src={videoLink}
            preload="none"
            data-video="0"
            controls
          />
        </Video>
      </Media>
    </Box>
  );
};

export default VideoPlayer;
