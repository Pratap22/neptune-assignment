import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function DetailsDialog() {
  const [openDialog, setOpenDialog] = React.useState<boolean>(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ background: "#333" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="body1">Wallet details</Typography>
          <Typography sx={{ cursor: "pointer" }}>X</Typography>
        </DialogTitle>
        <DialogContent sx={{ minWidth: "400px" }}>
          <Box sx={{ px: 3 }}>
            <Box
              sx={{
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "secondary.light",
              }}
            >
              <Typography sx={{ opacity: 0.7 }} variant="body2">
                KEY
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  opacity: 0.7,
                }}
              >
                VALUE
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "secondary.light",
              }}
            >
              <Typography sx={{ textAlign: "start", display: "flex" }}>
                Account
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Address
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "secondary.light",
              }}
            >
              <Typography sx={{ textAlign: "start", display: "flex" }}>
                Chain ID
              </Typography>
              <Typography
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                ChainId
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "secondary.light",
              }}
            >
              <Typography sx={{ textAlign: "start", display: "flex" }}>
                Balance
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Balance
              </Typography>
            </Box>
            <Typography
              sx={{ textAlign: "center", opacity: 0.5 }}
              variant="body2"
            >
              Wallet Details
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" fullWidth autoFocus>
            Disconnect
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
