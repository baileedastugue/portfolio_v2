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
    marginBottom: '2vh',
  },
  lastAccordion: {
    marginBottom: '4vh',
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
            aria-controls='leadFEDeveloper-content'
            id='leadFEDeveloper-header'
          >
            <Typography>Kendra Scott - Lead Front End Developer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Coded transactional marketing emails using Java, Apache FreeMarker
              template engine, HTML, and CSS in a cross-functional endeavor
              resulting in streamlined email delivery to customers.
              <br />
              <br />
              Contributed to Salesforce SiteGenesis code base to improve
              eCommerce site using CI/CD methodologies and collaborating with
              overseas development team.
              <br />
              <br />
              Developed an Image Uploader Tool for eCommerce that enabled the
              team to upload, store, and access images and videos hosted on
              Cloudinary without providing them full access to the shared
              business account. This ensured optimized asset URLs were utilized
              on the site which improved performance and prevented impact to
              other assets hosted within the account.
              <br />
              <br />
              Trained web merchandising team on custom integrations and authored
              technical runbooks and extensive process documentation that was
              understood and used by a non-technical audience.
              <br />
              <br />
              Acted as interim project manager for Color Bar and Engraving
              initiatives, ensuring legality, on-time product launches, and
              successful release of a new reference implementation.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='juniorFEDeveloper-content'
            id='juniorFEDeveloper-header'
          >
            <Typography>Kendra Scott - Junior Front End Developer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Developed 19 full homepage refreshes and 105 additional banners,
            landing pages, and category headers while collaborating with web
            merchandising, email marketing, creative, and copy teams, complying
            with ADA standards for all code, and responding to emerging business
            needs.
            <br />
            <br />
            Ensured ADA-compliance on all homepage updates resulting in zero
            homepage compliance violations and consulted on accessibility
            improvements and requirements across the site.
            <br />
            <br />
            Coded reusable, flexible, and ADA-compliant category header
            templates for the eCommerce team that decreased product listing page
            load times, decreased cumulative layout shift, and improved core web
            vitals.
            <br />
            <br />
            Delivered 24 engraving products on schedule and added a new font
            while working with third-party vendors and improving customer
            experience by ensuring the front-end rendering matches the physical
            engraving. Launched 9 custom Color Bar products and 8 Color Bar
            stones on schedule.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='privateTutor-content'
            id='privateTutor-header'
          >
            <Typography>
              Trilogy Education - Full Stack Private Tutor
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Taught current Trilogy bootcamp students a wide range of topics
            depending on their needs, focusing on a foundational understanding
            of topics and gradually building in complexity, resulting in greater
            comprehension and more prepared graduates.
            <br />
            <br />
            Maintained a roster of students, organized a complex scheduling
            system in order to ensure student’s personal needs are met, &
            communicated consistently and clearly to each student
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
