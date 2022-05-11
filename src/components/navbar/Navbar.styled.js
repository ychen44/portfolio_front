import styled from 'styled-components'

export const StyledNav = styled.nav`
  width: 100vw;
  height: 70px;

  position: fixed;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
    height: 60px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1800px;
  height: 100%;
  ${'' /* background: blue; */}

  .logo {
  }

  .icons {
    display: flex;
    font-size: 3rem;
    z-index: 3000;
    .social {
      display: flex;
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
    width: 350px;
    ${'' /* background: pink; */}
  }
`

export const Menu = styled.div`
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  alight-items: flex-end;
  backdrop-filter: blur(5px);
  animation: opacity 1s ease;

  ul {
    position: absolute;
    top: 0vh;
    height: 100vh;
    width: 30vw;

    background: var(--gradient-1-1);

    .social {
      position: absolute;
      bottom: 30px;
      text-decoration: none;
      color: #fff;

      svg {
        font-size: 3rem;
        border: 0.05em solid white;
        border-radius: 50%;
        padding: 5px;
        margin: 10px;
        transition: all ease 0.6s;
        text-decoration: none;
        color: #fff;
      }
      svg:hover,
      svg:focus {
        color: var(--color-4);
        border: 0.05em solid var(--color-4);
      }
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    list-style-type: none;

    animation: dropdown 1s ease;

    @keyframes dropdown {
      0% {
        top: -100vh;
      }

      100% {
        top: 0;
      }
    }

    .selection {
      width: 300px;
      height: 50px;
      display: flex;
      font-size: 1.5rem;
      color: #fff;
      cursor: pointer;
      -webkit-transition: all ease 0.6s;
      -moz-transition: all ease 0.6s;
      -o-transition: all ease 0.6s;
      transition: all ease 0.6s;
      a {
        display: flex;
        padding-left: 20px;
        width: 300px;
        font-size: 2rem;
        text-decoration: none;
        color: #fff;
      }

      svg {
        font-size: 2.5rem;
      }
    }

    .selection:hover,
    a:hover {
      color: var(--color-4);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
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
    ul {
      width: 70vw;

      justify-content: center;
      .social {
        position: absolute;
        bottom: 70px;
        svg {
          font-size: 3rem;
        }
      }

      li {
        width: 200px;
        font-size: 2rem;
        svg {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }
        .selection {
          a {
            display: flex;
            padding-left: 10px;
            width: 160px;
            font-size: 1.6rem;
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
`
