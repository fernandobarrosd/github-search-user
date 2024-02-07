import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GithubProfile, GithubProfileType } from "./components/GithubProfile";
import { SocialNetworks } from "./components/SocialNetworks";
import { Loading } from "./components/Loading";
import { AlertError } from "./components/AlertError";

const links = [
  {
    id: 1,
    url: "https://github.com/fernandobarrosd",
    Icon: () => <FaGithub size={25} color="#FFFFFF" cursor="pointer"/>
  },
  {
    id: 2,
    url: "https://twitter.com/fbarrosdev",
    Icon: () => <FaTwitter size={25} color="#FFFFFF" cursor="pointer"/>
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/fernando-de-barros-204864241/",
    Icon: () => <FaLinkedin size={25} color="#FFFFFF" cursor="pointer"/>
  }
];

export function App() {
  const [ githubProfile, setGithubProfile ] = useState<GithubProfileType>();
  const [ githubProfileIsVisible, setGithubProfileIsVisible ] = useState(false);
  const [ loadingIsVisible, setLoadingIsVisible ] = useState(false);
  const [ alertErrorIsVisible, setAlertErrorIsVisible ] = useState(false);
  const [ alertErrorMessage, setAlertErrorMessage ] = useState("");

  async function handleSearch(username: string) {
    if (!username.length) {
      setAlertErrorIsVisible(true);
      setAlertErrorMessage("The username field does not empty");
      return;
    }
    else {
      setLoadingIsVisible(true);
      const requestURL = `https://api.github.com/users/${username}`;

      try {
        const data = await fetch(requestURL).then(response => response.json());
        if (data.message) {
          setGithubProfileIsVisible(false);
          setAlertErrorIsVisible(true);
          if (data.message === "Not Found") {
            setAlertErrorMessage(`${username} username is not exists`);
          }
        }
        else {
          if (alertErrorIsVisible) {
            setAlertErrorIsVisible(false);
            setAlertErrorMessage("");
          }
          setGithubProfile(data);
          setGithubProfileIsVisible(true);
        }
      }
    
      finally {
        setLoadingIsVisible(false);
      }
    }
    
  }
  return (
    <>
      <SocialNetworks links={links}/>
      <AlertError isVisible={alertErrorIsVisible} message={alertErrorMessage}
      onPressCloseButton={() => setAlertErrorIsVisible(false)}/>
      <SearchInput onSearch={handleSearch}/>
      <Loading isVisible={loadingIsVisible}/>
      { githubProfileIsVisible && (
        <GithubProfile profile={githubProfile}/>
      )}
    </>
  );
}