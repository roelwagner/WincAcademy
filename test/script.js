const fetch = require("node-fetch");

const baseUrl = "https://jsonbox.io/box_02b776bf08e6069b4b28";

const getData = async (data) => {
  const result = await fetch(`${baseUrl}`);
  const json = await result.json();
  console.log(json);
};
