import styled from 'styled-components'

export const StyledIcon = styled.div`
  position: fixed;
  bottom: 30px;
  left: 0px;
  z-index: 3000;
  display: flex-start;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 1000ms;
  margin-left: 20px;

  a {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--gradient-1);
    background: var(--gradient-1);
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .icon {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .download {
    position: absolute;
    font-size: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 500ms;
  }

  &:hover,
  &:focus {
    opacity: 1;
    animation-play-state: paused;
    .icon {
      opacity: 0;
    }

    .download {
      visibility: visible;
      opacity: 1;
    }
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

  ${'' /* ===================== Small Screens ==================== */}
  @media only screen and (max-width: 1600px) and (min-width: 901px) {
  }
  ${'' /* ===================== tablets==================== */}
  @media only screen and (max-width: 900px) and (min-width: 501px) {
  }

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
    position: fixed;

    bottom: 20px;
    left: 0px;

    a {
      font-size: 35px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .download {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 1180px) {
  }
`

export const media = styled.div`
  ${'' /* =============screen size ============= */}

  ${'' /* ===================== Small Screens ==================== */}
   @media only screen and (max-width: 1600px) and (min-width: 901px) {
  }
  ${'' /* ===================== tablets==================== */}
  @media only screen and (max-width: 900px) and (min-width: 501px) {
  }

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
  }

  @media screen and (max-width: 1180px) {
  }
`
