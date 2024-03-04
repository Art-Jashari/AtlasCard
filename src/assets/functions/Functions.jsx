const bgRandomColor = () => {
    let color;
    color = "hsl(" + Math.random() * 360 + ", 100%, 89%)";
    return color;
  }


export default bgRandomColor;