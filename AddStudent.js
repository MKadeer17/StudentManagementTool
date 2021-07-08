import React, { useState } from 'react';
import { CForm, CRow, CFormControl, CCol, CFormLabel, CFormSelect, CButton, CFormCheck } from '@coreui/react';
import axios from 'axios';

function AddStudent() {
    const [studentData, setStudentData] = useState( {
        firstName: '',
        lastName: '',
        grade: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        imagePath: null,
      });
      const grades = ["O", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

      const submitData = (event) => {
          event.preventDefault();
          if (!Object.values(studentData).includes('') && (studentData.phone.length <=10)) {
            axios.post('http://localhost:3007/api/insert', {
                firstName: studentData.firstName,
                lastName: studentData.lastName,
                grade: studentData.grade,
                dateOfBirth: studentData.dateOfBirth,
                gender: studentData.gender,
                email: studentData.email,
                phone: studentData.phone,
                address: studentData.address,
                imagePath: studentData.imagePath?.name,
            }).then(() => {
                alert("Data Inserted Successfully");
                setStudentData(
                    {
                        firstName: '',
                        lastName: '',
                        grade: '',
                        dateOfBirth: '',
                        gender: '',
                        email: '',
                        phone: '',
                        address: '',
                        imagePath: '',
                    })
            }).catch((err) => {
                alert(err.message);
            });

            // For Image Upload
            const data = new FormData();
            data.append('file', studentData.imagePath);
            axios.post("http://localhost:3007/api/upload", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
          }
          else {
              alert("Please Enter Information Correctly")
          }
          
          console.log(studentData);
      }
    return (
        <div className="studentAddForm">
            <h2>Student Form</h2>
            <CForm>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputFirstName3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, firstName: e.target.value})} 
                            type="text" 
                            id="inputEmail3" 
                            name="firstName" 
                            placeholder="Enter First Name"
                            value={studentData.firstName} 
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputLastName3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, lastName: e.target.value})} 
                            type="text" 
                            id="inputLast3" 
                            name="lastName" 
                            placeholder="Enter Last Name" 
                            value={studentData.lastName}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, email: e.target.value})} 
                            type="email" 
                            id="inputEmail3" 
                            name="email" 
                            placeholder="Enter Email Id" 
                            value={studentData.email}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputDropDownName3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                    <CFormSelect 
                        aria-label="Default select example"
                        onChange={(e) => setStudentData({...studentData, grade: e.target.value})} 
                    >
                        <option>Select Grade</option>
                        {
                            grades.map((grade) => (
                                <option key={grade} name="grade" value={grade}>{grade}</option>
                            ))
                        }
                    </CFormSelect>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputDOB3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, dateOfBirth: e.target.value})} 
                            type="date" 
                            id="inputDOB3" 
                            name="dateOfBirth" 
                            placeholder="Enter Date Of Birth" 
                            value={studentData.dateOfBirth}
                        />
                    </CCol>
                </CRow>
                <fieldset className="row mb-3">
                <span className="col-sm-4 pt-0" />
                    <CCol sm="1">
                    <legend className="col-form-label col-sm-6 pt-0">Gender</legend>
                        <CFormCheck
                            onChange={(e) => setStudentData({...studentData, gender: e.target.value})}                         
                            className="ms-5"
                            type="radio"
                            name="gender"
                            id="gender1"
                            value="Male"
                            label="Male"
                        />
                        <CFormCheck
                            className="ms-5"
                            onChange={(e) => setStudentData({...studentData, gender: e.target.value})}
                            type="radio"
                            name="gender"
                            id="gender2"
                            value="Female"
                            label="Female"
                        />
                        <CFormCheck
                            className="ms-5"
                            onChange={(e) => setStudentData({...studentData, gender: e.target.value})}
                            type="radio"
                            name="gender"
                            id="gender3"
                            value="Other"
                            label="Other"
                        />
                    </CCol>
                </fieldset>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPhone3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, phone: e.target.value})}
                            type="number" 
                            id="inputPhone3" 
                            name="phone" 
                            placeholder="Enter Phone Number"
                            value={studentData.phone} 
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputAddress3" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, address: e.target.value})}
                            component="textarea" 
                            name="address" 
                            aria-label="With textarea" 
                            placeholder="Enter Address"
                            style={{ height: '100px', resize:'none' }}
                            value={studentData.address}
                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="formImage" className="col-sm-4 col-form-label" />
                    <CCol sm="4">
                        <CFormControl 
                            onChange={(e) => setStudentData({...studentData, imagePath: e.target.files[0]})}
                            type="file" 
                            id="formImage" 
                            name="imagePath" 
                        />
                    </CCol>
                </CRow>
                <CRow className="mt-2">
                    <span className="col-sm-4"></span>
                    <CCol style={{ flex: '0.05'}}>
                        <CButton onClick={submitData} color="success" type="submit">Add</CButton>
                    </CCol>
                    <span className="col-sm-2"></span>
                    <CCol style={{ flex: '0.5'}}>
                        <a className="btn btn-primary" href="/">HomePage</a>
                    </CCol>
                </CRow>
            </CForm>
        </div>
    )
}

export default AddStudent
