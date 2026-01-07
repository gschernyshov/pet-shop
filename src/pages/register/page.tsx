'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { RegisterRequest } from '@/entities/user/model/types'
import { useRegistration } from '@/features/auth/registration/model/useRegistration'
import { RegistrationForm}  from '@/features/auth/registration/ui/RegistrationForm'

export function RegisterPage() {
  const { submit, isLoading, isError, data } = useRegistration()
  const { control, formState, handleSubmit, reset } = useForm<RegisterRequest>({
    mode: 'onChange',
    defaultValues: { name: '', email: '', password: '' },
  })

  const onSubmit = async (formData: RegisterRequest) => {
    try {
      await submit(formData)
      reset()
    } catch (e) {
      console.error('Ошибка при регистрации:', e)
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-10 w-full md:max-w-4xl m-auto pt-5 pb-10 md:py-30">  
      <div className="flex flex-col gap-2 md:pt-8">
        <h1 className="w-full font-heading text-3xl md:text-4xl font-bold leading-9 md:leading-11">
          Зарегистрируйтесь,<br />чтобы оформить заказ!
        </h1>
        <Link 
          href="/login" 
          className="text-sm text-gray-400"
        >
          У вас уже аккаунт? Вход
        </Link>
      </div>
      <RegistrationForm
        control={control}
        isFormValid={formState.isValid}
        handleSubmit={handleSubmit(onSubmit)}
        reset={reset}
        isLoading={isLoading}
        isError={isError}
        data={data}
      />
    </div>
  )
}
