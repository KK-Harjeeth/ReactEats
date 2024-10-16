# `Episode 1 : Inception`
- create a folder named namaste-react
- used html , javascript to display `hello world` in browser
- pulling react to our project using `CDN Links` of `react` and `react-dom`
- create element using `React` and create root using `ReactDOM` 
- render the created element to display it on browser
- create an App.js file
- move react code from index.html to App.js
- create a nested html structure using React createElement
- discussion about root.render()

# `Episode 2 : Igniting our App`
- pushed our project to github
- npm init
- install the bundler `parcel` as Dev Dependency
- `npm install -D parcel`
- discussion about package.json and package-lock.json
- discussion about node_modules
- creating a `.gitignore` file and add node_modules in that file
- `npx parcel index.html`
- `npm install react`
- `npm install react-dom`
- Discussion About Parcel
- #Parcel
  - Dev Build
  - Local Server
  - Hot Module Replacement
  - File watching algorithm written in C++
  - Caching - faster builds
  - Image Optimization
  - Minify files
  - Bundling
  - Files Compress
  - consistent hashing
  - Code Splitting
  - Differential Bundling - support older browsers
  - Diagnostic
  - Error Handling
  - HTTPS
  - Tree Shaking - remove unused code
  - Different dev and prod bundles
- Add `.parcel-cache` and `dist` folders to `.gitignore` file
- add `browserslist` in `package.json` file

# `Episode 3 : Laying the foundation`
- setting up `start` and `build` scripts in package.json file
- discussion about the replacement of `React.createElement` with `JSX`
- discussion about `babel` which converts `JSX` to `React.createElement` object
- attribute names to be written in `camelCase` in JSX
- Types of components in React
  - class based components -> OLD
  - functional components -> Latest
- React functional components are just a normal javascript functions which returns JSX
- Functional component name should start with a capital letter
- talks about component composition
- we can run any Javascript code inside {} parantheses inside JSX
- JSX prevents Cross Site Scripting

# `Episode 4 : Talk is cheap , show me the code`
- Building a `Food Ordering App`
- Planning the UI
- Header
  - Logo
  - Nav Items
- Body
  - Search
  - Restaurant Container
    - Restaurant Card
      - Image
      - Name of the restaurant
      - star rating
      - cuisines
      - time for delivery
- Footer
  - Copyright
  - Links
  - Address
  - Contact
- CSS for header
- Building Header component
- Building restaurant card component
- DISCUSSION about `PROPS`
- props are just like arguments to a function
- discussion about `config driven UI`
- copying the restaurants data from swiggy's response from it's API
- Using `map function` to iterate through the restaurants list and map them to RestaurantCard component
- Fixing `Each child in a list should have a "unique" key prop`
  - pass `key={restaurant.id}` as prop to the RestaurantCard Component
    - `WHY TO PASS KEYS ??`
      - if any new restaurant is added to the list , React re-renders all the RestaurantCard components.
      - using index as key is a bad practice

# `Episode 5 : Let's get Hooked`
- restructuring the Project
- Moving all the `React code` into `src` folder
- Created `Body.jsx` , `Header.jsx` , `RestaurantCard.jsx` files
- moving `resList` to `utils` folder
- `named export/import` vs `default export/import`
- Trying to filter `top rated Restaurants` by clicking on a button
- UI will not get updated if we use JavaScript filter method on resList
- In order to do it we have `useState` hook
- React Hooks are Normal JavaScript utility functions written Facebook Developers
- `useState()` -> gives u super powerful state variable
- `useEffect()` -> gives u
- we have to import `useState` as `named import`
- useState maintains the state of the component
- `const [listOfRestaurants] = useState();` is same as `let listOfRestaurants;`
- ## _**WHENEVER A STATE VARIABLE UPDATES REACT RE-RENDERS THE COMPONENT!!**_
- talks about `Reconciliation algorithm` also known as `React Fiber`
- ### _virtual DOM serves as an abstracted, lightweight copy of the real DOM, allowing for efficient updates and rendering of user interfaces._
- `diff algorithm` => finds out the difference b/w old virtual DOM and new virtual DOM and updates the changes in the REAL DOM

# `Episode 6 : Exploring the world`
- `monolith architecture` vs `microservices architecture`
- monolith -> _Monolithic architecture builds an application as a single, unified unit_
- microservices -> _breaks it down into small, independent services that can be developed, deployed, and scaled separately_
- fetching data dynamically from API
- two approaches :
  - `load -> API -> render`
  - `load -> render -> API -> render` ==> Better UX
- making an API call in `useEffect()` hook
- useEffect() has two arguments
  - callback function
  - dependency array
- ### when useEffect's callback function is called ?
  - it is called after the component is rendered
- using fetch() inbuilt function to fetch data from API
- using `async/await`
- ### `calling swiggy's API from local host has been blocked by CORS policy`
  - browser is blocking us to call an API from one origin to another origin
  - to bypass this error , we should install a chrome extension
- updating the `listOfRestaurants` state variable after an `API call`
- so that component re-renders
- ### `Shimmer UI` instead of `Loading icon`
- Building the `Shimmer` component
- talks about `conditional rendering`
- ### _adding a feature of Login/Logout toggle using useState()_
- Building a search component

# `Episode 7 : Finding the Path`
- in `useEffect` , if we dont write dependency array `useEffect` is called on every render.
- if dependency array is empty , then useEffect is called only once at the `initial render`.
- if dependency array is [btnName] , then useEffect is called everytime btnName is updated.
- ### _Never declare state variables outside the component_
- ### Installing `react-router-dom`
- Before creating routing go to `App.jsx`
  - creating routing configuration
  - import `{createBrowserRouter}` from `'react-router-dom'`
  - `createBrowserRouter` function takes a `list of objects which contain path and element` as an argument
  - import `{RouterProvider}` from `react-router-dom`
  - and replace `<AppLayout/>` with `<RouterProvider/>` in `root.render(<AppLayout/>)`
  - write `root.render(<RouterProvider router={appRouter}/>)`
- Handling the error page
- ### using `{useRouteError}` from `'react-router-dom'` which gives more info about the error
- ### Keeping the `Header` intact without changing it
  - Developing `children routes`
  - importing `Outlet` from `'react-router-dom'`
- importing `{Link}` from `"react-router-dom"` which works same like anchor tag
- `anchor tag` reloads the entire page
- adding Link tags to `about , Contact , Cart` pages
- `TYPES OF ROUTING`
  - client side routing vs server side routing : https://youtu.be/rNVcZklcmqU?si=BtwkEIJ6chxkad-d
- Introduction to  `Dynamic Routes`
- Building `RestaurantMenu.jsx` component
- showing the menu items of a restaurant
- ### using `{useParams}` hook to extract `restaurant_id`
- ### making the restaurant cards clickable

# `Episode 8 : Let's get Classy`
- class will extend `React.Component`


# `Episode 9: Optimizing our App`
- creating custom hooks
- single responsibility principle => each component should have a single responsibility 
- modularity
- easier for debugging , testable , reusable , maintainable
- builiding a custom Hook `useRestaurantMenu()` inside utils folder
- building a custom hook `useOnlineStatus()` 
- adding `online status` color in header
- using `chunking` or `code splitting` or `Dynamic Bundling` to minimize the size of final bundled js file
- ## Lazy Loading (onDemand load) => i.e., the final js file should not have grocery code inside unless I open that page 
- using `lazy` inbuilt function 
- wrapping the `Grocery component` inside the `Suspense` inbuilt component


# `Episode 10: Jo dikhta hai , vo bikta hai`
- Sass -> syntactically awesome style sheets
- Styled Components (used in industry)
- material UI (popular in react community)
- chakra UI , ant design
- # Tailwind CSS => `Rapidly build modern websites without ever leaving your HTML.`
- open tailwind css website => docs => framework guides => select parcel 
- install tailwind css 
- post css is also installed for transforming CSS with javascript
- configure in `tailwind.config.js`
- tailwind css gives you classes automatically 
- installing `tailwind css intellisense` in VS Code

# `Episode 10: Jo dikhta hai , vo bikta hai`
- Higher order component takes a component and returns a component
- buiding `promoted label` feature
- talks about `data layer` and `UI layer`
- adding sections in restaurant menu using API 
- adding `accordion`

# `Episode 11: Data is the new Oil`
- `lifting the state up` => if we open one item category rest should collapse
- ### prop drilling
- ### context API to avoid prop drilling
- creating `UserContext.js` in utils folder
- talks about `useContext` hook

# `Episode 12: Let's build our store`
- ### two libraries Redux team offers are :
  - React-Redux 
  - Redux Toolkit
- Redux store is big object and it is kept in a central global place
- `slices` are introduced to not make this redux store object very big and clumsy
- slices are logical partitions
- cartSlice , userSlice
- ### Building cartSlice
```mermaid
graph TD
    A["User clicks 'Add' button"] --> B["Dispatches 'addToCart' action"]
    B --> C["Action calls function"]
    C --> D["Function executes modifications"]
    D --> E["Function modifies cart state"]
    E --> F["Updated cart state in store"]
    F --> G["UI re-renders with updated cart"]

  ```
- The above function which modifies cart state is known as `reducer`
- `selector` reads the data from store and will modify the react component
- `Header` component `subscribes` to the `redux store` using a `selector` so that the cart state automatically gets updated whenever there is a change.
- ## Setting up the code :
  - install `@reduxjs/toolkit` and `react-redux`
- Build your own store
- connect our store to our app
- creating slice (cartSlice)
- dispatch(action)
- Reading data using Selector
- ### creating an `appStore.js` inside `utils` folder
- configuring store
- providing store to our application
- selector is nothing but a hook inside React