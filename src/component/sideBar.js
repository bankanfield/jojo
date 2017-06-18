import React, { Component } from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import { connect } from "react-redux";
import { CAction1 } from "../action/actionindex";
import { bindActionCreators } from "redux";

class SideBarr extends Component {
    render() {
        return (
            <ButtonGroup vertical>
                <Button onClick={()=>this.props.caction1(this.props.clickk)}>Create New Form</Button>
                <Button>ADD</Button>
                <Button>CANCEL</Button>
                <p>{this.props.clickk}</p>
            </ButtonGroup>
        );
    }
}

function mapStateToProps(state) {
  return {
    clickk: state.but1
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ caction1: CAction1 }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBarr);