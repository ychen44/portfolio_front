import styled from 'styled-components'
// import menu from '../assets/images/menu.png'

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    height: 150vh;
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
  span {
    position: absolute;
    font-size: 3rem;
    font-weight: 400;
  }

  span:nth-child(1) {
  }
  span:nth-child(2) {
    visibility: hidden;
  }
  span:nth-child(3) {
    visibility: hidden;
  }

  @media screen and (max-width: 900px) {
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`

export const Body = styled.div`
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
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
    width: 320px;
    font-size: 1rem;
  }
`
