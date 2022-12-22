import { ReactNode } from 'react';
import TopMenu from '../molucules/TopMenu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContentArea from 'components/atoms/ContentArea';

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

const Layout = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <header>
                <TopMenu />
            </header>
            <ContentArea>{children}</ContentArea>
            <footer></footer>
        </ThemeProvider>
    );
};

export default Layout;
