# Namaste-react

# Parcel
- Dev Build
- Local Server
- HMR =Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code Splitting
- Differntial Bundling - support older broswer
- Diagnotics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- different dev and prod bundles

# Namaste Food

/*
-  Header
    - Logo
    - Nav Items
  Body
    - Search
    - Restarunt Container
      - Restarunt Card
        - Name of Restarunt , Star Rating , cuisine , delivery time etc.
  Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component
import {Component } from "path";

# React Hooks
(Normal JS utility function)

- useState() - Superpowerful state variable in react
- useEffect() - 

# Routing
- Client-side routing:
- Server-side routing:

# Redux ToolKit
- Install @reduxjs/toolkit and react-redux
- Build Our Store
- Connect Our store to the app
- Slice (Cart Slice)
- dispatch(action)
- Selector


# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing 

# Setting up Testing in our app
- Install React Testing Library
- Installed Jest
- Installed Babel dependicies 
- Configure Babel            
- Configure Parcel Config File to disable  default babel transpilation
- Jest Configuration
- jest - npm init jest@latest
- Install jsdom Library - npm install --save-dev jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel configiration
- Install @testing-library/jest-dom - npm install -D @testing-library/jest-dom
