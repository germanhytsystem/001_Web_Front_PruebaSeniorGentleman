import { getLocalStorage, setLocalStorage } from "@/Utilities";
import { LocalStorageTypes, Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      //   localStorage.setItem("people", JSON.stringify(state));
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;