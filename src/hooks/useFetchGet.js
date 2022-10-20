import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewInvoice } from "../store/invoicesSlice";

const useFetchGet = (url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const loadedInvoices = [];
          for (const key in data) {
            data[key].fid = key;
            loadedInvoices.push(data[key]);
            dispatch(addNewInvoice(data[key]));
          }
          setData(loadedInvoices);
        })
        .catch((error) => console.log(error));
    };
    getData();
  }, [url]);
  return data;
};

export default useFetchGet;
