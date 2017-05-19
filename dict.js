'use strict';

const EventDescriptions = {
  tathva: [
    'Tathva is an annual techno-management festival, organized by the National Institute of Technology Calicut at Kozhikode, in Kerala, India, in the month of September or October. It is one of the biggest technical festivals in South India.',
  ],
  workshops: [
    'Workshop description',
  ],
  adizya: [
    'Adizya description',
  ],
  proshow: [
    'Proshow description',
  ],
  bulls: [
    'Bulls n Bears description',
  ],
  lectures: [
    'Lectures description',
  ],
  blitzkrieg: [
    'Blitzkrieg description',
  ],
  wheels: [
    'Wheels description',
  ],
  default: [
    'I don\'t know what that is, but I can tell you about the events in Tathva 17',
  ],
};

const EventSchedule = {
  tathva: [
    'Tathva is in the month of September or October. It is one of the biggest technical festivals in South India.',
  ],
  workshops: [
    'Workshop time',
  ],
  adizya: [
    'Adizya time',
  ],
  proshow: [
    'Proshow time',
  ],
  bulls: [
    'Bulls n Bears time',
  ],
  lectures: [
    'Lectures time',
  ],
  blitzkrieg: [
    'Blitzkrieg time',
  ],
  wheels: [
    'Wheels time',
  ],
  default: [
    'I don\'t know when that is, but I can tell you when the events in Tathva 17 are!',
  ],
};

const DefaultReplies = [
  "Sorry. I didn\'t get that",
  "I\'m a bit confused",
  "I have no idea what you're saying",
  "Please be more specific",
  "I\'m not getting you",
  "I\'ll get back to you on that",
]

module.exports = {
  desc: EventDescriptions,
  time: EventSchedule,
  default_replies: DefaultReplies,
};
