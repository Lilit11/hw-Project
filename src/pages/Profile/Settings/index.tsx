import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { IContext } from "../../../helpers/types";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { changeLogin, changePassword, changePrivacy } from "../../../helpers/api";
import { useState } from "react";

export const Settings = () => {
  const navigate = useNavigate()
  const { account, setAccount } = useOutletContext<IContext>();
  const [error, setError] = useState<String>("");
  const [passError, setPassError] = useState<String>("");
  const [text, setText] = useState<string>("");//photosi mej normal datarkuma stex che, why?
  const changingPrivacy = () => {
    changePrivacy().then((response) => {
      setAccount({ ...account, isPrivate: response.payload as string });
    });
  };

  let inputPassword: string;
  let newLogin: string;
  let newPassword: string;

  const handleLoginChange = () => {
    changeLogin({ password: inputPassword, login: newLogin }).then((res) => {
      if (res.status == "error" && res.message) {
        setError(res.message);
        setText("")
      } else {
        setError("")
        navigate('/login')
      }
    });
  };
  const handlePasswordChange = () => {

    // const validPass =  /^(?=.*\d)[A-Za-z\d]{6,}$/
    // if (!validPass.test(newPassword)){
    //     return setPassError("Password should contain at least 6 characters and 1 number")
    // } valunern inchi chi poxum
    changePassword({ old: inputPassword, newpwd: newPassword }).then((res) => {
        
      if (res.status == "error" && res.message) {
        setPassError(res.message);
        setText("")
      } else {
        setPassError("")
        navigate('/login')
      }
    });
  };
  return (
    <>
      {/* <img src={BASE + account.picture} /> */}
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="5">
            <MDBCard className="my-1 rounded-3" style={{ maxWidth: "600px" }}>
              <MDBCardBody className="px-8">
                <h3 className="px-8">Account Settings</h3>
                <div>
                  <strong>
                    Your Account is{" "}
                    <span style={{ color: "red" }}>
                      {account.isPrivate ? "Private" : "not Private"}
                    </span>
                  </strong>
                  <br /> <br />
                  <button
                    className="btn btn-outline-info"
                    onClick={changingPrivacy}
                  >
                    Make it {account.isPrivate ? " Not Private" : "Private"}
                  </button>
                  <br /> <br /> <br />
                  <strong>Change Login</strong>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Enter Your new Login"
                    onChange={(e) => (newLogin = e.target.value)}
                    type="text"
                    defaultValue={text}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm with your password"
                    type="password"
                    onChange={(e) => (inputPassword = e.target.value)}
                    defaultValue={text}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-info"
                    onClick={handleLoginChange}
                  >
                    Confirm new login
                  </button>
                </div>
                <div className="px-8">
                  <br /> <br />
                  <strong>Change Password</strong>
                  {passError && <p style={{ color: "red" }}>{passError}</p>}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Enter Old Password"
                    type="password"
                    onChange={(e) => (inputPassword = e.target.value)}
                    defaultValue={text}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Enter New Password"
                    type="password"
                    onChange={(e) => (newPassword = e.target.value)}
                    defaultValue={text}
                  />
                  <button type="submit" className="btn btn-outline-info"  onClick={handlePasswordChange}>
                    Confirm new password
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
