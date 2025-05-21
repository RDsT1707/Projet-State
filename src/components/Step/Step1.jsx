import React from 'react';

const Step1 = ({ formData, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="step1">
      <h2>Inscription</h2>
      <label>
        Nom
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ton nom"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ton email"
        />
      </label>
      <label>
        Mot de passe
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
        />
      </label>
      <button className="btn" onClick={nextStep}>Suivant</button>
    </div>
  );
};

export default Step1;
