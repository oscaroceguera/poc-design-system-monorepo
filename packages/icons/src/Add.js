import React from 'react';
import { createSvgIcon } from '@oceb/core/node_modules/@mui/material/utils';
const Icon = createSvgIcon(
  <path d="M18,13h-5v5c0,0.5-0.4,1-1,1s-1-0.5-1-1v-5H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h5V6c0-0.6,0.4-1,1-1s1,0.4,1,1v5h5  c0.5,0,1,0.4,1,1S18.5,13,18,13z" />,
  'Add'
);

export default function (props) {
  return <Icon {...props} />;
}
