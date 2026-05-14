
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('Portfolio Backend Running');
});

app.get('/api/projects', (req,res)=>{
  res.json([
    {
      title:'Hotel Room Booking System',
      tech:'React.js, Spring Boot, MySQL'
    },
    {
      title:'Tourist Safety Application',
      tech:'React Native, Express.js'
    }
  ]);
});

app.post('/api/contact',(req,res)=>{
  res.json({message:'Message received successfully'});
});

app.listen(5000, ()=>{
  console.log('Server running on port 5000');
});
