import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import SidebarRow from "./SidebarRow";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Sidebar = () => {
  return (
    <Box component="div">
      <Typography
        variant="h5"
        component="h1"
        sx={{
          textAlign: "center",
          borderBottom: "2px solid #eeeeee",
          paddingBottom: "1rem",
        }}
      >
        To - Do
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "1rem",
          marginTop: "1rem",
        }}
      >
        <Avatar
          sx={{
            width: 30,
            height: 30,
            marginRight: "1ch",
            bgcolor: blueGrey[500],
          }}
        >
          J
        </Avatar>
        <Typography variant="body2" component="p">
          Jane Sifuentes
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          marginTop: "1rem",
        }}
      >
        <SidebarRow
          Icon={LightModeOutlinedIcon}
          title="Mi Día"
          cantTasks={12}
        />
        <SidebarRow Icon={GradeOutlinedIcon} title="Importante" cantTasks={4} />
      </Box>
      <Box component="div">
        <SidebarRow Icon={ListOutlinedIcon} title="Universidad" cantTasks={7} />
        <SidebarRow Icon={ListOutlinedIcon} title="Empresa" cantTasks={9} />
        <SidebarRow Icon={ListOutlinedIcon} title="Familia" cantTasks={10} />
        <SidebarRow Icon={ListOutlinedIcon} title="EL dia" cantTasks={3} />
      </Box>
      <Box component="div"></Box>
    </Box>
  );
};

export default Sidebar;
