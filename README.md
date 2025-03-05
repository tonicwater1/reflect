# Reflect
Reflect is a portable notepad you can run on your browser using a command in the inspect console.

Run Reflect:

```
fetch('https://raw.githubusercontent.com/tonicwater1/joobx/refs/heads/main/index.js')
  .then(response => response.text())
  .then(script => {
    eval(script);
  })
  .catch(error => console.error('Error loading script:', error));
```
