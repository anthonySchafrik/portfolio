import React from 'react';

import pic from '../photos/work_portrait_clear.png';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <div className="workContainer">
      <div style={{ marginLeft: '3vw' }}>
        <div
          className="appInfoBoxes"
          style={{
            width: '60vw'
          }}
        >
          Employee Onboarding Portal -React/Node Developer React/Redux Express
          SQL Server
          <p>
            This is an onboarding portal project I worked on for Florida Blue.
            Some of my notable achievements consist of the following:
            <p style={{ marginLeft: '10px' }}>
              - Refactoring an endpoint that previously took 17-30 seconds to
              return the main page data. I did this by changing the SQL query to
              give me user information with their tickets, then I rewrote a
              multiple-loop function into a single-loop function, using an
              object and taking advantage of their constant-time lookup to build
              the groups. This fix brought the return time down to 1 second.
            </p>
            <p style={{ marginLeft: '10px' }}>
              - Building a feedback loop that allows managers and users to work
              with support to solve ticket issues. This includes a micro service
              that automatically emails feedback and other information to the
              hiring manager.
            </p>
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '58vw'
          }}
        >
          Poka Cheat -React/Node Developer React/Redux Express cheerio
          <p>
            This is a fun, personal project I created in order to practice web
            scraping. It's also useful in assisting me during Pokemon battles! I
            created a UI that will return Pokemon statistics from the PokeAPI
            when the user inputs a Pokemon name. I briefly encountered a problem
            when I realized it wasn't returning any of the new Pokemon; this was
            easily resolved by scraping an updated website if the Pokemon name
            is not found within the PokeAPI. With help from Cheerio, I am able
            to retrieve the correct Pokemon statistics.
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '56vw'
          }}
        >
          Paper Dragon -React/Node Developer React/Redux Express Postgres
          MongoDB
          <p>
            This project was a result of wanting to practice improvisation
            skills within programming; all plans were thought of during the
            coding process. Pro tip - bad idea, I don't recommend it. All joking
            aside, it is a text-based RPG that I am still actively working on.
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '54vw'
          }}
        >
          Gift Giving Elephant -React/Node Developer React/Redux Express
          ElephantSQL (Postgres but cloud storage)
          <p>
            I love this application! This is a gift-exchange app that allows
            users to log in, make and/or join a group, set purchase limits, and
            randomly match users within a given group. This app catapulted my
            programming skills, and was the first full-stack solo project I
            worked on once I learned how to link a client server and database
            together.
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          Pocket Goblin -Front end Developer React/Redux Express GraphQL Plaid
          <p>
            This is an application I created as part of a team of developers.
            This is a financial app that assists in a user's budgeting endeavors
            by displaying spending history and providing conscious
            money-spending decisions. For example, based on a user's
            debt-to-savings ratio, the app will show a red, yellow, or green
            light when presented with the cost of an item/service and a choice
            of cash or credit. If a red or yellow light appears, the app will
            alert the user with a suggestion to put the money towards paying off
            debt. If a green light appears, the app will show the possible
            outcomes if the money is instead invested over a 5, 15, or 25-year
            period. My responsibilities included building the entire front-end
            of the app.
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '50vw'
          }}
        >
          Goonies -React/Node Developer React/Redux Express SQL
          <p>
            This is an application made for users who enjoy hiking and/or
            backpacking. Within the app, a user can search for a hiking
            location, and will be presented with any available park information,
            including open/closed trails, weather in a 1 - 8 day range, a timer
            to show length of time the user has spent on the trail, and a
            checklist to help plan accordingly. My responsibilities included
            building the weather feature. I used the darksky API (when it was
            free) to pull and display all temperatures, precipitation
            probability, humidity, and cloud coverage.
          </p>
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          KidDash -Front end Developer React/Redux Express MongoDB
          <p>
            This is the very first project I ever worked on. KidDash is a way
            for teachers and parents to easily communicate, receive updates, and
            upload documents (I built an admin page specifically for uploading
            documents). A user who wished to upload a document may pick a
            category, add a photo, and choose recipients.
          </p>
        </div>
      </div>

      <div className="workPicContainer">
        <img src={pic} alt="Me in suite" height="700px" width="500px" />
      </div>
    </div>
  );
};

export default WorkPage;
