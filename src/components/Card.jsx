import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://neetwork.com/wp-content/uploads/2019/10/caracteristicas.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Servicio Destacado
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Ofrecemos soluciones personalizadas para tu negocio. ¡Descubre más ahora!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
