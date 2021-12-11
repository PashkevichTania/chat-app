import {useMemo, useState} from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { PasswordIconButtonStyled } from "components/Styled/styledComponents";

export const usePasswordDisplayer = (): [boolean, JSX.Element] => {
  const [passwVisible, setPasswVisible] = useState<boolean>(false);

  const onPasswordVisibilityChange = (): void => {
    setPasswVisible((value) => !value);
  };

  const MemoizedPasswordDisplayer = useMemo(() => (
      <PasswordIconButtonStyled size="small" onClick={onPasswordVisibilityChange}>
        {passwVisible
            ? <VisibilityIcon fontSize="small" />
            : <VisibilityOffIcon fontSize="small" />}
      </PasswordIconButtonStyled>
  ), [passwVisible]);

  return [passwVisible, MemoizedPasswordDisplayer];
};