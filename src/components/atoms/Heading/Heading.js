import styled from 'styled-components';

const Heading = styled.header`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
