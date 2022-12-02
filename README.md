# Team-08 – Mimical Readme File

## Mimical | Emotions and facial expressions in everyday life | (Mimical for short)

- Aim: Development of an everyday self-exercise program for people with facial paresis (facial paralysis), which affected persons can use as additional training parallel to regular speech therapy.

## Motivation

- In Germany annually "200,000 first-time (...) and approx. 70,000 repeated strokes "1 How many of them also suffer from facial paresis is not recorded [see Swiss Neuropaediatric Stroke Registry (2000-2009): almost 60% had some form of facial paresis].
- in many places there is no sufficient offer of speech therapy treatment available
- self-training is an important part of the recovery process
- outpatient speech therapy is not sufficient for intensive therapy

## Report

- Our team held daily meetings throughout the entire sprint to ensure that everyone was on the same page. Additionally, we held weekly remote meetings with our partners (from Gateway/Humanwissenschaftliche Fakultät) to exchange ideas/discuss our results and an in-person meeting at the beginning of the sprint.

# Sprint Log

## App

- How to start the app:

  - Install the Expo Go app
  - Navigate to directory in terminal
  - Enter command: npm start (if the app does not start, you have to enter npm install --legacy-peer-deps first)
  - Follow instructions in terminal

- 2022-12-02 -- 0.0.2

  - the date of the last user login is saved, which also updates whenever a user logs in again
  -
  - user can look at progress
  - menu (unlocked/completed exercises are marked)
  - settings page (functionality)
  - light/dark mode

- 2022-11-18 -- 0.0.1

  - app created with react native, specifically expo
  - start page (containing: continue practice, scenario overview, log in, cam preview, settings, notifications, calendar)
  - menu (UI design, navigation between pages)
  - settings page (layout)
  - notifications: option to receive notifications as reminders for the exercises; can be set for the morning (11 AM), evening (18 PM), or both; button to deactivate all notifications;
  - calendar: option to create a reminder in device’s calendar app, by importing an event in the calendar submenu
  - front cam preview for exercises

- Repository for the app: https://gitlab.com/ciis-capstone-project/winter-2022-2023/team-08/mimical

## Website

- How to start the website:

  - Once in the repository, install the necessary dependencies using the "npm install" command
  - After the dependencies are installed use “npm run dev” to start the application

- 2022-12-02 -- 0.0.2

  - the repository for the website can be found here: https://gitlab.com/ciis-capstone-project/winter-2022-2023/team-08/mimical-website
  - new design
  - created patient creation page
  - therapist is able to create new patients
  - created dynamic patient cards
  - created mysql database
  - added connection to mysql database (right now still local)
  - added express as backend
  - added new login page

- 2022-11-18 -- 0.0.1
  - created project with NextJS
  - the repository for the website can be found here: https://gitlab.com/ciis-capstone-project/winter-2022-2023/team-08/mimical-website
  - created login page with possibility to save entered values
  - created patients page with a search bar for entries which are contained inside a JSON file
  - created add patients page (which can be entered through the corresponding button located in the patients page) with the possibility to save entered values for future backend
  - created navbar with desktop and mobile view for responsiveness
  - created footer with links to facebook, instagram and linkedin
  - added a temporary CSS Layout
  - created homepage and settings page (empty)

## Database

- 2022-12-02 -- 0.0.2
- added a temporary, but functional database for users to sign up and sign in into, using XAMPP, MySQL and PHP

- How to start the Test Database:

1. Install XAMPP
2. Set up the MySQL database using the provided structure.sql
3. Place the files, located in the database folder, in the htdocs folder of XAMPP
4. Run XAMPP and open http://localhost/phpmyadmin/index.php in your browser before running the App
   Note: Currently the password needs to edited back from hashed to clear text in the database, in order for it to be recognized.
