// import React, { useState, useContext, useEffect } from 'react';
// import { Box, Typography, Button, Grid, Card, CardMedia, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import '../components/ArtClub.css';
// import video from '../assets/video.mp4';
// import art1 from '../assets/art1.jpeg';
// import art2 from '../assets/art2.jpeg';
// import art3 from '../assets/art3.jpeg';
// import art4 from '../assets/art4.png';
// import art5 from '../assets/art5.jpeg';
// import avatar1 from '../assets/p1.png';
// import avatar2 from '../assets/p2.jpg';
// import avatar3 from '../assets/p3.webp';
// import Header from './Header';
// import { UserContext } from '../components/UserContext';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ArtClub = () => {
//   const [joined, setJoined] = useState(false);
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     // Check local storage for join status when the component mounts
//     if (user) {
//       const joinStatus = localStorage.getItem(`joinedArtClub-${user.id}`);
//       if (joinStatus === 'true') {
//         setJoined(true);
//       }
//     }
//   }, [user]);

//   const handleJoinClick = async () => {
//     if (user) {
//       try {
//         await axios.post('http://localhost:8080/arts/join', {
//           userId: user.id,
//           userName: user.username,
//           email: user.email,
//         });
//         setJoined(true);
//         localStorage.setItem(`joinedArtClub-${user.id}`, 'true');
//         alert('Joined Arts Club');  
//       } catch (error) {
//         console.error('Error joining the club:', error);
//       }
//     } else {
//       alert('Please log in to join the club');
//     }
//   };

//   // Define an array of image paths from your local storage
//   const libraryImages = [art1, art2, art3, art4, art5];

//   // Avatar image paths
//   const avatarImages = [avatar1, avatar2, avatar3];

//   return (
//     <Box sx={{ padding: '40px', backgroundColor: '#03346E' }}>
//       <Header />
//       {/* Video Section */}
//       <Box sx={{ position: 'relative', textAlign: 'left', color: '#fff', height: '500px', overflow: 'hidden' }}>
//         <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <Box sx={{ position: 'absolute', bottom: '10%', left: '5%', color: '#E2E2B6' }}>
//           <Typography variant="h2" sx={{ marginBottom: '10px', color: '#E2E2B6' }}>
//             Art Unleashed
//           </Typography>
//           <Typography variant="h6" sx={{ marginBottom: '20px' }}>
//             Dive into a world where creativity knows no bounds!
//           </Typography>
//           <Box sx={{ display: 'flex', gap: '10px' }}>
//             <Link to = "/part">
//             <Button variant="outlined" sx={{ borderColor: '#E2E2B6', color: '#E2E2B6' }}>
//               Explore Now
//             </Button></Link>
//             <Button
//               variant="outlined"
//               onClick={handleJoinClick}
//               sx={{ borderColor: '#E2E2B6', color: '#E2E2B6', '&:hover': { borderColor: '#E2E2B6', backgroundColor: '#5A94B0' } }}
//               disabled={joined}
//             >
//               {joined ? 'Joined' : 'Join the Club'}
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       <br /><br />
//       <br />
//       {/* Library Section */}
//       <Box sx={{ marginTop: '40px' }}>
//         <Grid container spacing={2}>
//           {libraryImages.map((img, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
//               <Card>
//                 <CardMedia component="img" image={img} alt={`Library Image ${index + 1}`} />
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <br /><br /><br /><br /><br /><br />
//       {/* Statistics Section */}
//       <Box sx={{ textAlign: 'center', marginTop: '40px', color: '#E2E2B6' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={4}>
//             <Typography variant="h1">500+</Typography>
//             <Typography>Happy Members</Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h1">100+</Typography>
//             <Typography>Art Classes</Typography>
//           </Grid>
//           <Grid item xs={4}>
//             <Typography variant="h1">50+</Typography>
//             <Typography>Events Hosted</Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       <br /><br /><br /><br /><br />

//       {/* FAQ and Personal Diary Section */}
//       <Box sx={{ marginTop: '40px' }}>
//         <Typography variant="h2" sx={{ textAlign: 'center', color: '#E2E2B6', marginBottom: '20px' }}>Curious Minds Want to Know!</Typography>
//         <br /><br />
//         <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel1a-content" id="panel1a-header">
//             <Typography>What is the Arts Club about?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>The Arts Club is a community for creative minds to explore and showcase their talents in various art forms.</Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel2a-content" id="panel2a-header">
//             <Typography>How can I join the Arts Club?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>You can join the Arts Club by clicking the 'Join the Club' button above and filling out the required details.</Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel3a-content" id="panel3a-header">
//             <Typography>Are there any membership fees?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>No, joining the Arts Club is completely free!</Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel4a-content" id="panel4a-header">
//             <Typography>Can I showcase my artwork in the club?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>Absolutely! Members are encouraged to showcase their artwork and participate in club events.</Typography>
//           </AccordionDetails>
//         </Accordion>
//         <br /><br />
//         <Typography variant="h2" sx={{ textAlign: 'center', color: '#E2E2B6', marginBottom: '20px' }}>Personal Diaries</Typography>
//         <br /><br />
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: '#021526', color: '#E2E2B6', padding: '20px', height: '100%' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <Avatar src={avatar1} sx={{ width: 56, height: 56, marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="h6">Emily Wang</Typography>
//                   <Typography variant="subtitle2">3rd Year Student</Typography>
//                 </Box>
//               </Box>
//               <Typography>"Joining the Arts Club was the best decision I've made in college. The community is supportive, and the events are a blast!"</Typography>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: '#021526', color: '#E2E2B6', padding: '20px', height: '100%' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <Avatar src={avatar2} sx={{ width: 56, height: 56, marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="h6">Lucas Brown</Typography>
//                   <Typography variant="subtitle2">2nd Year Student</Typography>
//                 </Box>
//               </Box>
//               <Typography>"The Arts Club has given me a platform to showcase my paintings and meet like-minded artists. Highly recommend!"</Typography>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ backgroundColor: '#021526', color: '#E2E2B6', padding: '20px', height: '100%' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                 <Avatar src={avatar3} sx={{ width: 56, height: 56, marginRight: '10px' }} />
//                 <Box>
//                   <Typography variant="h6">Sophia Martinez</Typography>
//                   <Typography variant="subtitle2">4th Year Student</Typography>
//                 </Box>
//               </Box>
//               <Typography>"From art classes to exhibitions, the Arts Club has enriched my college experience in so many ways. I love it here!"</Typography>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default ArtClub;
import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../components/ArtClub.css';
import video from '../assets/video.mp4';
import art1 from '../assets/art1.jpeg';
import art2 from '../assets/art2.jpeg';
import art3 from '../assets/art3.jpeg';
import art4 from '../assets/art4.png';
import art5 from '../assets/art5.jpeg';
import avatar1 from '../assets/p1.png';
import avatar2 from '../assets/p2.jpg';
import avatar3 from '../assets/p3.webp';
import Header from './Header';
import { UserContext } from '../components/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArtClub = () => {
  const [joined, setJoined] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const joinStatus = localStorage.getItem(`joinedArtClub-${user.id}`);
      if (joinStatus === 'true') {
        setJoined(true);
      }
    }
  }, [user]);

  const handleJoinClick = async () => {
    if (user) {
      try {
        await axios.post('http://localhost:8080/arts/join', {
          userId: user.id,
          userName: user.username,
          email: user.email,
        });
        setJoined(true);
        localStorage.setItem(`joinedArtClub-${user.id}`, 'true');
        alert('Joined Arts Club');
      } catch (error) {
        console.error('Error joining the club:', error);
      }
    } else {
      alert('Please log in to join the club');
    }
  };
  const handleLeaveClick = async () => {
    if (user) {
      try {
        await axios.delete('http://localhost:8080/arts/leave', {
          data: {
            userId: user.id,
          },
        });
        setJoined(false);
        localStorage.setItem(`joinedArtClub-${user.id}`, 'false');
        alert('Left Arts Club');
      } catch (error) {
        console.error('Error leaving the club:', error);
      }
    } else {
      alert('Please log in to leave the club');
    }
  };
  
  const libraryImages = [art1, art2, art3, art4, art5];
  const avatarImages = [avatar1, avatar2, avatar3];

  return (
    <Box sx={{ padding: '40px', backgroundColor: '#03346E' }}>
      <Header />
      <Box sx={{ position: 'relative', textAlign: 'left', color: '#fff', height: '500px', overflow: 'hidden' }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box sx={{ position: 'absolute', bottom: '10%', left: '5%', color: '#E2E2B6' }}>
          <Typography variant="h2" sx={{ marginBottom: '10px', color: '#E2E2B6' }}>
            Art Unleashed
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Dive into a world where creativity knows no bounds!
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Link to="/part">
              <Button variant="outlined" sx={{ borderColor: '#E2E2B6', color: '#E2E2B6' }}>
                Explore Now
              </Button>
            </Link>
            {joined ? (
              <Button
                variant="outlined"
                onClick={handleLeaveClick}
                sx={{ borderColor: '#E2E2B6', color: '#E2E2B6', '&:hover': { borderColor: '#E2E2B6', backgroundColor: '#5A94B0' } }}
              >
                Leave the Club
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={handleJoinClick}
                sx={{ borderColor: '#E2E2B6', color: '#E2E2B6', '&:hover': { borderColor: '#E2E2B6', backgroundColor: '#5A94B0' } }}
              >
                Join the Club
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: '40px' }}>
        <Grid container spacing={2}>
          {libraryImages.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Card>
                <CardMedia component="img" image={img} alt={`Library Image ${index + 1}`} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '40px', color: '#E2E2B6' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h1">500+</Typography>
            <Typography>Happy Members</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h1">100+</Typography>
            <Typography>Art Classes</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h1">50+</Typography>
            <Typography>Events Hosted</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', color: '#E2E2B6', marginBottom: '20px' }}>Curious Minds Want to Know!</Typography>
        <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>What is the Arts Club about?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Arts Club is a space where creativity thrives. We offer a platform for artists to explore their passions, hone their skills, and showcase their works.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: '#021526', color: '#E2E2B6' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#E2E2B6' }} />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Who can join the Arts Club?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Anyone with a love for the arts is welcome! Whether you're a painter, sculptor, photographer, or just an enthusiast, there's a place for you here.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '40px', color: '#E2E2B6' }}>
        <Typography variant="h3">Meet Our Leaders</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {avatarImages.map((avatar, index) => (
            <Avatar key={index} src={avatar} sx={{ width: 80, height: 80 }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ArtClub;
