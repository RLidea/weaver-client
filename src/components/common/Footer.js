import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Divider = styled('div')`
  ${({ theme }) => `
    height: 1px;
    background-color: ${theme.palette.divider};
  `}
`;

const StyledTypography = styled(Typography)`
  padding: 1.2rem 0;
`;

const Footer = () => {
  return (
    <>
      <Divider />
      <StyledTypography variant="subtitle2" align="center">© 2020 Rlidea, Inc. All rights reserved</StyledTypography>
    </>
  );
};

export default Footer;
