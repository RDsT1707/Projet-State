import React from 'react';

const plans = {
  arcade: { name: 'Arcade', priceMensuel: 90, priceAnnuel: 90 },
  advanced: { name: 'Standard', priceMensuel: 12, priceAnnuel: 120 },
  pro: { name: 'Premium', priceMensuel: 15, priceAnnuel: 150 },
};


const Step3 = ({ formData, nextStep, prevStep }) => {
  const plan = plans[formData.abonnement];

  if (!plan) return <p>Erreur : aucun abonnement sélectionné.</p>;

  return (
    <div className="step3">
      <h2>Résumé de l'abonnement</h2>
      <p><strong>Nom :</strong> {formData.nom}</p>
      <p><strong>Email :</strong> {formData.email}</p>
      <p><strong>Plan :</strong> {plan.name}</p>
      <p>
        <strong>Prix :</strong>{' '}
        {formData.duree === 'annuel'
          ? `${plan.priceAnnuel} € / an`
          : `${plan.priceMensuel} € / mois`}
      </p>
      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={nextStep}>Confirmer</button>
      </div>
    </div>
  );
};

export default Step3;
