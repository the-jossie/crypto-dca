import * as React from 'react';
import { SVGProps } from 'react';

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17 11h-4V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z"
      fill="#fff"
    />
  </svg>
);

export { AddIcon };
