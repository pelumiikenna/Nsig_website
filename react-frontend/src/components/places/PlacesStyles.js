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
  .btn-container {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--gold);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
    /* border: none; */
  }
  .border-btm {
    border-bottom: 1px solid var(--gold);
  }
  .sections1 {
    width: 90%;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
    margin: 0 auto 30px;
  }
  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;
  }
  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid var(--gold);
    border-radius: var(--radius);
    display: block;
  }
  .filter-btn:hover {
  background: var(--gold);
  color: var(--clr-white);
}



.item-info header {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);
}
.item-info h4 {
  margin-bottom: 0.5rem;
}
.item-text {
  margin-bottom: 0;
  padding-top: 1rem;
  color: var(--clr-grey-5);
}


  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }
    .photo {
      height: 175px;
    }
  }

  @media screen and (min-width: 1200px) {
    .sections1 {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }
    .photo {
      height: 150px;
    }
  }
`;
