export const signUpPageSelector = state => (
   {
      firstName: state.authPage.firstName,
      lastName: state.authPage.lastName,
      email: state.authPage.email,
      password: state.authPage.password,
      avatar: state.authPage.avatar,
    }
)