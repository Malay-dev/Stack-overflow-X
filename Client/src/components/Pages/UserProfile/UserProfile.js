import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import LeftSideBar from "../Home/LeftSideBar";
import Avatar from "../../Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import moment from "moment";

const birthdayCake = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width={"20px"}
    fill={"#7e7e7e"}>
    <path d="M352 111.1c22.09 0 40-17.88 40-39.97S352 0 352 0s-40 49.91-40 72S329.9 111.1 352 111.1zM224 111.1c22.09 0 40-17.88 40-39.97S224 0 224 0S184 49.91 184 72S201.9 111.1 224 111.1zM383.1 223.1L384 160c0-8.836-7.164-16-16-16h-32C327.2 144 320 151.2 320 160v64h-64V160c0-8.836-7.164-16-16-16h-32C199.2 144 192 151.2 192 160v64H128V160c0-8.836-7.164-16-16-16h-32C71.16 144 64 151.2 64 160v63.97c-35.35 0-64 28.65-64 63.1v68.7c9.814 6.102 21.39 11.33 32 11.33c20.64 0 45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C114.1 348.3 139.4 367.1 160 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C242.1 348.3 267.4 367.1 288 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C370.1 348.3 395.4 367.1 416 367.1c10.61 0 22.19-5.227 32-11.33V287.1C448 252.6 419.3 223.1 383.1 223.1zM352 373.3c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66c-11.27 0-22.09-3.121-32-7.377v87.38C0 497.7 14.33 512 32 512h384c17.67 0 32-14.33 32-32v-87.38c-9.91 4.256-20.73 7.377-32 7.377C390 399.1 365.8 384.3 352 373.3zM96 111.1c22.09 0 40-17.88 40-39.97S96 0 96 0S56 49.91 56 72S73.91 111.1 96 111.1z" />
  </svg>
);
const pen = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"15px"}>
    <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
  </svg>
);
function UserProfile() {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  return (
    <div>
      <div className="user-profile-container-1">
        <LeftSideBar></LeftSideBar>
        <div className="user-profile-container-2">
          <section>
            <div className="user-details-container">
              <div className="user-details">
                <Avatar
                  backgroundColor={"purple"}
                  color="white"
                  fontSize={"50px"}
                  py="150px"
                  px="150px">
                  {currentProfile?.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className="user-name">
                  <h1>{currentProfile?.name}</h1>
                  <p>
                    {birthdayCake} Joined{" "}
                    {moment(currentProfile?.joinedOn).fromNow()}
                  </p>
                </div>
              </div>
              {currentUser?.result?._id === id && (
                <button
                  type="button"
                  onClick={() => setSwitch(true)}
                  className="edit-profile-btn">
                  {pen} Edit Profile
                </button>
              )}
            </div>
            <>
              {Switch ? (
                <EditProfileForm
                  currentUser={currentUser}
                  setSwitch={setSwitch}></EditProfileForm>
              ) : (
                <ProfileBio currentProfile={currentProfile}></ProfileBio>
              )}
            </>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
