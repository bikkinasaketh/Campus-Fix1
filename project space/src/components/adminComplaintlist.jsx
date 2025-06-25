import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./AdminComplaintList.module.css";

const AdminComplaintList = () => {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState({ block: "", status: "" });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error("Error fetching complaints", err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/api/complaints/${id}/status`, {
        status: newStatus,
      });
      fetchComplaints(); // Refresh after update
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const filteredComplaints = complaints.filter((c) => {
    return (
      (filter.block ? c.block === filter.block : true) &&
      (filter.status ? c.status === filter.status : true)
    );
  });

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin Complaint Panel</h2>

      <div className="filterBar">
        <label>Block:</label>
        <input
          type="text"
          onChange={(e) => setFilter({ ...filter, block: e.target.value })}
        />

        <label>Status:</label>
        <select
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">All</option>
          <option value="Submitted">Submitted</option>
          <option value="In Progress">In Progress</option>
          <option value="Fixed">Fixed</option>
        </select>
      </div>
      <table className={style.adminTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Block</th>
            <th>Room</th>
            <th>Type</th>
            <th>Description</th>
            <th>Photo</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint._id} className="complaint-row">
              <td>{complaint.name}</td>
              <td>{complaint.block}</td>
              <td>{complaint.roomNumber}</td>
              <td>{complaint.problemType}</td>
              <td>{complaint.description}</td>
              <td>
                {complaint.photo && (
                  <img
                    src={`http://localhost:5000/${complaint.photo}`}
                    alt="complaint"
                    className={style.image}
                  />
                )}
              </td>
              <td>{complaint.status}</td>
              <td>
                <select
                  className="statusSelect"
                  value={complaint.status}
                  onChange={(e) =>
                    handleStatusChange(complaint._id, e.target.value)
                  }
                >
                  <option value="Submitted">Submitted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Fixed">Fixed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminComplaintList;
