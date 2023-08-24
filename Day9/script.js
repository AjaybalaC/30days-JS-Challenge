const redInput = document.getElementById("red");
    const greenInput = document.getElementById("green");
    const blueInput = document.getElementById("blue");
    const alphaInput = document.getElementById("alpha");
    const colorPreview = document.getElementById("color-preview");
    
    function updateColor() {
      const red = redInput.value;
      const green = greenInput.value;
      const blue = blueInput.value;
      const alpha = alphaInput.value;
      
      const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      colorPreview.style.backgroundColor = color;
    }
    
    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);
    alphaInput.addEventListener("input", updateColor);