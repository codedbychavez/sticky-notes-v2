import styled from "styled-components";

export const H2 = styled.h2.attrs(props => ({

}))`
  margin-bottom: 0.5rem;
  font-size: ${props => props['fontSize'] || '2rem'};
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: ${props => props.color || 'black'};
`