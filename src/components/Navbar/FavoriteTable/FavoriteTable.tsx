"use client";
import { Person } from "@/models";
import { removeFavorites } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

export type FavoriteTableProps = {
  // types...
};

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
  // Hook
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const dispatch = useDispatch();

  const handleClick = (person: Person) => {
    dispatch(removeFavorites(person));
  };

  const columns = [
    {
      field: "actions",
      headerName: "",
      type: "actions",
      sorteable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            // <Button
            //   className="w-50"
            //   variant="contained"
            //   onClick={() => handleClick(params.row)}
            // >
            //   Open Favorites
            // </Button>
            <IconButton
              className=""
              size="small"
              onClick={() => handleClick(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Leve of Happines",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={stateFavorites}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      // pagination
      // pageSizeOptions={[5, 10, 25]}
      // autoPageSize
      // pageSizeOptions={[5, 10, 25]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 5, page: 0 },
        },
      }}
      getRowId={(row) => row.id}
    />
  );
};

export default FavoriteTable;
