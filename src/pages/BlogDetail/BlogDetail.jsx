import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Content from './Content';
import Line from '~/components/Line';
import OtherBlogs from './OtherBlogs';

import BLOGS from '~/data/BLOGS';

import config from '~/config';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [{ id: currentId, title, tag, date, poster, content }, setData] =
    useState(BLOGS[0]);

  useEffect(() => {
    const data = BLOGS.find(
      (blog) => blog.to == config.routes.blog.path + '/' + slug,
    );
    if (data) {
      setData(data);
    } else {
      navigate(config.routes['not-found'].path);
    }
  }, [slug]);

  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Content
        title={title}
        tag={tag}
        date={date}
        poster={poster}
        content={content}
      />
      <section className="container">
        <Line />
      </section>
      <OtherBlogs
        data={BLOGS.filter(({ id }) => id !== currentId)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)}
      />
    </main>
  );
};

export default BlogDetail;
