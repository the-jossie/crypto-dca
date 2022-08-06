import * as React from 'react';
import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
      stroke="#9C9898"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export { SearchIcon };
