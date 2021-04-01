import React from "react";
import { Dialog, DialogTitle, Button, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const Types = ({ showDialog, setDialog, setAmbulanceType }) => {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setDialog(false)}
      className="ambulance-type-dialog"
    >
      <DialogTitle>
        <IconButton
          onClick={() => setDialog(false)}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div className="ambulance-type-container">
        <iframe
          width="760"
          height="405"
          src="https://www.youtube.com/embed/hizBdM1Ob68"
          title="CPR Video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Dialog>
  );
};

export default Types;
