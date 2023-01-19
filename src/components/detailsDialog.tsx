import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface WalletDetails {
  address: string;
  balance: number | undefined;
  chainId: number | undefined;
}
interface IProps {
  walletDetails: WalletDetails;
  disconnectEtherium: () => void;
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
}

export default function DetailsDialog({
  walletDetails,
  disconnectEtherium,
  isDialogOpen,
  handleCloseDialog,
}: IProps) {
  return (
    <>
      <Dialog
        open={isDialogOpen}
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
                {walletDetails?.address?.substring(0, 5)}....
                {walletDetails?.address?.substring(37, 50)}
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
                {walletDetails?.chainId}
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
                {walletDetails?.balance?.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            fullWidth
            autoFocus
            onClick={disconnectEtherium}
          >
            Disconnect
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
