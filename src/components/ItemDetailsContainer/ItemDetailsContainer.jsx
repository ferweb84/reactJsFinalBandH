import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetails from "./ItemDetails";
import Loading from "../Loading/Loading";
import "./ItemDetailsContainer.css"

const ItemDetailsContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, 'productos', 
        id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            }            
        });
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading  /> : <ItemDetails item={item} />}
        </div>
    )
}

export default ItemDetailsContainer;