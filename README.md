# Smart Architecture Booking Platform 
A full-stack web application that allows users to explore, design, and book architectural projects across 6 building categories — with an integrated design calculator and an admin dashboard for complete project management.

# Getting Started
# Prerequisites

Make sure you have the following installed:
Node.js (v16 or above)
MongoDB (local or Atlas)
npm (comes with Node.js)

# Project Structure
REACTPROJECT/
│
├── frontend/
│   └── client/          # React frontend application
│
└── backend/             # Node.js + Express backend API

# How to Run the Project
# Step 1 — Open Terminal
In VS Code, press Ctrl + J to open the integrated terminal.

# Step 2 — Run the Frontend
In the terminal, navigate to the React client folder and start the development server:
cd frontend
cd client
npm start
The React app will launch at http://localhost:3000

# Step 3 — Run the Backend
Open a new terminal (click the + icon in the terminal panel), then run:
cd backend
npm start
The backend server will start and MongoDB will connect automatically.

# Application Pages & Features
# Register & Login

Click Register to create a new user account by filling in your details.
Click Login to access your account.


# About Us

Click About Us in the navigation to view complete information about the platform and its mission.


# Contact

Click Contact to reach the team via phone number or Gmail.

# Building Categories
After logging in, users can explore 6 types of architectural projects:
Category           Description
Home Design        Residential home architecture 
Hospital Design    Medical facility layouts
Shopping Mall      Commercial retail spaces
Restaurant Design  Dining and hospitality designs 
Apartment Design   Multi-unit residential buildings
College Design     Educational institution architecture

#  How to Browse & Book

Click on any building category from the home page.

Browse through multiple design types available for that category.

Click the View button on your preferred design to see:

Full architecture images

Detailed description of the building

Click Book Now to submit a booking request.

The team will contact you and begin the construction process.

# Design Calculator
The Design Calculator helps users estimate project costs before booking.

# Input Fields:
Field              Description
Select Project          Choose the building type
Total Area (sq ft)      Total construction area
Floors                  Number of floors
Cost per sq ft          Construction cost rate
Parking Area (sq ft)    Area for parking
Interior Cost %         Percentage for interior work
Number of Rooms         Total rooms required
Bathrooms               Number of bathrooms
Number of Lifts         Lifts/elevators needed

Click Calculate to get a detailed budget analysis and project cost estimate.

# Proposed System
The Smart Architecture Booking Platform provides a single, unified website where users can:

Explore 6 types of architectural projects: Home, Hospital, Shopping Mall, Restaurant, Apartment, and College.
View detailed designs with images and descriptions.
Use the Design Calculator to estimate costs before committing.
Book their preferred design directly through the platform.
Get contacted by the team to start construction.

This eliminates the need to visit multiple firms or agencies — everything from inspiration to booking happens in one place.

# Admin Dashboard
Admins have a dedicated dashboard with full control over the platform.
# Admin Login
Log in with admin credentials to access the Admin Dashboard.

# Dashboard Sections
# Dashboard
Overview of platform activity and statistics.
# Users

View the list of all registered users.
See total user count and individual details.

# Plans / Projects

See all booked projects.
View status of each project:

 Active — Construction in progress
 Pending — Awaiting start


Admin can edit project status at any time.

# Bookings

View all booking requests submitted by users.
See project details, user info, and booking history.

# Profile

View and edit admin profile information.
Change password securely.

# Tech Stack
Layer          Technology
Frontend       React.js
Backend        Node.js + Express.js
Database       MongoDB
Styling        CSS / Tailwind / Bootstrap

# Contact
For support or inquiries, use the Contact page in the application to reach us via phone or email.


