import styled from "styled-components";

export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  justify-content: center;
  padding: 30px;

  .item-text {
    text-align: left;
  }

  .places-page-title {
    color: var(--clr-black);
    margin-top: 1rem;
  }

  div.titl-underline {
    background: var(--gold);
    width: 80vw;
    height: 0.05rem;
    margin: 0 auto;
  }
`;
