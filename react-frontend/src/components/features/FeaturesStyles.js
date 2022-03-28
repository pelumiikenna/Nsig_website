import styled from "styled-components";

export const FeatureContainer = styled.div`
  box-shadow: var(--light-shadow);
  margin-bottom: 30px;
  padding: 0.5rem 0;

  > .title {
    text-align: center;
    padding-top: 20px;
  }

  .title-underline {
    background: var(--nisig-green);
    width: 5rem;
    height: 0.25rem;
    margin: 0 auto;
    margin: -0.5rem auto 1.5rem;
  }

  .section-center {
    display: flex;
    margin: 3rem auto 2rem;
    width: 80vw;
    /* have to have a height */
    height: 380px;
    max-width: 800px;
    text-align: center;
    position: relative;
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);

    h4 {
      color: var(--nisig-green);
    }
    .text {
      max-width: 90%;
      margin: 0 auto;
      line-height: 2;
      padding: 5px 10%;
    }
    p.title {
      text-align: center;
      /* margin-bottom: 2rem; */
    }
  }

  .prev,
  .next {
    position: absolute;
    top: 15%;
    background: var(--gold);
    color: var(--clr-white);
    width: 1.2rem;
    height: 1.2rem;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--nisig-green);
  }
  .prev {
    left: 15%;
  }
  .next {
    right: 15%;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }

  @media (min-width: 800px) {
    padding: 3rem 0;

    .section-center {
      width: 80vw;
      height: 450px;
    }

    .prev,
    .next {
      top: 30%;
    }
  }
`;
