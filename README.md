# Dev-Clone

## Description

- App cloned as **DEV Community** https://dev.to/
- It's help people to share their knowledge & ideas.
- It's help people to find bugs solutions.
- We will use NextJs(faster) , Typescript(less errors) as FrontEnd & FireBase(faster) as BackEnd.

## Installation

- **react firebase hooks** > user auth in real time & listen to update for collection changes in the database

```
- npx create-next-app nameoftheapp --ts
- npm install firebase react-firebase-hooks
```

## Usage

First, run the development server:

```
npm run dev
```

## General Information(Explanations)

### Folders OR Directories

- **components** > is reusable UI components
- **lib** > is reusable JavaScript libraries and/or helper functions
- **pages** > is main routes for site
- **api** > create backEnd API to bundle js code that will not encoded in clint side application(case of using it when hou use **only** firebase database)

  ### Files

- **scripts** > in package.json > have next dev for development , build when you ready to deploy you app & start will start your app
- **globals.css** > is global styles for all the app
- **pageNameHere.module.css** > is style for specific component or pages
- **publicFolder** > is for static files like images, css, js, etc that part of the app that don't change
- **PagesFolder** > contain Routing of the app & components that the pages will route(URL) to
- **exportDefaultFunction** > what will get rendered in the page
- **index.tsx** > is the entry point of the app(what will render first)
- **app.js** > Wraps All the Pages & Components > add components & authentication in FrontEnd

### Setup FireBase(steps)

- Make Fire base Project (Follow the instructions)
- Enable Firebase Authentication ( auth tab >getting started > google tab)
- Enable Firebase Database ( production mode for more strict security & test for faster development)
- Go to the setting wheel >Project setting> your apps > to get a Generate a config > create app web app > will give you firebase config in js as a object for client side api **keys** >will tell firebase how to connect to the client
- Initialize Firebase ( npm install firebase --save ) & get the functions from firebase

## Links

- https://www.npmjs.com/package/react-firebase-hooks
- https://firebase.google.com/docs/web/setup
