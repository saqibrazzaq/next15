import Link from "next/link";
import React from "react";

function ProductListPage() {
  return (
    <div>
      <h1 className="h1-bold">Products</h1>
      <ul>
        <li>
          <Link href={"/products/1"}>Orange</Link>
        </li>
        <li>
          <Link href={"/products/2"}>Banana</Link>
        </li>
        <li>
          <Link href={"/products/3"}>Mango</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductListPage;
