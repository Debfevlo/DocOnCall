import { Box, Typography, Button, Grid } from '@mui/material';
import docAbout from '../assets/Images/about-doc.png'
import { FaCheckCircle } from "react-icons/fa";

const qualities = [
    'Expertise',
    'Compassion',
    'Professionalism',
    'Exceptional Results',
]

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

        {/* left Side (Image) */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={docAbout}
            alt="Healthcare Professionals"
            sx={{
              width: { xs: '100%', md: '90%' },
              maxHeight: 396 ,
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        </Grid>


        {/* Right Side (Text) */}
        <Grid item xs={12} md={6} order={{ xs: 2, mb: 1 }}>
          <Typography variant="caption" sx={{mb: 1}} color='primary'>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Dedicated to Your Health, Committed to Your Recovery
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
            On our healthcare platform, we offer professional medical care and support <br/> with just a few clicks. Access professional services tailored to your needs today! <br/>Get timely diagnoses, expert advice, and continuous care—all in one place.
          </Typography>

            {
                qualities.map((item,index)=>(
                    <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2, // optional: margin between each row
          }}
        >
          <FaCheckCircle className="text-[#00695f]" />
          <Typography>{item}</Typography>
        </Box>
                ))
            }
            
        
          <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{
            padding: '12px 32px',
            borderRadius: '50px',
            mt:3
          }}
          >
            Learn More
          </Button>
        </Grid>

        
      </Grid>
    </Box>
  );
}
