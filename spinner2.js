const spinner = function (spin, timeout) {
  const spinLines = ["\r| ", "\r/ ", "\r- ", "\r\\ "];
  for (let i = 0; i < spin; i++)
    for (const spinLine of spinLines) {
      setTimeout(() => {
        process.stdout.write(spinLine);
      }, timeout);
      timeout += 200;
    }
};