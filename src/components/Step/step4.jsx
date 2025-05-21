import React from 'react';

const addonsList = [
  { name: 'Support prioritaire', priceMensuel: 5, priceAnnuel: 50 },
  { name: 'Stockage supplémentaire', priceMensuel: 3, priceAnnuel: 30 },
  { name: 'Accès aux nouveautés', priceMensuel: 2, priceAnnuel: 20 },
];

const Step4 = ({ formData, handleAddon, nextStep, prevStep }) => {
  const { options, duree } = formData;

  return (
    <div>
      <h2>Options additionnelles</h2>
      <p>Choisis des services supplémentaires si tu veux.</p>
      <div className="addons">
        {addonsList.map((addon) => (
          <label
            key={addon.name}
            className={`addon ${options.includes(addon.name) ? 'selected' : ''}`}
          >
            <input
              type="checkbox"
              checked={options.includes(addon.name)}
              onChange={() => handleAddon(addon.name)}
            />
            {addon.name} – {duree === 'annuel' ? `${addon.priceAnnuel} €/an` : `${addon.priceMensuel} €/mois`}
          </label>
        ))}
      </div>
      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={nextStep}>Suivant</button>
      </div>
    </div>
  );
};

export default Step4;
