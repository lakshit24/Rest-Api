import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
function LeftMenu(params) {
    return (
        <ListGroup>
            <ListGroupItem action href="/home" tag="a">
                Home
            </ListGroupItem>
            <ListGroupItem action href="/add-courses" tag="a">
                Add Course
            </ListGroupItem>
            <ListGroupItem action href="/view-courses" tag="a">
                View Course
            </ListGroupItem>

        </ListGroup>
    )
}
export default LeftMenu;