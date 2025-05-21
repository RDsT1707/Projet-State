import React from 'react';

const plans = {
  basic: { name: 'Basique', priceMensuel: 10, priceAnnuel: 100 },
  standard: { name: 'Standard', priceMensuel: 20, priceAnnuel: 200 },
  premium: { name: 'Premium', priceMensuel: 30, priceAnnuel: 300 },
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
