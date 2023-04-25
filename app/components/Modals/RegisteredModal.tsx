"use client";
import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import UseRegisterdModel from "@/app/hooks/UseRegisteredModel";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";

const RegisteredModal = () => {
  const registerModal = UseRegisterdModel();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Master Yahct"
        subtitle="Create an account "
        center
      />
      <Input
        register={register}
        id="email"
        label="Email"
        disabled={loading}
        errors={errors}
        required
      />
      <Input
        register={register}
        id="name"
        label="Name"
        disabled={loading}
        errors={errors}
        required
      />
      <Input
        register={register}
        id="password"
        type="password"
        label="password"
        disabled={loading}
        errors={errors}
        required
      />
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      body={bodyContent}
      onSubmit={handleSubmit(onsubmit)}
    />
  );
};

export default RegisteredModal;
