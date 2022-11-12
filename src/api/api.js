import { v4 as uuidv4 } from "uuid";
import { database } from "../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addNewInvoice } from "../store/invoices-slice";
import { useEffect } from "react";
import { sampleData } from "../constants/sample-data";

const collectionRef = collection(database, "invoices");

export const addData = (invoice) => {
  const id = uuidv4();
  invoice.id = String(id);
  invoice.status = "pending";
  try {
    addDoc(collectionRef, invoice).then((res) => {
      alert("data added");
    });
  } catch (err) {
    alert(err.message);
  }
  console.log(invoice);
};
export const useGetData = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);
  useEffect(() => {
    getDocs(collectionRef).then((res) => {
      res.docs.map((item) => {
        const invoice = item.data();
        invoice.fid = item.id;
        dispatch(addNewInvoice(invoice));
        return invoice;
      });
    });
  }, [dispatch]);
  return invoices;
};
export const updateData = (invoice, fid) => {
  try {
    const docToUpdate = doc(database, "invoices", fid);
    updateDoc(docToUpdate, invoice).then((res) => {
      alert("data updated");
    });
  } catch (err) {
    alert(err.message);
  }
};
export const deleteData = (fid) => {
  try {
    const docToDelete = doc(database, "invoices", fid);
    deleteDoc(docToDelete).then((res) => {
      alert("data deleted");
    });
  } catch (err) {
    alert(err.message);
  }
};

export const postSampleData = () => {
  sampleData.map((item) => {
    addData(item);
    return item;
  });
};
