import styled, { css } from 'styled-components';

export const breakpoints = {
  xs: '32em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '76em'
};

const toEm = px => px / 16;

// iterate through the breakpoints and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;

  return accumulator
}, {});