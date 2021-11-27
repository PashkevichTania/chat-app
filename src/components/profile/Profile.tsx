import {Button, CircularProgress, Container, Grid, TextField, Typography} from "@mui/material";
import {AvatarFullStyled, AvatarStyled, ErrorFormMessage} from "components/Styled/styledComponents";
import React from "react";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import {useFormik} from "formik";
import * as Yup from "yup";

const Profile = () => {
  const user = useSelector(userSelector);
  const formik = useFormik({
    initialValues: {
      email: user.email,
      displayName: user.displayName,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      displayName: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {

    },
  });

  return (
      <Container>
        <Typography textAlign={"center"}>Update profile info</Typography>
        <Grid container sx={{mt:4}}>
          <Grid item xs={12} md={6}>
            {user.photoURL ?
                <AvatarFullStyled size={"500px"} src={user.photoURL} alt="user avatar"/> :
                <CircularProgress />
            }
          </Grid>
          <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column"}}>
            <form onSubmit={formik.handleSubmit}>
              <Typography textAlign={"center"}>User ID: {user.uid}</Typography>
              <TextField
                  margin="dense"
                  id="Name"
                  name="Name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.displayName}
              />
              {formik.touched.displayName && formik.errors.displayName ? (
                  <ErrorFormMessage>{formik.errors.displayName}</ErrorFormMessage>
              ) : null}
              <TextField
                  margin="dense"
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                  <ErrorFormMessage>{formik.errors.email}</ErrorFormMessage>
              ) : null}
              <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button type={"submit"} sx={{mt: '15px'}}>Update</Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Profile;
