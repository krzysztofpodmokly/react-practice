import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ id, title, content, articleUrl, created }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={title}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
