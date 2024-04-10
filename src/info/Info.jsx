import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import { Link } from "react-router-dom";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(229,198,77)", "rgb(229,198,77)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Thomas",
  lastName: "Le Hébel",
  initials: "Tlh", // the example uses first and last, but feel free to use three or more if you like.
  position: "an upcoming fullstack developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
      link: "https://tenor.com/fr/view/coffee-morning-good-morning-coffee-images-gif-12121789316463949651",
    },
    {
      emoji: "🌎",
      text: "based in Nantes",
      link: "https://www.levoyageanantes.fr/a-faire/activites/tout-gratuit/",
    },
    {
      emoji: "💼",
      text: "having studied development at Le Reacteur, I am currently seeking a 6-month internship",
      link: "https://www.lereacteur.io/",
    },
    {
      emoji: "📧",
      text: "thomaslh89@gmail.com",
      link: "mailto:thomaslh89@gmail.com",
    },
    {
      emoji: " 📑",
      text: "my Resume",
      link: "/resume",
    },
  ],
  socials: [
    {
      link: "https://github.com/thomaslh89",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/thomas-le-h%C3%A9bel-1b566585",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hi, I'm Thomas Le Hébel After several years as an independent in various entrepreneurial ventures, I have decided to embark on a career change into development. Following training at Le Reacteur, I am currently seeking a 6-month internship.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html5",
      "css3",
      "tailwind",
      "nodejs",
      "express",
      "mangoDB",
      "reactnative",
    ],
    exposedTo: ["zapier", "airtable", "adobe illustrator", "hubspot", "notion"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "DIY",
      emoji: "🔨",
    },
    {
      label: "crypto",
      emoji: "₿",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "WhatWhatch",
      live: "https://whatwhatch.lehebel.com/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/thomaslh89/WhatWatchFront", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Vinted Clone",
      live: "vinted.lehebel.com",
      source: "https://github.com/thomaslh89/VintedV2",
      image: mock2,
    },
    {
      title: "Marvel",
      live: "https://marvel.lehebel.com",
      source: "https://github.com/thomaslh89/Marvel",
      image: mock3,
    },
    {
      title: "Airbnb Clone",
      // live: "",
      source: "https://github.com/thomaslh89/Airbnb",
      image: mock4,
    },
  ],
};
