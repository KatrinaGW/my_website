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
  //TODO: Reduce to one state variable
  const [showSingle, setShowSingle] = useState(false);
  const [chosenTile, setChosenTile] = useState(Number);
  const [bio, setBio] = useState()

  useEffect(() => {
    if(chosenTile == INTERN){
      setBio(InternBio);
    }else if(chosenTile==STUDENT){
      setBio(StudentBio);
    }else if(chosenTile==PERSONAL){
      setBio(PersonalBio);
    }else{
      setBio(undefined);
    }

  }, [chosenTile]);


  const tileClicked = (option) => {
    setShowSingle(!showSingle);
    setChosenTile(option);
  }

      return (
        <Grid container spacing={6} justifyContent="center" alignItems="center">
        {!showSingle && 
        <>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>tileClicked(INTERN)}>About Me: The Software Engineering Intern</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>tileClicked(STUDENT)}>About Me: The Student</Item>
          </Grid>
          <Grid size={{ xs: 4, md: 4 }}>
            <Item onClick={()=>tileClicked(PERSONAL)}>About Me: The Person</Item>
          </Grid>
        </>
        }
        {
          showSingle && 
          <Grid size={{ xs: 8, md: 8 }}>
          <LongItem onClick={()=>tileClicked(NONE)}>{bio}</LongItem>
        </Grid>
        }
        
      </Grid>
      )
}