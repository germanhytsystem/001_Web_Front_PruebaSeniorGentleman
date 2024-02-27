"use client";
import { Person } from "@/models";
import { addFavorites } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export type PeopleTableProps = {
  // types...
};

const PeopleTable: React.FC<PeopleTableProps> = () => {
  // Hook
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritesPeople = useSelector((store: AppStore) => store.favorites);

  const [selectePeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();

  const existFindPerson = (person: Person) =>
    !!favoritesPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    favoritesPeople.filter((p) => p.id != person.id);

  const handleChange = (person: Person) => {
    const filterPeople = existFindPerson(person)
      ? filterPerson(person)
      : [...selectePeople, person];

    dispatch(addFavorites(filterPeople));
    setSelectedPeople(filterPeople);
  };

  useEffect(() => {
    setSelectedPeople(favoritesPeople);
  }, [favoritesPeople]);

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
            <Checkbox
              size="small"
              checked={existFindPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
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
      rows={statePeople}
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

export default PeopleTable;
