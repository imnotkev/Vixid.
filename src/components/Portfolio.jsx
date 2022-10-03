import React from "react";
import PortfolioCase from "./ui/PortfolioCase";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio mb64">
      <h2 className="section__title portfolio__title">Previous Cases</h2>
      <ul className="portfolio__lists">
        <li className="section__sub-title portfolio__list portfolio__list--current">
          All
        </li>
        <li className="section__sub-title portfolio__list">Design</li>
        <li className="section__sub-title portfolio__list">Development</li>
        <li className="section__sub-title portfolio__list">Social Media</li>
      </ul>
      <div className="portfolio__container">
        <PortfolioCase
          img="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Test Case"
          featurePara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi, unde eveniet quisquam harum laborum."
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet soluta natus dolores, quasi voluptates hic quaerat fugiat asperiores nisi delectus vero labore autem neque cupiditate facere similique. Perspiciatis, debitis sequi? Ducimus officiis quaerat suscipit eligendi qui quam consectetur sint nam voluptate, possimus repellat reiciendis nulla provident, culpa architecto deserunt? Illo voluptas dicta autem, cumque laborum dolor ducimus ab fugiat fugit ipsa quos. Tempora quisquam facilis, dolorem quia labore, sunt cum asperiores placeat laboriosam voluptates atque reiciendis sed quam soluta!"
          category={["Design", "Development"]}
        />
        <PortfolioCase
          img="https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          title="Test Case"
          featurePara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi, unde eveniet quisquam harum laborum."
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet soluta natus dolores, quasi voluptates hic quaerat fugiat asperiores nisi delectus vero labore autem neque cupiditate facere similique. Perspiciatis, debitis sequi? Ducimus officiis quaerat suscipit eligendi qui quam consectetur sint nam voluptate, possimus repellat reiciendis nulla provident, culpa architecto deserunt? Illo voluptas dicta autem, cumque laborum dolor ducimus ab fugiat fugit ipsa quos. Tempora quisquam facilis, dolorem quia labore, sunt cum asperiores placeat laboriosam voluptates atque reiciendis sed quam soluta!"
          category={["Design", "Development", "Logo"]}
        />
        <PortfolioCase
          img="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Test Case"
          featurePara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi, unde eveniet quisquam harum laborum."
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet soluta natus dolores, quasi voluptates hic quaerat fugiat asperiores nisi delectus vero labore autem neque cupiditate facere similique. Perspiciatis, debitis sequi? Ducimus officiis quaerat suscipit eligendi qui quam consectetur sint nam voluptate, possimus repellat reiciendis nulla provident, culpa architecto deserunt? Illo voluptas dicta autem, cumque laborum dolor ducimus ab fugiat fugit ipsa quos. Tempora quisquam facilis, dolorem quia labore, sunt cum asperiores placeat laboriosam voluptates atque reiciendis sed quam soluta!"
          category={["Logo"]}
        />
        <PortfolioCase
          img="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          title="Test Case"
          featurePara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi, unde eveniet quisquam harum laborum."
          para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum amet soluta natus dolores, quasi voluptates hic quaerat fugiat asperiores nisi delectus vero labore autem neque cupiditate facere similique. Perspiciatis, debitis sequi? Ducimus officiis quaerat suscipit eligendi qui quam consectetur sint nam voluptate, possimus repellat reiciendis nulla provident, culpa architecto deserunt? Illo voluptas dicta autem, cumque laborum dolor ducimus ab fugiat fugit ipsa quos. Tempora quisquam facilis, dolorem quia labore, sunt cum asperiores placeat laboriosam voluptates atque reiciendis sed quam soluta!"
          category={["Development"]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
