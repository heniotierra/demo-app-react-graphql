import React from 'react';

export const reduceStringAddingEllipsis = (str, limit) => {
  if (str.length <= limit) return <span>{str}</span>;
  const transformedString = `${str.substring(0, limit - 1)}&mldr;`;
  return <span dangerouslySetInnerHTML={{__html: transformedString }}></span>;
};
