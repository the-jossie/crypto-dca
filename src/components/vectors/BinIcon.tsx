import * as React from 'react';
import { SVGProps } from 'react';

const BinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21 4h-3.1A5.01 5.01 0 0 0 13 0h-2a5.009 5.009 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 1 0 0-2ZM11 17a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v6Zm4 0a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v6ZM8.171 4A3.006 3.006 0 0 1 11 2h2a3.006 3.006 0 0 1 2.829 2H8.171Z"
      fill="#ED1C25"
    />
  </svg>
);

export { BinIcon };
