import React, { Fragment } from 'react';

const Education = () => {
  return (
    <Fragment>
      <h2 className="my-2"> Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Education;
