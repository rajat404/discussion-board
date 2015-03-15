# Discussion Board

This is an app built on the MEAN Stack.

The final code resides in the `dev` branch. Please use that code.

It allows the users to add their comments to the feed, after logging in.
Local authentication has been implemented with passport-local.

## Installation

1. Clone the repository: `git@github.com:rajat404/discussion-board.git`
2. Install the application: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:3000`

## DB Setup

Please make sure that you have MongoDB running. To check run `sudo service mongod status`
The DB name is `discussion` and all posts reside in the collection `posts` , and all the users in `accounts`

![Sign-in](http://imgur.com/Z7Ti6ia)
![Feed](http://imgur.com/bufGLVO)
