import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="step1">
      <h2>personnal infos</h2>
      <label>
        Nom
        <input
          type="text"
          name="nom"
          value={formData.nom}
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
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
        />
      </label>
      <button className="btn" onClick={nextStep}>Suivant</button>
    </div>
  );
};

export default Step1;
