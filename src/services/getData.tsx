import axios from "axios";

const getData = async () =>
  await axios.get("https://dummyjson.com/products?limit=20&select=title,price");

export default getData;
