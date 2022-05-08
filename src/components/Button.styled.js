import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '2vw'};
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  animation: grow 3s ease infinite;
  animation-play-state: ${({ animationState }) => animationState || 'running'};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#333'};
    color: ${({ hoverFontColor }) => hoverFontColor || '#333'};
  }

  @keyframes grow {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`
