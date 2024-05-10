import React, { useEffect, useState } from "react";
import PhoneIcon from "../icons/PhoneIcon";
import "../styles/App.scss";

const Phone = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY || document.documentElement.scrollTop;
      setScrollHeight(height);
    };

    window.addEventListener("scroll", handleScroll);
    // console.log(scrollHeight);
    if (scrollHeight < 160 || scrollHeight >= 2270) {
      const phone = document.querySelector(".PhoneColor") as HTMLElement;
      const phoneBtn = document.querySelector(".PhoneButton") as HTMLElement;
      if (phone) {
        phone.style.fill = "white";
        phoneBtn.style.borderColor = "white";
      }
    }
    if ((scrollHeight >= 160 && scrollHeight < 2270) || (scrollHeight >= 3450 && scrollHeight < 5270)) {
      const phone = document.querySelector(".PhoneColor") as HTMLElement;
      const phoneBtn = document.querySelector(".PhoneButton") as HTMLElement;
      if (phone) {
        phone.style.fill = "black";
        phoneBtn.style.borderColor = "black";
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHeight]);





  //popup
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Ім'я:", name);
    console.log("Email:", email);
 
    setName("");
    setEmail("");
    closeModal();
  };
  return (
    <>
    

    <div className="Phone"  onClick={openModal}>
      <button className="PhoneButton">
        <PhoneIcon size={35}></PhoneIcon>
      </button>
    </div>

    {isOpen && (
      <div className="modal-wrapper">
<div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Замовити дзвінок</h2>
            <form >
              <input
                placeholder="Ім’я"
              />
              <input
                placeholder="Телефон"
              />
              <button className="modal-btn" type="submit">Відправити</button>
            </form>
            
          </div>
        </div>
      </div>
        
      )}
</>
  );
};

export default Phone;
