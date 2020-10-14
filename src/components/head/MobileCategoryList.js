import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";

export default function SubCategoryList({
  Name,
  SubSubCategory,
  subCategory,
  categories,
}) {
  const [open, setOpen] = useState(false);

  const getCategorySlug = (subCategory) => {
    for (const category of categories) {
      if (category.id === subCategory.category_id) {
        return category.slug;
      }
    }
  };

  return (
    <ul className="sub-menu-plus" onClick={() => setOpen((open) => !open)}>
      <span>
        {Name}
        <span
          className={open ? "icon-minus" : "icon-plus"}
          aria-hidden="true"
        ></span>
      </span>
      <Collapse isOpen={open}>
        {SubSubCategory &&
          SubSubCategory.map((item) => (
            <Link
              key={item.id}
              to={`/shop/${getCategorySlug(subCategory)}/${item.slug}`}
            >
              <li>{item.name}</li>
            </Link>
          ))}
      </Collapse>
    </ul>
  );
}
