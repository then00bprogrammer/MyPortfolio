import { Button, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode, MouseEvent } from 'react';
import { useTheme } from '@/ThemeContext';

type outlineButtonProps = {
  children: ReactNode;
  light?: string;
  dark?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const OutlineButton: React.FC<outlineButtonProps> = ({
  children,
  light = 'black',
  dark = useTheme().buttonColor,
  onClick,
}) => {
  return (
    <Button
      variant='outline'
      colorScheme={useColorModeValue(light, dark)}
      borderRadius={0}
      size='lg'
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
