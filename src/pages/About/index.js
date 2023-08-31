import AuthorBio from "../../components/AuthorBio";
import HelloMsg from "../../components/HelloMsg";
import AboutImg from "../../assets/images/about_me.svg";

function About() {
  return (
    <>
      <HelloMsg />
      <AuthorBio />
      <img
        src={AboutImg}
        style={{ width: "280px", maxWidth: "60%" }}
        alt="About me"
      />
    </>
  );
}

export default About;
