import { Container, Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const Questions = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 'bold', mt: 5, pt: 5 }} variant="h4">Frequently Asked Questions</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img src="https://image.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Accordion sx={{ background: '#f2f2f2', my: 2, py: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>How to get technical support from Taarzan?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    If you have any questions, please send a message to our email: support@taarzan.com or leave a message on our fanpage or submit a question on our forum.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ background: '#f2f2f2', my: 2, py: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Where do you get your vehicles from?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    All our vehicles are UK Main dealer supplied.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ background: '#f2f2f2', my: 2, py: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How long will it take to get a new car?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Prior to taking your order we will check the availability with the manufacturer. If they can locate a vehicle in dealer stock it could be 7 days but a factory order to your specification will be considerably longer.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ background: '#f2f2f2', my: 2, py: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Do I have to collect the vehicle or is it delivered?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    All the vehicles we suply on the website come with free driven delivery to your home address by the supplying dealer. There is a surcharge for vehicles delivered to Scotland which we can get a price for when you are ready to order.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ background: '#f2f2f2', my: 2, py: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>What happens once I have placed my order?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Once you have placed your order we will send it over to the manufacturer and e mail you a copy for you to check and confirm all is correct. The manufacturer will process the order then send confirmation of the estimated arrival or build date for the vehicle. Then we will process your deposit and e mail a receipt for the deposit paid.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Questions;