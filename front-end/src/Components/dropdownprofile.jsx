import React, { useState } from "react";
import "./dropdownprofile.css";

const Dropdownprofile = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [openProfile, setopenProfile] = useState(false);
  return (
    <div className="auth-form">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs "}
          onClick={() => toggleTab(1)}
        >
          {" "}
          Đăng nhập
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          {" "}
          Đăng ký{" "}
        </div>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="input-group">
            <input type="text" className="input" placeholder="Tên đăng nhập" />
            <input type="password" className="input" placeholder="Mật khẩu" />
          </div>
          <div className="btn-controls">
            <button className="btndangnhap">Trở lại</button>
            <button className="btndangnhap">Đăng nhập</button>
            <a className="forgot-pass" href="quen-mat-khau">
              Quên mật khẩu
            </a>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div className="input-group">
            <input type="text" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="Tên đăng nhập" />
            <input type="password" className="input" placeholder="Mật khẩu" />
            <input
              type="password"
              className="input"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <div className="btn-controls">
            <button className="btndangky">Trở lại</button>
            <button className="btndangky">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdownprofile;
