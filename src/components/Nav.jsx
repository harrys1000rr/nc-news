import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";
import { useParams } from "react-router-dom";
 

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
            to="AllArticles">
            all articles
          </Link>
          {topicList.map((topic) => {
            return (
                <p>
              <Link
                to={`/topic/${topic.slug}`}
    >           {topic.slug}
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