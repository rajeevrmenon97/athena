'use strict';

const Wit = require('node-wit').Wit;
const FB = require('./facebook.js');
const Config = require('./const.js');
const db = require('./dict.js');

const firstEntityValue = (entities, entity) => {
  const val = entities && entities[entity] &&
    Array.isArray(entities[entity]) &&
    entities[entity].length > 0 &&
    entities[entity][0].value;
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
};


// Bot actions
const actions = {
  say(sessionId, context, message, cb) {
    console.log(message);

    // Bot testing mode, run cb() and return
    if (require.main === module) {
      cb();
      return;
    }

    // Our bot has something to say!
    // Let's retrieve the Facebook user whose session belongs to from context
    // TODO: need to get Facebook user name
    const recipientId = context._fbid_;
    if (recipientId) {
      // Found our recipient!
      FB.fbMessage(recipientId, message, (err, data) => {
        if (err) {
          console.log(
            'Oops! An error occurred while forwarding the response to',
            recipientId,
            ':',
            err
          );
        }

        // Let's give the wheel back to our bot
        cb();
      });
    } else {
      console.log('Oops! Couldn\'t find user in context:', context);
      // Giving the wheel back to our bot
      cb();
    }
  },
    merge(sessionId, context, entities, message, cb) {
    // Retrieve the entity and store it into a context field

    delete context.anstext;

    const qstn = firstEntityValue(entities, 'quest');
    if (qstn) {
      context.qstn = qstn;
    }
    else {
      delete context.qstn;
    }

    const evnt = firstEntityValue(entities, 'event');
    if (evnt) {
      context.evnt = evnt;
    }
    else {
      delete context.evnt;
    }

    const greet = firstEntityValue(entities, 'greeting');
    if (greet) {
      context.greet = greet;
    }
    else {
      delete context.greet;
    }
    const senti = firstEntityValue(entities, 'sentiment');
    if (senti) {
      context.senti = senti;
    }
    else {
      delete context.senti;
    }
    const personal = firstEntityValue(entities, 'personal');
    if (personal) {
      context.personal = personal;
    }
    else {
      delete context.personal;
    }
    cb(context);
  },

  error(sessionId, context, error) {
    console.log(error.message);
  },

  ['quest-action'](sessionId, context, cb) {

      if(context.qstn == "what") {
        const text = db.desc[context.evnt || 'default'];
        context.anstext = text;
      }
      else if (context.qstn == "when"){
        const text = db.time[context.evnt || 'default'];
        context.anstext = text;
      }
      else {
        context.anstext = "I cannot answer that questions right now.";
      }
      cb(context);

  },
  ['default-reply'](sessionId, context, cb) {

    if (context.evnt){
      const text = db.desc[context.evnt || 'default'];
      context.anstext = text;
    }
    else {
        const text = db.default_replies;
        context.anstext = text[Math.floor(Math.random() * text.length)];
    }
        cb(context);

  },

  ['greeting-reply'](sessionId, context, cb) {

      if(context.greet == "hello") {
        const text = db.greets[context.greet || "hello"];
        context.anstext = text[Math.floor(Math.random() * text.length)];
      }
      else {
        const text = db.greets[context.greet || "sup"];
        context.anstext = text[Math.floor(Math.random() * text.length)];
      }
      cb(context);

  },
  ['get-emotion'](sessionId, context, cb) {

      if(context.senti) {
        const text = db.emo[context.senti || "cool"];
        context.anstext = text[Math.floor(Math.random() * text.length)];
      }
      else {
        context.anstext = "Didn\'t get you there!";
      }
      cb(context);

  },
  ['get-personal'](sessionId, context, cb) {

      if(context.personal) {
        const text = db.pers[context.personal];
        context.anstext = text[Math.floor(Math.random() * text.length)];
      }
      else {
        context.anstext = "Didn\'t get you there!";
      }
      cb(context);

  },
};


const getWit = () => {
  return new Wit(Config.WIT_TOKEN, actions);
};

exports.getWit = getWit;


if (require.main === module) {
  console.log("Bot testing mode.");
  const client = getWit();
  client.interactive();
}
