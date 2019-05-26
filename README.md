We use here:
1. Redux
2. Asynchronous tasks (with help of action creators)
3. Redux thunk library (adds a middleware to our project, helps to return NOT an action but a function
that can return an Action to the Reducer; this approach helps us to write asynchronous code)

We should rather create more logic in Reducer instead of in action creator. Action creator (works
asynchronously) should for example pull data from a server asynchronously and these data should be
manipulated in reducer instead of in action creator.