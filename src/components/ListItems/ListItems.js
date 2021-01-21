import React, { useState } from "react";
import CardItem from "../CardItem/CardItem";
import PropTypes from "prop-types";
import './ListItems.scss'
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import FormAddItem from "../Form/FormAddItem";
import {
  deleteItem
} from "../../store/actions";


const ListItems = ({ items, race, isLoading, images, deleteItem }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const handleAddItem = () => {
    setFormIsOpen(true);

  };
  const handleCloseForm = (isShow) => {
    setFormIsOpen(isShow);
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  const cards = race.map((elem, index) => (
    <div className="list-items__items" key={index}>
      <h3 className="list-items__title">{elem}</h3>
      {items.filter(el => el.race === elem).map(el => (
        <CardItem
          card={el}
          key={el.id}
          id={el.id}
          name={el.name}
          race={el.race}
          src={(images.filter(img => img.pers === el.name).map(el => el.path)).toString()}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
      <button className="list-items__btn" onClick={handleAddItem}>+</button>
    </div>
  ));

  return (
    <div className="list-items__wrapper">
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          {cards}
          {formIsOpen && <FormAddItem handleCloseForm={handleCloseForm}/>}
        </>
      )}
    </div>
  );
};


ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  race: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired
};

const mapStoreToProps = ({ items, race, isLoading, images }) => {
  return {
    items,
    race,
    isLoading,
    images
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ListItems);
