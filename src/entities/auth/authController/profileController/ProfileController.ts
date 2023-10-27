interface Profile {
 token: {
  id: number
 }   
}

class ProfileController {
  static login = (data: Profile) => {    
    return {
      success: true,
      message: "User profile retrieved",
      data: {
        id: data.token.id,
        user_name: "fake_user",
        user_email: "fake_user_email"
      }
    }
  }
}

export default ProfileController
