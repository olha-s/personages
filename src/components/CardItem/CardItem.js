import React, { useState } from "react";
import PropTypes from "prop-types";
import FormChangeName from "../Form/FormChangeName";
import './CardItem.scss';

export const CardItem = ({ id, name, race, src, handleDeleteItem }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const handleChangeName = () => {
    setFormIsOpen(true);

  };
  const handleCloseForm = (isShow) => {
    setFormIsOpen(isShow);

  };

  const delItem = () => {
    handleDeleteItem(id);
  };

  return (
    <div className="card__wrapper">
        <div className="card__img-wrapper">
        <img className="card__img" src={src} alt="personage"/>
        </div>
        <p>{name}</p>
      <div className="card__btn-wrapper">
        <button className="card__btn" onClick={handleChangeName}>Change name</button>
        <button className="card__btn" onClick={delItem}>Delete</button>
      </div>
        {formIsOpen && <FormChangeName handleCloseForm={handleCloseForm} name={name} id={id} race={race}/>}
    </div>
  );
};

CardItem.defaultProps = {
  src: ""
};
CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  src: PropTypes.string
};

export default CardItem;

