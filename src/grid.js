import styled from 'styled-components';
import { breakpoints, media } from './helpers/';

// Grid gutter
const pad = props => typeof props.theme.gutter === 'number' ? props.theme.gutter : 32;

// Grid content vertical align
const valign = props => props.valign || 'top';

// Grid content horizontal align
const textAlign = props => props.textAlign || 'left';

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

// Styled Col
export const Col = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: ${valign};
  text-align: ${textAlign};
  padding-left: ${pad}px;
  padding-right: ${pad}px;
  width: 100%;
  ${queries}
`;

// Styled Row
export const Row = styled.div`
  width: 100%;
  margin-left: -${pad}px;
  margin-right: -${pad}px;
`;

// Helpers
export const Half = props => <Grid {...props} sm={1/2} />
export const Third = props => <Grid {...props} sm={1/3} />
export const Quarter = props => <Grid {...props} md={1/4} />