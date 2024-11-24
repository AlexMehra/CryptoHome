// import React from "react";
// import "./BlogPage.css";
// import downloads from '../../assets/download.gif';

// const BlogPage = () => {
//   return (
//     <div className="crypto-homepage">

//       {/* Hero Section */}
//       <header className="hero-section">
//         <div className="hero-content">
//           <h1>
//             The Most <span>Secure</span> Crypto Currency
//           </h1>
//           <p>
//             Lorem ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//           <div className="hero-buttons">
//             <button className="btn-contact">Contact Us</button>
//             <button className="btn-join">Join Now</button>
//           </div>
//         </div>
//         <div className="car">
//         <div className="hero-image">
//           <img
//             src={downloads}
//             alt="Crypto Illustration"
//           />
//         </div>
//         </div>
//       </header>

      

//       {/* Info Section */}
//       <section className="info-section">
//         <p>Invest in cryptocurrency options with easy ways to trade and secure your future.</p>
//         <button className="btn-read-more">Read More</button>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;












import React, { useState } from "react";
import "./BlogPage.css";
import downloads from "../../assets/download.gif";

const BlogPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="crypto-homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            The Most <span>Secure</span> Crypto Currency
          </h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis dolore ab nisi vero laudantium libero, eaque perferendis eveniet corrupti sit ut deserunt eos voluptatum maxime consequuntur suscipit quae hic.
          </p>
          <div className="hero-buttons">
            <button className="btn-contact">Contact Us</button>
            <button className="btn-join">Join Now</button>
          </div>
        </div>
        <div className="car">
          <div className="hero-image">
            <img src={downloads} alt="Crypto Illustration" />
          </div>
        </div>
      </header>



      {/* Public Chat Box */}
      <div className="chat-box">
        <h2>Public Chat</h2>
        <div className="chat-messages">
          {messages.length === 0 ? (
            <p>No messages yet. Start the conversation!</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="chat-message">
                {message}
              </div>
            ))
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        
      </div>
    </div>
  );
};

export default BlogPage;
