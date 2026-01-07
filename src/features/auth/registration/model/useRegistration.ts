import { useRegisterUserMutation } from "@/src/entities/user/api/userApi"
import { RegisterRequest } from "@/src/entities/user/model/types"

export function useRegistration() {
  const [registerUser, state] = useRegisterUserMutation()

  const submit = async (formData: RegisterRequest) => {
    try {
      await registerUser(formData).unwrap()
    } catch (e) {
      throw e
    } 
  }

  return {
    submit,
    ...state,
  }
}
