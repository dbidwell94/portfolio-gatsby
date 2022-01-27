import * as React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import IndexContainer from '../components/IndexContainer';
/// @ts-ignore
import AtlasHero from '../assets/images/atlas-screenshot.png';

export default function Projects() {
  return (
    <Layout pageTitle='Devin Bidwell'>
      <Sidebar />
      <IndexContainer>
        <section className='content'>
          <h1 className='hero-hello'>My Projects</h1>

          <div className='cards'>
            <section className='about-section card'>
              <h2>Atlas Terrain</h2>
              <div className='content'>
                <p>
                  Atlas Terrain is a group project developed by myself and 4 other game development enthusiasts. It
                  allows developers and artists using the Unity game engine to easily create and modify their terrain
                  using either pre-made stamps or stamps created by the user.
                </p>
                <div className='links'>
                  <a href='https://atlasterrain.com' target='_blank'>
                    Atlas Terrain
                  </a>
                </div>
              </div>
              <img
                className='card-hero'
                src={AtlasHero}
                alt='screenshot of the Atlas Terrain asset store (in development)'
              />
            </section>

            <section className='about-section card'>
              <h2>HMStream</h2>
              <div className='content'>
                <p>
                  HMStream is my answer to the Plex media server. I don't like that with a home media server you still
                  have to have an account with Plex in order to stream your own data. So I'm working on HMStream which
                  will allow users to install a lightweight media streaming platform on their own computer. Encoding is
                  done with FFMpeg and accounts created are stored on the users' own media server in a local database.
                  The only reason it needs a central server is to provide DDNS functionality so users' can have TLS
                  access to their servers without going through the hassle of setting it up themselves. This will allow
                  HMStream to work securely in-browser.
                </p>
                <div className='links'>
                  <a href='https://github.com/dbidwell94/HMStreamBackend' target='_blank'>
                    HMStream Backend
                  </a>
                  <a href='https://github.com/dbidwell94/hmStreamFrontend' target='_blank'>
                    HMStream Frontend
                  </a>
                </div>
              </div>
            </section>

            <section className='about-section card'>
              <h2>DotnetDNS</h2>
              <div className='content'>
                <p>
                  DotnetDNS is my solution to parsing DNS packets via raw UDP sockets in C#. It allows developers to
                  easily take a raw binary data from a UDP packet and convert it into a class format. It then allows you
                  to create a DNS Response from that request to send back to the endpoint that sent the request.
                </p>
                <div className='links'>
                  <a href='https://github.com/dbidwell94/dotnet-dns-server' target='_blank'>
                    Dotnet DNS Server
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </IndexContainer>
    </Layout>
  );
}
