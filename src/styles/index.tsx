/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  bottomToTopAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from '../components/Shared/Animate';

// Animation Box Element
let minScreenStyle: {
  height?: string;
  width?: string;
  animate: boolean;
};

interface Props {
  axis?: string;
  direction?: string;
  isVisible: boolean;
  width?: string;
  duration?: string;
  minScreenWidth?: string;
  minScreenStyle?: typeof minScreenStyle;
  minHeight?: string;
  animate?: boolean;
  position?: string;
  bottom?: string;
  left?: string;
}
export const ReferencedElement = styled.div<Props>`
  position: relative;
  position: ${(props) => (props.position ? props.position : 'relative')};
  bottom: ${(props) => (props.bottom ? props.bottom : '')};
  /* background-color: transparent; */

  ${(props) =>
    props.isVisible &&
    props.animate &&
    (props.axis === 'horizontal' || ('undefined' && props.direction === 'right')
      ? leftToRightAnimationsharedCSS
      : props.direction === 'left'
      ? rightToLeftAnimationsharedCSS
      : props.direction === 'top'
      ? {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          ...bottomToTopAnimationsharedCSS,
          'animation-duration': `${props.duration}`,
        }
      : '')}
  width: ${(props) => props.width};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '')};
  @media screen and (min-width: ${(props) => props.minScreenWidth}) {
    opacity: 0;
    ${(props) =>
      props.isVisible &&
      props.minScreenStyle &&
      props.minScreenStyle.animate &&
      (props.axis === 'horizontal' ||
      ('undefined' && props.direction === 'right')
        ? leftToRightAnimationsharedCSS
        : props.direction === 'left'
        ? rightToLeftAnimationsharedCSS
        : props.direction === 'top'
        ? bottomToTopAnimationsharedCSS(props.duration)
        : '')}
    height: ${(props) =>
      props.minScreenStyle ? props.minScreenStyle.height : props.width};
    width: ${(props) =>
      props.minScreenStyle ? props.minScreenStyle.width : props.width};
  }
`;

const bottomToTopAnimationsharedCSS = (props: string | undefined) => css`
  animation-name: ${bottomToTopAnimation};
  animation-duration: ${props};
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  opacity: 1 !important;
`;
const leftToRightAnimationsharedCSS = css`
  opacity: 1 !important;
  animation-name: ${leftToRightAnimation};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-direction: forwards;
  animation-play-state: running;
`;

const rightToLeftAnimationsharedCSS = css`
  animation-name: ${rightToLeftAnimation};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-play-state: running;
  opacity: 1 !important;
`;
