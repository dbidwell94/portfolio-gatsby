import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavLink from './NavLink';

const sidebarSlideIn = (expandedSize: number) => keyframes`
  from {
    width: 3rem;
  }

  to {
    width: ${expandedSize}rem;
  }
`;

const sidebarSlideOut = (collapsedSize: number) => keyframes`
  from {
    width: ${collapsedSize}rem;
  }

  to {
    width: 3rem;
  }
`;

const linkFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const linkFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SidebarContainer = styled.nav`
  display: flex;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white(10)};
  width: 15rem;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0rem 0rem 0.25rem 0rem black;
  transition: 0.125s ease-in-out background;
  button.mobile-expand {
    display: none;
    &::after {
      display: none;
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors.white(30)};
  }
  div.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    a {
      width: 100%;
      text-align: center;
      padding: 0.5rem 1rem;
      position: relative;
      color: white;
      font-size: 1.35rem;
      &::before {
        content: ' ';
        width: 0rem;
        height: 100%;
        background: ${({ theme }) => theme.colors.secondary};
        position: absolute;
        top: 0;
        left: 0%;
        transform: translate(calc(50% - 0.5rem), 0%);
        transition: 0.125s ease-in-out width;
      }

      &:hover {
        &::before {
          width: 1rem;
        }
      }

      &:first-child {
        margin-top: 5rem;
      }
    }
  }

  @media screen and (max-width: 750px) {
    animation: ${() => sidebarSlideOut(10)} 0.25s ease-in-out 0s forwards;
    &:hover {
      animation: ${() => sidebarSlideIn(10)} 0.25s ease-in-out 0s forwards;
      div.links {
        animation-name: ${linkFadeIn};
        animation-delay: 0.125s;
        animation-duration: 0.25s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
    }

    div.links {
      opacity: 0;
      animation: ${linkFadeOut} 0.125s ease-in-out 0s forwards;
    }

    button.mobile-expand {
      display: block;
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: 0.25rem;
      border: none;
      outline: none;
      background: transparent;
      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 1rem;
        height: 1rem;
        top: 50%;
        left: 50%;
        border: 0.125rem solid ${({ theme }) => theme.colors.secondary};
        border-width: 0.125rem 0.125rem 0rem 0rem;
        transform: translate(-65%, -50%) rotate(45deg);
        transition: 0.125s ease-in-out transform;
      }

      &.opened {
        &::after {
          transform: translate(-35%, -50%) rotate(-135deg);
        }
      }
    }
  }
`;

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SidebarContainer onMouseOver={() => setIsOpened(true)} onMouseLeave={() => setIsOpened(false)}>
      <button className={`mobile-expand${isOpened ? ' opened' : ''}`} />
      <div className='links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contact'>Contact Me</NavLink>
      </div>
    </SidebarContainer>
  );
}
