console.log(`
@ri7nz has work for you
WebWorker
`);

onmessage = ({ data: [action, param] }) => {
  switch (action) {
    case "fetch":
      fetch(param)
        .then(res => res.json())
        .then(data => postMessage(data));
      break;
    default:
      postMessage([]);
  }
};
