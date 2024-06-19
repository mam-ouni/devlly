import { Bell, List, MSG, Search, Logout, Close } from "@/components/svg";
import React,{useState} from "react";
import { colors } from "@/styles/colors";
import { signOut } from "next-auth/react";
import { Drawer, Box } from "@mui/material";
import { Calendar } from "@/components/svg";
export default function Header({list,handleList}) {
  const handleLogout = () => {
    signOut({
      redirect: "/",
    });
  };
  const [open, setOpen] = useState(false);
  return (
    <header className="head_search py-3 px-4 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <button className="btn d-xl-none d-flex align-items-center justify-content-center" onClick={() => setOpen(true)}>
          <List
            color={"white"}
            width={25}
            height={25}
          />
        </button>
        <div className="search d-none d-md-flex px-2 py-1 align-items-center justify-content-between">
          <div className="px-2 d-flex align-items-center gap-3">
            <Search color={"rgba(255, 255, 255, 0.2)"} width={20} height={20} />
            <p>Search your page</p>
          </div>
          <small
            style={{ backgroundColor: "#3872FA" }}
            className="rounded text-light p-1"
          >
            ctrl+K
          </small>
        </div>
      </div>
      <div className="icons_container d-flex gap-3 align-items-center">
        <button
          style={{ backgroundColor: "rgb(31,31,31)" }}
          className="btn rounded p-2 d-flex align-items-center justify-content-center"
          onClick={() => handleLogout()}
        >
          <Logout color={"red"} width={20} height={20} />
        </button>
        <button
          style={{ backgroundColor: "rgb(31,31,31)" }}
          className="btn rounded p-2 d-flex d-md-none align-items-center justify-content-center"
        >
          <Search color={"white"} width={20} height={20} />
        </button>
        <div
          style={{ backgroundColor: "rgb(31,31,31)" }}
          className="p-2 rounded"
        >
          <Bell color={"white"} width={20} height={20} />
        </div>
        <div
          style={{ backgroundColor: "rgb(31,31,31)" }}
          className="icons p-2 rounded"
        >
          <MSG color={"white"} width={20} height={20} />
        </div>
        <div className="rounded-pill">
          <img
            className="icons rounded-pill"
            src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp"
            alt="John Doe"
            title="John Doe"
            draggable="false"
            loading="lazy"
            width="40"
            height="40"
            class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgb(171, 70, 210)",
              borderRadius: "100%",
            }}
          />
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
        <Box className = 'drawer_container text-light'>
          <section style={{ height: "100vh", overflowY: "auto" }}>
            <div className="px-2 py-4 mx-4 d-flex align-items-center justify-content-between">
              <h3 style={{marginBottom :'0px'}} className="d-flex align-items-center gap-1">
                Geekfolio
              </h3>
                <button className="btn" onClick={()=>setOpen(false)}>
                    <Close width={25} height={25} color={'white'}/>
                </button>
            </div>
            <ul style={{ paddingLeft: "0px" }} className="">
              <li onClick={() => handleList("appointment")}>
                <span
                  style={{ display: list === "appointment" ? "block" : "none" }}
                ></span>
                <div
                  className="d-flex align-items-center gap-2 mx-4 px-2 mt-2 py-2 rounded"
                  style={{
                    color:
                      list === "appointment" ? colors.blue : colors.gray_con,
                  }}
                >
                  <Calendar
                    width={20}
                    height={20}
                    color={
                      list === "appointment" ? colors.blue : colors.gray_con
                    }
                  />
                  Appointment
                </div>
              </li>
              <li onClick={() => handleList("other")}>
                <span
                  style={{ display: list !== "appointment" ? "block" : "none" }}
                ></span>
                <div
                  className="d-flex align-items-center gap-2 mx-4 px-2 mt-2 py-2 rounded"
                  style={{
                    color:
                      list !== "appointment" ? colors.blue : colors.gray_con,
                  }}
                >
                  <Calendar
                    width={20}
                    height={20}
                    color={
                      list !== "appointment" ? colors.blue : colors.gray_con
                    }
                  />
                  other
                </div>
              </li>
            </ul>
          </section>
        </Box>
      </Drawer>
    </header>
  );
}
