import React, { useState, useEffect } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error'
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [loading, setLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setIsEmailValid(isValidEmail(value)); // Validate email
    }
  };

  useEffect(() => {
    setIsFormValid(
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.description.trim() !== "" &&
      isValidEmail(formData.email) // Check email validity
    );
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!isValidEmail(formData.email)) {
      setSnackbar({
        open: true,
        message: "Invalid email format. Please enter a valid email.",
        severity: "error",
      });
      setLoading(false);
      return;
    }

    try {
      // const response = await fetch("http://localhost:5000/send-email", {
      const response = await fetch("https://newportfolio-pz5l.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", description: "" }); // Reset form fields
      } else {
        setSnackbar({
          open: true,
          message: "Failed to send message. Try again.",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "An error occurred. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className={`inputEmail ${!isEmailValid ? "error" : ""}`}
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handleSubmit} disabled={!isFormValid || loading} className={`submit-button ${!isFormValid || loading ? "disabled" : ""}`}>
            {loading ? <CircularProgress size={20} color="inherit" /> : "Submit"}
            </button>
          </div>
        </Animate>

        {/* Snackbar for Success and Error Messages */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{
              width: "100%",
              backgroundColor: "var(--yellow-theme-main-color)",
              color: "var(--yellow-theme-nav-background-color)",
              fontSize: "1.5rem"
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Contact;
