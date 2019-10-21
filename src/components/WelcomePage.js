import React from "react";
import styled from "styled-components";

export default function WelcomePage() {

  const WelcomeWrapper = styled.div`
    .welcome-page {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .about-ryan {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        padding: 15px;
        margin: 15px;
      }
    }
  `;

  return (
      <WelcomeWrapper>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
          <div className="about-ryan">
            <h2>This page was built by Ryan Renteria. I hope you like it!</h2>
            <h3>About Ryan</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </section>
      </WelcomeWrapper>
    
  );
}