import { Container, Typography } from '@mui/material';

function Footer({ isDarkMode }) {
    
    const textColor = isDarkMode ? '#e0e0e0' : '#333';  // Setting text color based on the theme mode

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
            color: textColor,  // Use textColor here
            // Minimalistic translucent effect
            backgroundColor: isDarkMode ? 'rgba(40, 40, 40, 0.7)' : 'rgba(240, 240, 240, 0.7)',
        }}>
            <Container>
                <Typography variant="body1" align="center" style={{ color: textColor }}>&copy; 2023 Your Name</Typography>
            </Container>
        </footer>
    );
}

export default Footer;
