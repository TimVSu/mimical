//@author: Tim Suchan
//This file is structured in two parts, the Content Data structure and the functions that manage it. 
//The Data Structure  part only consists of a very basic class that stores all Information necessary for a task, as
//well as all tasks stored as such objects. Additionaly those tasks will be 
//this structure will propably be temporary which is why i did not bother too much with optimizing it
// i try keeping the ways variables like currentContent can be changed in the code minimal, i might also erase that possibility completly

//@author: tim suchan

const umzug1 = {
    "baseText": "Es ist Samstagmorgen und Sie ziehen heute in Ihre neue Wohnung ein. Noch ein wenig verschlafen," +
        "laufen Sie durch Ihre alte Wohnung. Sie gehen in Gedanken noch einmal die Umzugsplanung für den heutigen Tag durch.",

    "highlightedText": "Mit den Handflächen reiben Sie sich das Gesicht ab.",

    "task": "Reiben sie ihr Gesicht mit den Handflächen"
}

const umzug2 = {
    "baseText": "Alle Kartons sind gepackt und stehen bereit." +
        "Auch das Bett ist bereits abgebaut und umzugsbereit." +
        "Ihr Blick schweift durch die Wohnung auf das schwere, sperrige Sofa. Sie fragen sich, ob es durch den engen Flur passen wird. Besorgt",

    "highlightedText": "Ziehen Sie die Augenbrauen hoch.",

    "task": "Ziehen Sie die Augenbrauen hoch."
}

const umzug3 = {
    "baseText": "Als kleine Stärkung für Ihre Helfer haben Sie belegte Brötchen vorbereitet und Kaffee gekocht." +
        "Dafür haben Sie extra Pappbecher gekauft, doch verflixt: Sie können Sie nicht finden." +
        "Sie werden die Pappbecher doch nicht in eine Umzugskiste gepackt haben?",

    "highlightedText": "Nachdenklich ziehen Sie die Augenbrauen zusammen.",

    "task": "Ziehen sie nachdenklich ihre Augenbrauen zusammen"
}

const umzug4 = {
    "baseText": "Jetzt fällt es Ihnen ein: Sie haben die Becher in Ihren Rucksack gepackt. Also, alles gut! Sie schauen auf die Uhr. Es ist schon viertel nach 9. Eigentlich sollten Ihre Helfer pünktlich um 9 Uhr da sein, aber bislang sind Sie noch allein. ",

    "highlightedText": "Genervt ziehen Sie die Augenbrauen zusammen.",

    "task": "Ziehen sie Genervt ihre Augenbrauen zusammen"
}

const umzug5 = {
    "baseText": "Mit einem Mal klingelt es an der Tür. Endlich! Das wurde aber auch Zeit. Energisch reißen Sie die Tür auf. Mit dem hellen Sonnenlicht haben Sie nicht gerechnet und",

    "highlightedText": "kneifen die Augen zu.",

    "task": "Kneifen sie die Augen zu"
}

const umzug6 = {
    "baseText": "Sie begrüßen Ihre Helfer und führen sie in die Wohnung. Sie verteilen die Aufgaben und beginnen, die Umzugssachen nach draußen zu tragen. Einer der Helfer trägt alleine eine schwere und unhandliche Glasvitrine nach unten.",

    "highlightedText": "Erschrocken reißen Sie die Augen auf.",

    "task": "Reißen sie die Augen weit auf"
}

const umzug7 = {
    "baseText": "Sie verkneifen sich etwas zu sagen und es geht auch alles gut. Ihr Helfer stellt die Vitrine sicher vor dem Umzugswagen ab. Glück gehabt. Nun wollen Sie gemeinsam mit Ihrem Freund die Waschmaschine heruntertragen. Als Ihr Freund vorne anpackt, läuft etwas Wasser aus dem Schlauch der Maschine. Das abgestandene Wasser stinkt! ",

    "highlightedText": "Sie rümpfen die Nase.",

    "task": "Rümpfen sie die Nase"
}

const umzug8 = {
    "baseText": "Sie heben die Waschmaschine zusammen an und tragen sie durch die Tür. Jetzt wird es kompliziert und Sie setzen die Waschmaschine kurz ab, um zu überlegen, wie Sie nun am besten vorgehen. Der Flur ist verwinkelt und eng und Sie müssen die Maschine schräg tragen, damit sie nicht aneckt. Sie nicken Ihrem Helfer zu: Los geht’s.",

    "highlightedText": "Sie pusten die Wangen auf und lassen die Luft langsam wieder entweichen.",

    "task": "Pusten sie ihre Wangen auf und lassen sie die Luft langsam entweichen"
}

const umzug9 = {
    "baseText": "Sie heben die Waschmaschine an und tragen sie gemeinsam mit Ihrem Freund nach draußen. Die Waschmaschine ist schwer und Sie sind schon ganz außer Atem. Doch die Waschmaschine muss jetzt noch in den Umzugswagen gehoben werden. Sie nehmen noch einmal alle Kräfte zusammen und ",

    "highlightedText": "beißen mit den Zähnen auf die Ober- und Unterlippe.",

    "task": "Beißen sie mit den Zähnen auf ihre Ober und Unterlippe"
}

const umzug10 = {
    "baseText": "Endlich haben Sie es geschafft. Die Waschmaschine ist im Umzugswagen. Ein Glück! Sie sind froh, dass das nun geschafft ist.",

    "highlightedText": "Erleichtert lächeln Sie.",

    "task": "Lächeln sie erleichtert"
}

const umzug11 = {
    "baseText": "Wieder in der Wohnung angekommen, muss einer Ihrer Helfer nun schon wieder los. Er hat einen wichtigen Anruf erhalten und muss sofort zu einem Termin, den er nicht absagen kann. Sie hatten fest mit seiner Hilfe gerechnet und",

    "highlightedText": "schieben enttäuscht die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor"
}

const umzug12 = {
    "baseText": "Sie lassen sich davon nicht unterkriegen und schauen sich noch einmal in der Wohnung um. Neben ein paar wenigen Umzugskisten ist nur noch das Sofa zu tragen. Es ist schwer, aber wenn alle anpacken, wird es schon gehen. Gemeinsam mit Ihren Helfern tragen Sie das Sofa in den Umzugswagen. Geschafft!  Sie freuen Sie sich. ",

    "highlightedText": "Sie Lachen, sodass Ihre Zähne zu sehen sind.",

    "task": "Lachen Sie, sodass ihre Zähne zu sehen sind"
}

const umzug13 = {
    "baseText": "Gemeinsam mit allen Umzugshelfern machen Sie sich auf den Weg zur neuen Wohnung. Sie schauen sich noch einmal um und blicken ein wenig wehmütig auf Ihr altes Zuhause.",

    "highlightedText": "Traurig schieben Sie die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor"
}

const umzug14 = {
    "baseText": "Die Fahrt zur neuen Wohnung ist nicht sehr lang und sie verläuft ruhig und ohne Zwischenfälle. An der neuen Wohnung angekommen, ist genau ein Parkplatz vor dem Haus frei. Die Lücke ist relativ klein, Sie sind sich nicht sicher, ob der Wagen in die Lücke passt. Sie überlegen, ob Sie es probieren sollen, oder lieber nach einem anderen Parkplatz suchen sollten. Dabei",

    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",

    "task": "Spitzen Sie die Lippen und bewegen sie nach rechts und links."
}

const umzug15 = {
    "baseText": "Als Sie den Wagen ein Stück entfernt geparkt haben, öffnen Sie dessen Türen und blicken ins Innere. Das Alles müssen Sie nun wieder ausladen. Das wird dauern.",

    "highlightedText": "Sie schieben die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor"
}

const umzug16 = {
    "baseText": "Sie machen sich sofort an die Arbeit und tragen zunächst alle Umzugskisten nach oben. Nach etwa einer Stunde haben Sie endlich alles in Ihre neue Wohnung geräumt. Der Umzug ist für heute geschafft. Sie sind froh, dass alles gut geklappt hat und freuen sich schon auf morgen, wenn alles aufgebaut wird und sie sich endlich einrichten können.",

    "highlightedText": "Bei diesem Gedanken lächeln Sie.",

    "task": "Lächeln Sie"
}

const umzug17 = {
    "baseText": "Gemeinsam mit Ihren Helfer" +
    "bestellen Sie beim Lieferservice um die Ecke noch etwas zu Essen und lassen den anstrengenden Tag hinter sich.",

    "highlightedText": "empty",

    "task": "empty"
}
//const taskContent3 = new taskContent()


const allContents = {
    1: umzug1, 2: umzug2, 3: umzug3, 4: umzug4, 5: umzug5, 6: umzug6,
    7: umzug7, 8: umzug8, 9: umzug9, 10: umzug10, 11: umzug11, 12: umzug12,
    13: umzug13, 14: umzug14, 15: umzug15, 16: umzug16, 17: umzug17
};

const defaultScenarios = {
    "umzug": {
        "tags": ["EYES", "LIPS"],
        "indices": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    },
}

let currentContent = 1;
let currentSequence = [];



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
    return allContents[currentContent]["baseText"];
}

const getHighlightedText = () => {
    return allContents[currentContent]["highlightedText"];
}

const getTaskDescription = () => {
    return allContents[currentContent]["task"]
}

const getTags = (key) => {
    return defaultScenarios[key]["tags"];
}

const getScenario = (key) => {
    return defaultScenarios[key]["indices"];
}

const getAllContents = () => {
    return allContents;
}

const getScenarioLength = (key) => {
    return defaultScenarios[key]["indices"].length;
}

const startLevel = (start, scenario) => {
    setCurrentContent(start);
    setCurrentSequence(scenario);
}



//===============================================================================================================================================


export { getAllContents, startLevel, getScenario, getHighlightedText, getScenarioLength, setCurrentContent, incrementCurrentContent, setCurrentSequence, getText, getCurrentContent, getCurrentSequence, getTags, getTaskDescription };