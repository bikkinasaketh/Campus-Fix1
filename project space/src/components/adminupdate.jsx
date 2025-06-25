import React, { useState } from "react";
import axios from "axios";

function AdminUpdate({ complaint }) {
  const [status, setStatus] = useState(complaint.status);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateStatus = async () => {
    try {
      setLoading(true);
      setMessage("");

      // Send PATCH request to backend
      const res = await axios.patch(`/api/complaints/${complaint._id}/status`, {
        status: "Fixed", // Or any other status from dropdown
      });

      setMessage("Status updated and email sent to user.");
    } catch (err) {
      console.error(err);
      setMessage("Failed to update status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p><strong>{complaint.name}</strong> | {complaint.problemType}</p>
      <button onClick={updateStatus} disabled={loading}>
        {loading ? "Updating..." : "Mark as Fixed"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminUpdate;
