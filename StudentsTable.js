import React from 'react';
import {CButton} from '@coreui/react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentsTable({studentList}) {
    
    return (
        <div className="studentTable">
            <h2>Student List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr className="table-info">
                        <th scope="col">Image</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                {
                    studentList?.map(({id, firstname, lastname, grade, date_of_birth, image_name, address, gender, phone, email}) => (
                        <tr key={id}>
                            <td className="studentTable__image">
                                <Link to={`/details/${id}`}><img key={id} src={`http://localhost:3007/${image_name}`} alt={image_name} /></Link>
                            </td>
                            <td>{firstname}</td>
                            <td>{lastname}</td>
                            <td>{grade}</td>
                            <td>{new Date(date_of_birth).toDateString()}</td>
                            <td>{gender}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td className="studentTable__address">{address}</td>
                            <td><Link className="btn btn-info" to={`/update/${id}`}>Edit</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Link className="btn btn-success studentTable__add" to="/add">Add Student</Link>
        </div>
    )
}

export default StudentsTable
