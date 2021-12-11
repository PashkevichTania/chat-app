import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";
import {useFirebase} from "services/useFirebase";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, TextField, Typography} from "@mui/material";
import {ErrorFormMessage} from "components/Styled/styledComponents";
import React from "react";

const UpdateName = () => {
  const user = useSelector(userSelector);
  const { firebaseUpdateName } = useFirebase();

  const formik = useFormik({
    initialValues: {
      displayName: user.displayName,
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required('Required'),
    }),

    onSubmit: (values) => {
      firebaseUpdateName(values.displayName);
    },
  });

  return (
      <form onSubmit={formik.handleSubmit}>
        <Typography textAlign={"center"}>User ID: {user.uid}</Typography>
        <TextField
            margin="dense"
            id="displayName"
            name="displayName"
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
        <div style={{display: "flex", justifyContent: 'flex-end'}}>
          <Button type={"submit"} sx={{mt: '15px'}}>Update</Button>
        </div>
      </form>
  );
};

export default UpdateName;
