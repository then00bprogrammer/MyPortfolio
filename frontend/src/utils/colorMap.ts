const blueDark = {
    theme: "rgba( 26, 26, 46, 0.5 )",
    buttonColor: "blue",
    frameColor: "#16213E",
    borderColor: "#0F3460",
  };
  const blueLight = {
    theme: "blue.50",
    buttonColor: "blue",
    frameColor: "blue.100",
    borderColor: "blue",
  };
  
  const grayLight = {
    theme: "gray.100",
    buttonColor: "blackAlpha",
    frameColor: "blackAlpha.200",
    borderColor: "black",
  };
  const grayDark = {
    theme: "rgba( 51, 52, 86, 0.35 )",
    buttonColor: "purple",
    frameColor: "blackAlpha.200",
    borderColor: "black",
  };
  
  const orangeLight = {
    theme: "orange.50",
    buttonColor: "orange",
    frameColor: "orange.100",
    borderColor: "orange",
  };
  const orangeDark = {
    theme: "rgba( 47, 37, 25, 0.35 )",
    buttonColor: "orange",
    frameColor: "#4A3F35",
    borderColor: "#2F2519",
  };
  
  const colorMap = {
    gray: [grayLight, grayDark],
    orange: [orangeLight, orangeDark],
    blue: [blueLight, blueDark],
  };

  export default colorMap;