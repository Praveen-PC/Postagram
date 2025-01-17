


import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [image, setImage] = useState(null); 
  const [content, setContent] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const rawToken = sessionStorage.getItem('token'); 
      const tokendata = JSON.parse(rawToken); 
      if (!tokendata.username) {
        alert('Username is missing in the token!');
        return;
      }
      const formData = new FormData();
      formData.append('username', tokendata.username); 
      formData.append('image', image);
      formData.append('content', content); 
      await axios.post('http://localhost:8000/addpost', formData, { headers: {'Content-Type': 'multipart/form-data',  } });
  
      alert('Post added successfully!');
      reset(); 
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to add post!');
    }
  };
  
  const reset=()=>{
    setImage(null)
    setContent(' ')
  }
  return (
    <div className="container">
      <div className="mt-4 border rounded p-4 bg-light">
        <h4 className="fw-bold">Add New Post</h4>
        <div className="mt-4">
          <form onSubmit={handlePost}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Add Image</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Add Content</label>
              <input
                type="text"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)} 
              />
            </div>
            <button className="btn btn-primary">Add Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
