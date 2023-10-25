// src/components/Projects.js
import { Typography, Container, Card, CardContent, Grid } from '@mui/material';

function Projects() {
    return (
        <Container id="projects" maxWidth="md" style={{marginTop: '3rem'}}>
            <Typography variant="h4" gutterBottom>My Projects</Typography>
            <Grid container spacing={4}>  {/* Adjust spacing here if necessary */}
                <Grid item xs={12} sm={6}>
                    <Card style={{ borderRadius: '7px', padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h6">Project 1</Typography>
                            <Typography variant="body2">Description for project 1...</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card style={{ borderRadius: '7px', padding: '20px' }}>
                        <CardContent>
                            <Typography variant="h6">Project 2</Typography>
                            <Typography variant="body2">Description for project 2...</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Projects;
