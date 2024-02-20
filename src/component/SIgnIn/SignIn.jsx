// import './Signin.scss'
import { Box, Typography } from "@mui/material";
import React from "react";
import fecebok from "../../assets/facebok.svg";
import googl from "../../assets/googl.svg";
import wk from "../../assets/wk.svg"; 
import png from "../../assets/png.svg";


const SignIn = () => {
  return (
    <div className="modal"
    style={{
    marginLeft: '30%'
    }}>
      <Box
        p="30px"
        position={"relative"}
        zIndex={100}
        style={{
          maxWidth: "380px",
          maxHeight: '462px',
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" color="#524c6f" fontWeight={900} fontSize={32}>
          Sign In
        </Typography>
        <Typography variant="body2" color="#524c6f">
          It's time to check Your business
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            style={{
              marginTop: "40px",
              border: "1px solid #AEB4DD",
              padding: "8px",
              height: "40px",
              width: "320px",
              paddingLeft: "13px",
              borderRadius: "6px",
            }}
            type="text"
            placeholder="+7"
          />
          <input
            style={{
              marginTop: "18px",
              height: "40px",
              border: "1px solid #AEB4DD",
              paddingLeft: "13px",
              width: "320px",
              borderRadius: "6px",
            }}
            type="password"
            placeholder="Password"
          />
        </div>
        <Typography
          variant="body2"
          color="#524c6f"
          style={{
            maxWidth: "320px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          Forgot your password?
        </Typography>
        <Typography
          mb="18px"
          variant="body1"
          color="#524c6f"
          style={{
            marginTop: "18px",
          }}
        >
          Sign In with
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span>
            <img src={fecebok} alt="" />
          </span>
          <span>
            <img src={googl} alt="" />
          </span>
          <span>
            <img src={wk} alt="" />
          </span>
        </div>
        <Typography display={"flex"} gap={3} marginTop={7}>
          <button
            style={{
              width: "120px",
              height: "40px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            sign in
          </button>

          <button
            style={{
              width: "120px",
              height: "40px",
              fontSize: "16px",
              borderRadius: "10px",
              backgroundColor: "#23D796",
              color: "#fff",
            }}
          >
            sign up
          </button>
        </Typography>
      </Box>
      <span>
        <img
          style={{
            position: "absolute",
            top: "70px",
          }}
          src={png}
          alt=""
        />
      </span>
      <Box></Box>
    </div>
  );
};

export default SignIn;
