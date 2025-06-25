import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching complaints:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleStatusChange = async (complaintId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/update/${id}`, {
  status: "Fixed",
});
      const updatedComplaints = complaints.map((complaint) =>
        complaint._id === complaintId ? { ...complaint, status: newStatus } : complaint
      );
      setComplaints(updatedComplaints);
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel - Complaints</h1>
      {loading ? (
        <p>Loading complaints...</p>
      ) : (
        <div className="complaints-list">
          {complaints.map((complaint) => (
            <div className="complaint-card" key={complaint._id}>
              <p><strong>Name:</strong> {complaint.name}</p>
              <p><strong>Block:</strong> {complaint.block}</p>
              <p><strong>Room:</strong> {complaint.roomNumber}</p>
              <p><strong>Type:</strong> {complaint.problemType}</p>
              <p><strong>Description:</strong> {complaint.description}</p>
              <p><strong>Date:</strong> {new Date(complaint.createdAt).toLocaleString()}</p>

              <label>Status:</label>
              <select
                value={complaint.status}
                onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
              >
                <option value="Submitted">Submitted</option>
                <option value="In Progress">In Progress</option>
                <option value="Fixed">Fixed</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
