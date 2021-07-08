import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { CFormControl, CFormFloating, CForm, CFormLabel, CButton, CFormSelect, CFormCheck, CCol, CModal, 
    CModalHeader, CModalTitle, CModalBody, CModalFooter} from '@coreui/react'

function UpdateStudent() {
    const { id } = useParams();
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const grades = ["O", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"];
    const [studentNewData, setStudentNewData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        date_of_birth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        image_name: '',
        image_path: null
      });

    useEffect(() => {
        axios.get(`http://localhost:3007/api/get/${id}`)
        .then((res) => setStudentNewData(res.data[0]))
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

    const onUpdateData = (event) => {
        event.preventDefault();
        let checkEdit = prompt("Are you sure you want Update Data: Yes / No");
        if ((checkEdit.toUpperCase() === "YES") && (!Object.values(studentNewData).includes(''))) {
            axios.put('http://localhost:3007/api/updateDetails', {
                firstName: studentNewData.firstname,
                lastName: studentNewData.lastname,
                grade: studentNewData.grade,
                dateOfBirth: studentNewData.date_of_birth,
                gender: studentNewData.gender,
                email: studentNewData.email,
                phone: studentNewData.phone,
                address: studentNewData.address,
                imagePath: studentNewData.image_name?.name,
                id: id
            })
            .then((res) => alert("Details Updated Successfully"))
            .catch((err) => console.log(err.message))

             // For Image Upload
             const data = new FormData();
             data.append('file', studentNewData.image_path);
             axios.post("http://localhost:3007/api/upload", data, { // receive two parameter endpoint url ,form data 
             })
             .then(res => { // then print response status
                 console.log(res.statusText)
             })
        }
        else {
            alert("Details Not Updated");
        }
    }

    console.log(studentNewData);

    // For Deactive
    const onDeactiveOrActive = () => {
        axios.post(`http://localhost:3007/api/deactiveStudent`, {
            id: id
        })
        .then((res) => history.push('/'))
        .catch((err) => console.log(err.message))
    }

    return (
        <div className="studentEditForm">
            <h2>Update Student</h2>
            <CButton color="warning" onClick={() => setModal(true)}>Deactivate/Active</CButton>
            <img className="formUpdateImage" src={`http://localhost:3007/${studentNewData?.image_name}`} alt={studentNewData?.image_name} />
            <CFormFloating>
                <CFormControl
                    onChange={(e) => setStudentNewData({...studentNewData, image_path: e.target.files[0], image_name: e.target.files[0].name})}
                    type="file"
                    id="imagePath"
                />
                <CFormLabel htmlFor="imagePath" />
            </CFormFloating>
            <CForm className="studentEditForm__data">
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentNewData.firstname}
                        type="text"
                        id="firstname"
                        placeholder="Enter FirstName"
                        name="firstname"
                        onChange={(e) => setStudentNewData({...studentNewData, firstname: e.target.value})}
                    />
                    <CFormLabel htmlFor="firstname">FirstName</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentNewData.lastname}
                        type="text"
                        id="lastname"
                        placeholder="Enter LastName"
                        name="lastname"
                        onChange={(e) => setStudentNewData({...studentNewData, lastname: e.target.value})}
                    />
                    <CFormLabel htmlFor="lastname">LastName</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentNewData.email}
                        type="email"
                        id="email"
                        placeholder="Enter Email Id"
                        name="email"
                        onChange={(e) => setStudentNewData({...studentNewData, email: e.target.value})}
                    />
                    <CFormLabel htmlFor="email">Email</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                    <CFormSelect onChange={(e) => setStudentNewData({...studentNewData, grade: e.target.value})} id="grade" aria-label="Select Grade">
                        <option>Select Grade</option>
                            {
                                grades.map((grade) => (
                                    <option key={grade} name="grade" value={grade} selected={studentNewData?.grade === grade}>{grade}</option>
                                ))
                            }
                    </CFormSelect>
                    <CFormLabel htmlFor="grade">Select Grade</CFormLabel>
                </CFormFloating>
                <fieldset className="row mb-3">
                <span className="col-sm-0 pt-0" />
                    <CCol sm="1">
                    <legend className="col-form-label col-sm-2 pt-0"><strong>Gender</strong></legend>
                        <CFormCheck
                            onChange={(e) => setStudentNewData({...studentNewData, gender: e.target.value})}
                            checked={studentNewData.gender === "Male"}
                            className="ms-5"
                            type="radio"
                            name="gender"
                            value="Male"
                            label="Male"
                        />
                        <CFormCheck
                            onChange={(e) => setStudentNewData({...studentNewData, gender: e.target.value})}
                            checked={studentNewData.gender === "Female"}
                            className="ms-5"
                            type="radio"
                            name="gender"
                            value="Female"
                            label="Female"
                        />
                        <CFormCheck
                            className="ms-5"
                            onChange={(e) => setStudentNewData({...studentNewData, gender: e.target.value})}
                            checked={studentNewData.gender === "Other"}
                            type="radio"
                            name="gender"
                            value="Other"
                            label="Other"
                        />
                    </CCol>
                </fieldset>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={studentNewData.phone}
                        onChange={(e) => setStudentNewData({...studentNewData, phone: e.target.value})}
                        type="number"
                        id="phone"
                        placeholder="Enter Phone Number"
                        name="phone"
                    />
                    <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormControl
                        value={formatDate(new Date(studentNewData?.date_of_birth))}
                        onChange={(e) => setStudentNewData({...studentNewData, date_of_birth: e.target.value})}
                        type="date"
                        id="dateOfBirth"
                        placeholder="Enter Phone Number"
                        name="dateOfBirth"
                    />
                    <CFormLabel htmlFor="dateOfBirth">Date Of Birth</CFormLabel>
                </CFormFloating>
                <CFormFloating>
                    <CFormControl
                        onChange={(e) => setStudentNewData({...studentNewData, address: e.target.value})}
                        value={studentNewData?.address}
                        component="textarea"
                        placeholder="Enter a Address"
                        id="address"
                        name="address"
                        style={{ height: '100px', resize: 'none' }}
                    ></CFormControl>
                    <CFormLabel htmlFor="address">Address</CFormLabel>
                </CFormFloating>
                <CButton onClick={onUpdateData} color="success">Update</CButton>
                <a className="btn btn-primary btnUploadHome" href="/">HomePage</a>
            </CForm>

            <CModal
                visible={modal}
                onDismiss={() => setModal(false)}
                >
                <CModalHeader>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Modal body text goes here.</CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setModal(false)}>Close</CButton>
                    <CButton color="primary" onClick={onDeactiveOrActive}>Save changes</CButton>
                </CModalFooter>
            </CModal>
        </div>
    )
}

export default UpdateStudent
