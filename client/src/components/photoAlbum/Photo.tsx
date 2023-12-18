import React from 'react';

type PhotoProps = {
  source: string;
};

function Photo(props: PhotoProps) {
  const { source } = props;
  return <h1>{source}</h1>;
}

export default Photo;
