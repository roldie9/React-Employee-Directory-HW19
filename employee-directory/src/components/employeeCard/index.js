import React from "react";
import "./style.css";

function employeeCard (props) {
    return (
        <tr>
            <td>
                <img src={props.picture} alt="pic"></img>
            </td>
            <td>
                {props.firstName}
            </td>
            <td>
                {props.lastName}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.country}
            </td>
            <td>
                {props.state}
            </td>
        </tr>
    );
}

export default employeeCard;