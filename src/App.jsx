import React, { useState } from 'react';
import StepSidebar from './components/Stepsidebar'; // au lieu de Sidebar
import Step1 from './components/Step/Step1';
import Step2 from './components/Step/step2';
import Step3 from './components/Step/Step3';
import Step4 from './components/Step/step4';
import ThankYou from './components/ThankYou';
import './App.css';


const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    abonnement: '',
    duree: 'mensuel',
    options: [],
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAbonnement = (value) => {
    setFormData(prev => ({ ...prev, abonnement: value }));
  };

  const toggleDuree = () => {
    setFormData(prev => ({
      ...prev,
      duree: prev.duree === 'mensuel' ? 'annuel' : 'mensuel',
    }));
  };

  const handleAddon = (addon) => {
    setFormData(prev => {
      const options = prev.options.includes(addon)
        ? prev.options.filter(opt => opt !== addon)
        : [...prev.options, addon];
      return { ...prev, options };
    });
  };

  return (
    <div className="multi-step-form">
      <StepSidebar currentStep={step} />
      <div className="form-content">
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Step2
            abonnement={formData.abonnement}
            duree={formData.duree}
            handleAbonnement={handleAbonnement}
            toggleDuree={toggleDuree}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Step3 formData={formData} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleAddon={handleAddon} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default App;
