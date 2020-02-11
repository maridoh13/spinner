process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinning = function () {
  let counter = 0;
  let lines = ['|', '/', '-', '\\', '|'];

  for (let i = 0; i < lines.length; i++){
    setTimeout(() => {
      process.stdout.write(`\r${lines[i]}  `);
    }, counter);
    counter += 200;

    if (counter === 1000) {
      setTimeout(() => {
        process.stdout.write(`\r${lines[i]}  \n`);
      }, counter);
    };
  }

}

spinning();




// worked on it with @cnguyen50