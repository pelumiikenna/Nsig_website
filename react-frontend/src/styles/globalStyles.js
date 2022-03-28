// import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// const GlobalStyles = createGlobalStyle`
// *,

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 50px; */

  /* contact */
  .contact-icon-tel {
    padding-right: 5px;
  }
  .contact-enquiries {
    margin-bottom: -30px;
    margin-top: 20px;
  }
  .contact-label {
    font-size: 15px;
  }
  .contact-btn {
    background: linear-gradient(
      91.4deg,
      var(--nisig-green) 0%,
      var(--gold) 100%
    );
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    display: grid;
    justify-self: center;
  }
  .contact-btn:hover {
    box-shadow: var(--dark-shadow);
  }

  @media (min-width: 800px) {
    h2 {
      text-align: center;
    }

    /* contact */
    .event-img {
      width: 400px;
      height: 300px;
    }

    .contact-content {
      display: flex;
    }
    .contact-ul {
      align-items: center;
      margin-top: 5%;
    }
   
  }
`;
