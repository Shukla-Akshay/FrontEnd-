import React from 'react';

const Info = (props) => {
  const { match } = props;
  const { params } = match;
  const { InfoId } = params;

  return <div>{`This is Info Page #${InfoId}`}</div>;
};

export default Info;
