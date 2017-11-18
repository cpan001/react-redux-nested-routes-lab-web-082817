import React from "react";
import { connect } from "react-redux";

const PetsShow = ({ pet }) => {
  console.log("in show");
  return (
    <div className="col-md-8">
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const petId = ownProps.match.params.petId;
  const pet = state.pets.find(pet => pet.id == petId);
  if (pet) {
    return { pet };
  } else {
    return { pet: {} };
  }
};

export default connect(mapStateToProps)(PetsShow);
