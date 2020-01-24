const isLocalRoute = (url) => {
  const schemes = [
    'http://',
    'https://',
    'ftp://',
    'data:',
    'mailto:',
    'tel:',
  ];

  return schemes.every((s) => !url.startsWith(s));
};


export default isLocalRoute;
