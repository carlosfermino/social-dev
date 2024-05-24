import { signupUser } from "../../../modules/user/user.service"

function signup (req, res) {
  signupUser()
  res.status(200).json({ teste: "Ok" })
}

export default signup