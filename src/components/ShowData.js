import React from "react";
import "../components/ShowData.css";

const ShowData = (props) => {
  console.log(props);
  return (
    <div className="tableData">
      <table>
        <tbody>
          <tr key={props.key}>
            <td>{props.id}</td>
            <td>{props.jobTitle}</td>
            <td>{props.emailAddress}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
