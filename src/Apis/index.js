import axios from "axios"

export const getuser = async (login) => {
  const result = await axios.get(`https://api.github.com/users/${login}`)
  return result
}
