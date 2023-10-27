import { Typography, Container, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import HobbiesIcon from "@mui/icons-material/SportsEsports";

function AboutMe() {
    const theme = useTheme();

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
            >
                <Container maxWidth="sm" style={{ marginTop: "3rem", color: theme.palette.text.primary }}>
                    <Typography variant="h4" gutterBottom style={{ color: theme.palette.text.primary }}>
                        About Me
                    </Typography>

                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card elevation={3} style={{ borderRadius: '7px', backgroundColor: theme.palette.background.paper }}>
                            <CardContent>
                                <Typography variant="body1" paragraph>
                                    Hello! I'm [Your Name]. I specialize in creating...
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Quick Facts:
                                </Typography>
                                <motion.div initial="hidden" animate="show">
                                    <List>
                                        {[
                                            { icon: <WebIcon style={{ color: theme.palette.text.primary }} />, text: "Web Developer specializing in React & NodeJS." },
                                            { icon: <HobbiesIcon style={{ color: theme.palette.text.primary }} />, text: "Avid gamer and tech enthusiast." },
                                        ].map((item, index) => (
                                            <motion.div variants={listItemVariants} transition={{ delay: index * 0.1 }} key={index}>
                                                <ListItem>
                                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                                    <ListItemText primary={item.text} style={{ color: theme.palette.text.primary }} />
                                                </ListItem>
                                            </motion.div>
                                        ))}
                                    </List>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}

export default AboutMe;
