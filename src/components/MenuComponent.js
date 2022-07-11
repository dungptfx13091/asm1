import React, { Component } from "react";
import { Media } from "reactstrap";
import "../shared/staffs";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <Media>
          <Media heading>Ho va ten</Media>
          <Media heading>Ho va ten: {staff.name}</Media>
          <p>Ngay sinh: {staff.boD}</p>
          <p>Ngay vao cong ty: {staff.startDate}</p>
          <p>Phong ban: {staff.department.name}</p>
          <p>So ngay nghi con lai: {staff.annualLeave}</p>
          <p>So ngay da lam them: {staff.overTime}</p>
        </Media>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-lg-4 col-sm-6 mt-5 border rounded">
          <Media
            // onClick={() => this.onStaffSelect(staff)}
            onClick={console.log("check click")}
            tag="li"
            className="list-unstyled"
          >
            {/* <Media left middle>
              <Media object src={staffs.image} alt={staffs.name} />
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
