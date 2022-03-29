import styled from "styled-components";

export const FaqContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.sectionBody}; */

  > .title {
    text-align: center;
    padding-top: 20px;
  }
  .title-underline {
    width: 2rem;
    margin: -0.4rem auto 2rem;
  }

  box-shadow: var(--light-shadow);
  margin-bottom: 40px;
  padding: 0.5rem 0 2.5rem;

  .container {
    width: 90%;
    margin: 0 auto;
    /* margin: 4rem auto; */
    background: var(--btn-shadows2);
    border-radius: var(--radius);
    padding: 2.5rem 1rem;
    max-width: var(--max-width);
    /* max-width: var(--fixed-width); */
  }
  .containers {
    margin: 30px auto 50px;
  }

  .faq-all-post {
    height: 230px;
    border: 1px solid var(--gold);
    width: 95%;
    margin: 0 auto;
  }

  .faq-all-post h5 {
    margin-bottom: 20px;
  }

  .faq-all-div {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    align-items: center;
    height: 40px;
  }

  .question {
    padding: 1rem 1.5rem;
    border: 5px solid var(--clr-grey-10);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    background: var(--clr-white);
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: var(--clr-black);
    margin-bottom: 0;
    margin-top: 0.5rem;
    text-align: left;
    font-size: var(--extra-small-text);
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    text-align: left;
    margin-bottom: 0;
  }
`;
