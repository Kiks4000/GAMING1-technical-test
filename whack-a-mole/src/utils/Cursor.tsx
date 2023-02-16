import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CursorImage = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  cursor: none;
  z-index: 9999;
`;

interface CursorProps {
  imageSrc: string;
}

const Cursor: React.FC<CursorProps> = ({ imageSrc }) => {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <CursorImage src={imageSrc} ref={cursorRef} />;
};

export default Cursor;
