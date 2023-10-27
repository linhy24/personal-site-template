import { Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={listItemVariants}
            >
                <Container id="projects" maxWidth="md" style={{ marginTop: '3rem' }}>
                    <Typography variant="h4" gutterBottom>My Projects</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card style={{ borderRadius: '7px', padding: '20px' }}>
                                    <CardContent>
                                        <Typography variant="h6">Project 1</Typography>
                                        <Typography variant="body2">Description for project 1...</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card style={{ borderRadius: '7px', padding: '20px' }}>
                                    <CardContent>
                                        <Typography variant="h6">Project 2</Typography>
                                        <Typography variant="body2">Description for project 2...</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}

export default Projects;
