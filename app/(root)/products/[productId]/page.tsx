import React from "react";

function ProductPage({ params }) {
  return (
    <div>
      <h1 className="h1-bold">Product Detail</h1>
      <p>ID: {params.productId}</p>
    </div>
  );
}

export default ProductPage;
