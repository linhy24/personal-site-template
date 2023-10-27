import { Container, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

function Footer({ isDarkMode }) {

    const theme = useTheme();

    return (
        <footer style={{
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            backdropFilter: 'blur(15px)', // Subtle blur
            padding: '15px',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.text.primary,  // Use textColor here
            // Minimalistic translucent effect
            backgroundColor: theme.palette.header.main
        }}>
            <Container>
                <Typography variant="body1" align="center" style={{ color: theme.palette.text.primary }}>&copy; 2023 Your Name</Typography>
            </Container>
        </footer>
    );
}

export default Footer;
