import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
    image:string,
    ImgTitle:string,
    name:string,
    description:string,
    onClick: () => any
}

export default function WorksCard({image,ImgTitle,name,description,onClick}:CardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className=''>
    <CardMedia
      sx={{ height: 140 }}
      image={image}
      title={ImgTitle}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" >
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={onClick} size="small">Visit</Button>
      <Button onClick={onClick} size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}
