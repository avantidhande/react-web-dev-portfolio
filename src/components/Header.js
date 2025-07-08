import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
              {/* buttons */}
             <div className="button2 mt-5 d-flex flex-column flex-sm-row justify-content-center align-items-center">
  <a
    href="https://github.com/avantidhande"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-dark d-flex align-items-center px-4 py-3 rounded-pill fs-5 fw-semibold mb-3 mb-sm-0 me-sm-4"
    style={{
      gap: "10px",
      minWidth: "220px",
      justifyContent: "center",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    }}
  >
    <span
      className="iconify"
      data-icon="mdi:github"
      style={{ fontSize: "24px" }}
    ></span>
    GitHub
  </a>

  <a
    href="https://drive.google.com/file/d/143f2-bWMQl9RWoFcyihiQtk8RMllImcy/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-dark d-flex align-items-center px-4 py-3 rounded-pill fs-5 fw-semibold"
    style={{
      gap: "10px",
      minWidth: "220px",
      justifyContent: "center",
      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    }}
  >
    <span
      className="iconify"
      data-icon="material-symbols:download"
      style={{ fontSize: "24px" }}
    ></span>
    View Resume
  </a>
</div>


            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
