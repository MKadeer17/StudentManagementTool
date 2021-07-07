// Importing express, mysql
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');
const { multer, storage, upload } = require('./imageStorage');

// Initializing Express
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Displaying Image
app.use(express.static('images'));

// Upload Image Api
app.post('/api/upload',function(req, res) {
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })
});

// get Particular data from database based on student
app.get("/api/get/:id", (req, res) => {
    const sqlReadForOneStudent = "Select * From student_management_tool Where id = ?";
    db.query(sqlReadForOneStudent, [req.params.id], (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    });
});

// get all data from database
app.get("/api/get", (req, res) => {
    const sqlRead = "Select * From student_management_tool Where status = 'true'";
    db.query(sqlRead, (err, data) => {
        if (err) {
            console.log(err.sqlMessage);
        }
        res.send(data);
    });
});

app.post("/api/insert", (req, res) => {
    const sqlInsert = `Insert Into student_management_tool (firstname, lastname, grade, date_of_birth, gender, email, phone, address, image_name)
                        Values (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const grade = req.body.grade;
    const dateOfBirth = req.body.dateOfBirth;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const imagePath = req.body.imagePath;

    db.query(sqlInsert, [firstName, lastName, grade, dateOfBirth, gender, email, phone, address, imagePath], (err, data) => {
        if (err) {
            console.log(err.sqlMessage);
        }
        console.log(data);
    })
    res.send("STD Tool Insert")
});

app.put('/api/updateDetails', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const grade = req.body.grade;
    const dateOfBirth = req.body.dateOfBirth;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const imagePath = req.body.imagePath;
    const id = req.body.id;
    
    const sqlUpdate = `Update student_management_tool Set firstname = ?, lastname = ?, grade = ?, date_of_birth = ?, gender = ?, email = ?, phone = ?, address = ?, image_name = ? Where id = ?;`;

    db.query(sqlUpdate, [firstName, lastName, grade, dateOfBirth, gender, email, phone, address, imagePath, id], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
    res.send("Data Updated");
});


app.post('/api/deactiveStudent', (req, res) => {
    const id = req.body.id;
    const sqlDeactivate = `Update student_management_tool Set status = 'false' Where id = ?`;

    db.query(sqlDeactivate, [id], (err, data) => {
        if (err) {
            console.log(err.sqlMessage);
        }
        console.log(data);
    });
    res.send("Student Deactivate");
});

// Setting Port
app.listen(3007, () => {
    console.log("It's Running on Port 3007");
});