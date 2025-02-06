import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function MaterialUI() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <Card sx={{ maxWidth: 800 }}>
        <Box sx={{ display: 'flex' }}>
          <CardMedia
            sx={{ 
              width: '33%',
              backgroundColor: '#6b7280' // Gray color as placeholder
            }}
            component="div"
            height="300"
          />
          <CardContent sx={{ width: '66%' }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Box>
  );
}

export default MaterialUI; 