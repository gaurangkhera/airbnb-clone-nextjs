"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState  } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from "../hooks/useRegModal";
import Modal from "./Modal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({defaultValues: {
        name: '',
        email: '',
        password: ''
    }})

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);

        axios.post('/api/reg', data)
        .then(() => {
            registerModal.onClose()
        }).catch((e) => {
            console.log(e); 
        }).finally(() => {
            setLoading(false);
        })
    }
  return (
    <Modal  />
  )
}

export default RegisterModal