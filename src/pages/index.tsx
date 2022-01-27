import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
/// @ts-ignore
import hero from '../assets/images/Hero.jpg';

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
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
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

export default function Index() {
  return (
    <Layout pageTitle='Devin Bidwell'>
      <Sidebar />
      <IndexContainer>
        <section className='content'>
          <img src={hero} alt='Myself and my wife' />
          <h1 className='hero-hello'>Hello there!</h1>
          <p style={{ textAlign: 'center' }}>My name is Devin Bidwell, a web developer in Bremerton, Washington.</p>
          <div className='cards'>
            <section className='about-section card'>
              <h2>Personal</h2>
              <div className='content'>
                <p>
                  From a young age I was always interested in working with my hands. I opted to go to trade school for
                  Welding when I was 18 and for the next 8 years proceeded to be a structural welder. Soon after,
                  however, I injured my back and thought it was time to work my mind instead. From then on put my focus
                  on my true passion: programming.
                </p>
              </div>
            </section>

            <section className='about-section card'>
              <h2>Professional (welding)</h2>
              <div className='content'>
                <p>
                  I started my welding career after trade school at a small fabrication company. I knew that I loved
                  custom fabrication at that point. When I moved to Washington I found another custom fabrication job
                  and grew my skillsets to learn structural welding as well. Finally after moving to Bremerton I found a
                  smaller but more custom fabrication company. It was there that I got officially certified as a
                  structural welder. While I no longer weld professionally, I still do enjoy drafting up blueprints in
                  CAD for custom projects to do later down the road.
                </p>
              </div>
            </section>

            <section className='about-section card'>
              <h2>Professional (software)</h2>
              <div className='content'>
                <p>
                  I started my professional software development career by attending a web developement bootcamp. There
                  I learned React.JS, vanilla JavaScript, Node.JS, Java Spring, and Python. I quickly learned, however,
                  that I was not a fan of vanilla JavaScript. Because I had prior knowledge in C# with the Unity game
                  engine and Java with Spring I grew more closely attached to TypeScript. After bootcamp I found an
                  excellent placement with Accretive Technology Group in Seattle, Washington. At ATG I am able to
                  further develop my skills in other languages and skills. I also throughly enjoy teaching others the
                  ins and outs of TypeScript and React.JS.
                </p>
              </div>
            </section>
          </div>
        </section>
      </IndexContainer>
    </Layout>
  );
}
