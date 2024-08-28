/* eslint-disable react/function-component-definition */

'use client';

import {
  motion,
  Transition,
  useInView,
  UseInViewOptions,
  Variant,
} from 'framer-motion';
import { FC, type ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const InView: FC<Props> = ({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default InView;
