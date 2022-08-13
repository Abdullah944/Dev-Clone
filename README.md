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
-

### Routing

- **Dynamic routing** > is the ability to change the URL of the app without reloading the page.
- **Dynamic route segment** > (like variable) is a segment of the URL that can be changed dynamically , EX[admin/**slug.tsx**].
- **Folder/Directory with dynamic route** > [username]/index.tsx > to see it EX localhost:3000/anythingHere > Note: will not get conflict with the static pages like admin/index.tsx
- **dynamic dir + dynamic route segment** > [username]/[slug]/index.tsx > to see it EX localhost:3000/anythingHere/anythingHere
- **Next Link** > when use it you can add string to reference the page or give pathName with the query of the name
- **Prefetch** > will preload the page before it is rendered > https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ > EX `<div> <Link prefetch={true} href={{ pathname:'/[username]', query:{username:'A'}, }}> <a> A's profile </a> /Link> </div>I `

## Extra

- **Costume Snippets** > Make your short cut code like **rafce** > press Shift + command P > config Snippets > make like the doc's > https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets
- **File in a folder shortcut** > new file > admin/index.ts

## Links

- https://www.npmjs.com/package/react-firebase-hooks
- https://firebase.google.com/docs/web/setup
