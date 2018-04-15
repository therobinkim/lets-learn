# lets-recreate-axios

In this exercise, you are tasked with rebuilding some basic functionality of axios and maintaining the existing functionality.

After you `npm install`, run `npm start`, which should run `live-server`. This should open your browser. Look at your Developer's Tools Console to see two messages:

```
> get request successful!
  {...}
> post request successful!
  {...}
```

Take a look at `index.js` to see the code that triggered these `console.log`s.

Next, comment out line 9 of `index.html` and uncomment line 10 of `index.html`.

When you refresh `index.html` in the browser, your Developer's Tools Console should report errors related to `axios.get()` and `axios.post()` not existing.

Write some code in `axios.js` to remove these errors and restore the basic functionality (where we are focusing on `console.log`ing the response data).

Check the solution branch for my quick implementation via `git checkout solution`.

1. DO use native JavaScript Promises.
1. DON'T use jQuery's Promises.
