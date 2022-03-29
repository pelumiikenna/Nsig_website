import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 1170px;
  margin: 30px auto;

  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
  .faq-all-div {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    align-items: center;
    height: 40px;
  }
  .faq-all-post {
    height: 200px;
    border: 1px solid var(--gold);
    width: 95%;
    margin: 0 auto;
  }

  .faq-all-post h5 {
    margin-bottom: 20px;
  }
  .input {
    padding: 0.5rem 1.25rem;
    border: none;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    /* font-size: 1.5rem; */
    background: transparent;
    color: var(--clr-grey-5);
    border-bottom: 3px solid var(--gold);
    text-align: center;
    margin-bottom: 30px;
  }

  /* pagination */

  small {
    border: 2px solid var(--gold);
    border-radius: 5px;
    padding: 2px 2px;
    color: var(--clr-grey-5);
    display: block;
    width: 10%;
    margin: 0 auto 10px;
    text-align: center;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .prev-page,
  .next-page,
  .paginationItem {
    border: none;
    color: var(--clr-grey-5);
    box-shadow: var(--light-shadow);
    border: 2px solid var(--gold);
    margin: 0 10px;
    cursor: pointer;
    padding: 5px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .prev-page,
  .next-page {
    font-size: var(--small-text);
    background: var(--clr-black);
    color: var(--nisig-green);
  }

  .paginationItem {
    background: var(--clr-grey-10);
    padding: 10px 15px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;
  }

  .paginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .paginationItem.active {
    border: 1px solid var(--gold);
    color: var(--clr-black);
    pointer-events: none;
    box-shadow: var(--dark-shadow);
  }

  .prev-page.disabled,
  .next-page.disabled {
    pointer-events: none;
    box-shadow: none;
    color: var(--clr-grey-1);
   

    /* end of pagination */
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  gap: 2rem;
  place-items: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  .post-body {
    border-bottom: 0.5px dotted var(--clr-grey-5);
    padding-bottom: 10px;
  }

  /* singleFaq style */
  .single-faq-div {
    box-shadow: rgba(0, 0, 0, 0.1) 10px 10px;
  }

  .link-faq h5 {
    color: var(--clr-black);
  }
  .link-faq P {
    color: var(--clr-black);
    font-size: var(--extra-small-text);
  }
  /* end of singleFaq style */

  /* singleBlog style */
  .blog-shadow {
    background: var(--btn-shadows1);
    border: 1px solid var(--nisig-green);
    box-shadow: rgba(0, 0, 0, 0.1) -10px 10px;
    font-size: var(--extra-small-text);

    a {
      color: var(--gold);
    }
  }
  /* end of singleBlog style */

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
