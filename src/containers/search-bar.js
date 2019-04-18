import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCountries, fetchRateExchange } from "../actions/index";

const lodash = require("lodash");

export class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCountries();
  }

  renderSelectCountries() {
    return (
      <select
        className="form-control search_bar"
        onChange={e => this.onChangeCountry(e)}
      >
        {this.props.countries.map(c => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    );
  }

  onChangeCountry = e => {
    const countryCode = e.target.value;
    const country = lodash.find(this.props.countries, { code: countryCode });
    this.props.fetchRateExchange(country);
    // console.log("on change", country);
  };

  render() {
    return <form className="form-group">{this.renderSelectCountries()}</form>;
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries
  };
};

const mapDispatchToProps = {
  fetchCountries,
  fetchRateExchange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
