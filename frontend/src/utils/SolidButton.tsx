import { useTheme } from '@/ThemeContext';
import { Button, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode, MouseEvent } from 'react';

type solidButtonProps = {
  children: ReactNode;
  light?: string;
  dark?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const SolidButton: React.FC<solidButtonProps> = ({
  children,
  light = 'red',
  dark = useTheme().buttonColor,
  onClick,
}) => {
  return (
    <Button
      variant='solid'
      colorScheme={useColorModeValue(light, dark)}
      borderRadius={0}
      size='lg'
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SolidButton;
