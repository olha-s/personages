import React, { useEffect } from "react";
import './App.scss';
import AppRoutes from "./routes/AppRoutes";
import { connect } from "react-redux";
import {
  loadCards
} from "./store/actions";

const App = ({ loadCards }) => {
  useEffect(() => {
    const socket = new WebSocket("ws://testapi.marit.expert:3004");
    loadCards(socket);

    return () => socket.close();
  }, [loadCards]);


  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (socket) => dispatch(loadCards(socket))
  };
};
export default connect(null, mapDispatchToProps)(App);

