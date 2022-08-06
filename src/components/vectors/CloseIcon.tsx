import * as React from 'react';
import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.25rem" height="1.25rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="#E7E6E6" />
    <path d="m14 6-8 8M6 6l8 8" stroke="#767171" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export { CloseIcon };
