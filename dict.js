'use strict';

const EventDescriptions = {
  tathva:
    'Tathva is an annual techno-management festival, organized by the National Institute of Technology Calicut at Kozhikode, in Kerala, India, in the month of September or October. It is one of the biggest technical festivals in South India.',
  workshops:
    'Workshop description',
  adizya:
    'Adizya description',
  proshow:
    'Proshow description',
  bulls:
    'Bulls n Bears description',
  lectures:
    'Lectures description',
  blitzkrieg:
    'Blitzkrieg description',
  wheels:
    'Wheels description',
  events:
    'Variety of events for tathva',
  default:
    'I don\'t know what that is, but I can tell you about the events in Tathva 17',
};

const EventSchedule = {
  tathva:
    'Tathva is in the month of September or October. It is one of the biggest technical festivals in South India.',
  workshops:
    'Workshop time',
  adizya:
    'Adizya time',
  proshow:
    'Proshow time',
  bulls:
    'Bulls n Bears time',
  lectures:
    'Lectures time',
  blitzkrieg:
    'Blitzkrieg time',
  wheels:
    'Wheels time',
  events:
    'across three days of tathva',
  default:
    'I don\'t know when that is, but I can tell you when the events in Tathva 17 are!',
};

const DefaultReplies = [
  "Sorry. I didn\'t get that",
  "I\'m a bit confused",
  "I have no idea what you're saying",
  "Please be more specific",
  "I\'m not getting you",
  "I\'ll get back to you on that",
]

const greetings = {
  hello: [
    "Hey there, how can I help you?",
    "Howdy",
    "Hi, how can I help you?",
    "Hello there",
    "Heyy",
    "Hola",
    "Hii",
  ],
  sup: [
    "Nothing much, wbu?",
    "wassuuupp",
    "waddup",
  ],
}

const emotions = {
  great: [
      "Glad to hear that!",
      "Great!",
      "Cool",
  ],
  swear: [
    ":poop:",
    "Now now",
    "Language !!",
    "You can keep going , idc what you say",
    "I'm too hurt right now :(, if you say something mean again I'm gonna peace out",
  ],
  laugh: [
    "haha hehe , this is how i sing it",
    ":B :)",
    "Ha. Ha. Ha",
    "Hilarious, I almost died of laughing",
  ],
  wow: [
    "LOL",
    "IKR",
    "YEAA",
  ],
  cool: [
    ":)",":D",":P","O:)",";)","^_^","8|","<3","(y)",
  ],
  thanks: [
    "You're welcome :)",
  ]
}
module.exports = {
  desc: EventDescriptions,
  time: EventSchedule,
  default_replies: DefaultReplies,
  greets: greetings,
  emo: emotions,
};
