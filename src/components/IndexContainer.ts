import styled from 'styled-components';

const IndexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  section.content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 10rem;
    position: relative;
    overflow-y: auto;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.largeMobile}) {
      padding: 1rem 1rem;
    }

    h1.hero-hello {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    img {
      height: calc(100vh * 0.2);
      width: calc(100vh * 0.2);
      border-radius: 20rem;
      object-fit: cover;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.375rem;
    }

    section.about-section {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
    }

    div.cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      grid-gap: 1rem;
      margin-top: 1rem;
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
        display: flex;
        flex-direction: column;
      }
    }

    section.card {
      background: ${({ theme }) => theme.colors.white(10)};
      color: black;
      padding: 1rem;
      box-shadow: 0rem 0rem 0.25rem 0rem black;
      transition: 0.125s ease-in-out background;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      h2,
      h1 {
        color: ${({ theme }) => theme.colors.primary};
        margin-left: 2rem;
        margin-bottom: 0.5rem;
      }
      &:hover {
        background: ${({ theme }) => theme.colors.white(30)};
      }

      div.links {
        display: flex;
        width: 100%;
        margin-top: 1rem;
        a {
          margin: 0rem 1rem;
          &:first-child {
            margin-left: 0;
          }
        }
      }

      img.card-hero {
        margin-top: 1rem;
        align-self: center;
        width: 100%;
        height: 100%;
        border-radius: unset;
        object-fit: cover;
        border-radius: 0.5rem;
        border: thin solid ${({ theme }) => theme.colors.primary};
      }

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.smallLaptop}) {
        h1,
        h2 {
          font-size: 1.75rem;
          margin-left: 0;
          text-align: center;
          align-self: center;
        }

        p {
          font-size: 1rem;
          line-height: 1.125rem;
        }
      }
    }
  }
`;

export default IndexContainer;
