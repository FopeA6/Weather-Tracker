# LAP 2 Debugging Assignment
Assignment 2:

Installation & Usage

Installation:
Clone the repo with git clone
Open terminal and navigate to debug assignment folder
Run npm install to install dependencies.


Usage:
Run npm start to launch the react server
Run npm test to launch the test suite


Changes to Make App Run after Reviewing Feedback:
- Not passing mSTP to the export at the bottom of Search/Index.js causes the page not to render.
- NavBar test was failing as I did not pass '.WrappedComponent' to the tests in the 'beforeEach' function, once this was added, all tests passed. 
