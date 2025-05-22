import React from 'react';

// Définition des différents plans disponibles avec leurs prix mensuels et annuels
const plans = {
  arcade: { name: 'Arcade', priceMensuel: 90, priceAnnuel: 90 },
  advanced: { name: 'Standard', priceMensuel: 12, priceAnnuel: 120 },
  pro: { name: 'Premium', priceMensuel: 15, priceAnnuel: 150 },
};

const Step3 = ({ formData, nextStep, prevStep }) => {
  // On récupère le plan sélectionné à partir de la clé 'abonnement'
  const plan = plans[formData.abonnement];

  // Si aucun plan trouvé, on affiche un message d'erreur (cas improbable)
  if (!plan) return <p>Erreur : aucun abonnement sélectionné.</p>;

  return (
    <div className="step3">
      <h2>Résumé de l'abonnement</h2>

      {/* Informations utilisateur */}
      <p><strong>Nom :</strong> {formData.nom || 'Non renseigné'}</p>
      <p><strong>Email :</strong> {formData.email || 'Non renseigné'}</p>

      {/* Plan choisi et prix en fonction de la durée */}
      <p><strong>Plan :</strong> {plan.name}</p>
      <p>
        <strong>Prix :</strong>{' '}
        {formData.duree === 'annuel'
          ? `${plan.priceAnnuel} € / an`
          : `${plan.priceMensuel} € / mois`}
      </p>

      {/* Boutons de navigation pour revenir à l'étape précédente ou passer à la suivante */}
      <div className="buttons">
        <button className="btn secondary" onClick={prevStep}>Retour</button>
        <button className="btn" onClick={nextStep}>Confirmer</button>
      </div>
    </div>
  );
};

export default Step3;
