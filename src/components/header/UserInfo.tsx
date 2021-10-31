import React from 'react';
import {useSelector} from "react-redux";
import {userSelector} from "redux/selectors";

const UserInfo = () => {

  const user = useSelector(userSelector)

  return (
      <div>
        {user.displayName}
      </div>
  );
};

export default UserInfo;