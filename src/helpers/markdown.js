import MarkdownIt from 'markdown-it';


const markdown = (str, {
  typographer = true,
  linkify = false,
  html = false,
  ...options,
} = {}) => (
  (new MarkdownIt({ typographer, linkify, html, ...options }))
    .render(str)
);


export default markdown;
