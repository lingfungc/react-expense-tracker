Q: What is React.js?
React is a frontend JavaScript library for building user interface.
React aims to build application which is more reactive and with smooth transition, e.g. Netfilx
With React, we do not need to wait for new pages to load or actions to start.

Q: Why does React rely on JavaScript?
JavaScript can run logic in the browser (on the loaded page), and hence we can manipulate the HTML structure (DOM) of the page.
We can change what to display by DOM, and no (visible) request to the server require, so no need to wait for a new HTML page as a response.

Q: Why do we prefer React than plain JavaScript?
React is using a declarative and component-focused approach, and it can render similar duplicated task easily.
While with plain JavaScript, we use imperative approach and we need to repeat the logic (code) for every tasks, because we cannot reuse those logic with sth like component.

Q: Building Single-Page Applications (SPAs) with React
We often build SPAs with React and we can use React to control the entire frontend section of the web application.
With SPA approach, the server only send 1 HTML page as response at the beginning, and then React will take over and control the whole UI.
We never request a second HTML page when user is interacting with the pages, but we can manipulate the DOM to control what to display depends on the user's action.

Q: React.js Alternatives (Angular, Vue)
React - Lean and focused component-based UI library, with certain features (e.g. routing are added via community packages) but do not have many built-in features, we may need to use third-party package for extra functionality.
Angular - Complete component-base framework packed with features, and use TypeScript, but it can be overload for small projects (too much built-in features).
Vue - Kind of a mixture of React and Angular, includes most core features (e.g. routing), has more features than React but less than Angular.
