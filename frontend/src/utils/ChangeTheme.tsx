import { Box, Icon, Text } from "@chakra-ui/react";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import { FaTree } from "react-icons/fa6";
import { useTheme } from '@/ThemeContext'

const ChangeTheme = () => {
  const { toggleTheme, isthemeOn } = useTheme();
  return (
    <Box onClick={toggleTheme} cursor='pointer'>
      <FaTree size='30px' color='#68D391'/>
    </Box>
  );
};

export default ChangeTheme;
