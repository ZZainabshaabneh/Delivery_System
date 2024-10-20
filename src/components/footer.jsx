import { Typography, Container, Box, Paper, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "../App.css";
export const Foot = () => {
  return (
    <Paper
      elevation={3}
      style={{ backgroundColor: "#333", padding: "10px", color: "#fff" }}
     
    >
      <Container  >
        <br/>
        <Typography variant="body2" align="center" position={"relative"}>
          © 2024 Advanced Delivery System. All Rights Reserved
        </Typography>
        <Box textAlign="center" marginTop="10px">
          <IconButton href="https://www.facebook.com/" color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://www.snapchat.com/" color="inherit">
            <InsertPhotoIcon />
          </IconButton>
        </Box>
      </Container>
    </Paper>
  );
};
