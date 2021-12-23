import React from "react"
import { Tabs } from "antd"
import {
  UserOutlined,
  ForkOutlined,
  UsergroupAddOutlined,
  FieldNumberOutlined,
} from "@ant-design/icons"
function UserInfo({ name, blog, location, followers, repos, reposUrl }) {
  const { TabPane } = Tabs
  return (
    <section className="tabs">
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              User Basic Info
            </span>
          }
          key="1"
        >
          <em>Name:</em> {"    "}
          {name}
          <br />
          <br />
          <em>Blog: </em> {"    "} {blog}
          <br />
          <br />
          <em>Location: </em> {"    "} {location}
        </TabPane>
        <TabPane
          tab={
            <span>
              <FieldNumberOutlined />
              Number Of Reops
            </span>
          }
          key="2"
        >
          {repos}
        </TabPane>
        <TabPane
          tab={
            <span>
              <UsergroupAddOutlined />
              Number Of Followers
            </span>
          }
          key="3"
        >
          {followers}
        </TabPane>

        <TabPane
          tab={
            <span>
              <ForkOutlined />
              User Repos url
            </span>
          }
          key="4"
        >
          {
            <a href={reposUrl} target="_blank" rel="noreferrer">
              Repos Url
            </a>
          }
        </TabPane>
      </Tabs>
    </section>
  )
}

export default UserInfo
