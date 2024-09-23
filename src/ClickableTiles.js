import './App.css';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import { InternBio, Item, LongItem, PersonalBio, StudentBio } from './GridItems';

//TODO: Turn into enum
const INTERN = 0;
const STUDENT = 1;
const PERSONAL = 2;
const NONE = 3;

export const ClickableTiles = () => {
  const [bio, setBio] = useState()

      return (
        <Grid container spacing={6} justifyContent="center" alignItems="center">
        {!bio && 
        <>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(InternBio)}>About Me: The Software Engineering Intern</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(StudentBio)}>About Me: The Student</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>setBio(PersonalBio)}>About Me: The Person</Item>
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