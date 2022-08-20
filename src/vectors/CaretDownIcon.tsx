import * as React from 'react';
import { SVGProps } from 'react';

const CaretDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1.5rem" height="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12 15.713 6.01-6.01-1.413-1.415-4.597 4.6-4.596-4.6L5.99 9.702 12 15.713Z"
      fill="#181818"
      opacity={0.5}
    />
  </svg>
);

export { CaretDownIcon };
