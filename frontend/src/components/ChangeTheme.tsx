import { Icon, Text } from "@chakra-ui/react";
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
    <CircleMenu
      startAngle={180}
      rotationAngle={90}
      itemSize={2}
      radius={5}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        onClick={() => toggleTheme()}
        tooltip="Christmas"
        tooltipPlacement={TooltipPlacement.Left}
        style = {{backgroundColor:'#22c55e', color:'white'}}
      >
        <Icon as={FaTree}/>
      </CircleMenuItem>

    </CircleMenu>
  );
};

export default ChangeTheme;
