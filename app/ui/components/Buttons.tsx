import React, { useRef, CSSProperties } from 'react'
import '../buttons.css' // Importe seu arquivo de estilos CS

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  content: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  content
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = buttonRef.current;
    if (!button) return; // Verifica se buttonRef.current é null

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  };

  return (
    <button
      ref={buttonRef}
      className={`ripple-button ${className}`}
      onClick={(e) => createRipple(e)}
      type="submit"
    >
      {content}
    </button>
  );
};

export default Button;