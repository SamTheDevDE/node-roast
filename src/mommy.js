#!/usr/bin/env node

const mommys = {
    "moods": {
        "chill": {
            "positive": [
                "*pets your head*",
                "*gives you scritches*",
                "you're such a smart cookie~",
                "that's a good {affectionate_term}~",
                "{role} thinks {pronoun} little {affectionate_term} earned a big hug~",
                "good {affectionate_term}~\n{role}'s so proud of you~",
                "aww, what a good {affectionate_term}~\n{role} knew you could do it~",
                "you did it~!",
                "{role} loves you~",
                "*gives you a sticker*",
                "*boops your nose*",
                "*wraps you in a big hug*",
                "well done~!\n{role} is so happy for you~",
                "what a good {affectionate_term} you are~",
                "that's {role}'s clever little {affectionate_term}~",
                "you're doing so well~!",
                "you're making {role} so happy~",
                "{role} loves {pronoun} cute little {affectionate_term}~"
            ],

            "negative": [
                "{role} believes in you~",
                "don't forget to hydrate~",
                "aww, you'll get it next time~",
                "do you need {role}'s help~?",
                "everything's gonna be ok~",
                "{role} still loves you no matter what~",
                "oh no did {role}'s little {affectionate_term} make a big mess~?",
                "{role} knows {pronoun} little {affectionate_term} can do better~",
                "{role} still loves you~",
                "{role} thinks {pronoun} little {affectionate_term} is getting close~",
                "it's ok, {role}'s here for you~",
                "oh, darling, you're almost there~",
                "does {role}'s little {affectionate_term} need a bit of a break~?",
                "oops~! {role} loves you anyways~",
                "try again for {role}, {affectionate_term}~",
                "don't worry, {role} knows you can do it~"
            ],
            "overflow": [
                "{role} has executed too many times and needs to take a nap~"
            ]
        },

        "ominous": {
            "positive": [
                "What you have set in motion today will be remembered for aeons to come!",
                "{role} will see to it that {pronoun} little {affectionate_term}'s name is feared~",
                "{role} is proud of the evil seed {pronoun} {affectionate_term} has planted into this accursed world"
            ],
            "negative": [
                "Ah, failure? {role} will make sure the stars are right next time",
                "Does {role}'s little {affectionate_term} need more time for worship~?",
                "May the mark of the beast stain your flesh forever, {role} will haunt your soul forevermore"
            ],
            "overflow": [
                "THOU HAST DRUNK TOO DEEPLY OF THE FONT"
            ]
        },

        "thirsty": {
            "spiciness": "thirsty",
            "positive": [
                "*tugs your leash*\nthat's a VERY good {affectionate_term}~",
                "*runs {pronoun} fingers through your hair* good {affectionate_term}~ keep going~",
                "*smooches your forehead*\ngood job~",
                "*nibbles on your ear*\nthat's right~\nkeep going~",
                "*pats your butt*\nthat's a good {affectionate_term}~",
                "*drags {pronoun} nail along your cheek*\nsuch a good {affectionate_term}~",
                "*bites {pronoun} lip*\nmhmm~",
                "give {role} a kiss~",
                "*heavy breathing against your neck*"
            ],
            "negative": [
                "you're so cute when you're flustered~",
                "do you think you're going to get a reward from {role} like that~?",
                "*grabs your hair and pulls your head back*\nyou can do better than that for {role} can't you~?",
                "if you don't learn how to code better, {role} is going to put you in time-out~",
                "does {role} need to give {pronoun} little {affectionate_term} some special lessons~?",
                "you need to work harder to please {role}~",
                "gosh you must be flustered~",
                "are you just keysmashing now~?\ncute~",
                "is {role}'s little {affectionate_term} having trouble reaching the keyboard~?"
            ],
            "overflow": [
                "you've been a bad little {affectionate_term} and worn out {role}~"
            ]
        },

        "yikes": {
            "spiciness": "yikes",
            "positive": [
                "keep it up and {role} might let you cum you little {denigrating_term}~",
                "good {denigrating_term}~\nyou've earned five minutes with the buzzy wand~",
                "mmm~ come taste {role}'s {part}~",
                "*slides {pronoun} finger in your mouth*\nthat's a good little {denigrating_term}~",
                "you're so good with your fingers~\n{role} knows where {pronoun} {denigrating_term} should put them next~",
                "{role} is getting hot~",
                "that's a good {denigrating_term}~",
                "yes~\nyes~~\nyes~~~",
                "{role}'s going to keep {pronoun} good little {denigrating_term}~",
                "open wide {denigrating_term}.\nyou've earned {role}'s {part}~",
                "do you want {role}'s {part}?\nkeep this up and you'll earn it~",
                "oooh~ what a good {denigrating_term} you are~"
            ],
            "negative": [
                "you filthy {denigrating_term}~\nyou made a mess, now clean it up~\nwith your tongue~",
                "*picks you up by the throat*\npathetic~",
                "*drags {pronoun} claws down your back*\ndo it again~",
                "*brandishes {pronoun} paddle*\ndon't make me use this~",
                "{denigrating_term}.\n{denigrating_term}~\n{denigrating_term}~~",
                "get on your knees and beg {role} for forgiveness you {denigrating_term}~",
                "{role} doesn't think {pronoun} little {denigrating_term} should have permission to wear clothes anymore~",
                "never forget you belong to {role}~",
                "does {role} need to put you in the {denigrating_term} wiggler~?",
                "{role} is starting to wonder if you should just give up and become {pronoun} breeding stock~",
                "on your knees {denigrating_term}~",
                "oh dear. {role} is not pleased",
                "one spank per error sounds appropriate, don't you think {denigrating_term}?",
                "no more {part} for you {denigrating_term}"
            ],
            "overflow": [
                "brats like you don't get to talk to {role}"
            ]
        }
    },

    "vars": {
        "mood": {
            "defaults": ["chill"]
        },
        "emote": {
            "defaults": ["❤️", "💖", "💗", "💓", "💞"]
        },
        "pronoun": {
            "defaults": ["her"]
        },
        "role": {
            "defaults": ["Mommy"]
        },

        "affectionate_term": {
            "defaults": ["girl"],
            "env_key": "LITTLE"
        },

        "denigrating_term": {
            "spiciness": "yikes",
            "defaults": ["slut", "toy", "pet", "pervert", "whore"],
            "env_key": "FUCKING"
        },
        "part": {
            "spiciness": "yikes",
            "defaults": ["milk"]
        }
    }
}


//process.env.APPDATAAA

/*
CARGO_MOMMYS_LITTLE
CARGO_MOMMYS_PRONOUNS
CARGO_MOMMYS_ROLES 
CARGO_MOMMYS_EMOTES 
CARGO_MOMMYS_MOODS
CARGO_MOMMYS_PARTS 
CARGO_MOMMYS_FUCKING 

NODE_MOMMYS_LITTLE
NODE_MOMMYS_PRONOUNS
NODE_MOMMYS_ROLES 
NODE_MOMMYS_EMOTES 
NODE_MOMMYS_MOODS 
NODE_MOMMYS_PARTS 
NODE_MOMMYS_FUCKING 
NODE_MOMMYS_ATTENTION 
NODE_MOMMYS_PATIENCE
*/

let MOMMYS_LITTLE;
let MOMMYS_PRONOUNS;
let MOMMYS_ROLES;
let MOMMYS_EMOTES;
let MOMMYS_MOODS;
let MOMMYS_PARTS;
let MOMMYS_FUCKING;

let MOMMYS_ATTENTION;
let MOMMYS_PATIENCE;


const oldLog = console.log;
const oldError = console.error;

console.log = (...args) => { oldLog(...args); const output = mommys_output(true); oldLog(output); return output; }
console.error = (...args) => { oldLog(...args); const output = mommys_output(false); oldLog(output); return output; }


function mommys_output(isGood) {

    let output = ""

    MOMMYS_LITTLE = getSetting("NODE_MOMMYS_LITTLE", "CARGO_MOMMYS_LITTLE", mommys.vars.affectionate_term.defaults);
    MOMMYS_PRONOUNS = getSetting("NODE_MOMMYS_PRONOUNS", "CARGO_MOMMYS_PRONOUNS", mommys.vars.pronoun.defaults);
    MOMMYS_ROLES = getSetting("NODE_MOMMYS_ROLES", "CARGO_MOMMYS_ROLES", mommys.vars.role.defaults);
    MOMMYS_EMOTES = getSetting("NODE_MOMMYS_EMOTES", "CARGO_MOMMYS_EMOTES", mommys.vars.emote.defaults);
    MOMMYS_MOODS = getSetting("NODE_MOMMYS_MOODS", "CARGO_MOMMYS_MOODS", mommys.vars.mood.defaults);
    MOMMYS_PARTS = getSetting("NODE_MOMMYS_PARTS", "CARGO_MOMMYS_PARTS", mommys.vars.part.defaults);
    MOMMYS_FUCKING = getSetting("NODE_MOMMYS_FUCKING", "CARGO_MOMMYS_FUCKING", mommys.vars.denigrating_term.defaults);

    MOMMYS_ATTENTION = getSetting("NODE_MOMMYS_ATTENTION", undefined, [1]); // [ 1 ] as in length of 1 by default
    MOMMYS_PATIENCE = getSetting("NODE_MOMMYS_PATIENCE", undefined, [1]);

    const mood = MOMMYS_MOODS[randomFromLength(MOMMYS_MOODS)];
    let input = "";

    if (isGood) {
        input = mommys.moods[mood].positive[randomFromLength(mommys.moods[mood].positive)]; // random output based on random mood
    }
    else {
        input = mommys.moods[mood].negative[randomFromLength(mommys.moods[mood].positive)]; // random output based on random mood
    }

    output = input.replace("{affectionate_term}", MOMMYS_LITTLE[randomFromLength(MOMMYS_LITTLE)])
        .replace("{role}", MOMMYS_ROLES[randomFromLength(MOMMYS_ROLES)])
        .replace("{pronoun}", MOMMYS_PRONOUNS[randomFromLength(MOMMYS_PRONOUNS)])
        .replace("{denigrating_term}", MOMMYS_FUCKING[randomFromLength(MOMMYS_FUCKING)])
        .replace("{part}", MOMMYS_PARTS[randomFromLength(MOMMYS_PARTS)]);

    return output;
}

function getSetting(nodeKey, cargoKey, defaultVal) {
    if (process.env[nodeKey] !== undefined) {
        return process.env[nodeKey];
    } else if (process.env[cargoKey] !== undefined) {
        return process.env[cargoKey];
    } else {
        return defaultVal;
    }
}

function randomFromLength(variable) {
    return [Math.floor(Math.random() * (variable.length))]
}