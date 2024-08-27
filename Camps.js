import React from 'react';
import './Camps.css';

const Camps = () => {
  return (
    <section id="camps" className="camps">
      <h2>Camps & Activities</h2>
      <p>Details of various NCC camps and activities.</p>

      <div className="tables-container">
        {/* Camps Table */}
        <table className="camps-table">
          <thead>
            <tr>
              <th>Camp Name</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annual Training Camp</td>
              <td>Mumbai</td>
              <td>A comprehensive training camp that covers various NCC activities.</td>
            </tr>
            <tr>
              <td>Republic Day Camp</td>
              <td>Delhi</td>
              <td>A prestigious camp held in Delhi during Republic Day celebrations.</td>
            </tr>
            <tr>
              <td>National Integration Camp</td>
              <td>Jaipur</td>
              <td>Focuses on fostering national unity and cultural exchange.</td>
            </tr>
          </tbody>
        </table>

        {/* Activities Table */}
        <div className="activities-table">
          <div className="activity-row">
            <div>National Army Day</div>
            <div>15th January</div>
          </div>
          <div className="activity-row">
            <div>Republic Day</div>
            <div>26th January</div>
          </div>
          <div className="activity-row">
            <div>International Yoga Day</div>
            <div>21st June</div>
          </div>
          <div className="activity-row">
            <div>Kargil Vijay Diwas</div>
            <div>26th July</div>
          </div>
          <div className="activity-row">
            <div>Independence Day</div>
            <div>15th August</div>
          </div>
          <div className="activity-row">
            <div>Airforce Day</div>
            <div>8th October</div>
          </div>          
          <div className="activity-row">
            <div>Shok Day</div>
            <div>26th November</div>
          </div>
          <div className="activity-row">
            <div>Navy Day</div>
            <div>4th December</div>
          </div>
          <div className="activity-row">
            <div>Armed Forces Flag Day</div>
            <div>7th December</div>
          </div>
          <div className="activity-row">
            <div>Tree Plantation and tree sensing</div>
            <div>August</div>
          </div>
          <div className="activity-row">
            <div>Blood Donation Day</div>
            <div>November</div>
          </div>
          <div className="activity-row">
            <div>SSB Preparatory Lectures</div>
            <div>January</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camps;

