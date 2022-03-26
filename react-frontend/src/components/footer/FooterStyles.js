import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: var(--clr-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

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
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10px;
  width: 100%;
  margin: 10px auto;
  text-align: center;
  letter-spacing: var(--spacing);
  color: var(--gold);

  span {
    color: var(--nisig-green);
  }

  em {
    margin-left: 20px;
    font-size: 10px;
    display: inline-block;
    color: var(--clr-grey-7);
  }
`;
