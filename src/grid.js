import styled from 'styled-components';
import { breakpoints, media } from './helpers/';

// Grid gutter
const pad = props => typeof props.theme.gutter === 'number' ? props.theme.gutter : 24;

// Grid content vertical align
const valign = props => props.valign || 'top';

// Grid content horizontal align
const textAlign = props => props.textAlign && `text-align: ${props.textAlign}`;

// Media queries for width and shift
const queries = props => Object.keys(props.theme.breakpoints || breakpoints).reduce((accumulator, point) => {

  props[point] && accumulator.push(
      media[point]`width: ${props[point]*100}%`
  );

  props[`${point}Shift`] && accumulator.push(
    media[point]`margin-left: ${props[`${point}Shift`]*100}%`
  );

  props[`${point}Align`] && accumulator.push(
    media[point]`text-align: ${props[`${point}Align`]}`
  );

  return accumulator;
}, []);

// Styled Row
export const Row = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: -${pad}px;
`;

// Styled Col
export const Col = styled.div`
  box-sizing: border-box;
  display: inline-block;
  margin-left: 0;
  width: 100%;

  vertical-align: ${valign};
  padding-left: ${pad}px;
  ${textAlign};
  ${queries}
`;

// Helpers
export const Half = props => <Grid {...props} sm={1/2} />
export const Third = props => <Grid {...props} sm={1/3} />
export const Quarter = props => <Grid {...props} md={1/4} />