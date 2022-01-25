import { ReactNode } from 'react';
import TopMenu from './TopMenu'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContentArea from 'components/atoms/ContentArea';

type Props = {
    children?: ReactNode;
};

export const getTheme = (dark?: boolean) => {
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return theme
}

const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={getTheme(true)}>
            <header><TopMenu /></header>
            <ContentArea>{children}</ContentArea>
            <footer ></footer>
        </ThemeProvider>
    );
};

export default Layout;
