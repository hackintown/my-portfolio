import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/styles.css";
import { submitContactForm } from "../features/contactSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.contact);
  const [activeSection, setActiveSection] = useState(1);
  // Function to handle menu item click
  const handleMenuClick = (sectionNmber) => {
    setActiveSection(sectionNmber);
  };
  const [mobileToggle, setMobileToggle] = useState("false");

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  const [filterSelect, setFilterSelect] = useState("All");

  const handleFilterClick = (filterType) => {
    setFilterSelect(filterType);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
    console.log(submitContactForm(formData));
  };
  return (
    <main>
      <aside className={`sidebar ${mobileToggle ? "" : "active"}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src="my-avatar.png" alt="Manoj Mandal" width={80} />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Manoj Mandal">
              Manoj Mandal
            </h1>
            <p className="title">Full Stack Developer</p>
          </div>
          <button className="info_more-btn" onClick={handleMobileToggle}>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down" />
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator" />
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="manojkumarcse432@gmail.com" className="contact-link">
                  manojkumarcse432@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+918851967714" className="contact-link">
                  +91 8851967714
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1982-06-23">May 4, 2000</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>New Delhi, Delhi, India</address>
              </div>
            </li>
          </ul>
          <div className="separator" />
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://x.com/hackintown" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/mr_manoj_43"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/manojkumarmandal/"
                target="_blank"
                className="social-link"
              >
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item" onClick={() => handleMenuClick(1)}>
              <button className="navbar-link">About</button>
            </li>
            <li className="navbar-item" onClick={() => handleMenuClick(2)}>
              <button className="navbar-link">Resume</button>
            </li>
            <li className="navbar-item" onClick={() => handleMenuClick(3)}>
              <button className="navbar-link">Projects</button>
            </li>
            <li className="navbar-item" onClick={() => handleMenuClick(4)}>
              <button className="navbar-link">Blog</button>
            </li>
            <li className="navbar-item" onClick={() => handleMenuClick(5)}>
              <button className="navbar-link">Contact</button>
            </li>
          </ul>
        </nav>
        <article className={`section ${activeSection === 1 ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>
          <section className="about-text">
            <p>
              I'm a MERN Stack and Next.js Developer from New Delhi, India,
              specializing in web development. I enjoy transforming complex
              problems into efficient, scalable, and user-friendly web
              applications.
            </p>
            <p>
              My job is to build your web applications with a focus on
              functionality, performance, and user experience. I add a personal
              touch to each project, ensuring it is both visually appealing and
              easy to use. My aim is to effectively convey your message and
              identity through innovative and creative web solutions. I have
              developed web applications for many renowned companies.
            </p>
          </section>
          <section className="service">
            <h3 className="h3 service-title">What i'm doing</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Full Stack Development
                  </h4>
                  <div className="tech-icons-wrap">
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://i0.wp.com/softonitg.com/wp-content/uploads/2024/02/node-js-seeklogo-1.png?fit=836%2C512&ssl=1" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" />
                    </div>
                  </div>
                  <ul className="bullet-points">
                    <li className="service-item-text">
                      Building Responsive Website Frontend Using React & it's UI
                      library: MUI, Radix etc
                    </li>
                    <li className="service-item-text">
                      Creating application backend in Node.js, Express.js &
                      Database with MongoDB
                    </li>
                    <li className="service-item-text">
                      Using JWT & Firebase For Authentications
                    </li>
                  </ul>
                </div>
              </li>
              <li className="service-item">
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Next.js Development</h4>
                  <div className="tech-icons-wrap">
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://i0.wp.com/softonitg.com/wp-content/uploads/2024/02/node-js-seeklogo-1.png?fit=836%2C512&ssl=1" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" />
                    </div>
                  </div>
                  <ul className="bullet-points">
                    <li className="service-item-text">
                      Creating modern, high-performance frontends with Next.js
                    </li>
                    <li className="service-item-text">
                      Developing scalable backend services using Next.js API
                      routes
                    </li>
                    <li className="service-item-text">
                      Optimizing applications for SEO and performance
                    </li>
                  </ul>
                </div>
              </li>
              <li className="service-item">
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Mobile App Development
                  </h4>
                  <div className="tech-icons-wrap">
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=hmieDPifBlBM&format=png&color=000000" />
                    </div>
                  </div>
                  <ul className="bullet-points">
                    <li className="service-item-text">
                      Building responsive mobile applications with React Native
                      and Expo
                    </li>
                    <li className="service-item-text">
                      Creating and managing scalable backends for mobile apps
                    </li>
                    <li className="service-item-text">
                      Implementing secure authentication and user management in
                      mobile apps
                    </li>
                  </ul>
                </div>
              </li>
              <li className="service-item">
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    WordPress Development
                  </h4>
                  <div className="tech-icons-wrap">
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=13664&format=png&color=000000" />
                    </div>
                    <div className="tech-stack-icon">
                      <img src="https://img.icons8.com/?size=100&id=BnOyV43gP7fZ&format=png&color=000000" />
                    </div>
                  </div>
                  <ul className="bullet-points">
                    <li className="service-item-text">
                      Building responsive websites with WordPress and Elementor
                    </li>
                    <li className="service-item-text">
                      Creating and managing scalable WordPress backends
                    </li>
                    <li className="service-item-text">
                      Implementing security and authentication with WordPress
                      plugins
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item="">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="avatar-1.png"
                      alt="Daniel lewis"
                      width={60}
                      data-testimonials-avatar=""
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title=""
                  >
                    Daniel lewis
                  </h4>
                  <div className="testimonials-text" data-testimonials-text="">
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item="">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="avatar-2.png"
                      alt="Jessica miller"
                      width={60}
                      data-testimonials-avatar=""
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title=""
                  >
                    Jessica miller
                  </h4>
                  <div className="testimonials-text" data-testimonials-text="">
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item="">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="avatar-3.png"
                      alt="Emily evans"
                      width={60}
                      data-testimonials-avatar=""
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title=""
                  >
                    Emily evans
                  </h4>
                  <div className="testimonials-text" data-testimonials-text="">
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item="">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="avatar-4.png"
                      alt="Henry william"
                      width={60}
                      data-testimonials-avatar=""
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title=""
                  >
                    Henry william
                  </h4>
                  <div className="testimonials-text" data-testimonials-text="">
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <div className="modal-container" data-modal-container="">
            <div className="overlay" data-overlay="" />
            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn="">
                <ion-icon name="close-outline" />
              </button>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img
                    src="avatar-1.png"
                    alt="Daniel lewis"
                    width={80}
                    data-modal-img=""
                  />
                </figure>
                <img src="icon-quote.svg" alt="quote icon" />
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title="">
                  Daniel lewis
                </h4>
                <time dateTime="2021-06-14">14 June, 2021</time>
                <div data-modal-text="">
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* - clients */}

          <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>
            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <a href="#">
                  <img src="logo-1-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="logo-2-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="logo-3-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="logo-4-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="logo-5-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="logo-6-color.png" alt="client logo" />
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article className={`section ${activeSection === 2 ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Tula's Institute of Technology (Uttarakhand Technical
                  University), Dehradun, India
                </h4>
                <span>2018 — 2022</span>
                <p className="timeline-text">
                  Bacholr of Technology in Computer Science(B.Tech CSE)
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  N.K High School(BSEB), Dagmara, Bihar, India
                </h4>
                <span>2016 — 2018</span>
                <p className="timeline-text">
                  Intermediate (12<sup>th</sup>)
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  N.K High School(BSEB), Dagmara, Bihar, India
                </h4>
                <span>2015 — 2016</span>
                <p className="timeline-text">
                  School (10<sup>th</sup>)
                </p>
              </li>
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Software Development Engineer
                </h4>
                <p className="company-title">
                  Unified Credit Solutions Pvt Ltd ~ Full Time
                </p>
                <span>2015 — Present</span>
                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et qvuas molestias
                  exceptur.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Software Development Engineer
                </h4>
                <p className="company-title">
                  Eleserv Softech Pvt Ltd ~ Full Time
                </p>
                <span>2013 — 2015</span>
                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Software Development Engineer Intern
                </h4>
                <p className="company-title">
                  Sparx IT Solutions Pvt Ltd ~ Internship
                </p>
                <span>2010 — 2013</span>
                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
            </ol>
          </section>
          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>
            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Web design</h5>
                  <data value={80}>80%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "80%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Graphic design</h5>
                  <data value={70}>70%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "70%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Branding</h5>
                  <data value={90}>90%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "90%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">WordPress</h5>
                  <data value={50}>50%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "50%" }}
                  />
                </div>
              </li>
            </ul>
          </section>
        </article>
        <article className={`section ${activeSection === 3 ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
            <ul className="filter-list">
              <li className="filter-item">
                <button
                  className="active"
                  data-filter-btn=""
                  onClick={() => handleFilterClick("All")}
                >
                  All
                </button>
              </li>
              <li className="filter-item">
                <button
                  data-filter-btn=""
                  onClick={() => handleFilterClick("Web development")}
                >
                  Web development
                </button>
              </li>
              <li className="filter-item">
                <button
                  data-filter-btn=""
                  onClick={() => handleFilterClick("Applications")}
                >
                  Applications
                </button>
              </li>
            </ul>
            <div className="filter-select-box">
              <button className="filter-select" data-select="">
                <div className="select-value" data-selecct-value="">
                  Select category
                </div>
                <div className="select-icon">
                  <ion-icon name="chevron-down" />
                </div>
              </button>
              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item="">All</button>
                </li>
                <li className="select-item">
                  <button data-select-item="">Web development</button>
                </li>
                <li className="select-item">
                  <button data-select-item="">Applications</button>
                </li>
              </ul>
            </div>
            <ul className="project-list">
              {filterSelect === "All" && (
                <>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <a
                          href="https://www.hackintown.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-item-icon-box"
                        >
                          <ion-icon name="eye-outline" />
                        </a>
                        <img src="project-1.jpg" alt="finance" loading="lazy" />
                      </figure>
                      <h3 className="project-title">Hackintown</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-2.png" alt="orizon" loading="lazy" />
                      </figure>
                      <h3 className="project-title">SMM Panel</h3>
                      <p className="project-category">Web development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-3.jpg" alt="fundo" loading="lazy" />
                      </figure>
                      <h3 className="project-title">E-Commerce</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="applications"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img
                          src="project-4.png"
                          alt="brawlhalla"
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="project-title">Curewells</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-5.png" alt="dsm." loading="lazy" />
                      </figure>
                      <h3 className="project-title">Betting App</h3>
                      <p className="project-category">
                        IOS/Android Application
                      </p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img
                          src="project-6.png"
                          alt="metaspark"
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="project-title">Quora Clone Features</h3>
                      <p className="project-category">Web design</p>
                    </a>
                  </li>
                </>
              )}
              {filterSelect === "Web development" && (
                <>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-1.jpg" alt="finance" loading="lazy" />
                      </figure>
                      <h3 className="project-title">Hackintown</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-2.png" alt="orizon" loading="lazy" />
                      </figure>
                      <h3 className="project-title">SMM Panel</h3>
                      <p className="project-category">Web development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-3.jpg" alt="fundo" loading="lazy" />
                      </figure>
                      <h3 className="project-title">E-Commerce</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="applications"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img
                          src="project-4.png"
                          alt="brawlhalla"
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="project-title">Curewells</h3>
                      <p className="project-category">Web Development</p>
                    </a>
                  </li>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img
                          src="project-6.png"
                          alt="metaspark"
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="project-title">Quora Clone Features</h3>
                      <p className="project-category">Web design</p>
                    </a>
                  </li>
                </>
              )}
              {filterSelect === "Applications" && (
                <>
                  <li
                    className="project-item  active"
                    data-filter-item=""
                    data-category="web design"
                  >
                    <a href="#">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline" />
                        </div>
                        <img src="project-5.png" alt="dsm." loading="lazy" />
                      </figure>
                      <h3 className="project-title">Betting App</h3>
                      <p className="project-category">
                        IOS/Android Application
                      </p>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </section>
        </article>
        <article className={`section ${activeSection === 4 ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>
          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-1.jpg"
                      alt="Design conferences in 2022"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      Design conferences in 2022
                    </h3>
                    <p className="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt,
                      explicabo.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-2.jpg"
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      Best fonts every designer
                    </h3>
                    <p className="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                      est eligendi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-3.jpg"
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #80</h3>
                    <p className="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis
                      nostrum exercitationem ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-4.jpg"
                      alt="UI interactions of the week"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      UI interactions of the week
                    </h3>
                    <p className="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis
                      nostrud exercitation ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-5.jpg"
                      alt="The forgotten art of spacing"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      The forgotten art of spacing
                    </h3>
                    <p className="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="blog-6.jpg"
                      alt="Design digest #79"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #79</h3>
                    <p className="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat,
                      velit esse cillum.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article className={`section ${activeSection === 5 ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="mapbox" data-mapbox="">
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                width={400}
                height={300}
                loading="lazy"
              />
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            {loading && <p>Loading...</p>}
            {success && <p>Form submitted successfully!</p>}
            {error && <p>Error: {error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="form-input"
                placeholder="Your Message"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button className="form-btn" type="submit">
                <ion-icon name="paper-plane" />
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>
  );
};
export default Home;
