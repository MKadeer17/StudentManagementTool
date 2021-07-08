import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CFormControl, CFormFloating, CForm, CFormLabel, CButton, CFormSelect, CFormCheck, CCol} from '@coreui/react'

function Details() {
    const { id } = useParams();
    const [studentDetails, setStudentDetails] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        date_of_birth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        image_name: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:3007/api/get/${id}`)
        .then((res) => setStudentDetails(res.data[0]))
        .catch((err) => console.log(err.message));
    }, [id]);


    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    return (
        <div className="studentEditForm">
            <h2>Student Details</h2>
            <CForm className="studentEditForm__data">
                <img className="formUpdateImage" src={`http://localhost:3007/${studentDetails?.image_name}`} alt={studentDetails?.image_name} />
                <Link className="btn btn-primary btnUploadHome" to="/">HomePage</Link>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentDetails.firstname}
                        type="text"
                        id="firstname"
                        placeholder="Enter FirstName"
                        name="firstname"
                        disabled
                    />
                    <CFormLabel htmlFor="firstname">FirstName</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentDetails.lastname}
                        type="text"
                        id="lastname"
                        placeholder="Enter LastName"
                        name="lastname"
                        disabled
                    />
                    <CFormLabel htmlFor="lastname">LastName</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentDetails.email}
                        type="email"
                        id="email"
                        placeholder="Enter Email Id"
                        name="email"
                        disabled
                    />
                    <CFormLabel htmlFor="email">Email</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                    <CFormSelect disabled id="grade" aria-label="Select Grade" defaultValue={studentDetails?.grade}>
                        <option name="grade" value={studentDetails?.grade}>{studentDetails?.grade}</option>
                    </CFormSelect>
                    <CFormLabel htmlFor="grade">Grade</CFormLabel>
                </CFormFloating>
                <fieldset className="row mb-3">
                <span className="col-sm-0 pt-0" />
                    <CCol sm="1">
                    <legend className="col-form-label col-sm-2 pt-0"><strong>Gender</strong></legend>
                        <CFormCheck
                            defaultChecked
                            className="ms-5"
                            type="radio"
                            name="gender"
                            value={studentDetails.gender}
                            label="Male"
                            disabled
                        />
                    </CCol>
                </fieldset>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentDetails.phone}
                        type="number"
                        id="phone"
                        placeholder="Enter Phone Number"
                        name="phone"
                        disabled
                    />
                    <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={formatDate(new Date(studentDetails?.date_of_birth))}
                        type="date"
                        id="dateOfBirth"
                        placeholder="Enter Phone Number"
                        name="dateOfBirth"
                        disabled
                    />
                    <CFormLabel htmlFor="dateOfBirth">Date Of Birth</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                    <CFormControl
                        disabled
                        value={studentDetails?.address}
                        component="textarea"
                        placeholder="Enter a Address"
                        id="address"
                        name="address"
                        style={{ height: '100px', resize: 'none' }}
                    ></CFormControl>
                    <CFormLabel htmlFor="address">Address</CFormLabel>
                </CFormFloating>
            </CForm>
        </div>
    )
}

export default Details
