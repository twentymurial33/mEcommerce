import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function About() {
  return (
    <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="green iguana"
        />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          About
        </Typography>
      </CardContent>
    </Card>
  );
}