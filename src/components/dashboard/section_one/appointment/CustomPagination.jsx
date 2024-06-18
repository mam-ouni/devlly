import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { colors } from '@/styles/colors';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    border: `1px solid ${colors.gray_con}`, // Change border color
    color: colors.gray_con, // Change text color
    borderRadius : '10px',
    width : "30px",
    height : "30px"
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: theme.palette.primary.main, // Change background color of selected page
    color: theme.palette.common.white, // Change text color of selected page
    border : 'none',
  },
  '& .MuiPaginationItem-ellipsis': {
    border: 'none', // Remove border from ellipsis
    color: colors.gray_con, // Change color of ellipsis
  },
  '& .MuiPaginationItem-previousNext': {
    border: 'none', // Remove border from previous/next buttons
    color: colors.gray_con, // Change color of previous/next buttons
  }
}));

export default function Page({count,page,handleChange}) {
  
  return (
    <div>
      <CustomPagination count={count} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>
    </div>
  );
}
