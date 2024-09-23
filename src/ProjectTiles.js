import './App.css';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { InternBio, Item, LongItem, PersonalBio, StitcherProject, StudentBio, VeryBigItem } from './GridItems';
import project_list from './imgs/stitcher/project_list.png';
import project_display from './imgs/stitcher/project_display.png'
import counter from './imgs/stitcher/counter.png';
import website from './imgs/stitcher/website.png';
import { ImageGrid } from './ImageGrid';


export const ProjectTiles = () => {
  const [showSoftware, setShowSoftware] = useState(false);
      return (
        <Grid container spacing={6} justifyContent="center" alignItems="center">
        <>
          {!showSoftware && <Grid size={{ xs: 6, md: 6 }}>
            <Item onClick={()=>setShowSoftware(!showSoftware)}>
            <a className='tile-label'>
                Software Project
              </a>
              
            </Item>
          </Grid>}
          {
            showSoftware && <Grid size={{ xs: 8, md: 8 }}>
            <VeryBigItem onClick={()=>setShowSoftware(!showSoftware)}>
            <a className='tile-label'>
                {StitcherProject}
              </a>
              <br/>

              <ImageGrid images={[project_list, project_display, counter, website]} descriptions={['The user"s list of current projects', 'The user"s individual project overview', 'The stitch counter can be fullscreen', 'The user can have their notes and counters open overtop a pattern website']}/>
              
            </VeryBigItem>
          </Grid>
          }
          <Grid size={{ xs: 6, md: 6 }}>
            <Item>
            <a className='tile-label'>
                "Soft-Wear" Projects
              </a>
            </Item>
          </Grid>
        </>
        
      </Grid>
      )
}