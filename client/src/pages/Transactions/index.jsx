import React,{useState} from 'react'
import { Box } from '@mui/material';
import { useGetTransactionsQuery } from 'store/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';

const Transactions = () => {
  const {data , isLoading} = useGetTransactionsQuery();
  console.log(data);
  
    
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Transactions" subtitle="List of Transactions made..." />
        {
          data || !isLoading ? (
          <Box mt="30px"
            height="75vh"
          >
            <DataGrid
              loading={isLoading || !data}
              getRowId={(row) => row._id}
              rows={data || []}
              columns={columns}
            />   
          </Box>):(<>Loading.....</>)
        }
    </Box>
  )
}

export default Transactions;
