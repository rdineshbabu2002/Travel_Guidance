import React from "react";
import img  "./"
const Categories = () => {
  return (
    <div>
      <div className="category">
        <div className="head">Categories</div>
        <p className="content">
          Much destination here but don't be confuse! It's already grouped by
          category.
        </p>
      </div>
      <div className="card">
        <img className="img" src="./assests/Lotus.jpg" alt="img" />
        <p>Beach</p>
      </div>
    </div>
  );
};

export default Categories;
