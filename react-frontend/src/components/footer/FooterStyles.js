import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--clr-black);
  box-shadow: var(--dark-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap-row: 25px;

  @media (min-width: 800px) {
    max-width: 1170px;
    margin: 0 auto;
    justify-content: space-around;
    /* padding: 1rem; */
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 25px;
  text-transform: capitalize;

  li a {
    color: var(--gold);
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  gap: 25px;
  text-align: center;

  li a {
    color: var(--nisig-green);
  }
`;

export const FooterText = styled.div`
  display: block;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  letter-spacing:var(--spacing);
  color: var(--gold);

  span {
    color: var(--nisig-green);
  }
`;
