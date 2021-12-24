import React, { useState, useEffect } from "react"
import { Button, Input, message } from "antd"
import { UserOutlined } from "@ant-design/icons"
import UserInfo from "./UserInfo"
import { getuser } from "../Apis/index"

function Form() {
  const [username, setusername] = useState()
  const [userInfo, setuserInfo] = useState()
  const [userblog, setuserblog] = useState()
  const [userrepos, setuserRepos] = useState()
  const [userreposNumber, setuserReposNumber] = useState()
  const [userFollowers, setuserFollowers] = useState()
  const [userLocation, setuserLocation] = useState()
  const [name, setname] = useState()

  useEffect(() => {
    if (userInfo !== undefined) {
      console.log(userInfo.blog)
      setuserblog(userInfo.blog)
      setuserRepos(userInfo.repos_url)
      setuserFollowers(userInfo.followers)
      setuserReposNumber(userInfo.public_repos)
      setname(userInfo.name)
      setuserLocation(userInfo.location)
    }
  }, [userInfo])

  const handleSubmit = async () => {
    try {
      const { data } = await getuser(username)
      setuserInfo(data)
    } catch {
      message.error("username doesn't exist")
    }
  }
  return (
    <>
      <section className="form_username">
        <p>Your github username</p>

        <div>
          <Input
            size="large"
            placeholder="large size"
            prefix={<UserOutlined />}
            onChange={(e) => setusername(e.target.value)}
          />
          <br />
          <br />

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </section>
      {userInfo && (
        <UserInfo
          blog={userblog}
          location={userLocation}
          name={name}
          followers={userFollowers}
          repos={userreposNumber}
          reposUrl={userrepos}
        />
      )}
    </>
  )
}

export default Form
