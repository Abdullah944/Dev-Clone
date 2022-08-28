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

- **Make Fire base Project** > (Follow the instructions)
- **Enable Firebase Authentication** > ( auth tab >getting started > google tab)
- **Enable Firebase Database** > ( production mode for more strict security & test for faster development)
- **Go to the setting wheel** > Project setting> your apps > to get a Generate a config > create app web app > will give you firebase config in js as a object for client side api **keys** >will tell firebase how to connect to the client
- **Initialize Firebase** > ( `npm install firebase --save` ) & get the functions from firebase

### Routing

- **Dynamic routing** > is the ability to change the URL of the app without reloading the page.
- **Dynamic route segment** > (like variable) is a segment of the URL that can be changed dynamically , EX[admin/**slug.tsx**].
- **Folder/Directory with dynamic route** > [username]/index.tsx > to see it EX localhost:3000/anythingHere > Note: will not get conflict with the static pages like admin/index.tsx
- **Dynamic dir + dynamic route segment** > [username]/[slug]/index.tsx > to see it EX localhost:3000/anythingHere/anythingHere
- **Next Link** > when use it you can add string to reference the page or give pathName with the query of the name
- **Prefetch** > will preload the page before it is rendered > https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ > EX

  ```
  <div> <Link prefetch={true} href={{ pathname:'/[username]', query:{username:'A'}, }}>
  <a> A's profile </a> /Link>
  </div>I
  ```

### Loader

- **Loader** > is a loading animation that will show when the page is loading

### NavBar

- **priority** in a <Image priority/> will prevent the img from blinking
- **Next Link** > EX >
  ```
  <Link href={`/${username}`}> <a> {username} </a> </Link>
  ```

### React-hot-toast

- **React-hot-toast** > is a library that will show a toast message when you make a change in the app
- **Add it to app.tsx** > <Toaster/> > call it everywhere > EX >

```

<button onClick={()=>toast.success('hello toast!')}>
Toast Me
</button>

```

### Auth Intro

- **Steps as front** > to use the user info : 1- Get firebase user (is logged in) . 2- Fetch user document from DB.
- **Minimize reading this function** > (render with every page) > we make the auth Data in Global context(so it's available for every page before it render , so it will be there from the first time the app ask for the user auth)
- **No costume username** in firebase > we will do it
- **Note**: We don't need server side rendering for now > because search engin will never see this content > better to render it in the **client** side

### Google Sign-in

- **Google Sign-in** > make the user sign-in using the google or Gmail
- **importing auth / googleAuthProvider** > to use them in entry.tsx
- **Add Statement** > if user sign-in or out or not having username
- **Note** > Tou can Sign-in & see your info in the inspect > Application > indexDB > firebaseLocalStorage

### Auth-Context (react context API)

- **Context** > provides a way to pass data through the component tree without having to pass props down manually at every level > make the User info all the app can use it > share data throughout the component tree
- **.Provider** > using it will remove the idea of passing props
  ```
  <ThemeContext.**Provider** value="dark">
  <HOME/>
  </ThemeContext.**Provider**>
  ```
  - steps > Import createContext > const & make default value > round the app.tsx with it + the .Provider > import useContextHook from reate & pass the const as argument

### Auth-hook (useAuthState())

- **useAuth** > Listen To Current User > when the user sign-in it will populated with the user obj > when sign-out = null
- **Snapshot** > instance contains data from a Firebase Database location. Any time you read Database data, you receive the data as a DataSnapshot.

```
  unsubscribe = ref.onSnapshot((doc) => {
        //* Return Latest data from the doc or dataBase
        setUsername(doc.data()?.username);
      });

```

```
// Get current user from firebase
const [user] = useAuthState(auth);

```

### Custom-usernames

- **Debounce** > the search or fetch the data after the user stop typing `npm i --save-dev @types/lodash.debounce`
- **reverses mapping** > to get the username from the user id(collection) that connected to it
- **init fireStore(Database)** > `export const db = getFirestore(); `
- **addDoc** > add a new doc to the collection >

  ```
  const usernameDoc: DocumentReference<DocumentData> | any = await addDoc( collection(db, 'usernames'),
  {
  username: formValue,
  }
  );
      setDoc(usernameDoc, { capital: true }, { merge: true });

  ```

  - **batch** > to add multiple docs to the collection > EX >

  ```
  const batch = db.batch();
  const usernameDoc: DocumentReference<DocumentData> | any = await addDoc( collection(db, 'usernames'),
  {
  username: formValue,
  }
  );
  batch.set(usernameDoc, { capital: true });
  batch.commit();
  ```

  ### SSR-SEO in next

  - **static Page** > a page that <don't relay> on any external data like firebase or external api
  - **dynamic website** > a website that <relay> on external data like firebase or external api
  - **SSR** > server side rendering(if you need to cache data on the server) > fetch data on the server & prevent rendering until the data is <ready> or available > difficult to cache which lead to unnecessary read to the DB That will slower the performance of the website >

  ```export aysnc function getServerSideProps(){
    // Fetch data
    return{props:{data},
    }
  }
  ```

- **SSG** > Static Generation > generate a static website on the server side > fetch the data at build time (good for caching & performance) > But when you need to change a thing on the page you need to reload the page or redeploy it
- **ISR** > Incremental Static Rendering > render the page incrementally when the data is available > take from both(SSG - SSR) you can add time to refetch data >
- ```
    export async function getStaticProps(){
      // Fetch data here
  }
    return{
    }
      props:{data},
      revalidate:100 //HERE
  ```

  ### Data Model

  - collectionGroup > query all subcollections of a collection > EX user > will have posts > likes

  ### SSR-User-Profile-Page

  -

## Extra

- **Costume Snippets** > Make your short cut code like **rafce** > press Shift + command P > config Snippets > make like the doc's > https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets
- **File in a folder shortcut** > new file > admin/index.ts

## Links

- https://www.npmjs.com/package/react-firebase-hooks
- https://firebase.google.com/docs/web/setup
- https://react-hot-toast.com/
- https://reactjs.org/docs/context.html
- https://firebase.google.com/docs/firestore/manage-data/add-data
- https://firebase.google.com/docs/firestore/manage-data/transactions
