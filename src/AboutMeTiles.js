import './App.css';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { InternBio, Item, LongItem, PersonalBio, StudentBio } from './GridItems';


export const AboutMeTiles = () => {
  const [bio, setBio] = useState()

      return (
        <Grid container spacing={6} justifyContent="center" alignItems="center">
        {!bio && 
        <>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(InternBio)}>
            <a className='tile-label'>
                <a className='smaller-label'>
                About Me:
                </a>
                <br/>
                The Software Engineering Intern
              </a>
            </Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(StudentBio)}>
            <a className='tile-label'>
                <a className='smaller-label'>
                About Me:
                </a>
                <br/>
                The Student
              </a>
            </Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(PersonalBio)}>
              <a className='tile-label'>
                <a className='smaller-label'>
                About Me:
                </a>
                <br/>
                The Person
              </a>
            </Item>
          </Grid>
        </>
        }
        {
          bio && 
          <Grid size={{ xs: 8, md: 8 }}>
          <LongItem onClick={()=>setBio(undefined)}>{bio}</LongItem>
        </Grid>
        }
        
      </Grid>
      )
}