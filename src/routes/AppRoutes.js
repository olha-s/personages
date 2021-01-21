import React from 'react';
import ListItems from "../components/ListItems/ListItems";
import { Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
     <Route exact path='*' component={ListItems}/>
  );
};

export default AppRoutes;
