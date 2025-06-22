# Frontend

## How to Install

- Clone the repository
- Use `yarn` to download all the dependencies.
- Use `yarn dev` to spin up a dev server.
- The dev server spins up on `http://localhost:5173/`

> Note: Make sure to spin up the backend server before proceeding further.

## What to expect

- The first page mimics a landing page. Click on the "Try for Free" button to enter the website.
- On the Second Page, add the Product URL from Amazon or Walmart, and press "Get Started".
- The URL is sent to the backend for scraping the details.
- The next page will show the details that have been scraped from the page. You will be able to edit or add to the details here.
- Once you are happy with the details, click on "Generate Script" to generate three variations on scripts.
- Once you select the script that you are happy with, click on "Generate Video" to generate the final video.
- On the final page, you can see the script used to generate the video ad along with the orientation of the video. On the right side, there is also a playback of the video available.
- You can download the video using the "Download" button on the last page.

## TechStack Used:

- React as the framework with JS as the base language.
- React-Router for route based UI navigation.
- Jotai for global state management.
- Tailwind for styling.
- ReactQuery for fetching and caching data.
- React Icons for iconography.

## Conclusion

The overall idea governing the design of the frontend was functionality paired with a dash of elegance. I did not concentrate too much on creating a visually stunning website, yet did not leave it barebones as most wireframes are left. I think it is a good balance for a project to have some styling to feel coherent and put together without having to delve too deep into visual language principles and I tried to leverage the same approach in this project.
