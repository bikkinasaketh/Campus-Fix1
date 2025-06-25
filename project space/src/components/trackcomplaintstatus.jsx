import { useEffect, useState } from "react";

const TrackComplaints = ({ studentId }) => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/complaints/user/${studentId}`)
            .then(res => res.json())
            .then(data => setComplaints(data))
            .catch(err => console.error("Error:", err));
    }, [studentId]);

    return (
        <div>
            <h2>Your Complaints</h2>
            <ul>
                {complaints.map((c) => (
                    <li key={c._id}>
                        <strong>{c.problemType}</strong> - Status: <b>{c.status}</b><br />
                        {c.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackComplaints;
