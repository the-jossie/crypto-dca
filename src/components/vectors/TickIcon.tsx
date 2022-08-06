import * as React from 'react';
import { SVGProps } from 'react';

const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m20.5 6.5-11 11-5-5"
      stroke="#13A500"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { TickIcon };
