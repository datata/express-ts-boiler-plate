interface DataLogin {
  body: {
    email: string
    password: string
  }
}

class LoginController {
  static login = (data: DataLogin) => {
    return {
      success: true,
      message: "User logged",
      data: {
        email: data.body.email
      }
    }
  }
}

export default LoginController
