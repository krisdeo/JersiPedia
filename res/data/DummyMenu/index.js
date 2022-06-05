import React from 'react';
import {   EditPasswordIcon,
    EditProfileIcon,
    KaosHistoryPemesananIcon,
    SignOutIcon,
    RightArrowIcon } from "../../assets";

export const DummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <EditProfileIcon />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <EditPasswordIcon />,
    halaman: 'ChangePassword'
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <KaosHistoryPemesananIcon />,
    halaman: 'History'
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <SignOutIcon />,
    halaman: 'Login'
  },
];