import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { ClickableTiles } from './ClickableTiles';

function App() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: '#fff',
  //   ...theme.typography.body2,
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   marginBottom:'30px',
  //   height: '30vh', // Adjust height as needed
  //   border: '2px solid #ab1207', // Change color and width as needed
  //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Custom black shadow
  //   ...theme.applyStyles('dark', {
  //     backgroundColor: '#1A2027',
  //   }),
  // }));

  return (
    <div className="App">
      <div className='intro'>
        <header className="App-header">
          <p className='header-name'>
            Hi! I'm Katrina!
          </p>
          <p className='App-subheader'>
            AKA: UAlberta Computer/Software Engineering Student, class of 2026. Currently seeking May-December 2025 Co-Op placements worldwide
          </p>
        </header>
        <div className='pitch-section'>
          <body>
            You're probably going through a lot of applications today, so here's my 30 second pitch:
            </body>
            <br/>
            <body>
          </body>
        </div>
        <div className='pitch-section'>
          <body>
            And here's my longer pitch:
          </body>
          <body>
          With a combined 20 months of experience in everything from QA to AI to Full Stack Development at early-stage start-ups to publicly traded companies I've become pretty good at not just hitting the ground running, but doing so in unknown and uncertain territories with limited tools and small teams. Basically, I love a challenge, and especially the ones which produce a meaningful and impactful product. 
          </body>
          <br/>
          <br/>
          <br/>
          <ClickableTiles/>
        </div>
      </div>
    </div>
  );
}

export default App;
