const getNumber = () => Math.floor(Math.random() * 100) + 1;

const randomNumber = () =>
  new Promise((resolve, reject) => {
    const a = getNumber();
    console.log("Fetching data, Please wait");

    setTimeout(() => {
      a % 5 === 0
        ? reject(`${a} is divisible by 5`)
        : resolve(`${a} is not divisible by 5`);
    }, 1200);
  });

randomNumber()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
