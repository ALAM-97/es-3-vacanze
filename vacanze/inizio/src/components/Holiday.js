import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react-corso-api.netlify.app/.netlify/functions/holiday";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(1);

  const prevHoliday = () => {
    setSelected((prevValue) => {
      if(prevValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return prevValue - 1;
      }
    })
  }

  const nextHoliday = () => {
    setSelected((prevValue) => {
      if(prevValue + 1 > data.data.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    })
  }

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  if (data.success) {
    return (
      <React.Fragment>
        {data.data.length > 0 ? (
            <SingleHoliday
              {...data.data[selected]}
              prev={ prevHoliday }
              next={ nextHoliday }
            />
          ) : (
            <h4>No Vacanze</h4>
          )}
      </React.Fragment>
    )
  } else {
    return <h2>Loading...</h2>
  }
};

export default Holiday;
