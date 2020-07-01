import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

const wrapMarkup = (post) => {
  return markdown.render(post);
};

export default wrapMarkup;
