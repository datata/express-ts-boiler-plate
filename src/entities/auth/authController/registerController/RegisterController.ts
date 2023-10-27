type Role = 'user' | 'admin' | 'super_admin'

interface DataRegister {
  body: {
    user_name: string,
    email: string
    is_active?: boolean,
    password?: string
    role?: Role
  }
}

class RegisterController {
  static register = (data: DataRegister) => {
    return {
      success: true,
      message: "User registered",
      data: {
        name: data.body.user_name,
        email: data.body.email
      }
    }
  }
}

export default RegisterController
