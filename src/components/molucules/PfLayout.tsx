import { ReactNode } from 'react';
import TopMenu from './TopMenu'
import { ThemeProvider, createTheme, Breakpoint } from '@mui/material/styles';
import ContentArea from 'components/atoms/ContentArea';
import { useMediaQuery} from '@mui/material';

type Props = {
    children?: ReactNode;
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export const getSizeMatches = (bp: Breakpoint) => {
  const matches = useMediaQuery(theme.breakpoints.up(bp));
  return matches
}

const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <header><TopMenu /></header>
            <ContentArea>{children}</ContentArea>
            <footer ></footer>
        </ThemeProvider>
    );
};

export default Layout;
