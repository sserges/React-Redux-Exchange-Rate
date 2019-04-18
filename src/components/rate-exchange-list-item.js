import React, { Component } from "react";

export class RateExchangeListItem extends Component {
  render() {
    const { flag, name, rates } = this.props.rateExchange;
    return (
      <tr>
        <td>
          {name} <br />{" "}
          <img alt={`${name}-flag`} height="60" width="100" src={flag} />
        </td>
        <td>Graphique</td>
      </tr>
    );
  }
}

export default RateExchangeListItem;
