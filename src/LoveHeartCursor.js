import { useEffect } from "react";
import "./LoveHeartCursor.css";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
        // Generate a random number between 0 and 1
        const randomChance = Math.random();
      
        // Check if the random number is less than or equal to 0.3 (30% chance)
        if (randomChance <= 0.3) {
            const xPos = event.clientX + window.scrollX;
            const yPos = event.clientY + window.scrollY;
          
            const spanEl = document.createElement("span");
          
            spanEl.style.left = xPos + "px";
            spanEl.style.top = yPos + "px";
          
            const size = Math.random() * 50;
            spanEl.style.width = size + "px";
            spanEl.style.height = size + "px";
          
            document.body.appendChild(spanEl);
          
            setTimeout(() => {
              spanEl.remove();
            }, 3000);
        }
      };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything, it just handles side effects
};

export default CursorTrail;
