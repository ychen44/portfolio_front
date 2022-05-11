import styled from 'styled-components'
// import menu from '../assets/images/menu.png'

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    height: 150vh;
    top: 30px;
  }
`

export const Header = styled.div`
  width: 1120px;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;

  .welcome {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
  }

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 50%;
    opacity: 1;
  }

  .titles {
    display: flex;
  }

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    width: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

    .welcome {
      padding-bottom: 30px;
      h1 {
        font-size: 2rem;
      }
      .titles {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
`

export const Intro = styled.div`
  visibility: hidden;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%);
  text-transform: uppercase;

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }

  h2 {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    background: blue;
    h1 {
      font-size: 3rem;
      font-weight: 900;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const Types = styled.div`
  .wrapper {
    width: 500px;
    height: 10vh;
    display: grid;
    place-items: center;
    position: relative;
    span {
      position: absolute;
    }
  }

  .typing {
    ${'' /* background: red; */}
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 4em;
  }

  .typing.cloud {
    width: 14ch;
    animation: cloud 10s steps(14) infinite,
      blink 0.5s step-end infinite alternate;
  }

  .intj {
    width: 4ch;
    animation: intj 10s steps(4) infinite, blink 0.5s step-end infinite alternate;
  }

  .hidden {
    visibility: hidden;
    ${'' /* visibility: visible; */}
  }

  @keyframes cloud {
    0% {
      width: 0;
      visibility: visible;
    }
    20% {
      width: 14ch;
      visibility: visible;
    }
    90% {
      width: 14ch;
      visibility: visible;
    }
    100% {
      width: 0;
      visibility: hidden;
    }
  }

  @keyframes intj {
    0% {
      width: 0;
      visibility: visible;
    }
    20% {
      width: 4ch;
      visibility: visible;
    }
    90% {
      width: 4ch;
      visibility: visible;
    }
    100% {
      width: 0;
      visibility: hidden;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  @keyframes typingChanges {
    0% {
      border-color: transparent;
    }
    20% {
      border-color: transparent;
    }
    40% {
      border-color: transparent;
    }
    60% {
      border-color: transparent;
    }
    80% {
      border-color: transparent;
    }
    100% {
      border-color: transparent;
    }
  }

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 1rem;
      font-weight: 400;
    }

    .wrapper {
      display: grid;
      place-items: center;
      position: relative;
      span {
        position: absolute;
        font-size: 2rem;
        font-weight: 400;
      }
    }
  }
`

export const Body = styled.div`
  border: 0.1em solid var(--color-4);
  border-radius: 20px;
  padding: 1em;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  text-align: left;

  p {
    padding-bottom: 10px;
  }

  button {
    cursor: pointer;
    background: linear-gradient(-45deg, #ee9852, #ee7752, #e73c7e, #e73cab);
    width: 200px;
    border: none;
    height: 50px;
    border-radius: 50px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 50px;
    background-size: 400% 400%;
    animation: gradient 5s ease infinite, grow 3s ease infinite;
  }
  button:hover {
    cursor: pointer;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media screen and (max-width: 500px) {
    border: 0.1em solid var(--color-4);
    border-radius: 20px;
    padding: 1em;
    width: 320px;
    font-size: 1rem;
  }
`
