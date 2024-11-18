import React from "react";

function OrderPage({ params }) {
  return (
    <div>
      <h1 className="h1-bold">Order Detail</h1>
      <p>ID: {params.orderId}</p>
    </div>
  );
}

export default OrderPage;
