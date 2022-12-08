//@author: Tim Suchan
//This file is structured in two parts, the Content Data structure and the functions that manage it. 
//The Data Structure  part only consists of a very basic class that stores all Information necessary for a task, as
//well as all tasks stored as such objects. Additionaly those tasks will be 
//this structure will propably be temporary which is why i did not bother too much with optimizing it
// i try keeping the ways variables like currentContent can be changed in the code minimal, i might also erase that possibility completly

//@author: tim suchan
class taskContent{

    constructor(tags,text, description){

        this.tags = tags;
        this.description = description
        this.text = text;
    }

    getDescription(){
        return this.description;
    }
    getTags(){
        return this.tags;
    }
    getText(){
        return this.text;
    }
}

const taskContent1 = new taskContent(["CHEEKS", "NOSE"],
     ["Es ist Samstagmorgen und Sie ziehen heute in Ihre neue Wohnung ein. Noch ein wenig verschlafen," +
 "laufen Sie durch Ihre alte Wohnung. Sie gehen in Gedanken noch einmal die Umzugsplanung für den heutigen Tag durch.",
  "Mit den Handflächen reiben Sie sich das Gesicht ab."],
  "Reiben sie ihr Gesicht mit den Handflächen");

const taskContent2 = new taskContent(["LIPS","MOUTH"], ["Alle Kartons sind gepackt und stehen bereit." +
 "Auch das Bett ist bereits abgebaut und umzugsbereit. Ihr Blick schweift durch die Wohnung auf das schwere," +
 "sperrige Sofa. Sie fragen sich, ob es durch den engen Flur passen wird.", "Besorgt ziehen Sie die Augenbrauen hoch."],
  "ziehen sie die Augenbrauen hoch" );

//const taskContent3 = new taskContent()


const allContents = {1 : taskContent1, 2 : taskContent2};
const defaultScenarios = {"umzug" : [1,2]}

let currentContent = 1;
let currentSequence = [1,2];



// FUNCTIONS:
// since javascript doesnt have private/public and we opted against switching to typescript at this progress level
// i choose to control what can be done with the currentContent
// variable by only importing specific funtions that handle currentContent when needed
// this is kind of a mix between procedural and object oriented programming and the goal is to create a global state with a high degree 
// of control as doing this is usually bad practice
// another advantage of accessing the level contents like this is that once we store the contents in a database all changes that have to be made
// will be in this js file leaving the rest of the code untouched.
//===============================================================================================================================================

//@author: tim suchan

const setCurrentContent = (number) => {
    currentContent = number;
}

const incrementCurrentContent = () => {
    currentContent++;
}

const setCurrentSequence = (array) => {
    currentSequence = array;
}

const getCurrentContent = () => {
    return currentContent;
}

const getCurrentSequence = () => {
    return currentSequence;
}

const getText = () => {
    return allContents[currentContent]["text"];
}

const getTaskDescription = () => {
    return allContents[currentContent].getDescription();
}

const getTags = () => {
    return allContents[currentContent].getTags();
}

const getScenario = (key) => {
    console.log(key);
    return defaultScenarios[key];
} 

const getAllContents = () => {
    return allContents;
}

const getScenarioLength = (key) => {
    return defaultScenarios[key].length;
}

const startLevel = (start, scenario) => {
    setCurrentContent(start);
    setCurrentSequence(scenario);
  }



//===============================================================================================================================================


export {getAllContents, startLevel, getScenario,getScenarioLength ,setCurrentContent, incrementCurrentContent, setCurrentSequence, getText, getCurrentContent, getCurrentSequence, getTags, getTaskDescription};