import {useFirebase} from "services/useFirebase";
import React, {useState} from "react";
import {IImage} from "interfaces";
import {Button, Grid} from "@mui/material";
import Dropzone from "components/dropzone/dropzone";
import {AvatarStyled} from "components/Styled/styledComponents";

const UpdateAvatar = () => {
  const { firebaseUpdateAvatar } = useFirebase();
  const [img, setImg] = useState<IImage | null>(null);

  const clickHandler = () => {
    if (img){
      firebaseUpdateAvatar(img.file);
    }
  }


  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Dropzone setImg={setImg}/>
          </Grid>
          <Grid item xs={12} md={4}>
            {img? <AvatarStyled src={img.binaryStr} alt="avatar" />: null}
          </Grid>
        </Grid>
        <div style={{display: "flex", justifyContent: 'flex-start'}}>
          <Button onClick={clickHandler} sx={{mt: '15px'}}>Update</Button>
        </div>
      </div>
  );
};

export default UpdateAvatar;
