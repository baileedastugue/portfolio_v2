import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import DownloadResumeButton from '../../Buttons/DownloadResumeButton';
import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  title: {
    marginBottom: '1vh',
  },
  lastAccordion: {
    marginBottom: '2vh',
  },
});

const Resume = (props) => {
  const classes = useStyles();
  return (
    <Box id={props.id} style={{ paddingTop: '120px', marginTop: '-120px' }}>
      <Typography variant='h2' className={classes.title}>
        Resume
      </Typography>
      <Container>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='frontendDeveloper-content'
            id='frontendDeveloper-header'
          >
            <Typography>Kendra Scott - Front End Developer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Developed 19 comprehensive homepage refreshes with 106 additional
              banners, landing pages, and category headers in response to
              emerging business needs while collaborating with web
              merchandising, creative, and copy teams to produce branded,
              responsive web content.
              <br />
              <br />
              Owned the delivery of 24 engraving products on the site while
              working closely with photography, distribution center, and
              merchandising teams to ensure a high-quality frontend rendering
              that matched the physical engraving result.
              <br />
              <br />
              Launched 9 custom Color Bar products and 8 Color Bar stones
              aligning with retail launches.
              <br />
              <br />
              Built a custom Image Uploader solution using React, Node.js,
              MongoDB, and Express.js for the eCommerce department that enabled
              the team to upload, store, and access images and videos hosted on
              Cloudinary without providing access to the shared business
              account.
              <br />
              <br />
              Coded transactional marketing emails using Apache FreeMarker,
              HTML, and CSS in a departmental endeavor resulting in streamlined
              email delivery to customers.
              <br />
              <br />
              Developed reusable, flexible, and ADA-compliant category header
              templates for the eCommerce team that decreased product listing
              page load times, decreased cumulative layout shift, and improved
              core web vitals. Ensured ADA-compliance on all homepage updates
              resulting in zero homepage compliance violations while consulting
              on accessibility improvements and requirements across the site.
              <br />
              <br />
              Trained web merchandising department on custom integrations and
              authored technical runbooks that were understood and used by a
              non-technical audience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='privateTutor-content'
            id='privateTutor-header'
          >
            <Typography>
              Trilogy Education - Full Stack Bootcamp Tutor
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Taught Trilogy bootcamp students a wide range of topics depending on
            their needs, focusing on a foundational understanding of topics and
            gradually building in complexity, resulting in greater comprehension
            and more prepared graduates.
            <br />
            <br />
            Maintained a roster of students, organized a complex scheduling
            system, ensured student’s individual needs were met, & communicated
            consistently and clearly to each student.
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.lastAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='education-content'
            id='education-header'
          >
            <Typography>Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            University of Texas at Austin, Austin TX <br />
            Full-stack Coding Bootcamp Certificate <br />
            Summer 2020 <br />
            <br />
            University of Texas at Austin, Austin TX <br />
            Bachelor of Science and Arts, Honors | Major: Biology with a
            Pre-Health Certificate <br />
            GPA: 3.92
            <br /> Spring 2020 <br />
            <br />
            University of Oklahoma, Norman OK
            <br />
            Bachelor of Business Administration | Major: Marketing
            <br />
            GPA: 3.91
            <br /> Summer 2016
          </AccordionDetails>
        </Accordion>
      </Container>
      <DownloadResumeButton />
    </Box>
  );
};

export default Resume;
