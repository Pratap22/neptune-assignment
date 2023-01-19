import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DetailsDialog, { WalletDetails } from "./detailsDialog";
import { useWeb3Api } from "../provider/web3Provider";

interface IProps {
  open: boolean;
  setOpen: any;
  setAddress: (address: string) => void;
  setBalance: (balnce: number | undefined) => void;
  setChainId: (chainId: number | undefined) => void;
  walletDetails: WalletDetails;
}

declare let window: any;

export default function AlertDialog({
  open,
  setOpen,
  walletDetails,
  setAddress,
  setBalance,
  setChainId,
}: IProps) {
  const web3: any = useWeb3Api();
  const [isData, setIsData] = React.useState<boolean>(false);
  const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);

  console.log(open, walletDetails);

  const handleClose = () => {
    setOpen(false);
    setDialogOpen(false)
  };

  React.useEffect(() => {
    if (walletDetails.address) {
      setIsData(true);
      setDialogOpen(true);
    }
  }, [open]);

  const getEthereum = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      await web3.eth
        .getAccounts()
        .then((accounts: any) => {
          setAddress(accounts[0]);
          return accounts[0];
        })
        .then((data: any) => {
          web3.eth.getBalance(data).then((value: number) => {
            const credit = web3.utils.fromWei(value, "ether");
            setBalance(parseInt(credit));
          });
        });
      await web3.eth.getChainId().then((id: number) => {
        setChainId(id);
      });
      handleClose();
    } else window.location.reload();
  };

  const disconnectEtherium = async () => {
    setAddress("");
    setBalance(undefined);
    setChainId(undefined);
    setIsData(false);
  };

  if (isData)
    return (
      <DetailsDialog
        walletDetails={walletDetails}
        disconnectEtherium={disconnectEtherium}
        isDialogOpen={isDialogOpen}
        handleCloseDialog={() => setDialogOpen(false)}
      />
    );
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
            onClick={getEthereum}
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
