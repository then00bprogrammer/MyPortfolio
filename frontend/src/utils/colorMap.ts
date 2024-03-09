const blueDark = {
    theme: 'rgba( 26, 26, 46, 0.5 )',
    buttonColor: 'blue',
    frameColor: '#16213E',
    borderColor: '#0F3460',
    playButtonColor: '#0F3460',
  };
  const blueLight = {
    theme: 'blue.50',
    buttonColor: 'blue',
    frameColor: 'blue.100',
    borderColor: 'blue',
    playButtonColor: 'blue.50',
  };
  
  const grayLight = {
    theme: 'gray.100',
    buttonColor: 'blackAlpha',
    frameColor: 'blackAlpha.200',
    borderColor: 'black',
    playButtonColor: 'gray.100',
  };
  const grayDark = {
    theme: 'rgba( 51, 52, 86, 0.35 )',
    buttonColor: 'purple',
    frameColor: 'blackAlpha.200',
    borderColor: 'black',
    playButtonColor: 'gray.700',
  };
  
  const orangeLight = {
    theme: 'orange.50',
    buttonColor: 'orange',
    frameColor: 'orange.100',
    borderColor: 'orange',
    playButtonColor: 'orange.50',
  };
  const orangeDark = {
    theme: 'rgba( 47, 37, 25, 0.35 )',
    buttonColor: 'orange',
    frameColor: '#4A3F35',
    borderColor: '#2F2519',
    playButtonColor: 'orange.200',
  };

  const defaultLight = {
    theme: 'gray.50',
    buttonColor: 'red',
    frameColor: 'black',
    borderColor: 'black',
    playButtonColor: 'red'
  }

  const defaultDark = {
    theme: 'black',
    buttonColor: 'red',
    frameColor: 'red',
    borderColor: 'red',
    playButtonColor: 'gold'
  }
  
  const colorMap = {
    gray: [grayLight, grayDark],
    orange: [orangeLight, orangeDark],
    blue: [blueLight, blueDark],
    default: [defaultLight, defaultDark]
  };

  export default colorMap;