import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 1170px;
  margin-bottom: 30px;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-gap: 2rem;
  place-items: center;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  div {
    max-width: 400px;
    box-shadow: var(--light-shadow);
    padding: 2rem;
    border-radius: 10px;

    .profile-img {
      border-radius: 5%;
      margin-bottom: 1rem;
      width: 100%;
      height: 300px;
      object-fit: cover;
      border: 4px solid var(--gold);
      box-shadow: var(--dark-shadow);

      @media (min-width: 700px) {
        width: 100%;
        height: 300px;
      }
    }
  }
`;
