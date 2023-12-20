import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CourseModal({ handleCourse }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [price, setPrice] = React.useState();

  const [imagePreview, setImagePreview] = React.useState('');
  const [base64Image, setBase64Image] = React.useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBase64Image(reader.result.split(',')[1]); // base64 데이터 추출
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleContent = (event) => {
    setContent(event.target.value);
  }

  const handlePrice = (event) => {
    setPrice(event.target.value);
  }

  const handleSubmit = () => {
    const newCourse = {
        courseTitle: title,
        courseInfo: content,
        price: price,
        imageURL: imagePreview,
      };

      handleCourse(newCourse);
      setTitle("");
      setContent("");
      setPrice();
      setImagePreview();
      handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen} style={{"width" : "160px", "fontSize" : "20px", "border": "1px solid black", "color" : "black", "margin" : "10px"}}>코스 추가하기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            제목 : 
          </Typography>
            <input value={title} onChange={handleTitle}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            내용 : 
          </Typography>
            <input value={content} onChange={handleContent}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            가격 : 
          </Typography>
            <input value={price} onChange={handlePrice}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            이미지 : 
          </Typography>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
          <div>
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '400px', maxHeight: '400px' }} />
          </div>
          )}
          <button onClick={handleSubmit}>제출</button>
        </Box>
      </Modal>
    </div>
  );
}