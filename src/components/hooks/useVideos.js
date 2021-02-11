import { useState, useEffect } from "react";
import videoapi from "../api/videoapi";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    console.log(term, "search");
    const searchResponse = await videoapi.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(searchResponse.data.items);
  };

  return [videos, search];
};

export default useVideos;
