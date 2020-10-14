import React from "react";
import { Link, useParams } from "react-router-dom";
export default function LeftBar({
  category: { categories, subcategories, subsubcategories },
  selectedCategoryId,
  SelectCategory,
}) {
  // const { slug } = useParams();
  const slug = SelectCategory ? SelectCategory.slug : "";

  return (
    <>
      <div className="side_widgets">
        <div className="widget_title">
          <h1>{SelectCategory && SelectCategory.name}</h1>
        </div>
        <div className="widget_links">
          <ul className="dropdown-menus">
            <li>
              <Link to={`/allbestsellers?category=${slug}`}>Bestsellers</Link>
            </li>
            <li>
              <Link to={`/Shop/new_arrival?category=${slug}`}>
                Just Arrived
              </Link>
            </li>
            {subcategories &&
              subcategories.map((subcategory) => {
                if (subcategory.category_id === selectedCategoryId) {
                  return (
                    <li key={subcategory.id}>
                      {" "}
                      {/* className="active" */}
                      <Link to={`/subcategory/${subcategory.slug}`}>
                        {subcategory.name} <span className="icon-right"></span>
                      </Link>
                      <ul className="sb-menu list">
                        {subsubcategories &&
                          subsubcategories.map((subsubcategory) => {
                            if (subsubcategory.category_id === subcategory.id)
                              return (
                                <li key={subsubcategory.id}>
                                  <Link
                                    to={`/shop/${SelectCategory.slug}/${subsubcategory.slug}`}
                                  >
                                    {subsubcategory.name}
                                  </Link>
                                </li>
                              );
                          })}
                      </ul>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
