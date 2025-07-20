import "../../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact-section">
      <div className="contact-body">
        <h2>Contact me</h2>
        <p>
          Please contact me if you think our work could be mutually beneficial!
        </p>
        <div>
          <div className="icon-p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>phone</title>
              <path
                fill="white"
                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
              />
            </svg>
            <p>+1 (829) 865 8570</p>
          </div>

          <div className="icon-p">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
            >
              <title>email-outline</title>
              <path
                fill="white"
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
              />
            </svg>
            <p>eddybusiness2003@gmail.com</p>
          </div>
          <div className="icons-container">
            <a
              href="https://github.com/Just-404"
              target="_blank"
              rel="noopener nooreferrer"
            >
              <img src="/icons/github.svg" alt="Github logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/eddy-rodr%C3%ADguez-osoria-8089b8366/"
              target="_blank"
              rel="noopener nooreferrer"
            >
              <img src="/icons/linkedin.svg" alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
      <img
        className="profile-img"
        src="/profile-contact.jpeg"
        alt="Eddy Rodriguez"
      />
    </div>
  );
}
