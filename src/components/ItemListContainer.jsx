import React from "react";

const ItemListContainer = (props) => {
    return (
        <div className="Mensaje">
            <p style={{textAlign: "center", fontSize: "20px"}}>{props.message}</p>
        </div>
    );
};

export default ItemListContainer;