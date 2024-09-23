import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './App.css';
import Grid from '@mui/material/Grid2';
import { InternBio, ImageItems, LongItem, PersonalBio, StudentBio } from './GridItems';


export const ImageGrid = ({images, descriptions}) => {
    return (
        <Grid container spacing={4} justifyContent="center" alignItems="center">
        <>
        {images.map((image, index) => <Grid size={{ xs: 8, md: 8 }}>
                <ImageItems>
                    <img src={image} style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    {descriptions[index]}
                
                </ImageItems>
              </Grid>
            )}
        </>
      </Grid>
      )
}