import {Button, TextField, Typography} from "@mui/material";
import {ErrorFormMessage} from "components/Styled/styledComponents";
import React from "react";
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import {useFirebase} from "services/useFirebase";
import {useFormik} from "formik";
import * as Yup from "yup";

const UpdateEmailAndPassword = () => {
  const user = useSelector(userSelector);
  const { firebaseUpdateEmailAndPassword } = useFirebase();

  const formik = useFormik({
    initialValues: {
      email: user.email,
      password: '',
      newPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      newPassword: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.'),
    }),

    onSubmit: (values) => {
      firebaseUpdateEmailAndPassword(values.email, values.password, values.newPassword)
    },
  });


  return (
      <form onSubmit={formik.handleSubmit}>
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
            label="Current Password"
            type="password"
            fullWidth
            variant="standard"
            autoComplete='current-password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
            <ErrorFormMessage>{formik.errors.password}</ErrorFormMessage>
        ) : null}
        <TextField
            margin="dense"
            id="newPassword"
            name="newPassword"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
            autoComplete='current-password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
        />
        {formik.touched.password && formik.errors.password ? (
            <ErrorFormMessage>{formik.errors.newPassword}</ErrorFormMessage>
        ) : null}
        <div style={{display: "flex", justifyContent: 'flex-end'}}>
          <Button type={"submit"} sx={{mt: '15px'}}>Update</Button>
        </div>
      </form>
  );
};

export default UpdateEmailAndPassword;
