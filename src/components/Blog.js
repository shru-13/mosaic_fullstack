// import React, { useState } from 'react';
// import { Button, TextField, Container, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import axios from 'axios';

// const BlogContainer = styled(Container)(({ theme }) => ({
//   backgroundColor: '#162D40',
//   color: '#E2E2B6',
//   borderRadius: '10px',
//   padding: '20px',
//   marginTop: '20px',
//   maxWidth: '800px',
// }));

// const PostButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#6EACDA',
//   color: '#021526',
//   marginTop: '20px',
//   '&:hover': {
//     backgroundColor: '#5D9EC3',
//   },
// }));

// const Blog = () => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handlePost = async () => {
//     if (fullname && email && title && description) {
//       const formData = new FormData();
//       formData.append('fullname', fullname);
//       formData.append('email', email);
//       formData.append('title', title);
//       formData.append('description', description);

//       try {
//         await axios.post('http://localhost:8080/api/blogs', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setFullname('');
//         setEmail('');
//         setTitle('');
//         setDescription('');
//       } catch (error) {
//         console.error('Error creating blog post:', error);
//       }
//     }
//   };

//   return (
//     <BlogContainer>
//       <Typography variant="h4" gutterBottom>
//         Create a New Blog Post
//       </Typography>
//       <TextField
//         label="Fullname"
//         variant="outlined"
//         fullWidth
//         value={fullname}
//         onChange={(e) => setFullname(e.target.value)}
//         sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
//       />
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
//       />
//       <TextField
//         label="Title"
//         variant="outlined"
//         fullWidth
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
//       />
//       <TextField
//         label="Description"
//         variant="outlined"
//         fullWidth
//         multiline
//         rows={4}
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         sx={{ marginBottom: '20px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
//       />
//       <PostButton onClick={handlePost}>Post</PostButton>
//     </BlogContainer>
//   );
// };

// export default Blog;


// import React, { useState } from 'react';
// import { Button, TextField, Container, Typography, AppBar, Toolbar } from '@mui/material';
// import { styled } from '@mui/system';
// import axios from 'axios';
// import Header from './Header';

// const BlogContainer = styled(Container)(({ theme }) => ({
//   backgroundColor: 'rgba(22, 45, 64, 0.8)',
//   color: '#E2E2B6',
//   borderRadius: '10px',
//   padding: '20px',
//   marginTop: '20px',
//   maxWidth: '800px',
//   backdropFilter: 'blur(10px)',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
// }));

// const PostButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#6EACDA',
//   color: '#021526',
//   marginTop: '20px',
//   '&:hover': {
//     backgroundColor: '#5D9EC3',
//   },
//   borderRadius: '20px',
//   padding: '10px 20px',
//   fontWeight: 'bold',
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   marginBottom: '20px',
//   backgroundColor: '#FFFFFF',
//   borderRadius: '5px',
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '10px',
//   },
// }));

// const HeaderAppBar = styled(AppBar)(({ theme }) => ({
//   width: '100%',
//   backgroundColor: '#021526',
//   backdropFilter: 'blur(10px)',
//   boxShadow: 'none',
// }));

// const Blog = () => {
//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handlePost = async () => {
//     if (fullname && email && title && description) {
//       const formData = new FormData();
//       formData.append('fullname', fullname);
//       formData.append('email', email);
//       formData.append('title', title);
//       formData.append('description', description);

//       try {
//         await axios.post('http://localhost:8080/api/blogs', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setFullname('');
//         setEmail('');
//         setTitle('');
//         setDescription('');
//       } catch (error) {
//         console.error('Error creating blog post:', error);
//       }
//     }
//   };

//   return (
//     <>
//       <Header/>
//       <BlogContainer>
//         <Typography variant="h4" gutterBottom>
//           Create a New Blog Post
//         </Typography>
//         <StyledTextField
//           label="Fullname"
//           variant="outlined"
//           fullWidth
//           value={fullname}
//           onChange={(e) => setFullname(e.target.value)}
//         />
//         <StyledTextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <StyledTextField
//           label="Title"
//           variant="outlined"
//           fullWidth
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <StyledTextField
//           label="Description"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={4}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <PostButton onClick={handlePost}>Post</PostButton>
//       </BlogContainer>
//     </>
//   );
// };

// export default Blog;
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import img from '../assets/bimg.jpg'; // Correct image import
import Header from './Header';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#03346E',
  padding: '20px',
}));

const FormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#D1E9F6',
  borderRadius: '20px',
  padding: '40px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  maxWidth: '1000px',
  display: 'flex',
  alignItems: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '20px',
  backgroundColor: '#F0F0F0',
  borderRadius: '10px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#7265E3',
  color: '#FFFFFF',
  padding: '10px 20px',
  borderRadius: '30px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#5D52D3',
  },
}));

const Blog = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = async () => {
    if (fullname && email && title && description) {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('title', title);
      formData.append('description', description);

      try {
        const response = await axios.post('http://localhost:8080/api/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Blog post created:', response.data);
        setFullname('');
        setEmail('');
        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Error creating blog post:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('All fields are required');
    }
  };

  return (
    <>
      <Header />
      <PageContainer>
        <FormContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={img} // Correctly using the imported image
                alt="Blog"
                sx={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Create a New Blog Post
              </Typography>
              <StyledTextField
                placeholder="Fullname"
                variant="outlined"
                fullWidth
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <StyledTextField
                placeholder="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StyledTextField
                placeholder="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <StyledTextField
                placeholder="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <PostButton onClick={handlePost}>Post</PostButton>
            </Grid>
          </Grid>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default Blog;
