import React, { Component } from "react";
import { Media } from "reactstrap";
import "../shared/staffs";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-4 col-sm-6 mt-5 border rounded">
          <Media tag="li" className="list-unstyled">
            {/* <Media left middle>
              <Media object src={staff.image} alt={staff.name} />
            </Media> */}
            <Media body className="ml-5">
              <Media heading>{staff.name}</Media>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
