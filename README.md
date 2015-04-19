# Discussion Board

This is a To-Do list application built with MEAN stack.

It allows the users to add their comments to the feed, after logging in.
Local authentication has been implemented with passport-local.

## Installation

1. Clone the repository: `git@github.com:rajat404/discussion-board.git`
2. Install the dependencies: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:3000`

## DB Setup

Please make sure that you have MongoDB running. To check run `sudo service mongod status`
The DB name is `discussion` and all posts reside in the collection `posts` , and all users in `accounts`

![Sign-in](http://i.imgur.com/Z7Ti6ia.png)
![Feed](http://i.imgur.com/bufGLVO.png)
