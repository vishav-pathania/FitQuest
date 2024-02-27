// pages/form.js
import React, { useState } from 'react';

const FormPage = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Selected Gender:', selectedGender);
  };

  return (
    <div>
        <div className="flex justify-center items-center h-16">
          <img src="Fitquest.jpeg" alt="Fitquest" className="h-full mt-5" />
        </div>
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-md p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">What's your gender?</h2>

        {/* Gender Selection */}
        <div className="mb-4">
          <div className="mt-1 flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="male"
                checked={selectedGender === 'male'}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Male</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="female"
                checked={selectedGender === 'female'}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Female</span>
            </label>

            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-indigo-600"
                name="gender"
                value="other"
                checked={selectedGender === 'other'}
                onChange={handleGenderChange}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
    </div>
  );
};

export default FormPage;
