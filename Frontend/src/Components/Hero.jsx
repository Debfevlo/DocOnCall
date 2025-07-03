import { Box, Typography, Button, Grid } from '@mui/material';
import heroimage from '../assets/Images/heroImage.png'; 

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        direction={{ xs: 'column', md: 'row' }}
      >
        {/* Left Side (Text) */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 500, mb: 1}} color='primary'>
            Welcome to DocOnCall
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Your Health, Our Priority.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
            On our healthcare platform, we offer professional medical care and support <br/> with just a few clicks. Access professional services tailored to your needs today! <br/>Get timely diagnoses, expert advice, and continuous care—all in one place.
          </Typography>
          <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{
            padding: '12px 32px',
            borderRadius: '50px'
          }}
          >
            Get Appointment
          </Button>
        </Grid>

        {/* Right Side (Image) */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={heroimage}
            alt="Healthcare Professionals"
            sx={{
              width: { xs: '100%', md: '90%' },
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
