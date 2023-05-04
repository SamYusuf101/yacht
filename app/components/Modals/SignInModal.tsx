"use client";
import { signIn } from "next-auth/react";
import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import UseRegisterdModel from "@/app/hooks/UseRegisteredModel";
import UseLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const SignInModal = () => {
  const router = useRouter();
  const registerModal = UseRegisterdModel();
  const LoginModal = UseLoginModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        LoginModal.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account " center />
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
        id="password"
        type="password"
        label="password"
        disabled={loading}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="continue with google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="continue with gitHub"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="text-neutral-500
      text-center mt-4 font-light
      "
      >
        <div className=" justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={LoginModal.onClose}
            className="text-neutral-800 cursor-pointer
          hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={LoginModal.isOpen}
      title="LogIn"
      actionLabel="Continue"
      onClose={LoginModal.onClose}
      body={bodyContent}
      onSubmit={handleSubmit(onsubmit)}
      footer={footerContent}
    />
  );
};

export default SignInModal;
