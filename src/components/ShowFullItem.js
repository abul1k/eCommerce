import React, { Component } from "react";

export class ShowFullItem extends Component {
  render() {
    return (
      <div
        className="full-item"
        onClick={() => this.props.onShowItem(this.props.item)}
      >
        <div className="">
          <div className="item-img">
            <img
              src={"./images/" + this.props.item.img}
              alt={this.props.item.title}
            />
          </div>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
