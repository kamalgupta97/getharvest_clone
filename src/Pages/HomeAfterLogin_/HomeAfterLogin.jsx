import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DescriptionIcon from "@material-ui/icons/Description";
import TimerIcon from "@material-ui/icons/Timer";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CloseIcon from "@material-ui/icons/Close";


import styles from "./HomeAfterLogin.module.css";
import { VideoTutorial } from "../../Components/VideoTutorial/VideoTutorial";


const Container = styled.div`
  width: 70%;
  margin: 15px auto;
  height: 600px;
  /* background-color:antiquewhite; */
`;
const Heading = styled.div`
  width: 100%;
  height: 37px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Fakt, Helvetica Neue, arial, sans-serif;
  font-size: 14px;

  h1 {
    margin-bottom: 10px !important;
    font-size: 26px;
    font-weight: 600;
  }
  p {
    font-size: 10px;
    line-height: 1.4;
    font-size: 14px;
    color: #888;
    cursor: pointer;
  }
  p:hover {
    text-decoration: underline;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

const HeadingCont = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid black;
`;

const LeftRight = styled.div`
  width: 100%;
  height: 92%;
  /* background-color:aquamarine; */
  display: flex;
`;

const LeftBox = styled.div`
  margin-top: 10px;

  width: 65%;
  /* background-color:beige; */
  height: 100%;
  p {
    margin-bottom: 10px;
  }
`;
const RightBox = styled.div`
  width: 35%;
  /* background-color:azure; */
  height: 100%;
  img {
    padding: 30px 0px 0px 80px;
  }
`;
const StartedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Circles = styled.div`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 17px;
  display: flex;
  justify-content: center;
`;
const Started = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid black;
  height: 58px;
  display: flex;
  align-items: center;
  gap: 10px;
  h2 {
    font-size: 20px;
  }
  &:hover {
    background-color: rgba(255, 235, 205, 0.233);
    cursor: pointer;
  }
`;

const StartedA = styled.a`
  color: black;
  width: 100%;

  display: flex;
  align-items: center;
`;

const WebinarCont = styled.div`
  width: 100%;
  height: 130px;
  /* background-color:aliceblue; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
const WebinarBox = styled.div`
  width: 25%;
  height: 100%;
  background-color: white;
  h4 {
    color: #4199d4;
    text-decoration: underline;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }
  h4:hover {
    color: #1d557a;
    cursor: pointer;
  }
  p {
    font-size: 14px;
    color: #888;
    font-weight: 400;
    margin-top: -5%;
  }
`;
//eslint-disable-next-line
// const Inputs=styled.div`
// display:flex;
//     height:40px;
//     width:100%;
//     align-items:center;
//     gap:5px;

// `

export const HomeAfterLogin = () => {
  const [isTutorialOpen, setIstutorialOpen] = React.useState(false);
  // const UserName= localStorage.getItem("Username")
  let userid = localStorage.getItem("user");
  userid = JSON.parse(userid);
  if (userid === "BiA7vDMHjAMYfSYj38hyF3N2J5m2") {
    localStorage.setItem("user_name", JSON.stringify("Anil Pujari"));
  }
  const username = JSON.parse(localStorage.getItem("user_name"));
  return (
    <Container>
      <HeadingCont>
        <Heading>
          <h1>Welcome to Harvest, {username}!</h1>
          <div>
            <CloseIcon className={styles.crossIcon} />{" "}
            <p>I’m a pro at Harvest, hide this page forever</p>
          </div>
        </Heading>
      </HeadingCont>
      <LeftRight>
        <LeftBox>
          <p>Here's how to get started:</p>
          <StartedBox>
            <Started className={styles.tobeHover}>
              <Link
                className={styles.links}
                onClick={() => setIstutorialOpen(true)}
              >
                <Circles>
                  <PlayArrowIcon className={styles.paddings} />
                </Circles>
                <h2>Learn the basics of time tracking</h2>
              </Link>
            </Started>

            <Started className={styles.tobeHover}>
              <Link className={styles.links} to="/projects">
                <Circles>
                  <DescriptionIcon className={styles.paddings} />
                </Circles>
                <h2>Create a project</h2>
              </Link>
            </Started>
            <Started className={styles.tobeHover}>
              <Link to={"/time"} className={styles.links}>
                <Circles>
                  <TimerIcon className={styles.paddings} />
                </Circles>
                <h2>Track your first hour</h2>
              </Link>
            </Started>
            <Started>
              <StartedA
                className={styles.tobeHover}
                href="https://www.getharvest.com/apps"
                target="_blank"
              >
                <Circles>
                  <PhoneAndroidIcon className={styles.paddings} />
                </Circles>
                <h2>Get the desktop and mobile apps</h2>
              </StartedA>
            </Started>
          </StartedBox>
          <WebinarCont>
            <WebinarBox>
              <h4>Webinars</h4>
              <p>Live online classes. Pick the brains of our experts.</p>
            </WebinarBox>
            <WebinarBox>
              <h4>Help Center</h4>
              <p>Our knowledge base and FAQs.</p>
            </WebinarBox>
            <WebinarBox>
              <h4>Support</h4>
              <p>Friendly experts, always ready to help.</p>
            </WebinarBox>
          </WebinarCont>
        </LeftBox>

        <RightBox>
          <img
            width="287px"
            src="https://cache.harvestapp.com/assets/onboarding/landing-welcome@2x-ee286727d5ec08ac9eaab9cc7b5a72377d5dbc870f795e7815211e9cfa52a126.png"
            alt=""
          />
        </RightBox>
      </LeftRight>

      {isTutorialOpen && <VideoTutorial />}
    </Container>
  );
};
