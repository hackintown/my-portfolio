const config = {
    apiBaseUrl:
      process.env.NODE_ENV === "production"
        ? "https://my-portfolio-j1b9.onrender.com"
        : "http://localhost:5000",
  };
  
  export default config;
  