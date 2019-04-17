import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCountries } from "../actions/index";

export class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectCountries() {
    return (
      <select>
        <option />
      </select>
    );
  }

  render() {
    return <form>{this.renderSelectCountries()}</form>;
  }
}

const mapDispatchToProps = {
  fetchCountries
};

export default connect(
  undefined,
  mapDispatchToProps
)(SearchBar);
