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
            <div>Independence Day</div>
            <div>15th August</div>
          </div>
          <div className="activity-row">
            <div>Kargil Vijay Diwas</div>
            <div>26th July</div>
          </div>
          <div className="activity-row">
            <div>Republic Day</div>
            <div>26th January</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camps;

