import React, { useEffect } from "react";
import { People } from "@/data";
import { addPeople } from "@/redux/states";
import { PeopleTable } from "./components";
import { useDispatch } from "react-redux";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
  // Hooks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  });

  return <PeopleTable />;
};

export default Home;
