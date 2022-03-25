import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 1170px;
  margin: 50px 20px;
  /* display: grid; */

  @media (min-width: 800px) {
    margin: 50px auto;
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  align-items: center;
  grid-gap: 2rem;

  div {
    box-shadow: var(--light-shadow);
    padding: 2rem;
  }
`;
