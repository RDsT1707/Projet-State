import React, { useState } from 'react';
import StepSidebar from './Stepsidebar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ThankYou from './ThankYou';

const MultiStepForm = () => {
  // État pour suivre l'étape actuelle du formulaire
  const [step, setStep] = useState(1);

  // État contenant toutes les données du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    abonnement: '',
    duree: 'mensuel', // ou 'annuel'
    addons: [], // options supplémentaires sélectionnées
  });

  // Passe à l'étape suivante
  const nextStep = () => setStep((prev) => prev + 1);

  // Revient à l'étape précédente
  const prevStep = () => setStep((prev) => prev - 1);

  // Met à jour les données du formulaire
  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="multi-step-form">
      {/* Barre latérale avec indication de l'étape */}
      <StepSidebar step={step} />

      {/* Contenu principal du formulaire selon l'étape */}
      <div className="form-content">
        {step === 1 && (
          <Step1
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2
            abonnement={formData.abonnement}
            duree={formData.duree}
            handleAbonnement={(abonnement) => updateFormData({ abonnement })}
            toggleDuree={() =>
              updateFormData({
                duree: formData.duree === 'mensuel' ? 'annuel' : 'mensuel',
              })
            }
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <Step4
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default MultiStepForm;
