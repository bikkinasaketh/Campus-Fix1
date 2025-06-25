// import React, { useState } from "react";
// import "./ComplaintForm.css";
// const ComplaintForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [block, setBlock] = useState("");
//   const [roomNumber, setRoomNumber] = useState("");
//   const [problemType, setProblemType] = useState("");
//   const [description, setDescription] = useState("");
//   const [photo, setPhoto] = useState(null);

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("email", email);
//   formData.append("block", block);
//   formData.append("problemType", problemType);
//   formData.append("description", description);
//   if (photo) {
//     formData.append("photo", photo);
//   }

//   try {
//     const response = await fetch("http://localhost:5000/api/complaints", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       console.error("❌ Submission failed:", data.message || data.error);
//       alert(data.message || "Submission failed");
//     } else {
//       alert("✅ Complaint submitted successfully!");
//     }
//   } catch (error) {
//     console.error("🚨 Network error:", error);
//     alert("Failed to submit complaint. Please try again.");
//   }
// };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Your Name"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Your Email"
//         required
//       />
//       <input
//         type="text"
//         value={block}
//         onChange={(e) => setBlock(e.target.value)}
//         placeholder="Block"
//         required
//       />
//       <input
//         type="text"
//         value={roomNumber}
//         onChange={(e) => setRoomNumber(e.target.value)}
//         placeholder="Room Number"
//         required
//       />

//       <select
//         value={problemType}
//         onChange={(e) => setProblemType(e.target.value)}
//         required
//       >
//         <option value="">Select Problem Type</option>
//         {/* <option value="Electricity">Electricity</option> */}
//         <option value="fan">Fan</option>
//         <option value="light">Light</option>
//         <option value="plug">Plug</option>
//         <option value="wifi">wifi</option>
//         <option value="Other">Other</option>
//       </select>

//       {problemType === "Other" && (
//         <input
//           type="text"
//           placeholder="Specify the issue"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       )}

//       {problemType !== "Other" && (
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Describe the issue"
//           required
//         />
//       )}

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => setPhoto(e.target.files[0])}
//       />

//       <button type="submit">Submit Complaint</button>
//     </form>
//   );
// };

// export default ComplaintForm;






import React, { useState, useRef } from "react";
import "./ComplaintForm.css";

const ComplaintForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [block, setBlock] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [problemType, setProblemType] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert("⚠ Please upload a photo before submitting.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("block", block);
    formData.append("roomNumber", roomNumber);
    formData.append("problemType", problemType);
    formData.append("description", description);
    formData.append("photo", photo);

    try {
      const response = await fetch("http://localhost:5000/api/complaints", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "❌ Submission failed");
      } else {
        alert("✅ Complaint submitted successfully!");
        // Reset form
        setName("");
        setEmail("");
        setBlock("");
        setRoomNumber("");
        setProblemType("");
        setDescription("");
        setPhoto(null);
        setPhotoPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      alert("🚨 Network error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="complaint-form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="complaint-form">
        <h1>Submit a Complaint</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
          placeholder="Block"
          required
        />

        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          placeholder="Room Number"
          required
        />

        <select
          value={problemType}
          onChange={(e) => setProblemType(e.target.value)}
          required
        >
          <option value="">Select Problem Type</option>
          <option value="fan">Fan</option>
          <option value="light">Light</option>
          <option value="plug">Plug</option>
          <option value="wifi">WiFi</option>
          <option value="Other">Other</option>
        </select>

        {problemType === "Other" ? (
          <input
            type="text"
            placeholder="Specify the issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        ) : (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
            required
          />
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          required
          onChange={(e) => {
            const file = e.target.files[0];
            setPhoto(file);
            setPhotoPreview(file ? URL.createObjectURL(file) : null);
          }}
        />

        {photoPreview && (
          <div className="photo-preview">
            <p>Preview:</p>
            <img src={photoPreview} alt="Preview" />
          </div>
        )}

        {isSubmitting && <p className="loading-msg">Submitting your complaint...</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;