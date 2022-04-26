import React, { useContext, useEffect, useState } from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import SidebarRow from "./SidebarRow";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AddIcon from "@mui/icons-material/Add";
import InputBase from "@mui/material/InputBase";

import { Context } from "../context/auth/Context";
import { ContextList } from "../context/lists/Context";
import { chatAt } from "../util/chatAt";
import { Capitalize } from "../util/capitalize";
import axios from "../util/axios";
import { ContextTodo } from "../context/todo/Context";

const Sidebar = () => {
  const { user, dispatch } = useContext(Context);
  const { dispatch: dispatchList, list } = useContext(ContextList);
  const [nameList, setNameList] = useState("");
  const token = window.localStorage.getItem("token-todo");
  const { dispatch: dispatchTodo } = useContext(ContextTodo);

  const hanbleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    dispatchTodo({
      type: "RESET_TODO",
    });

    dispatchList({
      type: "RESET_LISTS",
    });
  };

  useEffect(() => {
    const getAllListByUser = async (token) => {
      dispatchList({
        type: "ADD_LIST_START",
      });
      try {
        let options = {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=utf-8",
            authorization: token ? `Bearer ${token}` : null,
          },
        };

        const res = await axios("/list", options);
        dispatchList({
          type: "ADD_LIST_SUCCESS",
          payload: res.data,
        });
      } catch (err) {
        dispatchList({
          type: "ADD_LIST_FAILURE",
          payload: err.response.data,
        });
      }
    };
    getAllListByUser(token);
  }, [dispatchList, token]);

  const handleSendList = async (e) => {
    e.preventDefault();
    dispatchList({
      type: "ADD_ONE_LIST_START",
    });

    try {
      let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          authorization: token ? `Bearer ${token}` : null,
        },
        data: JSON.stringify({
          nameList,
        }),
      };

      const res = await axios("/list", options);
      dispatchList({
        type: "ADD_ONE_LIST_SUCCESS",
        payload: res.data,
      });
      setNameList("");
    } catch (err) {
      dispatchList({
        type: "ADD_ONE_LIST_FAILURE",
        payload: err.response.data,
      });
    }
  };

  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            textAlign: "center",
          }}
        >
          To - Do
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "1rem",
          height: "3rem",
        }}
      >
        <Avatar
          sx={{
            width: 30,
            height: 30,
            marginRight: "1ch",
            bgcolor: blueGrey[500],
          }}
          onClick={() => hanbleLogout()}
        >
          {chatAt(user.firstName)}
        </Avatar>
        <Typography
          variant="body2"
          component="p"
          sx={{
            maxWidth: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {Capitalize(user.firstName)} {Capitalize(user.lastName)}
        </Typography>
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "calc(100vh - 3rem - 3rem)",
        }}
        className="scroll_body"
      >
        <Box
          component="div"
          sx={{
            marginTop: "1rem",
          }}
        >
          {/* <SidebarRow Icon={LightModeOutlinedIcon} title="Mi Día" cantTasks={0} />
        <SidebarRow Icon={GradeOutlinedIcon} title="Importante" cantTasks={0} /> */}
        </Box>
        <Box component="div">
          {list &&
            list.map(({ nameList, id, tasks }) => (
              <SidebarRow
                key={id}
                Icon={ListOutlinedIcon}
                title={nameList}
                tasks={tasks}
                idList={id}
              />
            ))}
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            paddingY: "10px",
            paddingX: "1rem",
            "&:hover": {
              backgroundColor: "#eeeeee",
              cursor: "pointer",
            },
          }}
        >
          <AddIcon />
          <Box component="form" onSubmit={handleSendList}>
            <InputBase
              placeholder="Nueva lista"
              name="nameList"
              value={nameList}
              onChange={(e) => setNameList(e.target.value)}
            />
            <Button type="submit" sx={{ display: "none" }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
