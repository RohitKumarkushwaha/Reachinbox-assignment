import { useEffect, useState } from "react";
import axios from "axios";
import CustomMail from "./CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import DeletePopUp from "./DeletePopUp";

function CenterPage({ selectedThread }) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [currentMail, setCurrentMail] = useState([]);

  const togglePopUpVisibility = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  const deleteMail = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsDeleteVisible(false);
    } catch (err) {
      console.error("Failed to delete the mail:", err);
    }
  };

  useEffect(() => {
    const handleKeyboardShortcuts = (event) => {
      if (event.key.toLowerCase() === "d") {
        setIsDeleteVisible(!isDeleteVisible);
        console.log("D key pressed");
      } else if (event.key.toLowerCase() === "r") {
        setIsPopUpVisible(!isPopUpVisible);
        console.log("R key pressed");
      }
    };

    document.addEventListener("keydown", handleKeyboardShortcuts);

    return () => {
      document.removeEventListener("keydown", handleKeyboardShortcuts);
    };
  }, [isDeleteVisible, isPopUpVisible]);

  useEffect(() => {
    const retrieveMail = async () => {
      if (selectedThread) {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(
            `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setCurrentMail(response.data.data);
        } catch (err) {
          console.error("Error fetching the mail:", err);
        }
      } else {
        setCurrentMail([
          {
            id: 0,
            fromName: "",
            fromEmail: "jeanne@icloud.com",
            toName: "",
            toEmail: "lennon.j@mail.com",
            subject: "New Product Launch",
            body: "I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.",
            sentAt: "2022-01-01T00:00:00.000Z",
          },
        ]);
      }
    };
    retrieveMail();
  }, [selectedThread, isDeleteVisible]);

  return (
    <div className="overflow-y-scroll no-scrollbar h-full">
      <div className="border-b-2 dark:border-[#33383F] border-[#E0E0E0] w-full flex justify-between px-8 py-4">
        <div>
          <div className="dark:text-white text-black text-lg">Orlando</div>
          <div className="dark:text-[#FFFFFF66] text-[#343A40B2] text-sm">
            orladom@gmail.com
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex dark:bg-[#1F1F1F] bg-white border dark:border-[#343A40] items-center text-black dark:text-white rounded-md py-2 px-3 text-sm">
            <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
            Move <SlArrowDown className="ml-2" />
          </div>
          <div className="dark:bg-[#1F1F1F] border bg-white text-black dark:text-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm">
            ...
          </div>
        </div>
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full dark:bg-[#33383F] bg-[#E0E0E0]"></div>{" "}
        {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div className="dark:bg-[#171819] bg-[#E0E0E0] px-4 py-1 text-sm text-black dark:text-white">
            {" "}
            Today
          </div>
        </div>
      </div>

      <div>
        {currentMail.map((mail) => (
          <Mail key={mail.id} {...mail} />
        ))}
      </div>

      <div className="py-8 mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div> {/* Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          {" "}
          <div className="dark:bg-[#171819] bg-[#E0E0E0] text-black dark:text-white px-4 py-1 text-sm flex items-center space-x-1">
            {" "}
            <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
            <span className="text-blue-500"> 4 </span>
            <span>replies</span>
          </div>
        </div>
      </div>

      <div className="mx-8">
        {isPopUpVisible && (
          <CustomMail
            threadId={selectedThread}
            onClose={() => setIsPopUpVisible(false)}
          />
        )}
      </div>
      <div
        className="cursor-pointer flex items-center fixed bottom-0 ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-10 py-2"
        onClick={togglePopUpVisibility}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>
      {isDeleteVisible && (
        <DeletePopUp
          onCancel={() => setIsDeleteVisible(false)}
          onDelete={deleteMail}
        />
      )}
    </div>
  );
}

const Mail = ({ fromEmail, toEmail, subject, body, sentAt }) => {
  return (
    <div className="dark:bg-[#141517] bg-white border dark:border-[#343A40] mx-8 rounded-md my-3">
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2">
            <div className="font-bold dark:text-white text-black ">{subject}</div>
            <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">from: {fromEmail}</div>
            <div className="dark:text-[#AEAEAE] text-[#637381] text-sm">to: {toEmail}</div>
          </div>
          <div className="text-sm dark:text-[#7F7F7F] text-[#637381]">{new Date(sentAt).toLocaleDateString()} : {new Date(sentAt).toLocaleTimeString()}</div>
        </div>
        <div
          className="py-4 dark:text-[#E1E0E0] text-[#172B4D] w-2/3"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default CenterPage;
