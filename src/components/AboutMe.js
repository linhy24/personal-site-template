import { Typography, Container, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import HobbiesIcon from '@mui/icons-material/SportsEsports';

function AboutMe() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
                <Typography variant="h4" gutterBottom >
                    About Me
                </Typography>
                <Card elevation={3} style={{ borderRadius: '7px' }}>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Hello! I'm [Your Name]. I specialize in creating...
                        </Typography>

                        <Typography variant="h6" gutterBottom>Quick Facts:</Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <WebIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Web Developer specializing in React & NodeJS." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <HobbiesIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Avid gamer and tech enthusiast." />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Container>
        </motion.div>
    );
}

export default AboutMe;
