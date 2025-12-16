import React, { use } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../QZone/QZone';
import { AuthContext } from '../../Provider/AuthProvider';

const RightAside = () => {

  const {user} = use (AuthContext)

  return (
    <div>
      {
        user ? "" : <SocialLogin></SocialLogin>
      }
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;