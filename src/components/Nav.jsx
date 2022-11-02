import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export const Nav = ({ setSortBy, setOrder }) => {

  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    getTopics().then(({ data: { topics } }) => {
      setTopicList(topics);
    });
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

    return (
    <section>
      <section>
      </section>
      <section >
      <nav>
        <Link to="/">All</Link>
          {topicList.map((topic) => {
            return ( 
            <p  key={topic.slug}><Link
            to={`/topic/${topic.slug}`}> 
    {topic.slug}          
    
              </Link>
              </p>)})}
        </nav>
        <section className="filter-order">
          <select className="sort-by-filter" onChange={handleSortChange}>
            <option>
              Sort by...
            </option>
            <option value="created_at">Created at</option>
            <option value="votes">Votes</option>
            <option value="title">Title</option>
          </select>
          <select className="order-by-filter" onChange={handleOrderChange}>
            <option>
              Order by
            </option>
            <option value="DESC">Desc</option>
            <option value="ASC">Asc</option>
          </select>
        </section>
      
      </section>
    </section>
  );
};