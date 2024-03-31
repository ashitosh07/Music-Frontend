import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { contactAnimation } from "../../hooks/useAnimation";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "itsproali_portfolio",
        "itsproali_portfolio",
        form.current,
        "H-ispiDvwdbG_76iq"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="pt-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 p-16">
        <p className="text-center text-6xl font-bold">Contact Us</p>
        <div className="centered-container">
          <p className="text-neutral font-medium">
            If you have made a donation of at least $150.00 and would like a
            hard copy CD of the album please email a copy of donation
            receipt(email) along with your mailing address to: <br />
            <span className="text-blue-500">dummyemail@gmail.com</span>
          </p>
          <br />
          <p className="text-neutral font-medium">
            If you have made a donation of at least $250.00 and would like to
            have access to a video that shares the creative process and videos
            of some of the recording please email a copy of donation
            receipt(email) along with your mailing address to: <br />
            <span className="text-blue-500">dummyemail@gmail.com</span>
          </p>
          <br />
        </div>
      </div>
      <div className="parent py-20 md:p-20 flex flex-col-reverse md:flex-row p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 flex-col-reverse">
          <div
            className=""
            ref={ref}
            initial="hidden"
            animate={viewDiv && "visible"}
            variants={contactAnimation}
          >
            <div
              className="form-container"
              style={{
                borderRadius: "10px",
                backgroundColor: "#111111",
              }}
            >
              <form
                ref={form}
                onSubmit={handleSend}
                style={{
                  // border: '2px solid',
                  borderImage:
                    "linear-gradient(to right, #0a0d0b, #1c3e2a, #237349, #22ad69, #12eb8b) 2 0",
                }}
              >
                <div className="form-group" style={{ marginBottom: "6px" }}>
                  <label htmlFor="name">Name</label>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    style={{
                      color: "black",
                      backgroundColor: "white",
                    }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "6px" }}>
                  <label htmlFor="email">Email</label>
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    style={{ color: "black", backgroundColor: "white" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Description">Description</label>
                  <textarea
                    className="input-field"
                    name="Description"
                    id="Description"
                    cols="30"
                    rows="5"
                    placeholder="Description"
                    required
                    style={{ color: "black", backgroundColor: "white" }}
                  ></textarea>
                </div>
                <input type="submit" value="Send" className="primary-button" />
              </form>
            </div>
          </div>
          <div
            className="flex flex-col  items-start justify-center p-6"
            initial={{ y: 50, opacity: 0 }}
            animate={viewDiv && "visible"}
            variants={contactAnimation}
          >
            <h1
              className="text-3xl font-medium"
              style={{
                marginBottom: "20px",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "36px",
                marginRight: "40%",
              }}
            >
              Contact Us
            </h1>
            <p
              className="text-1xl font-medium"
              style={{
                color: "#B3B3B3",
                marginBottom: "40px",
                marginRight: "10%",
              }}
            >
              Feel free to reach out to us with any inquiries, feedback, or
              collaboration opportunities. We're here to listen and assist you
              on your musical journey
            </p>

            <div
              className="flex items-center"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <a href="" target="_blank">
                <button
                  className="primary-button"
                  style={{ marginLeft: "25px" }}
                >
                  <span
                    style={{
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Book a Call
                  </span>
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
