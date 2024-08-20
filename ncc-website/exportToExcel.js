const mongoose = require('mongoose');
const ExcelJS = require('exceljs');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/ncc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const entrySchema = new mongoose.Schema({
    firstName: String,
    fatherName: String,
    lastName: String,
    registrationID: String,
    branch: String,
    degree: String,
    email: String,
    mobile: String,
    bloodGroup: String,
    passingYear: String,
    timestamp: Date,
});

const Entry = mongoose.model('Entry', entrySchema);

async function exportDataToExcel() {
    try {
        const entries = await Entry.find().lean();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('NCC Entries');

        worksheet.columns = [
            { header: 'First Name', key: 'firstName', width: 15 },
            { header: 'Father Name', key: 'fatherName', width: 15 },
            { header: 'Last Name', key: 'lastName', width: 15 },
            { header: 'Registration ID', key: 'registrationID', width: 20 },
            { header: 'Branch', key: 'branch', width: 10 },
            { header: 'Degree', key: 'degree', width: 15 },
            { header: 'Email', key: 'email', width: 25 },
            { header: 'Mobile', key: 'mobile', width: 15 },
            { header: 'Blood Group', key: 'bloodGroup', width: 10 },
            { header: 'Passing Year', key: 'passingYear', width: 15 },
            { header: 'Timestamp', key: 'timestamp', width: 20 }
        ];

        entries.forEach(entry => {
            worksheet.addRow(entry);
        });

        const excelPath = path.join(__dirname, 'NCC_Entries.xlsx');
        await workbook.xlsx.writeFile(excelPath);

        console.log('Data has been exported to Excel successfully!');
    } catch (err) {
        console.error('Error while exporting data to Excel:', err);
    } finally {
        mongoose.connection.close();
    }
}

exportDataToExcel();
