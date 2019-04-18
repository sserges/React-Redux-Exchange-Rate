import React, { Component } from "react";
import { connect } from "react-redux";

import RateExchangeListItem from "../components/rate-exchange-list-item";

export class RateExchangeList extends Component {
  render() {
    // console.log(this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Pays</th>
            <th className="col-md-6">Valeur de la monnaie par rapport au $</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rateExchangeList.map((r, index) => (
            <RateExchangeListItem key={r.code + index} rateExchange={r} />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    rateExchangeList: state.rateExchangeReducer.rateExchangeList
  };
};

export default connect(
  mapStateToProps,
  undefined
)(RateExchangeList);
