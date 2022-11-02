import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";


const Nav = () => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    getTopics().then(({ data: { topics } }) => {
      setTopicList(topics);
    });
  }, []);

    return (
    <section>
      <section>
      </section>
      <section >
      <nav>
          <Link
            to="/">
            All
          </Link>
          {topicList.map((topic) => {
            return ( 
            <p  key={topic.slug}><Link
            to={`/topic/${topic.slug}`}> 
    {topic.slug}          
    
              </Link>
              </p>
            );
          })}
        </nav>
        </section>
      </section>
  );
};

export default Nav