const validator = require("validator");
const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");

// Customize yargs version
yargs.version("2.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a especified note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list the notes command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    console.log("listing all notes");
  },
});

// read notes
yargs.command({
  command: "read",
  describe: "read a note",
  handler() {
    console.log("Reading notes...");
  },
});

yargs.parse();
