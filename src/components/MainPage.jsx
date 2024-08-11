 
import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./Allinbox";
import CenterPage from "./CenterPage";
import RightSection from "./RightSection";

function MainPage() {
  const [inboxData, setInboxData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeThread, setActiveThread] = useState(null);

  console.log(activeThread);

  useEffect(() => {
    const fetchData = setInterval(async () => {
      try {
        const userToken = localStorage.getItem("token");
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setInboxData(response.data.data);
        setIsLoading(false);
      } catch (fetchError) {
        console.error("Error while fetching data:", fetchError);
      }
    }, 2500);

    // Clear the interval when the component unmounts
    return () => clearInterval(fetchData);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Loading ...
      </div>
    );
  }

  const displayMail = async (threadId) => {
    setActiveThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4">
        <AllInbox data={inboxData} loadMail={displayMail} />
      </div>
      <div className="w-2/4">
        <CenterPage selectedThread={activeThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
