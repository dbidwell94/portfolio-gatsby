import * as React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import IndexContainer from '../components/IndexContainer';
/// @ts-ignore
import hero from '../assets/images/Hero.jpg';

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
                  I started my professional software development career by attending a web development bootcamp. There
                  I learned React.JS, vanilla JavaScript, Node.JS, Java Spring, and Python. I quickly learned, however,
                  that I was not a fan of vanilla JavaScript. Because I had prior knowledge in C# with the Unity game
                  engine and Java with Spring I grew more closely attached to TypeScript. After bootcamp I found an
                  excellent placement with Accretive Technology Group in Seattle, Washington. At ATG I am able to
                  further develop my skills in other languages and skills. I also thoroughly enjoy teaching others the
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
