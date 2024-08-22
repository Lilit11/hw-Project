import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { addComment, getPostById } from '../helpers/api';
import { IPost, PartialPost } from '../helpers/types';
import { BASE } from '../helpers/default';



interface IProps{
  open:boolean
  post:number
  onClose: () => void
}
export  function Preview({open, onClose,post}:IProps) {

  const [currentPost, setCurrentPost]= useState<PartialPost|null>(null)
  const [comment, setComment]= useState<string>("")
  useEffect(()=>{
    getPostById(post)
    .then(response=>{
     
      setCurrentPost({
        ...response.payload as PartialPost,
        // comments:currentPost?.comments ? [...currentPost?.comments,  (response.payload as PartialPost)?.comments] :[(response.payload as PartialPost)?.comments]
      })
    })
  },[post])


  
  

  
  const handleCommentAdd =()=>{
    addComment({text:comment}, post)
    .then(response=>{
      setComment('')
    
      
    })
  
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
<Box className ="modal-container">
        <Box component="img" src={BASE + currentPost?.picture} alt="Post image" className='modal-image ' />

        <Box className ="modal-details">

          <Typography variant="h6">
            {currentPost?.likes?.length} likes,  {currentPost?.comments?.length}  comments
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            likes:
          </Typography>
          {currentPost?.likes?.map((user) => (
            <Box key={user.id} display="flex" alignItems="center" mb={1}>
              <Avatar src={BASE+ user.picture} sx={{ mr: 1 }} />
              <Typography variant="body2">{user.name}</Typography>
            </Box>
          ))}
          <Typography variant="subtitle1" gutterBottom>
            comments:
          </Typography>
          {currentPost?.comments?.map((comment, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body2">
                <strong>{comment.user?.name} says:</strong>  <br/>{comment.content}
                {/* i should add name */}
              </Typography>
            </Box>
          ))}

          <TextField
            variant="outlined"
            placeholder="what you think?"
            fullWidth
            multiline
            rows={2}
            sx={{ mt: 'auto' }}
            onChange={(e)=>setComment(e.target.value)}
            value={comment}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleCommentAdd}>
            Post Comment
          </Button>
        </Box>
      </Box>

      </Modal>
    </div>
  );
}
