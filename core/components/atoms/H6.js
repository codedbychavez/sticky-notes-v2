import styled from "styled-components";

export const H6 = styled.h5.attrs(props => ({

}))`
  margin-bottom: 0.5rem;
  font-size: ${props => props['fontSize'] || '1rem'};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: ${props => props.color || 'black'};
`