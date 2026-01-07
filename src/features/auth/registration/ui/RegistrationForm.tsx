import { Form, Input, Button, Alert } from '@heroui/react'
import { Controller, Control } from 'react-hook-form'
import { RegisterRequest, RegisterResponse } from '@/entities/user/model/types'

interface Props {
  control: Control<RegisterRequest>
  isFormValid: boolean
  handleSubmit: () => void
  reset: () => void
  isLoading: boolean
  isError: boolean
  data?: RegisterResponse
}

export function RegistrationForm({ 
  control, isFormValid, handleSubmit, reset, isLoading, isError, data,
}: Props) {

  return (
    <Form
      className="flex justify-center items-center w-full py-10 px-7 md:px-10  bg-yellow rounded-4xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 w-full max-w-2xl">

        {isError && 
          <Alert 
            color="danger" 
            title="При регистрации пользователя возникла ошибка :(" 
          />}

        {data && 
          <Alert 
            color="success" 
            title="Пользователь успешно зарегистрирован!" 
          />}

        <Controller
          name="name"
          control={control}
          rules={{
            required: 'Имя обязательно',
            minLength: { value: 3, message: 'Минимум 3 символа' },
            maxLength: { value: 27, message: 'Максимум 27 символов' },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Имя"
              labelPlacement="outside"
              placeholder="Введите своё имя"
              type="text"
              isDisabled={isLoading}
              isInvalid={fieldState.isTouched && fieldState.invalid}
              errorMessage={
                fieldState.isTouched
                  ? fieldState.error?.message
                  : undefined
              }
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email обязателен',
            pattern: { value: /^\S+@\S+\.[A-Za-z]{2,}$/, message: 'Введите корректный email' },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Email"
              labelPlacement="outside"
              placeholder="Введите свой email"
              type="email"
              isDisabled={isLoading}
              isInvalid={fieldState.isTouched && fieldState.invalid}
              errorMessage={
                fieldState.isTouched
                  ? fieldState.error?.message
                  : undefined
              }
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Пароль обязателен',
            minLength: { value: 6, message: 'Минимум 6 символов' },
            maxLength: { value: 27, message: 'Максимум 27 символов' },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field} 
              label="Пароль"
              labelPlacement="outside"
              placeholder="Введите пароль"
              type="password"
              description="Минимальная длина 6 символов"
              isDisabled={isLoading}
              isInvalid={fieldState.isTouched && fieldState.invalid}
              errorMessage={
                fieldState.isTouched
                  ? fieldState.error?.message
                  : undefined
              }
            />
          )}
        />

        <div className="flex justify-start gap-4">
          <Button
            type="submit"
            className="max-w-2xl bg-black text-white"
            isLoading={isLoading}
            isDisabled={isLoading || !isFormValid}
          >
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </Button>
          <Button
            type="button"
            className="w-auto border-white"
            variant="bordered"
            isDisabled={isLoading}
            onPress={() => reset()}
          >
            Сбросить
          </Button>
        </div>
      </div>
    </Form>
  )
}
