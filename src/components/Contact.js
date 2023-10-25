// src/components/Contact.js
import { Typography, Container, Card, CardContent, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    return (
        <Container id="contact" maxWidth="sm" style={{marginTop: '3rem'}}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <Box mt={3}>
                <Card variant="outlined" style={{ borderRadius: '7px' }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>Feel free to reach out to me through any of the methods below:</Typography>

                        <Box display="flex" alignItems="center" mt={2}>
                            <EmailIcon color="primary" style={{marginRight: '1rem'}}/>
                            <Typography variant="body1">example@email.com</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mt={2}>
                            <LinkedInIcon color="primary" style={{marginRight: '1rem'}}/>
                            <Typography variant="body1">linkedin.com/in/yourusername</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mt={2}>
                            <GitHubIcon color="primary" style={{marginRight: '1rem'}}/>
                            <Typography variant="body1">github.com/yourusername</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default Contact;
