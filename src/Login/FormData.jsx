import React, { useState } from "react";
import "./FormData.css";

const FormData = (props) => {
  const [submitDis, setsubmitDis] = useState(true);
  const [formData, setFormData] = useState({
    userName: "",
    authorName: "",
    reacipeName: "",
    description: "",
    tag: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSubmit = async () => {
    // try {
    //     const response = await fetch('http://localhost:3000/api', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log('Success:', data);
    //     } else {
    //       console.error('Error:', response.statusText);
    //     }
    //   } catch (error) {
    //     console.error('Error:', error.message);
    //   }
    console.log("data=", formData);
    props.setFormOpen(false);
  };
  return (
    <div className="form-container">
      <form>
        <label>UserName:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          id="userName"
          onChange={handleInputChange}
          required
        />
        <label>Author Name:</label>
        <input
          type="text"
          name="authorName"
          value={formData.authorName}
          id="authorName"
          onChange={handleInputChange}
          required
        />
        <label>Recipe Name:</label>
        <input
          type="text"
          name="reacipeName"
          value={formData.reacipeName}
          id="reacipeName"
          onChange={handleInputChange}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          id="description"
          onChange={handleInputChange}
          required
        />
        <label>Tag:</label>
        <input
          type="text"
          name="tag"
          value={formData.tag}
          id="tag"
          onChange={handleInputChange}
        />
        <button className="submit-button" type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {/* <Recipes data = {formData} /> */}
    </div>
  );
};

export default FormData;
