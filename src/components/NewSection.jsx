import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
function NewSection() {
  const [newsData, setNewsData] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=831dd9d9daca4c06830aad25f7850cca"
      );
      const news = data.data.articles;
      setNewsData(news);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const showNews = newsData.map((data, index) => {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Cards key={index} data={data} />;
      </div>
    );
  });

  return <div style={{ padding: "2rem" }}>{showNews}</div>;
}

export default NewSection;
