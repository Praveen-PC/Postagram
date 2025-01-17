
const express = require('express');
require('dotenv').config();
const db = require('./model/db');
const multer = require('multer');
const path = require('path');
const cors=require('cors')

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET", "POST", "PUT", "DELETE"]
}))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.get('/allpost',async(req,res)=>{
    try{
        const sql="select * from posts"
        const [result]=await db.query(sql)
        res.status(200).send(result)

    }catch(error){
        res.status(400).send(error)
    }
})

app.post('/addpost', upload.single('image'), async (req, res) => {
  const { username, content } = req.body; 
  const image = req.file ? `/uploads/${req.file.filename}` : null; 
  try {
    const sql = 'INSERT INTO posts (username, content , image) VALUES (?, ?, ?)';
    await db.query(sql, [username, content,image]);
    res.status(201).send({ message: 'Post added successfully!' });
  } catch (err) {
    console.error(err);
    res.status(400).send({ error: 'Failed to add post' });
  }
});

app.put('/addlike/:id',async(req,res)=>{
  const {id}=req.params
  const {add}=req.body
  try{
    const sql='UPDATE posts SET likes=? WHERE id=?'
    await db.query(sql,[add,id])
    res.status(200).send('likes added')
  }catch(error){
    res.status(400).send(error)
  }
})

app.get('/getuserpost/:id',async(req,res)=>{
  const {id}=req.params
  try{
  const sql='SELECT * FROM posts WHERE id=?'
  const [result]=await db.query(sql,[id])
  res.status(200).send(result)
  }catch(error){
    res.status(200).send(error)
  }
})

app.put('/addcomment/:id', async (req, res) => {
  const { id } = req.params;
  const { commentData } = req.body;

  try {
    const sql = `
      UPDATE posts
      SET comments = JSON_ARRAY_APPEND(IFNULL(comments, JSON_ARRAY()), '$', ?)
      WHERE id = ?`;
    await db.query(sql, [JSON.stringify(commentData), id]);
    res.status(200).send("Comment added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
