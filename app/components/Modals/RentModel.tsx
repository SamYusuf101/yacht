"use client";
import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import useRentModel from "@/app/hooks/useRentModel";
import Heading from "../Heading";
import { categories } from "../Categories";
import CategoryInput from "../CategoryInput";
import { useForm } from "react-hook-form";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModel = () => {
  const rentModal = useRentModel();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {register, handleSubmit, setValue. watch, formState:{
    errors,
  }, reset
}=useForm

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActonLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your needs"
        subtitle="Pick a category"
      />
      <div
        className="
      grid grid-cols-1 md:grid-cols-2 gap-3
      max-h-[50vh] overflow-y-auto"
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={() => {}}
              selected={false}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Yacht Masters! feel comfortable "
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActonLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModel;
