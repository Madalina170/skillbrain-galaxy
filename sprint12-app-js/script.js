
window.addEventListener('DOMContentLoaded', function() {
    const adviceButton = document.querySelector(".button-circle")
    adviceButton.addEventListener("click", onButtongetAdvice)
    
    const colorChange = document.querySelector(".button-circle")
      colorChange.addEventListener('mouseenter', () => {
        colorChange.style.backgroundColor = "#20FF92";
      });

      colorChange.addEventListener('mouseleave', () => {
        colorChange.style.backgroundColor = "";
        });
    });
  
  
  
  const onButtongetAdvice = () => {
    console.log("Get advice button clicked");
    
    const url = "https://api.adviceslip.com/advice";
    
    fetch(url)
      .then(response => response.json())
      .then (data => { 
        const adviceText = '"' + data.slip.advice + '"';
        document.querySelector('.advice-text').textContent = adviceText;
        
        const adviceNumber = "ADVICE #" + data.slip.id;
        document.querySelector('.number-text').textContent = adviceNumber;
      });
  };