import { getLocalStorage, setLocalStorage } from "@/Utilities";
import { LocalStorageTypes, Person } from "@/models";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
      return action.payload;
    },
    removeFavorites: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
