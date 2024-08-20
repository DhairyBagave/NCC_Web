import React from 'react';
import './NCCStructure.css';

function NCCStructure() {
  return (
    <section id="ncc-structure" className="ncc-structure">
      <h2>NCC VJTI, 5 MAH EME COY</h2>
      
      <div className="ncc-table-container">
        {/* NCC Officers Table */}
        <h3>NCC Officers</h3>
        <table className="ncc-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lt. Col. Dhruv Saraswat</td>
              <td>Commanding Officer</td>
              <td>5ememah@gmail.com</td>
              <td>022-24186171</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Lt. Prof. Shrinivas Khedkar</td>
              <td>ANO</td>
              <td>ano@vjti.ac.in</td>
              <td>9075362323</td>
            </tr>
          </tbody>
        </table>

        {/* NCC Cadet Appointments Table */}
        <h3>NCC Cadet Appointments</h3>
        <table className="ncc-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Arjun Singh Rajput</td>
              <td>Senior Under Officer (SUO)</td>
              <td>aschib_b22@el.vjti.ac.in</td>
              <td>+91-9797670271</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dhairy Atul Bagave</td>
              <td>Junior Under Officer (JUO)</td>
              <td>dabagave_b21@el.vjti.ac.in</td>
              <td>+91-9049481874</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Prateek Kumar</td>
              <td>Junior Under Officer (JUO)</td>
              <td>pkumar_b21@me.vjti.ac.in</td>
              <td>+91-7384226493</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tanvi Yadav</td>
              <td>Junior Under Officer (JUO)</td>
              <td>tryadav_b21@pe.vjti.ac.in</td>
              <td>+91-9579972553</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Vitthal Ambadas Kale</td>
              <td>Company Sergeant Master (CSM)</td>
              <td>vakale_d21@me.vjti.ac.in</td>
              <td>+91-8104559751</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Shron Suhas Baraskar</td>
              <td>Company Quarters Master Sergeant (CQMS)</td>
              <td>ssbaraskar_d22@ci.vjti.ac.in</td>
              <td>+91-9321582155</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Hitesh Sanjay Patil</td>
              <td>Sergeant</td>
              <td>patilhitesh5843@gmail.com</td>
              <td>+91-9326222621</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default NCCStructure;
