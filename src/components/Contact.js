import { Typography, Container, Card, CardContent, Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    const theme = useTheme();

    return (
        <Container id="contact" maxWidth="sm" style={{ marginTop: '3rem' }}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <Box mt={3}>
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card variant="outlined" style={{ borderRadius: '7px', backgroundColor: theme.palette.background.paper }}>
                                <CardContent>
                                    <Typography variant="subtitle1" style={{ color: theme.palette.text.primary }} gutterBottom>
                                        Feel free to reach out to me through any of the methods below:
                                    </Typography>

                                    <Box display="flex" alignItems="center" mt={2}>
                                        <EmailIcon style={{ marginRight: '1rem', color: theme.palette.text.primary }} />
                                        <Typography variant="body1">example@email.com</Typography>
                                    </Box>

                                    <Box display="flex" alignItems="center" mt={2}>
                                        <LinkedInIcon style={{ marginRight: '1rem', color: theme.palette.text.primary }} />
                                        <Typography variant="body1">linkedin.com/in/yourusername</Typography>
                                    </Box>

                                    <Box display="flex" alignItems="center" mt={2}>
                                        <GitHubIcon style={{ marginRight: '1rem', color: theme.palette.text.primary }} />
                                        <Typography variant="body1">github.com/yourusername</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Container>
    );
}

export default Contact;
