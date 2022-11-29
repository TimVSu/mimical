
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

allContents = {1 : taskContent1, 2 : taskContent2};

const createSequence = (idArray, contentDict) => {
    const customSequence = {};
    const keyCounter = 1;
    for(let i = 0; i < Object.keys(contentDict).length; i++){
        if (Object.keys(contentDict)[i] in idArray){
            customSequence.keyCounter = contentDict.i;
        } 
    }
    return customSequence;
}

export {allContents, createSequence};





  



