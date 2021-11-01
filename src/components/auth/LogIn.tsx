import React, {useState} from 'react';
import {Button, Checkbox, Container, FormControlLabel, TextField, Typography} from "@mui/material";
import {ErrorFormMessage} from "components/Styled/styledComponents";
import {useFormik} from "formik";
import * as Yup from "yup";
import {firebaseSingIn} from "services/firebase";

const LogIn = () => {

  const [checked, setChecked] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('userEmail') || '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      if (checked) {
        window.localStorage.setItem('userEmail', values.email)
      }
      firebaseSingIn(values.email, values.password);
    },
  });


  return (
      <Container>
        <Typography variant="h5" component="h3" sx={{ml: '1rem'}}>Log in</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
              margin="dense"
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
                  name="remember"
                  onChange={(event) => setChecked(event.target.checked)}
                  value="remember"
              />}
              label="Remember me"
          />
          <Button type={"submit"}>Log in</Button>
        </form>
      </Container>
  );
};

export default LogIn;