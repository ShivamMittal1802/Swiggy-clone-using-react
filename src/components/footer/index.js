import React from "react";

const list = [
  {
    id: 0,
    src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc",
    alt: "facebook-logo",
  },
  {
    id: 1,
    src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd",
    alt: "Pinterest-log",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh",
    alt: "instagram-logo",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv",
    alt: "twitter-logo",
  },
];

const Footer = () => {
  const listItem = list.map((item) => {
    return <img key={item.id} src={item.src} alt={item.alt} />;
  });

  return (
    <div className="footer">
      <div id="swiggy">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          alt=""
        />
      </div>
      <div id="swiggy-2023">2023 Swiggy</div>
      <div id="socials">{listItem}</div>
    </div>
  );
};

export default Footer;
