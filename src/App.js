import { LinearProgress } from '@mui/material';
import './App.css';
import { AboutMeTiles } from './AboutMeTiles';
import { GithubLink, LinkedInLink } from './GridItems';
import waves from './imgs/waves.png';
import { ProjectTiles } from './ProjectTiles';

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${waves})` }}>
        <div className='intro'>
          <header className="App-header">
            <p className='header-name'>
              Hi! I'm Katrina!
            </p>
            <p className='App-subheader'>
              AKA: A "Soft-Wear" Engineering Student
            </p>
          </header>
          <div className='long-bar'></div>
          <div className='pitch-section'>
            <body>
              Here's the quick and dirty About Me:
              </body>
              <br/>
              <body>
              I chose a Software Engineering degree because I love crafting solutions that seamlessly fit into users' lives as they tackle everyday challenges. With 20 months of internships in QA, AI, and Full Stack Development, I’ve learned from talented professionals and built essential skills to pursue this passion. My startup experience has equipped me to tackle challenges head-on and adapt quickly. I also enjoy collaborating with teams and take on leadership roles when the opportunity presents itself. As I prepare for my final internship, I’m excited to dive in—whether that means learning something new or deepening my existing skills. I’m ready to make a meaningful impact!              </body>
          </div>
          <div className='pitch-section'>
            <br/>
            <br/>
            <br/>
            <AboutMeTiles/>
            <ProjectTiles/>
          </div>
        </div>
    </div>
  );
}

export default App;
