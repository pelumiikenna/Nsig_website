import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 30px;

  .video {
    z-index: -1;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    opacity: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background: var(--nisig-green);
    mix-blend-mode: overlay;
    opacity: 1;
  }
  .landing-hero {
    margin: 190px 0 290px;
  }
  .landing-hero .large-text {
    color: var(--clr-white);
    font-size: var(--large-text);
  }
  .landing-hero .small-text {
    color: var(--clr-white);
    font-size: var(--extra-small-text);
    font-family: "Open Sans", sans-serif;
  }

  .landing-content {
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    flex-wrap: wrap;
    padding: 0 80px;
    margin: 0 auto;
    margin-bottom: 30px;
    overflow: hidden;

    .video,
    .overlay {
      height: 700px;
      width: 100vw;
    }

    .landing-hero {
      margin: 260px 0 350px;
    }

    .landing-hero .large-text {
      color: var(--clr-white);
      font-size: var(--extra-large-text);
    }

    .landing-hero .small-text {
      font-size: var(--small-text);
      font-family: "Open Sans", sans-serif;
    }

    .landing-content {
      width: 90%;
    }
  }
`;
