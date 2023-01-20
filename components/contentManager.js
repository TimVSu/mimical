//@author: Tim Suchan
//This file is structured in two parts, the Content Data structure and the functions that manage it. 
//The Data Structure  part only consists of a very basic class that stores all Information necessary for a task, as
//well as all tasks stored as such objects. Additionaly those tasks will be 
//this structure will propably be temporary which is why i did not bother too much with optimizing it
// i try keeping the ways variables like currentContent can be changed in the code minimal, i might also erase that possibility completly

//@author: tim suchan

import { faTruck, faHouse, faPlane, faStore, faBox, faB, faSnowflake, faTrain, faBeerMugEmpty, faSun, faBagShopping, faCampground } from "@fortawesome/free-solid-svg-icons"

const umzug1 = {
    "baseText": "Es ist Samstagmorgen und Sie ziehen heute in Ihre neue Wohnung ein. Noch ein wenig verschlafen, laufen Sie durch Ihre alte Wohnung. Sie gehen in Gedanken noch einmal die Umzugsplanung für den heutigen Tag durch.",
    "highlightedText": "Mit den Handflächen reiben Sie sich das Gesicht ab.",

    "task": "Reiben sie ihr Gesicht mit den Handflächen",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug2 = {
    "baseText": "Alle Kartons sind gepackt und stehen bereit. Auch das Bett ist bereits abgebaut und umzugsbereit. Ihr Blick schweift durch die Wohnung auf das schwere, sperrige Sofa. Sie fragen sich, ob es durch den engen Flur passen wird. Besorgt",
    "highlightedText": "Ziehen Sie die Augenbrauen hoch.",
    "task": "Ziehen Sie die Augenbrauen hoch.",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug3 = {
    "baseText": "Als kleine Stärkung für Ihre Helfer haben Sie belegte Brötchen vorbereitet und Kaffee gekocht. Dafür haben Sie extra Pappbecher gekauft, doch verflixt: Sie können Sie nicht finden. Sie werden die Pappbecher doch nicht in eine Umzugskiste gepackt haben?",
    "highlightedText": "Nachdenklich ziehen Sie die Augenbrauen zusammen.",

    "task": "Ziehen sie nachdenklich ihre Augenbrauen zusammen",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug4 = {
    "baseText": "Jetzt fällt es Ihnen ein: Sie haben die Becher in Ihren Rucksack gepackt. Also, alles gut! Sie schauen auf die Uhr. Es ist schon viertel nach 9. Eigentlich sollten Ihre Helfer pünktlich um 9 Uhr da sein, aber bislang sind Sie noch allein. ",
    "highlightedText": "Genervt ziehen Sie die Augenbrauen zusammen.",

    "task": "Ziehen sie Genervt ihre Augenbrauen zusammen",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug5 = {
    "baseText": "Mit einem Mal klingelt es an der Tür. Endlich! Das wurde aber auch Zeit. Energisch reißen Sie die Tür auf. Mit dem hellen Sonnenlicht haben Sie nicht gerechnet und",
    "highlightedText": "kneifen die Augen zu.",

    "task": "Kneifen sie die Augen zu",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug6 = {
    "baseText": "Sie begrüßen Ihre Helfer und führen sie in die Wohnung. Sie verteilen die Aufgaben und beginnen, die Umzugssachen nach draußen zu tragen. Einer der Helfer trägt alleine eine schwere und unhandliche Glasvitrine nach unten.",
    "highlightedText": "Erschrocken reißen Sie die Augen auf.",

    "task": "Reißen sie die Augen weit auf",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug7 = {
    "baseText": "Sie verkneifen sich etwas zu sagen und es geht auch alles gut. Ihr Helfer stellt die Vitrine sicher vor dem Umzugswagen ab. Glück gehabt. Nun wollen Sie gemeinsam mit Ihrem Freund die Waschmaschine heruntertragen. Als Ihr Freund vorne anpackt, läuft etwas Wasser aus dem Schlauch der Maschine. Das abgestandene Wasser stinkt! ",
    "highlightedText": "Sie rümpfen die Nase.",

    "task": "Rümpfen sie die Nase",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug8 = {
    "baseText": "Sie heben die Waschmaschine zusammen an und tragen sie durch die Tür. Jetzt wird es kompliziert und Sie setzen die Waschmaschine kurz ab, um zu überlegen, wie Sie nun am besten vorgehen. Der Flur ist verwinkelt und eng und Sie müssen die Maschine schräg tragen, damit sie nicht aneckt. Sie nicken Ihrem Helfer zu: Los geht’s.",
    "highlightedText": "Sie pusten die Wangen auf und lassen die Luft langsam wieder entweichen.",

    "task": "Pusten sie ihre Wangen auf und lassen sie die Luft langsam entweichen",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug9 = {
    "baseText": "Sie heben die Waschmaschine an und tragen sie gemeinsam mit Ihrem Freund nach draußen. Die Waschmaschine ist schwer und Sie sind schon ganz außer Atem. Doch die Waschmaschine muss jetzt noch in den Umzugswagen gehoben werden. Sie nehmen noch einmal alle Kräfte zusammen und ",
    "highlightedText": "beißen mit den Zähnen auf die Ober- und Unterlippe.",

    "task": "Beißen sie mit den Zähnen auf ihre Ober und Unterlippe",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug10 = {
    "baseText": "Endlich haben Sie es geschafft. Die Waschmaschine ist im Umzugswagen. Ein Glück! Sie sind froh, dass das nun geschafft ist.",
    "highlightedText": "Erleichtert lächeln Sie.",

    "task": "Lächeln sie erleichtert",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug11 = {
    "baseText": "Wieder in der Wohnung angekommen, muss einer Ihrer Helfer nun schon wieder los. Er hat einen wichtigen Anruf erhalten und muss sofort zu einem Termin, den er nicht absagen kann. Sie hatten fest mit seiner Hilfe gerechnet und",
    "highlightedText": "schieben enttäuscht die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug12 = {
    "baseText": "Sie lassen sich davon nicht unterkriegen und schauen sich noch einmal in der Wohnung um. Neben ein paar wenigen Umzugskisten ist nur noch das Sofa zu tragen. Es ist schwer, aber wenn alle anpacken, wird es schon gehen. Gemeinsam mit Ihren Helfern tragen Sie das Sofa in den Umzugswagen. Geschafft!  Sie freuen Sie sich. ",
    "highlightedText": "Sie Lachen, sodass Ihre Zähne zu sehen sind.",

    "task": "Lachen Sie, sodass ihre Zähne zu sehen sind",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug13 = {
    "baseText": "Gemeinsam mit allen Umzugshelfern machen Sie sich auf den Weg zur neuen Wohnung. Sie schauen sich noch einmal um und blicken ein wenig wehmütig auf Ihr altes Zuhause.",
    "highlightedText": "Traurig schieben Sie die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug14 = {
    "baseText": "Die Fahrt zur neuen Wohnung ist nicht sehr lang und sie verläuft ruhig und ohne Zwischenfälle. An der neuen Wohnung angekommen, ist genau ein Parkplatz vor dem Haus frei. Die Lücke ist relativ klein, Sie sind sich nicht sicher, ob der Wagen in die Lücke passt. Sie überlegen, ob Sie es probieren sollen, oder lieber nach einem anderen Parkplatz suchen sollten. Dabei",
    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",

    "task": "Spitzen Sie die Lippen und bewegen sie nach rechts und links.",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug15 = {
    "baseText": "Als Sie den Wagen ein Stück entfernt geparkt haben, öffnen Sie dessen Türen und blicken ins Innere. Das Alles müssen Sie nun wieder ausladen. Das wird dauern.",
    "highlightedText": "Sie schieben die Unterlippe vor.",

    "task": "Schieben sie die Unterlippe vor",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug16 = {
    "baseText": "Sie machen sich sofort an die Arbeit und tragen zunächst alle Umzugskisten nach oben. Nach etwa einer Stunde haben Sie endlich alles in Ihre neue Wohnung geräumt. Der Umzug ist für heute geschafft. Sie sind froh, dass alles gut geklappt hat und freuen sich schon auf morgen, wenn alles aufgebaut wird und sie sich endlich einrichten können.",
    "highlightedText": "Bei diesem Gedanken lächeln Sie.",

    "task": "Lächeln Sie",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

const umzug17 = {
    "baseText": "Gemeinsam mit Ihren Helfer bestellen Sie beim Lieferservice um die Ecke noch etwas zu Essen und lassen den anstrengenden Tag hinter sich, ",
    "highlightedText": "Sie Lächeln",

    "task": "Lächeln Sie",

    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

//===================================================================================================================================0
const einzug1 = {
    "baseText": "Einzug in eine neue Wohnung, Sie sind gestern umgezogen und müssen heute alle Umzugskisten auspacken. Um heute das nötigste zu schaffen, sind Sie sehr früh aufgestanden. Noch etwas verschlafen gehen Sie durch die Wohnung und überlegen, wo Sie nur anfangen sollen. ",
    "highlightedText": "Sie reiben verschlafen Ihr Gesicht mit den Handflächen.",
    "task": "Reiben sie ihr gesicht mit den Handflächen.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug2 = {
    "baseText": "Jetzt erst einmal einen Kaffee, denken Sie sich. Vergebens suchen Sie die Kaffeemaschine, können die Kiste mit den Küchensachen aber nirgendwo finden. Da entdecken Sie die Tassen und kramen nach ihrer Lieblingstasse. Oh nein! Ihre Lieblingstasse ist beim Umzug zu Bruch gegangen.  ",
    "highlightedText": "Entsetzt reißen Sie die Augen weit auf.",
    "task": "Öffnen sie die augen so weit sie können.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug3 = {
    "baseText": "Sie werfen die Überreste in den Mülleimer und nehmen sich eine beliebig andere Tasse. Sie stellen die Kaffeemaschine an. Die Maschine zeigt den Spülvorgang an. Noch etwas verschlafen, starten Sie unabsichtlich den Spülvorgang. Jetzt dauert es 10 Minuten. Sie ärgern sich und ziehen dabei die Augenbrauen zusammen.Endlich ist der Kaffee fertig und Sie schenken sich eine Tasse ein. Sie setzen sich auf Ihr Sofa und trinken in Ruhe Ihren Kaffee. Noch müde und erschöpft vom Umzug, ",
    "highlightedText": "kneifen Sie die Augen zu.",
    "task": "Kneifen sie die Augen zu.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug4 = {
    "baseText": "Es kann losgehen. Sie beschließen, mit dem Ausräumen der Kisten zu beginnen. Es gibt so viel zu tun! Plötzlich klingelt es an der Tür. Erstaunt ",
    "highlightedText": "ziehen Sie die Augenbrauen hoch.",
    "task": "Ziehen sie ihre Augenbrauen hoch.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug5 = {
    "baseText": "Sie öffnen die Tür und vor Ihnen steht eine Frau, die sich als Ihre Nachbarin vorstellt. Sie beschwert sich, dass Ihr Auto die Garage blockiert. Sie käme nun nicht mehr aus der Garage heraus. Sie wundern sich, weil Sie darauf geachtet haben, niemanden zu hindern. Schnell holen Sie die Autoschlüssel. Am Auto angekommen, sehen Sie, dass Ihre Nachbarin problemlos rausfahren könnte. Verärgert ",
    "highlightedText": "ziehen Sie die Augenbrauen zusammen.",
    "task": "Ziehen sie ihre Augenbrauen zusammen",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug6 = {
    "baseText": "Als Sie wieder zurück in Ihrer Wohnung sind, räumen Sie die Umzugskisten aus. Sie bemerken schnell, dass Sie für die weiteren Umzugskisten im Wohnzimmer das Wandregal aufbauen müssen. Sie bohren dafür die Löcher in die Wand, hängen das Regal auf und Sie gehen anschließend ein Stück weiter weg, um zu prüfen, ob das Wandregal auch gerade hängt. Dazu ",
    "highlightedText": "kneifen Sie die Augen etwas zu.",
    "task": "Kneifen sie ihre Augen etwas zu.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug7 = {
    "baseText": "Das Wandregal scheint gerade zu hängen. Weiter geht es im Badezimmer. Sie bauen den Schrank auf und räumen alle Badutensilien ein. Sie bemerken einen unangenehmen Geruch aus der Dusche. Er kommt vom Abfluss hoch. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "Rümpfen sie ihre Nase.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug8 = {
    "baseText": "Vermutlich wurde die Dusche seit längerer Zeit nicht mehr benutzt. Sie drehen den Wasserhahn auf und lassen die Dusche eine Zeit laufen, um den Geruch zu beseitigen. Anschließend öffnen Sie das Fenster und lassen frische Luft rein. Schon viel besser. Zufrieden ",
    "highlightedText": "lächeln Sie.",
    "task": "Lächeln Sie.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug9 = {
    "baseText": "Als nächstes hängen Sie die Bilder im Flur auf. Zwei der drei Bilder haben Sie gefunden. Aber wo ist das Dritte? Sie haben bereits die ganze Wohnung nach dem Bild abgesucht. Sie überlegen, ",
    "highlightedText": "spitzen dabei die Lippen und bewegen sie nach rechts und links.",
    "task": "Spitzen Sie ihre Lippen und bewegen sie sie dabei von links nach rechts.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug10 = {
    "baseText": "Mit einem Mal fällt es Ihnen ein. Das Bild könnte oben auf den Dachboden geräumt worden sein. Sie schauen sofort nach.  Oben auf dem Dachboden angekommen, stellen Sie fest, dass der Bilderrahmen etwas verschmutzt ist. Das muss wohl vom Umzug gekommen sein. ",
    "highlightedText": "Vorsichtig spitzen Sie die Lippen und pusten den Staub weg.",
    "task": "Spitzen sie leicht ihre Lippen und pusten Sie.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug11 = {
    "baseText": "Als die drei Bilder im Flur hängen, freuen Sie sich über das Ergebnis. Sie stellen sich etwas weiter weg, um die drei Bilder im Flur zu betrachten. Sie hängen alle auf einer Linie nebeneinander und auch noch ganz gerade. Großartig, ",
    "highlightedText": "Sie formen mit den Lippen ein Oh.",
    "task": "Formen sie mit den Lippen ein Oh.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug12 = {
    "baseText": "Jetzt gönnen Sie sich erst einmal eine kleine Pause im Wohnzimmer auf dem Sofa. Dazu kochen Sie Kaffee und essen ein Stück Kuchen vom Bäcker, den Sie bereits gestern gekauft hatten. Sie genießen den warmen Kaffee. ",
    "highlightedText": "Sie spitzen die Lippen und schlürfen das heiße Getränk.",
    "task": "Spitzen sie ihre Lippen und saugen sie Luft ein.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einzug13 = {
    "baseText": "Der Kuchen schmeckt sehr gut und Sie freuen sich, dass der Bäcker gleich nebenan ist. Da werden Sie sicherlich häufiger ein leckeres Stück Kuchen kaufen. Um die letzten Krümel noch zu genießen, ",
    "highlightedText": "lassen Sie die Zunge im Mund kreisen.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

//===============================================================================================================================================

const urlaub1 = {
    "baseText": "Endlich ist es soweit. Sie fahren heute in den Urlaub ans Meer. Nach einer langen Reise sind Sie endlich angekommen, stellen die Koffer ins Hotel und machen sich direkt auf den Weg zum Strand. Bereits von Weitem sehen Sie, dass viele Leute schon am Strand liegen. Ob Sie hier noch ein Plätzchen finden werden? ",
    "highlightedText": "Erstaunt ziehen Sie die Augenbrauen hoch.",
    "task": "Ziehen sie ihre Augenbrauen weit hoch",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub2 = {
    "baseText": "Über den Strand hinweg erspähen Sie noch ein ruhiges Plätzchen. Das ist es. Doch als Sie sich in die Richtung bewegen, hat schon eine Familie den Platz belegt. ",
    "highlightedText": "Genervt ziehen Sie die Augenbrauen zusammen.",
    "task": "Ziehen sie ihre Augenbrauen zusammen",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub3 = {
    "baseText": "Sie halten weiter Ausschau nach einem geeigneten Platz. Die Leute liegen allerdings schon sehr nah aneinander, weil es so voll ist. Sie laufen ein ganzes Stück am Strand entlang. Nach einer Weile haben Sie genau den richtigen Platz gefunden, legen Ihre Decke und das Handtuch aus und wollen die Sonne genießen. Doch die Sonne blendet so stark, dass ",
    "highlightedText": "Sie die Augen zukneifen müssen.",
    "task": "Kneifen Sie ihre Augen zu",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub4 = {
    "baseText": "Sie schließen die Augen. Mit einem Mal merken Sie, wie etwas neben Ihrem Kopf landet. Erschrocken öffnen Sie die Augen und sehen, dass es ein Frisbee ist. Zwei Kinder haben es versehentlich zu Ihnen geworfen. Sie nehmen das Frisbee und lassen Sie zu den beiden zurücksegeln. ",
    "highlightedText": "Vergnügt, zwinkern Sie den beiden zu.",
    "task": "Zwinkern Sie mit abwechelnden Augen.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub5 = {
    "baseText": "Sie legen sich wieder auf Ihre Decke. Plötzlich weht Ihnen ein unangenehmer Geruch entgegen. Sie schauen sich um, woher der Gestank kommen könnte. Es kann nur vom nahegelegenen Imbiss kommen. Vermutlich ist das Essen aus Versehen verbrannt und der Geruch weht herüber. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "Rümpfen Sie ihre Nase",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub6 = {
    "baseText": "Mittlerweile ist Ihnen doch sehr warm. Um sich abzukühlen, entschließen Sie sich, im Meer zu schwimmen. Es ist doch kälter als Sie gedacht hatten. Sie beschließen, einmal komplett unterzutauchen, um sich an die Wassertemperatur zu gewöhnen. Dazu ",
    "highlightedText": "pusten Sie die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "Pusten Sie die Wangen auf und lassen sie die Luft wieder entweichen.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub7 = {
    "baseText": "Das kühle Nass ist frisch und angenehm. Sie schwimmen etwas weiter raus, kehren dann ins seichtere Wasser zurück. Als Sie wieder zurück zum Strand schwimmen und wieder stehen können, blicken Sie noch einmal zurück und genießen die Weite. Sie freuen sich auf die kommenden Wochen am Meer und ",
    "highlightedText": "lächeln, sodass Ihre Zähne zu sehen sind.",
    "task": "Lächeln sie sodass ihre Zähne zu sehen sind.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub8 = {
    "baseText": "Am Strand zurück, trocknen Sie sich ab und legen sich wieder auf die Decke. Zum Schutz vor der Sonne cremen Sie sich mit Sonnenmilch ein. Auch die Lippen dürfen Sie nicht vergessen und tragen etwas Sonnenmilch auf. Um sie gleichmäßig zu verteilen, ",
    "highlightedText": "reiben Sie die Lippen aufeinander.",
    "task": "Reiben Die ihre Lippen aufeinander",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub9 = {
    "baseText": "Sie beobachten die Leute am Strand. Viele spielen Frisbee oder Ball, Kinder buddeln im Sand und bauen Burgen und viele liegen einfach da und genießen die Sonne und den Strand. Sie haben Lust auf Eis und gehen zum Imbiss. Vielleicht gibt es dort auch Eis zu kaufen. Als Sie ankommen, staunen Sie über die große Auswahl. Es gibt ganz ausgefallene Eissorten, ",
    "highlightedText": "Sie formen mit den Lippen ein Oh.",
    "task": "Formen sie mit ihren Lippen ein Oh.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub10 = {
    "baseText": "Sie können sich nicht entscheiden und beschließen daher mindestens drei Kugeln Eis zu nehmen. Sie überlegen, welche Sorten es sein sollen. Dabei ",
    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",
    "task": "Spitzen sie ihre Lippen und bewegen Sie sie nach rechts und links.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub11 = {
    "baseText": "Die Entscheidung ist gefallen und Sie haben doch ganz klassisch Erdbeere, Schokolade und Vanille genommen. Auf dem Weg zurück zu Ihrer Decke genießen Sie das Eis. ",
    "highlightedText": "Dazu lassen Sie die Zunge im Mund kreisen.",
    "task": "Lassen sie ihre Zunge im Mund kreisen.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub12 = {
    "baseText": " Die oberste Kugel rutscht von der Waffel und landet im Sand. Oh nein. ",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "Schieben sie ihre Unterlippe vor",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const urlaub13 = {
    "baseText": "Na toll. Sie beseitigen die heruntergefallene Kugel mit einer Serviette und werfen sie in den Mülleimer. Auf der Decke genießen Sie noch das restliche Eis. Es ist eine tolle Abkühlung. Sie sind zufrieden und können sich ein ",
    "highlightedText": "breites Lächeln",
    "task": "Läceln sie breit.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

//=====================================================================================================================================

const einkauf1 = {
    "baseText": "Sie sind auf dem Weg zum Supermarkt, um Lebensmittel einzukaufen. Es ist früh am Morgen. Sie sind noch etwas verschlafen und bleiben kurz stehen, ",
    "highlightedText": "um sich mit den Handflächen das Gesicht zu reiben.",
    "task": "Reiben sie sich mit ihren Handflächen ihr Gesicht.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf2 = {
    "baseText": "Im Supermarkt angekommen, nehmen Sie sich einen Einkaufswagen und suchen Ihren Einkaufszettel. Sie suchen alle Taschen ab, doch sie können ihn nicht finden. Oh nein, der Zettel muss noch auf dem Küchentisch liegen. Wie sollen Sie sich nur an alles, was Sie kaufen wollten, erinnern?  ",
    "highlightedText": "Entsetzt ziehen Sie die Augenbrauen hoch.",
    "task": "Ziehen sie ihre Augenbrauen hoch.",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf3 = {
    "baseText": "Sie gehen zuversichtlich in den Supermarkt und hoffen, sich an alles zu erinnern. Sie erinnern sich, dass Sie Spaghetti Bolognese machen wollten. Dafür benötigen Sie Zwiebeln, Knoblauch, Möhren, Sellerie und Hackfleisch. Haben Sie noch Zwiebeln zu Hause? Sie überlegen, aber es fällt Ihnen nicht ein. ",
    "highlightedText": "Sie kneifen die Augen zu, um sich besser zu konzentrieren.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf4 = {
    "baseText": "Sie legen vorsichtshalber auch Zwiebeln in den Wagen und gehen weiter zur Fleischtheke. Es hat sich bereits eine lange Schlange gebildet und Sie müssen warten. Als Sie nach einer Weile endlich an der Reihe sind, sagen Sie der Verkäuferin, dass Sie gerne 1 Pfund Gehacktes, halb und halb, haben möchten. Die Verkäuferin sagt Ihnen, dass sie nur noch Rinderhack habe, das Schweinehack habe Sie gerade an den letzten Kunden verkauft. ",
    "highlightedText": "Verärgert ziehen Sie die Augenbrauen zusammen.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf5 = {
    "baseText": " Die Verkäuferin fragt, ob es sonst noch etwas sein dürfe. Sie überlegen. An der Wand hängen noch geräucherte Mettwürstchen. Sie können allerdings nicht erkennen, wie teuer diese sind. ",
    "highlightedText": "Sie kneifen die Augen zusammen, um das Schild zu lesen.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf6 = {
    "baseText": "Um die Warteschlange nicht noch länger aufzuhalten, nehmen Sie die Würstchen mit. Die Verkäuferin packt alles ein. Sie gehen weiter zur Kühlabteilung. Sie benötigen noch Parmesan. Vor Ihnen im Gang ist der ganze Boden mit Joghurt bedeckt. Scheinbar ist jemandem der Becher heruntergefallen. Es riecht unangenehm. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf7 = {
    "baseText": "Sie machen den nächsten Mitarbeiter ausfindig und weisen ihn daraufhin. Der junge Mann eilt direkt los, holt Lappen und Putzmittel und beseitigt den Joghurt. ",
    "highlightedText": "Dankbar lächeln Sie.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf8 = {
    "baseText": "Sie gehen weiter zum Käseregal und suchen Blauschimmelkäse. Doch Sie können keinen finden. Verwundert wenden Sie sich an den Mitarbeiter, der noch dabei ist, den Joghurt zu beseitigen und der teilt Ihnen mit, dass der Käse ausverkauft sei. ",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf9 = {
    "baseText": "Sie kaufen noch die restlichen Lebensmittel für das Essen ein und alles, was Ihnen sonst noch einfällt. Dann begeben Sie sich zur Kasse. Vor der Kasse bleiben Sie am Kühlregal für Getränke stehen und überlegen, ob Sie noch Limonade mitnehmen sollen. Dazu ",
    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf10 = {
    "baseText": "Als Sie die Limonadenflasche aus dem Kühlregal ziehen, stoßen Sie versehentlich gegen die danebenliegenden Dosen mit Cola. Eine fällt runter. Für einen kurzen Moment sind Sie geschockt, ",
    "highlightedText": "pusten die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf11 = {
    "baseText": "An der Kasse angekommen, warten schon 8 Leute in der Schlange. Die Kassiererin scheint sichtlich überfordert, sie muss ständig die Preise nachschauen und scheint noch relativ neu zu sein. Das kann noch etwas dauern. ",
    "highlightedText": "Sie schieben die Unterlippe vor.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf12 = {
    "baseText": "Eine andere Kassiererin kommt aus der Pause. Zum Glück macht sie eine weitere Kasse auf. Sie stellen sich an und legen die Lebensmittel aufs Band. Als Sie an der Reihe sind, räumen Sie zügig die gescannten Artikel in den Wagen und kramen ihr Portmonee aus der Tasche. Doch es ist nicht wie gewohnt in der Tasche. Nervös ",
    "highlightedText": "beißen Sie mit den Zähnen auf die Ober-und Unterlippe.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}
const einkauf13 = {
    "baseText": "Sie durchwühlen Ihre Taschen. Als Sie das Portmonee endlich finden, sind Sie erleichtert. Sie bezahlen den Einkauf und verlassen den Supermarkt. ",
    "highlightedText": "Sie lächeln.",
    "task": "empty",
    "sound": require("../assets/LAKEY_INSPIRED_Better_Days.mp3")
}

//=====================================================================================================================================

const schnee1 = {
    "baseText": "Sie schauen nach draußen aus dem Fenster. Es ist Winter und der Himmel ist wolkenverhangen. Schon seit Tagen ist es kalt. Ihnen scheint, als segle die erste Schneeflocke zu Boden. Ist es soweit?",
    "highlightedText": "Sie kneifen die Augen zusammen.",
    "task": "empty",
    "sound": require("../assets/Uebung1_Der_erste_Schnee.wav")
}

const schnee2 = {
    "baseText": "Tatsächlich! Es schneit dicke, weiße Flocken. Sie ziehen Ihren Mantel und die warmen Winterschuhe an und gehen nach draußen. Alles ist vom Schnee bedeckt und es sieht wunderschön aus. Sie sind erstaunt, wie schnell das ging",
    "highlightedText": "Sie ziehen die Augenbrauen hoch.",
    "task": "empty",
    "sound": require("../assets/Uebung2_Der_erste_Schnee.wav")
}

const schnee3 = {
    "baseText": "Sie machen sich auf den Weg durch das Schneegestöber. Sie atmen frische, kalte Luft ein. Da ist ein unangenehmer Geruch in der Luft. Als Sie sich umsehen, entdecken Sie Qualm, der aus dem Kamin Ihres Nachbarn weht. Die Abluft aus dem Schornstein stinkt gewaltig.",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "empty",
    "sound": require("../assets/Uebung3_Der_erste_Schnee.wav")
}

const schnee4 = {
    "baseText": "Inzwischen ist es ziemlich kalt geworden und Sie haben Ihre Handschuhe zu Hause vergessen. Sie wollen Ihre Hände etwas wärmen.",
    "highlightedText": "Dazu spitzen Sie die Lippen und pusten Ihre warme Ausatemluft in die Hände.",
    "task": "empty",
    "sound": require("../assets/Uebung4_Der_erste_Schnee.wav")
}

const schnee5 = {
    "baseText": "Es laufen drei Kinder mit einem Schlitten an Ihnen vorbei. Die Kinder sind außer sich vor Freude und wollen den ersten Schnee sofort ausnutzen.",
    "highlightedText": "Sie freuen sich mit Ihnen und lächeln.",
    "task": "empty",
    "sound": require("../assets/Uebung5_Der_erste_Schnee.wav")
}

const schnee6 = {
    "baseText": "Sie erinnern sich noch gut daran, wie Sie selbst als Kind im Schnee gespielt haben. Beim ersten Schnee sind Sie auch immer sofort mit dem Schlitten losgezogen. Langsam wird es Ihnen zu kalt. Sie überlegen, ob Sie wieder nach Hause gehen sollen.",
    "highlightedText": "Sie spitzen die Lippen und bewegen sie nach rechts und links.",
    "task": "empty",
    "sound": require("../assets/Uebung6_Der_erste_Schnee.wav")
}

const schnee7 = {
    "baseText": "Sie entscheiden sich für den Heimweg. In der Zwischenzeit ist das Schneien stärker geworden und der Schnee weht Ihnen ins Gesicht. Sie beeilen sich nun. Zuhause angekommen, sind Sie außer Puste.",
    "highlightedText": "Sie pusten die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty",
    "sound": require("../assets/Uebung7_Der_erste_Schnee.wav")
}

const schnee8 = {
    "baseText": "Sie wärmen sich am Kaminfeuer auf und kuscheln sich unter die Decke auf dem Sofa.",
    "highlightedText": "Entspannen Sie sich...",
    "task": "empty",
    "sound": require("../assets/LetzterSatz_Der_erste_Schnee.wav")
}

//=====================================================================================================================================

const bahn1 = {
    "baseText": "1.	Sie sind spät dran und müssen unbedingt die nächste Straßenbahn erreichen, um pünktlich zu einer Veranstaltung zu kommen. Gehetzt schauen Sie auf Ihre Armbanduhr. Es könnte knapp werden.",
    "highlightedText": "In Sorge, die Straßenbahn zu verpassen, ziehen Sie die Augenbrauen hoch.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung1_FahrtStrassenbahn.wav")
}

const bahn2 = {
    "baseText": "2.	Außer Atem kommen Sie an der Haltestelle an, als Ihre Straßenbahn gerade einfährt. Sie sehen, dass die Bahn überfüllt ist und die Leute bereits an der Tür eng an eng stehen. Es steigen kaum Leute aus.",
    "highlightedText": "Verärgert ziehen Sie die Augenbrauen zusammen.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung2_FahrtStrassenbahn.wav")
}

const bahn3 = {
    "baseText": "3.	Es hat keinen Zweck. Sie müssen die Straßenbahn nehmen, um pünktlich zu kommen. Sie steigen in die überfüllte Bahn. Es ist sehr eng. Sie hoffen, dass bei der nächsten Station einige Leute aussteigen werden.",
    "highlightedText": "Abwartend schließen Sie die Augen.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung3_FahrtStrassenbahn.wav")
}

const bahn4 = {
    "baseText": "4.	An der nächsten Station steigen tatsächlich viele Leute aus und die Bahn leert sich. Sie bekommen einen Sitzplatz am Fenster. Die Sonne scheint herein und blendet Sie.",
    "highlightedText": "Sie kneifen die Augen etwas zusammen.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung4_FahrtStrassenbahn.wav")
}

const bahn5 = {
    "baseText": "5.	Die nächste Haltestelle wird angekündigt und es ist Ihre. Das kann nicht sein. Es müssten noch 3 Stationen sein. Sie sind irritiert und halten nach dem Schild an der Haltestelle Ausschau.",
    "highlightedText": "Dabei ziehen Sie die Augenbrauen zusammen.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung5_FahrtStrassenbahn.wav")
}

const bahn6 = {
    "baseText": "6.	Es ist ein Fehler, die Durchsage war falsch. Bei der nächsten Station setzt sich eine ältere Dame neben Sie. Sie grüßt freundlich.",
    "highlightedText": "Sie grüßen freundlich zurück und ziehen dabei die Augenbrauen hoch.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung6_FahrtStrassenbahn.wav")
}

const bahn7 = {
    "baseText": "7.	Gedankenverloren gucken Sie einige Zeit aus dem Fenster. Die Bahn hat angehalten. Sie lesen das Halteschild und merken, dass es Ihre Haltestelle ist.",
    "highlightedText": "Sie reißen die Augen weit auf.",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/Uebung7_FahrtStrassenbahn.wav")
}

const bahn8 = {
    "baseText": "Sie stürmen in letzter Minute aus der Straßenbahn. Glück gehabt! Beim nächsten Mal müssen Sie besser aufpassen.",
    "highlightedText": "Entspannen Sie sich...",
    "task": "empty",
    "sound": require("../assets/Eine_Fahrt_mit_der_Strassenbahn/letzter Satz_FahrtStrassenbahn.wav")
}

//=====================================================================================================================================

const biergarten1 = {
    "baseText": "1.	Sie sitzen im Biergarten und warten auf Ihre Freunde. Sie freuen sich, dass Sie sich endlich wieder treffen und genießen die letzten Sonnenstrahlen auf Ihrem Gesicht.",
    "highlightedText": "Sie streichen sich mit den Händen das Gesicht ab.",
    "task": "empty",
    "sound": require("../assets/Uebung1_Biergarten.wav")
}

const biergarten2 = {
    "baseText": "2.	Ihre Freunde trudeln nach und nach ein. Die Kellnerin kommt mit der Karte. Sie werfen einen Blick hinein und merken, dass Sie Ihre Lesebrille zu Hause vergessen haben. Sie versuchen es ohne Brille zu lesen und...",
    "highlightedText": "... kneifen die Augen etwas zusammen.",
    "task": "empty",
    "sound": require("../assets/Uebung2_Biergarten.wav")
}

const biergarten3 = {
    "baseText": "3.	Nachdem die Getränke von der Kellnerin aufgenommen sind, überlegen Sie, noch etwas zu Essen zu bestellen. Einer Ihrer Freunde liest die Speisen vor. Sie überlegen, das Schnitzel oder den Flammkuchen zu nehmen.",
    "highlightedText": "Dabei spitzen Sie die Lippen und bewegen sie von rechts nach links.",
    "task": "empty",
    "sound": require("../assets/Uebung3_Biergarten.wav")
}

const biergarten4 = {
    "baseText": "4.	In der Zwischenzeit wurden die Getränke zum Tisch gebracht. Sie stoßen auf einen schönen Abend an und nehmen einen kräftigen Schluck.",
    "highlightedText": "Dabei pusten Sie die Wangen auf und schieben die Luft von links nach rechts. (Übung kann auch mit Wasser durchgeführt werden).",
    "task": "empty",
    "sound": require("../assets/Uebung4_Biergarten.wav")
}

const biergarten5 = {
    "baseText": "5.	Sie haben das Essen bestellt und sich für das Schnitzel mit Pommes entschieden. Sie plaudern mit Ihren Freunden und erzählen von Ihrem Alltag. Sie freuen sich, dass alle so gut drauf sind und lachen über den ein oder anderen Witz.",
    "highlightedText": "Dabei lachen Sie so sehr, dass Ihre Zähne zu sehen sind.",
    "task": "empty",
    "sound": require("../assets/Uebung5_Biergarten.wav")
}

const biergarten6 = {
    "baseText": "6.	Es dauert nicht lange, da wird das Essen zum Tisch gebracht. Leider sind bei Ihrem Schnitzel statt der Pommes Bratkartoffeln auf dem Teller.",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "empty",
    "sound": require("../assets/Uebung6_Biergarten.wav")
}

const biergarten7 = {
    "baseText": "7.	Sie beschweren sich nicht bei der Kellnerin. Der Biergarten ist so voll, da kann das mal passieren. Ihre Freundin gegenüber hat Pommes bekommen und möchte mit Ihnen tauschen. Sie freuen sich und nehmen das Angebot an.",
    "highlightedText": "Sie lächeln sie an.",
    "task": "empty",
    "sound": require("../assets/Uebung7_Biergarten.wav")
}

const biergarten8 = {
    "baseText": "Das Essen hat Ihnen sehr gut geschmeckt und Sie genießen den weiteren Abend mit Ihren Freunden.",
    "highlightedText": "Sie entspannen sich...",
    "task": "empty",
    "sound": require("../assets/LetzterSatz_Biergarten.wav")
}

//=====================================================================================================================================

const balkon1 = {
    "baseText": "1.	Es ist ein warmer Sonnabend und Sie sitzen draußen auf dem Balkon, um die letzten Sonnenstrahlen zu genießen. Die Sonne blendet Ihnen ins Gesicht und Sie müssen die ...",
    "highlightedText": "... Augen etwas zusammenkneifen.",
    "task": "empty",
    "sound": require("../assets/Uebung1_SommerabendBalkon.wav")
}

const balkon2 = {
    "baseText": "2.	Von Ihrem Balkon aus schauen Sie ins Grüne. Ihr Nachbar nutzt das schöne Wetter und verbrennt anscheinend noch nasses Holz im Garten. Es qualmt und ein unangenehmer Geruch weht zu ihnen hoch.",
    "highlightedText": "Sie müssen die Nase rümpfen.",
    "task": "empty",
    "sound": require("../assets/Uebung2_SommerabendBalkon.wav")
}

const balkon3 = {
    "baseText": "3.	Zum Glück ist Ihr Nachbar gleich fertig. Sie sehen viele Blumen, die in voller Pracht blühen. Besonders die Rosen sehen toll aus. Sie sind stolz auf Ihren schönen Garten und freuen sich darüber.",
    "highlightedText": "Sie lächeln.",
    "task": "empty",
    "sound": require("../assets/Uebung3_SommerabendBalkon.wav")
}

const balkon4 = {
    "baseText": "4.	Sie beschließen, sich zum Tagesabschluss noch ein kühles Getränk zu gönnen. Sie holen das Kaltgetränk aus dem Kühlschrank und nehmen einen großen Schluck.",
    "highlightedText": "Dabei pusten Sie die Wangen auf und schieben die Luft von links nach rechts. (Übung kann auch mit Wasser durchgeführt werden).",
    "task": "empty",
    "sound": require("../assets/Uebung4_SommerabendBalkon.wav")
}

const balkon5 = {
    "baseText": "5.	Nach dem Trinken bleiben noch Reste vom Getränk auf ihren Lippen kleben.",
    "highlightedText": "Sie lecken mit der Zunge die Lippen ab.",
    "task": "empty",
    "sound": require("../assets/Uebung5_SommerabendBalkon.wav")
}

const balkon6 = {
    "baseText": "6.	Als Sie einen zweiten Schluck nehmen wollen, bemerken Sie, dass eine Fliege auf dem Glasrand sitzt",
    "highlightedText": "Sie spitzen die Lippen und pusten.",
    "task": "empty",
    "sound": require("../assets/Uebung6_SommerabendBalkon.wav")
}

const balkon7 = {
    "baseText": "7.	So langsam geht die Sonne unter und der Himmel färbt sich wunderschön rotorange. Sie lassen den Alltag hinter sich und entspannen.",
    "highlightedText": "Dabei pusten Sie die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty",
    "sound": require("../assets/Uebung7_SommerabendBalkon.wav")
}

const balkon8 = {
    "baseText": "8.	Es wird dunkel und Sie hören die Grillen zirpen. Was für eine wunderbare Geräuschkulisse.",
    "highlightedText": "Sie genießen den Moment und lächeln.",
    "task": "empty",
    "sound": require("../assets/Uebung8_SommerabendBalkon.wav")
}

//=====================================================================================================================================

const bummel1 = {
    "baseText": "1.	Endlich Wochenende. Sie haben Zeit und bummeln gemütlich durch die Altstadt. Zuerst betreten Sie ein Schuhgeschäft, denn neue Schuhe brauchen dringend. Aufmerksam schauen Sie sich die Auswahl an und überlegen, ob Sie lieber schwarze oder braune Schuhe nehmen sollten.",
    "highlightedText": "Nachdenklich ziehen Sie die Augenbrauen zusammen.",
    "task": "empty",
    "sound": require("../assets/Uebung1_Stadtbummel.wav")
}

const bummel2 = {
    "baseText": "2.	Während Sie noch überlegen, kommt eine hilfsbereite Verkäuferin geeilt und möchte Sie beraten. Sie ist etwas aufdringlich und möchte Ihnen ganz andere Schuhe verkaufen, als Sie im Sinn haben. Als Sie den Preis sehen, sind Sie entsetzt. Die Schuhe kosten doppelt so viel wie die, die sie selbst ausgesucht hatten.",
    "highlightedText": "Sie ziehen die Augenbrauen hoch.",
    "task": "empty",
    "sound": require("../assets/Uebung2_Stadtbummel.wav")
}

const bummel3 = {
    "baseText": "3.	Sie wimmeln die Dame freundlich ab und kaufen die schwarzen Schuhe, die Sie als erstes entdeckt hatten. Mit dem Schuhkarton unter dem Arm setzen Sie Ihren Einkaufsbummel fort und erblicken dabei einen kleinen Brunnen auf dem Marktplatz. Sie setzen sich auf die Umrandung des Brunnens und wollen sich eine kurze Pause gönnen. Doch ein unangenehmer Geruch weht Ihnen entgegen. Das Wasser ist abgestanden und stinkt.",
    "highlightedText": "Sie müssen die Nase rümpfen.",
    "task": "empty",
    "sound": require("../assets/Uebung3_Stadtbummel.wav")
}

const bummel4 = {
    "baseText": "4.	Schnell entschließen Sie sich, in das gegenüberliegende Café zu gehen. Sie bestellen Kaffee und eine Waffel mit Sahne, Eis und heißen Kirschen. Als der Kellner ihre Bestellung bringt, läuft Ihnen das Wasser im Mund zusammen.",
    "highlightedText": "Sie reiben die Lippen aufeinander.",
    "task": "empty",
    "sound": require("../assets/Uebung4_Stadtbummel.wav")
}

const bummel5 = {
    "baseText": "5.	Das tut gut. Sie genießen die noch warme Waffel und es schmeckt fantastisch. An ihren Lippen bleiben noch Reste von der Sahne kleben",
    "highlightedText": "Sie lecken mit der Zunge die Lippen ab.",
    "task": "empty",
    "sound": require("../assets/Uebung5_Stadtbummel.wav")
}

const bummel6 = {
    "baseText": "6.	Sie nicken dem Kellner freundlich zu und signalisieren, dass Sie bezahlen möchten.",
    "highlightedText": "Sie lächeln.",
    "task": "empty",
    "sound": require("../assets/Uebung6_Stadtbummel.wav")
}

const bummel7 = {
    "baseText": "Als Sie das Café verlassen, denken Sie darüber nach, was Sie heute noch alles erledigen wollen.",
    "highlightedText": "In Gedanken versunken, pusten Sie die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty",
    "sound": require("../assets/Uebung7_Stadtbummel.wav")
}

const bummel8 = {
    "baseText": "8.	Ein Stadtmusikant beginnt ein Lied zu spielen. Sie erkennen es.",
    "highlightedText": "Begeistert pfeifen Sie zur Melodie und spitzen dazu die Lippen.",
    "task": "empty",
    "sound": require("../assets/Uebung8_Stadtbummel.wav")
}

//=====================================================================================================================================

const zelten1 = {
    "baseText": "1.	Nach einer langen Autofahrt sind Sie endlich beim Campingplatz angekommen. Sie betreten das kleine Anmeldehäuschen. Es ist klein und muffig.",
    "highlightedText": "Sie müssen die Nase rümpfen.",
    "task": "empty",
    "sound": require("../assets/Uebung1_Zelten.wav")
}

const zelten2 = {
    "baseText": "2.	Ein älterer Mann begrüßt Sie und zeigt Ihnen den Platz für Ihr Zelt. Sie stellen Ihre Sachen ab und beginnen das Zelt aufzubauen. Ratlos stehen Sie vor dem Gewirr aus Stangen und Plane.",
    "highlightedText": "Sie spitzen die Lippen und bewegen sie nach rechts und links.",
    "task": "empty",
    "sound": require("../assets/Uebung2_Zelten.wav")
}

const zelten3 = {
    "baseText": "3.	Sie beginnen, Stangen zusammenzubauen und das Grundgerüst des Zeltes aufzustellen. Sie betrachten Ihr Werk. So ganz richtig sieht es noch nicht aus.",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "empty",
    "sound": require("../assets/Uebung3_Zelten.wav")
}

const zelten4 = {
    "baseText": "4.	Endlich haben Sie es geschafft: Ihr Zelt steht. Sie müssen nur noch die Heringe in den Boden hämmern. Beherzt holen Sie mit dem Hammer aus und hauen zielsicher auf Ihren Finger. Vor Schmerz schreien Sie.",
    "highlightedText": "Sie reißen den Mund weit auf.",
    "task": "empty",
    "sound": require("../assets/Uebung4_Zelten.wav")
}

const zelten5 = {
    "baseText": "5.	Der Schmerz lässt etwas nach. Sie entscheiden sich, eine Pause zu machen und etwas zu essen. Sie holen den Campingkocher aus der Tasche und kochen Nudeln mit Tomatensoße. Um sicherzugehen, dass die Nudeln gar sind, probieren Sie vorsichtig eine.",
    "highlightedText": "Sie spitzen die Lippen und pusten.",
    "task": "empty",
    "sound": require("../assets/Uebung5_Zelten.wav")
}

const zelten6 = {
    "baseText": "6.	Die Nudeln sind noch nicht aldente. Während die Nudeln weiter köcheln, öffnen Sie sich ein Getränk und nehmen einen großen Schluck. ",
    "highlightedText": "Dabei pusten Sie die Wangen auf und schieben die Luft von links nach rechts. (Übung kann auch mit Wasser durchgeführt werden).",
    "task": "empty",
    "sound": require("../assets/Uebung6_Zelten.wav")
}

const zelten7 = {
    "baseText": "7.	Langsam wird es Abend. Sie machen ein kleines Lagerfeuer und setzen sich davor. Sie beobachten die Flammen und genießen die Ruhe.",
    "highlightedText": "Zufrieden lächeln Sie.",
    "task": "empty",
    "sound": require("../assets/Uebung7_Zelten.wav")
}

const zelten8 = {
    "baseText": "Sie bleiben noch so lange wach wie das Feuer runtergebrannt ist und legen sich dann schlafen.",
    "highlightedText": "Gute Nacht...",
    "task": "empty",
    "sound": require("../assets/LetzterSatz_Zelten.wav")
}

const allContents = {
    1: umzug1, 2: umzug2, 3: umzug3, 4: umzug4, 5: umzug5, 6: umzug6,
    7: umzug7, 8: umzug8, 9: umzug9, 10: umzug10, 11: umzug11, 12: umzug12,
    13: umzug13, 14: umzug14, 15: umzug15, 16: umzug16, 17: umzug17,

    18: einzug1, 19: einzug2, 20: einzug3, 21: einzug4, 22: einzug5,
    23: einzug6, 24: einzug7, 25: einzug8, 26: einzug9, 27: einzug10,
    28: einzug11, 29: einzug12, 30: einzug13,

    31: urlaub1, 32: urlaub2, 33: urlaub3, 34: urlaub4, 35: urlaub5, 36: urlaub6,
    37: urlaub7, 38: urlaub8, 39: urlaub9, 40: urlaub10, 41: urlaub11,
    42: urlaub12, 43: urlaub13,

    44: einkauf1, 45: einkauf2, 46: einkauf3, 47: einkauf4, 48: einkauf5,
    49: einkauf6, 50: einkauf7, 51: einkauf8, 52: einkauf9, 53: einkauf10,
    54: einkauf11, 55: einkauf12, 56: einkauf13,

    57: schnee1, 58: schnee2, 59: schnee3, 60: schnee4, 61: schnee5,
    62: schnee6, 63: schnee7, 64: schnee8,
    
    65: bahn1, 66: bahn2, 67: bahn3, 68: bahn4, 69: bahn5, 70: bahn6,
    71: bahn7, 72: bahn8,

    73: biergarten1, 74: biergarten2, 75: biergarten3, 76: biergarten4,
    77: biergarten5, 78: biergarten6, 79: biergarten7, 80: biergarten8,

    81: balkon1, 82: balkon2, 83: balkon3, 84: balkon4, 85: balkon5,
    86: balkon6, 87: balkon7, 88: balkon8,

    89: bummel1, 90: bummel2, 91: bummel3, 92: bummel4, 93: bummel5,
    94: bummel6, 95: bummel7, 96: bummel8,

    97: zelten1, 98: zelten2, 99: zelten3, 100: zelten4, 101: zelten5,
    102: zelten6, 103: zelten7, 104: zelten8,

};

const defaultScenarios = {
    "Umzug": {
        "tags": ["Langes Szenario", "Obere Gesichtshälfte"],
        "indices": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        "icon" : faTruck
    },
    "Einzug": {
        "tags": ["Langes Szenario", "Untere Gesichtshälfte"],
        "indices": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,],
        "icon": faBox
    },
    "Urlaub": {
        "tags": ["Kurzes Szenario", "Obere Gesichtshälfte"],
        "indices": [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,],
        "icon": faPlane
    },
    "Einkauf": {
        "tags": ["Kurzes Szenario", "Untere Gesichtshälfte"],
        "indices": [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,],
        "icon": faStore
    },
    "Schnee":  {
        "tags": ["Kurzes Szenario", "Obere Gesichtshälfte"],
        "indices": [57, 58, 59, 60, 61, 62, 63, 64],
        "icon": faSnowflake
    // },
    // "Bahn":  {
    //     "tags": ["Kurzes Szenario", "Obere Gesichtshälfte"],
    //     "indices": [65, 66, 67, 68, 69, 70, 71, 72],
    //     "icon": faTrain
    // },
    // "Biergarten":  {
    //     "tags": ["Kurzes Szenario", "Untere Gesichtshälfte"],
    //     "indices": [73, 74, 75, 76, 77, 78, 79, 80],
    //     "icon": faBeerMugEmpty
    // },
    // "Balkon":  {
    //     "tags": ["Kurzes Szenario", "Untere Gesichtshälfte"],
    //     "indices": [81, 82, 83, 84, 85, 86, 87, 88],
    //     "icon": faSun
    // },
    // "Bummel":  {
    //     "tags": ["Kurzes Szenario", "Untere Gesichtshälfte"],
    //     "indices": [89, 90, 91, 92, 93, 94, 95, 96],
    //     "icon": faBagShopping
    // },
    // "Zelten":  {
    //     "tags": ["Kurzes Szenario", "Untere Gesichtshälfte"],
    //     "indices": [97, 98, 99, 100, 101, 102, 103, 104],
    //     "icon": faCampground
    }


}

let currentContent = 1;
let currentSequence = [];
let currentScenario;



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
//setters and getters as well as some special functions for managing content

const setCurrentContent = (number) => {
    currentContent = number;
}

const getIcon = (key) => {
    if(key === "NO_SCENARIO_FOR_THIS_ID"){
        return faTruck
    }
    else{
    return defaultScenarios[key]["icon"];
}
    
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

const getDefaultScenarios = () => {
    return defaultScenarios;
}

const getText = () => {
    var keyNum = currentSequence[currentContent-1];
    return allContents[keyNum]["baseText"];
}

const getHighlightedText = () => {
    var keyNum = currentSequence[currentContent-1];
    return allContents[keyNum]["highlightedText"];
}

const getTaskDescription = () => {
    var keyNum = currentSequence[currentContent-1];
    return allContents[keyNum]["task"]
}

const getAudio = () => {
    var keyNum = currentSequence[currentContent-1];
    return allContents[keyNum]["sound"];
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

const startLevel = (start, scenarioKey) => {
    setCurrentContent(start);
    setCurrentSequence(defaultScenarios[scenarioKey]["indices"]);
    currentScenario = scenarioKey;
}

const getCurrentScenario = () => {
    return currentScenario;
}

const getTaskCount = () =>{
    return Object.keys(allContents).length;
}
const getScenarioFromTask = (contentID) =>{
    for (let i = 0; i < Object.keys(defaultScenarios).length; i++){
        if(defaultScenarios[Object.keys(defaultScenarios)[i]]["indices"].includes(contentID)){
            return Object.keys(defaultScenarios)[i];
        }
    }
    return "NO_SCENARIO_FOR_THIS_ID";
}



//===============================================================================================================================================


export {
    getAllContents, getDefaultScenarios, getIcon, getCurrentScenario, getTaskCount, getScenarioFromTask, 
    startLevel, getScenario, getHighlightedText, getScenarioLength, setCurrentContent, incrementCurrentContent,
    setCurrentSequence, getText, getAudio, getCurrentContent, getCurrentSequence, getTags, getTaskDescription
};