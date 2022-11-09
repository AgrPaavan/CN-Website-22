import { React, useState } from "react";
import button from "./assets/button.svg";

function Chatbot() {
  const [toggle, setToggle] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [userMessage, setUserMessage] = useState([]);
  const [msg, setMsg] = useState("");

  return (
    <div id="grade">
      <div class="container">
        <div class="fixed bottom-3 right-3 md:bottom-10 md:right-10 flex flex-col z-20">
          <div
            class={classNames(
              toggle ? "opacity-100 -translate-y-10 z-0" : "opacity-0 -z-50",
              "bg-opacity-60 backdrop-blur-sm backdrop-filter bg-neutral-900 w-72 h-[350px] rounded-lg mb-6 ease-in-out duration-500 transition-all",
            )}
          >
            <div class="flex flex-row justify-center items-center w-full sticky top-0 bg-opacity-70 backdrop-blur-sm backdrop-filter bg-neutral-700 rounded-t-lg text-xl px-5">
              <div class="flex flex-row content-center justify-center p-2">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="person"
                  className="w-20"
                />
              </div>
              <div>
                <p class="text-white text-sm">
                  Hi. My name is Ordinance. How can I help you?
                </p>
              </div>
            </div>
            <div class="py-5 font-semibold h-[250px] flex flex-col overflow-y-scroll">
              {userMessage.map((e) => (
                <p className="w-[70%] self-end rounded-t-lg rounded-bl-lg bg-white my-1 mx-2 py-1 px-3 text-right text-sm text-black">
                  {e}
                </p>
              ))}
              {/* <p className="w-[70%] self-start rounded-t-lg rounded-br-lg bg-[#ee4623] my-1 mx-2 py-1 px-3 text-left text-sm text-white"></p> */}
            </div>
            <div class="bg-neutral-800 w-full text-sm p-5 rounded-b-lg">
              <form
                className="flex flex-row justify-between items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Write a message..."
                  value={msg}
                  className="w-4/5 border-none p-3 rounded-3xl text-left text-black"
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button
                  class=" text-white p-2 bg-transparent border-none outline-none cursor-pointer"
                  onClick={() => {
                    setUserMessage((userMessage) => [...userMessage, msg]);
                    setMsg("");
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div class="self-end" onClick={() => setToggle(!toggle)}>
            <img src={button} alt="" className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
