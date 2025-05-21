import React, { useState } from 'react';
import StepSidebar from './Stepsidebar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ThankYou from './ThankYou';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    plan: '',
    billing: 'mensuel',
    addons: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="multi-step-form">
      <StepSidebar step={step} />
      <div className="form-content">
        {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <ThankYou />}
      </div>
    </div>
  );
};

export default MultiStepForm;
