import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Stack } from "@mui/material";
import sample1 from "./img/sample1.svg";
import sample2 from "./img/sample2.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImgModal() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpen1 = () => setOpen1(true);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleOpen} m={2}>
          SVG img
        </Button>
        <Button variant="contained" onClick={handleOpen1}>
          JPEG img
        </Button>
      </Stack>

      {/* SVG */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        width="50%"
      >
        <Box sx={style}>
          <img src={sample1} className="App-logo" alt="sample1" />
        </Box>
      </Modal>
      {/* JPEG */}
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={sample2} className="App-logo" alt="sample2" />
        </Box>
      </Modal>
    </>
  );
}
