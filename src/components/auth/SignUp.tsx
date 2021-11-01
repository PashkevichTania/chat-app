import React, {useState} from 'react';
import {Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography} from "@mui/material";
import {AvatarStyled, ErrorFormMessage} from "components/Styled/styledComponents";
import {useFormik} from "formik";
import * as Yup from "yup";
import {firebaseSingUp} from "services/firebase";
import Dropzone from "components/dropzone/dropzone";
import {IImage} from "interfaces";

const SignUp = () => {


  const [checked, setChecked] = useState(false);
  const [img, setImg] = useState<IImage | null>(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      password: Yup.string()
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .required('Required'),
    }),

    onSubmit: (values) => {
      console.log(img)
      firebaseSingUp(values.firstName, values.lastName, values.email, values.password, img?.file);
      if (checked) {
        window.localStorage.setItem('userEmail', values.email)
      }
    },
  });


  return (
      <Container>
        <Typography variant="h5" component="h3" sx={{ml: '1rem'}}>Sign up</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
              margin="dense"
              id="firstName"
              name="firstName"
              label="First name"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorFormMessage>{formik.errors.firstName}</ErrorFormMessage>
          ) : null}
          <TextField
              margin="dense"
              id="lastName"
              name="lastName"
              label="Last name"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
              <ErrorFormMessage>{formik.errors.lastName}</ErrorFormMessage>
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
          <TextField
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
              <ErrorFormMessage>{formik.errors.password}</ErrorFormMessage>
          ) : null}
          <FormControlLabel
              control={<Checkbox
                  color="primary"
                  name="remember"
                  onChange={(event) => setChecked(event.target.checked)}
                  value="remember"
              />}
              label="Remember me"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Dropzone setImg={setImg}/>
            </Grid>
            <Grid item xs={12} md={4}>
              {img? <AvatarStyled src={img.binaryStr} alt="avatar" />: null}
            </Grid>
          </Grid>
          <Button type={"submit"}>Sign up</Button>
        </form>
      </Container>
  );
};

export default SignUp;