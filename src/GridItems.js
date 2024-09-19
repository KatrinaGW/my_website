import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './App.css';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    marginBottom:'30px',
    height: '30vh', // Adjust height as needed
    border: '2px solid #ab1207', // Change color and width as needed
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Custom black shadow
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  export const LongItem = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    marginBottom:'30px',
    height: 'fit-content', // Adjust height as needed
    border: '2px solid #ab1207', // Change color and width as needed
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Custom black shadow
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export const InternBio = 
<body>
    Completed Work Terms:
    <br/>
        3D Modelling / Machine Learning Intern at Deep Surface AI (January - August 2024)
        Performance and Scalability Intern at Tecsys (May-August 2023)
        Software Developer Intern at Neo Financial (September-December 2022)
        QA Intern at Neo Financial (May-August 2022)
</body>

export const StudentBio = 
<body>
  Anticipated 2026 Spring Grad from the University of Alberta's BSc in Computer Engineering Co-op - Software Option program

  Classes have covered engineering management principles, operating systems, software automated testing, software design, hardware programming, systems and signals, circuits

  Graduate of the Alberta Late French Immersion program with a French Immersion Certificate with honour

  Currently working as a part time research assistant at the ASGAARD lab to develop an automatic Unity bug injector
</body>

export const PersonalBio = 
<body>
    You may have noticed my use of "soft wear" developer throughout this site. That's because if you can't find me writing software, I'm usually working on a crochet project. 
    I've been crocheting since I was 16 when I was working at a historical village. I enjoy making everything from sweaters to stuffies and always love to show off my creations. 
    In fact, my main personal programming project is an Android App which helps crafters to keep all their notes, patterns, and counters on one screen without having to 
    balance five different pieces of paper, plus their project, on their app. You can check it out here, but please keep in mind that it is a current work in progress.
</body>