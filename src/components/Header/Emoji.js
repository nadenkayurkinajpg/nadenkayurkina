import React from 'react';

export default ({emoji, label}) =>
    <span
        style={{
            color: 'red',
            marginLeft: 20,
            marginRight: 20
        }}

        aria-label={label} role="img">
    {emoji}
  </span>;

