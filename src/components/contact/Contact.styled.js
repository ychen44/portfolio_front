import styled from 'styled-components'
// import map from '../../../../../assets/svg/LuxxImage-3.svg'

export const StyledContact = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${'' /* =============screen size ============= */}

  ${'' /* ===================== Small Screens ==================== */}
   @media only screen and (max-width: 1600px) and (min-width: 901px) {
  }
  ${'' /* ===================== tablets==================== */}
  @media only screen and (max-width: 900px) and (min-width: 501px) {
  }

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 120vh;
  }

  @media screen and (max-width: 1180px) {
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: var(--background-color-1);
  border: 0.15em solid var(--color-4);
  border-radius: 20px;

  .hidden {
    visibility: hidden;
    position: absolute;
  }
  .show {
    visibility: visible;
  }

  .thankyou {
    font-size: 2rem;
    font-weight: 500;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn 5s ease forwards;
    opacity: 0;
    visibility: hidden;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
      visibility: visible;
    }
  }
  .header {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1.8rem;
      margin-top: 20px;
    }
    h2 {
      position: flex;
      text-align: center;

      font-size: 1.1rem;
      padding: 0 30px;
    }
    p {
      font-size: 0.95rem;
    }
  }

  ${'' /* =============screen size ============= */}

  ${'' /* ===================== Small Screens ==================== */}
   @media only screen and (max-width: 1600px) and (min-width: 901px) {
  }
  ${'' /* ===================== tablets==================== */}
  @media only screen and (max-width: 900px) and (min-width: 501px) {
  }

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
    width: 90vw;

    .header {
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        width: 90vw;
        font-size: 1rem;
        padding-top: 10px;
      }
    }

    .thankyou {
      width: 200px;
      text-align: center;
      h2 {
        font-size: 1.5rem;
        padding-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 1180px) {
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 600px;

  span {
    color: red;
  }

  .input-fields,
  .button-fields {
    width: 80%;
    display: flex;
    flex-direction: row;
  }

  label {
    width: 20%;
    font-size: 1rem;
    color: var(--font-color-1);
    font-weight: 700;
  }

  .input {
    width: 75%;
  }

  .form-control {
    color: #fff;
    width: 100%;
    height: 30px;
    display: inline-block;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    background: none;
    border-bottom: 3px solid rgba(255, 255, 255, 0.7);
  }

  .form-control.is-invalid {
    border: 1px solid red;
  }

  .invalid-feedback {
    font-size: 0.8rem;
    width: 100%;
    height: 30px;
    color: red;
  }

  textarea {
    height: 100px !important;
    resize: none;
  }

  .button-fields {
    display: flex;
    justify-content: space-around;

    button {
      cursor: pointer;
      color: white;
      font-size: 1rem;
      font-weight: 400;

      background: var(--gradient-1);
      height: 30px;
      width: 150px;
      border: none;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
    }

    .reset:hover {
      background: #e6db8c;
    }

    .submit:hover {
      background: #72b883;
    }
  }

  .submit-error {
    padding-top: 10px;
    color: red;
  }

  ${'' /* =============screen size ============= */}

  ${'' /* ===================== Small Screens ==================== */}
   @media only screen and (max-width: 1600px) and (min-width: 901px) {
  }
  ${'' /* ===================== tablets==================== */}
  @media only screen and (max-width: 900px) and (min-width: 501px) {
  }

  ${'' /* ===================== cell Phone ==================== */}
  @media screen and (max-width: 500px) {
    width: 90vw;

    .input-fields {
      flex-direction: column;
      label {
        width: 90vw;
        font-size: 0.9rem;
        font-weight: 300;
      }
      .input {
        left: 5vw;
        width: 75vw;
      }
    }

    .button-fields {
      button {
        width: 130px;
      }
    }
  }

  @media screen and (max-width: 1180px) {
  }
`
