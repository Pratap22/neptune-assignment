import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DetailsDialog from "./detailsDialog";

interface IProps {
  open: boolean;
  setOpen: any;
}

export default function AlertDialog({ open, setOpen }: IProps) {

  const [isData, setIsData] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  if (isData) return <DetailsDialog />;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ background: "#333" }}
      >
        <DialogTitle id="alert-dialog-title">{"Wallet details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              "Wallet is not connected. Please Click below 'Connect' button below to proceed"
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="success"
            variant="contained"
          >
            Connect
          </Button>
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
