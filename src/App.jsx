import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () =>
    fetchDataFromApi("/movie/popular").then((data) => console.log(data));

  return <div className="App"></div>;
}

export default App;
