import React, { useContext, useEffect, useState } from 'react'
import {} from './styled';
import {
Table,
Tag,
Button,
} from "antd";
import { AuthProviderAPI } from "../../context/Auth";
import axios from "axios";
import "./style.css";
import jwt_decode from "jwt-decode";

const Main = () => {
  const [data, setData] = useState([]);
  const { token, setAuth, setToken } = useContext(AuthProviderAPI);



  const onLogOut = () => {
    if (window.confirm("tark etmoqchimisiz")) {
      setToken(null);
      setAuth(false);
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    }
  };

  const link = axios.create({
    baseURL: "https://api.trailer-test.nightwell-logistics.com",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const dataUpload = () => {
    link
      .get(`/api/user?page=${1}&size=${200}`)
      .then((res) => res.data)
      .then((resp) => setData(resp.dataList))
      .catch((err) => console.log(err));
  };
  useEffect(() => dataUpload(), []);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      key: "active",
      dataIndex: "active",
      render: (tag) => {
        let color = tag ? "green" : "geekblue";
        if (!tag) {
          color = "volcano";
        }
        return (
          <Tag color={color} key={tag}>
            {tag ? 'active' :'not active'.toUpperCase()}
          </Tag>
        );
      },
    },
  ];
  return (
      <div>
        <div className="header">
          <h4>
            {jwt_decode(localStorage.getItem("token")).sub}
            <Button type="primary" onClick={onLogOut}>
              log out
            </Button>
          </h4>
        </div>
        <div className="containerTable">
          <Table rowKey={"id"} columns={columns} dataSource={data} />
        </div>
      </div>
  )
}

export default Main