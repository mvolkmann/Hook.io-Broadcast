To run this:

1. Enter "node server.js" in a terminal window.
2. Browse http://localhost:3000 from two browser windows.
3. Open the console in both browser windows. 
4. Press the "Send" button in each browser window.

This will emit an event from the browser to the server.
The server will emit another event in response
that should be received in both browsers.
However, it is only received in one of them. 
