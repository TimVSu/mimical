//@author: Tim Suchan
//This file is structured in two parts, the Content Data structure and the functions that manage it. 
//The Data Structure  part only consists of a very basic class that stores all Information necessary for a task, as
//well as all tasks stored as such objects. Additionaly those tasks will be 
//this structure will propably be temporary which is why i did not bother too much with optimizing it
// i try keeping the ways variables like currentContent can be changed in the code minimal, i might also erase that possibility completly

//@author: tim suchan

import { faTruck, faHouse, faPlane, faStore, faBox, faB } from "@fortawesome/free-solid-svg-icons"

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

//===================================================================================================================================0
const einzug1 = {
    "baseText": "Einzug in eine neue Wohnung, Sie sind gestern umgezogen und müssen heute alle Umzugskisten auspacken. Um heute das nötigste zu schaffen, sind Sie sehr früh aufgestanden. Noch etwas verschlafen gehen Sie durch die Wohnung und überlegen, wo Sie nur anfangen sollen. ",
    "highlightedText": "Sie reiben verschlafen Ihr Gesicht mit den Handflächen.",
    "task": "empty"
}
const einzug2 = {
    "baseText": "Jetzt erst einmal einen Kaffee, denken Sie sich. Vergebens suchen Sie die Kaffeemaschine, können die Kiste mit den Küchensachen aber nirgendwo finden. Da entdecken Sie die Tassen und kramen nach ihrer Lieblingstasse. Oh nein! Ihre Lieblingstasse ist beim Umzug zu Bruch gegangen.  ",
    "highlightedText": "Entsetzt reißen Sie die Augen weit auf.",
    "task": "empty"
}
const einzug3 = {
    "baseText": "Sie werfen die Überreste in den Mülleimer und nehmen sich eine beliebig andere Tasse. Sie stellen die Kaffeemaschine an. Die Maschine zeigt den Spülvorgang an. Noch etwas verschlafen, starten Sie unabsichtlich den Spülvorgang. Jetzt dauert es 10 Minuten. Sie ärgern sich und ziehen dabei die Augenbrauen zusammen.Endlich ist der Kaffee fertig und Sie schenken sich eine Tasse ein. Sie setzen sich auf Ihr Sofa und trinken in Ruhe Ihren Kaffee. Noch müde und erschöpft vom Umzug, ",
    "highlightedText": "kneifen Sie die Augen zu.",
    "task": "empty"
}
const einzug4 = {
    "baseText": "Es kann losgehen. Sie beschließen, mit dem Ausräumen der Kisten zu beginnen. Es gibt so viel zu tun! Plötzlich klingelt es an der Tür. Erstaunt ",
    "highlightedText": "ziehen Sie die Augenbrauen hoch.",
    "task": "empty"
}
const einzug5 = {
    "baseText": "Sie öffnen die Tür und vor Ihnen steht eine Frau, die sich als Ihre Nachbarin vorstellt. Sie beschwert sich, dass Ihr Auto die Garage blockiert. Sie käme nun nicht mehr aus der Garage heraus. Sie wundern sich, weil Sie darauf geachtet haben, niemanden zu hindern. Schnell holen Sie die Autoschlüssel. Am Auto angekommen, sehen Sie, dass Ihre Nachbarin problemlos rausfahren könnte. Verärgert ",
    "highlightedText": "ziehen Sie die Augenbrauen zusammen.",
    "task": "empty"
}
const einzug6 = {
    "baseText": "Als Sie wieder zurück in Ihrer Wohnung sind, räumen Sie die Umzugskisten aus. Sie bemerken schnell, dass Sie für die weiteren Umzugskisten im Wohnzimmer das Wandregal aufbauen müssen. Sie bohren dafür die Löcher in die Wand, hängen das Regal auf und Sie gehen anschließend ein Stück weiter weg, um zu prüfen, ob das Wandregal auch gerade hängt. Dazu ",
    "highlightedText": "kneifen Sie die Augen etwas zu.",
    "task": "empty"
}
const einzug7 = {
    "baseText": "Das Wandregal scheint gerade zu hängen. Weiter geht es im Badezimmer. Sie bauen den Schrank auf und räumen alle Badutensilien ein. Sie bemerken einen unangenehmen Geruch aus der Dusche. Er kommt vom Abfluss hoch. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "empty"
}
const einzug8 = {
    "baseText": "Vermutlich wurde die Dusche seit längerer Zeit nicht mehr benutzt. Sie drehen den Wasserhahn auf und lassen die Dusche eine Zeit laufen, um den Geruch zu beseitigen. Anschließend öffnen Sie das Fenster und lassen frische Luft rein. Schon viel besser. Zufrieden ",
    "highlightedText": "lächeln Sie.",
    "task": "empty"
}
const einzug9 = {
    "baseText": "Als nächstes hängen Sie die Bilder im Flur auf. Zwei der drei Bilder haben Sie gefunden. Aber wo ist das Dritte? Sie haben bereits die ganze Wohnung nach dem Bild abgesucht. Sie überlegen, ",
    "highlightedText": "spitzen dabei die Lippen und bewegen sie nach rechts und links.",
    "task": "empty"
}
const einzug10 = {
    "baseText": "Mit einem Mal fällt es Ihnen ein. Das Bild könnte oben auf den Dachboden geräumt worden sein. Sie schauen sofort nach.  Oben auf dem Dachboden angekommen, stellen Sie fest, dass der Bilderrahmen etwas verschmutzt ist. Das muss wohl vom Umzug gekommen sein. ",
    "highlightedText": "Vorsichtig spitzen Sie die Lippen und pusten den Staub weg.",
    "task": "empty"
}
const einzug11 = {
    "baseText": "Als die drei Bilder im Flur hängen, freuen Sie sich über das Ergebnis. Sie stellen sich etwas weiter weg, um die drei Bilder im Flur zu betrachten. Sie hängen alle auf einer Linie nebeneinander und auch noch ganz gerade. Großartig, ",
    "highlightedText": "Sie formen mit den Lippen ein Oh.",
    "task": "empty"
}
const einzug12 = {
    "baseText": "Jetzt gönnen Sie sich erst einmal eine kleine Pause im Wohnzimmer auf dem Sofa. Dazu kochen Sie Kaffee und essen ein Stück Kuchen vom Bäcker, den Sie bereits gestern gekauft hatten. Sie genießen den warmen Kaffee. ",
    "highlightedText": "Sie spitzen die Lippen und schlürfen das heiße Getränk.",
    "task": "empty"
}
const einzug13 = {
    "baseText": "Der Kuchen schmeckt sehr gut und Sie freuen sich, dass der Bäcker gleich nebenan ist. Da werden Sie sicherlich häufiger ein leckeres Stück Kuchen kaufen. Um die letzten Krümel noch zu genießen, ",
    "highlightedText": "lassen Sie die Zunge im Mund kreisen.",
    "task": "empty"
}

//===============================================================================================================================================

const urlaub1 = {
    "baseText": "Endlich ist es soweit. Sie fahren heute in den Urlaub ans Meer. Nach einer langen Reise sind Sie endlich angekommen, stellen die Koffer ins Hotel und machen sich direkt auf den Weg zum Strand. Bereits von Weitem sehen Sie, dass viele Leute schon am Strand liegen. Ob Sie hier noch ein Plätzchen finden werden? ",
    "highlightedText": "Erstaunt ziehen Sie die Augenbrauen hoch.",
    "task": "empty"
}
const urlaub2 = {
    "baseText": "Über den Strand hinweg erspähen Sie noch ein ruhiges Plätzchen. Das ist es. Doch als Sie sich in die Richtung bewegen, hat schon eine Familie den Platz belegt. ",
    "highlightedText": "Genervt ziehen Sie die Augenbrauen zusammen.",
    "task": "empty"
}
const urlaub3 = {
    "baseText": "Sie halten weiter Ausschau nach einem geeigneten Platz. Die Leute liegen allerdings schon sehr nah aneinander, weil es so voll ist. Sie laufen ein ganzes Stück am Strand entlang. Nach einer Weile haben Sie genau den richtigen Platz gefunden, legen Ihre Decke und das Handtuch aus und wollen die Sonne genießen. Doch die Sonne blendet so stark, dass ",
    "highlightedText": "Sie die Augen zukneifen müssen.",
    "task": "empty"
}
const urlaub4 = {
    "baseText": "Sie schließen die Augen. Mit einem Mal merken Sie, wie etwas neben Ihrem Kopf landet. Erschrocken öffnen Sie die Augen und sehen, dass es ein Frisbee ist. Zwei Kinder haben es versehentlich zu Ihnen geworfen. Sie nehmen das Frisbee und lassen Sie zu den beiden zurücksegeln. ",
    "highlightedText": "Vergnügt, zwinkern Sie den beiden zu.",
    "task": "empty"
}
const urlaub5 = {
    "baseText": "Sie legen sich wieder auf Ihre Decke. Plötzlich weht Ihnen ein unangenehmer Geruch entgegen. Sie schauen sich um, woher der Gestank kommen könnte. Es kann nur vom nahegelegenen Imbiss kommen. Vermutlich ist das Essen aus Versehen verbrannt und der Geruch weht herüber. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "empty"
}
const urlaub6 = {
    "baseText": "Mittlerweile ist Ihnen doch sehr warm. Um sich abzukühlen, entschließen Sie sich, im Meer zu schwimmen. Es ist doch kälter als Sie gedacht hatten. Sie beschließen, einmal komplett unterzutauchen, um sich an die Wassertemperatur zu gewöhnen. Dazu ",
    "highlightedText": "pusten Sie die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty"
}
const urlaub7 = {
    "baseText": "Das kühle Nass ist frisch und angenehm. Sie schwimmen etwas weiter raus, kehren dann ins seichtere Wasser zurück. Als Sie wieder zurück zum Strand schwimmen und wieder stehen können, blicken Sie noch einmal zurück und genießen die Weite. Sie freuen sich auf die kommenden Wochen am Meer und ",
    "highlightedText": "lächeln, sodass Ihre Zähne zu sehen sind.",
    "task": "empty"
}
const urlaub8 = {
    "baseText": "Am Strand zurück, trocknen Sie sich ab und legen sich wieder auf die Decke. Zum Schutz vor der Sonne cremen Sie sich mit Sonnenmilch ein. Auch die Lippen dürfen Sie nicht vergessen und tragen etwas Sonnenmilch auf. Um sie gleichmäßig zu verteilen, ",
    "highlightedText": "reiben Sie die Lippen aufeinander.",
    "task": "empty"
}
const urlaub9 = {
    "baseText": "Sie beobachten die Leute am Strand. Viele spielen Frisbee oder Ball, Kinder buddeln im Sand und bauen Burgen und viele liegen einfach da und genießen die Sonne und den Strand. Sie haben Lust auf Eis und gehen zum Imbiss. Vielleicht gibt es dort auch Eis zu kaufen. Als Sie ankommen, staunen Sie über die große Auswahl. Es gibt ganz ausgefallene Eissorten, ",
    "highlightedText": "Sie formen mit den Lippen ein Oh.",
    "task": "empty"
}
const urlaub10 = {
    "baseText": "Sie können sich nicht entscheiden und beschließen daher mindestens drei Kugeln Eis zu nehmen. Sie überlegen, welche Sorten es sein sollen. Dabei ",
    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",
    "task": "empty"
}
const urlaub11 = {
    "baseText": "Die Entscheidung ist gefallen und Sie haben doch ganz klassisch Erdbeere, Schokolade und Vanille genommen. Auf dem Weg zurück zu Ihrer Decke genießen Sie das Eis. ",
    "highlightedText": "Dazu lassen Sie die Zunge im Mund kreisen.",
    "task": "empty"
}
const urlaub12 = {
    "baseText": " Die oberste Kugel rutscht von der Waffel und landet im Sand. Oh nein. ",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "empty"
}
const urlaub13 = {
    "baseText": "Na toll. Sie beseitigen die heruntergefallene Kugel mit einer Serviette und werfen sie in den Mülleimer. Auf der Decke genießen Sie noch das restliche Eis. Es ist eine tolle Abkühlung. Sie sind zufrieden und können sich ein ",
    "highlightedText": "breites Lächeln",
    "task": "empty"
}

//=====================================================================================================================================

const einkauf1 = {
    "baseText": "Sie sind auf dem Weg zum Supermarkt, um Lebensmittel einzukaufen. Es ist früh am Morgen. Sie sind noch etwas verschlafen und bleiben kurz stehen, ",
    "highlightedText": "um sich mit den Handflächen das Gesicht zu reiben.",
    "task": "empty"
}
const einkauf2 = {
    "baseText": "Im Supermarkt angekommen, nehmen Sie sich einen Einkaufswagen und suchen Ihren Einkaufszettel. Sie suchen alle Taschen ab, doch sie können ihn nicht finden. Oh nein, der Zettel muss noch auf dem Küchentisch liegen. Wie sollen Sie sich nur an alles, was Sie kaufen wollten, erinnern?  ",
    "highlightedText": "Entsetzt ziehen Sie die Augenbrauen hoch.",
    "task": "empty"
}
const einkauf3 = {
    "baseText": "Sie gehen zuversichtlich in den Supermarkt und hoffen, sich an alles zu erinnern. Sie erinnern sich, dass Sie Spaghetti Bolognese machen wollten. Dafür benötigen Sie Zwiebeln, Knoblauch, Möhren, Sellerie und Hackfleisch. Haben Sie noch Zwiebeln zu Hause? Sie überlegen, aber es fällt Ihnen nicht ein. ",
    "highlightedText": "Sie kneifen die Augen zu, um sich besser zu konzentrieren.",
    "task": "empty"
}
const einkauf4 = {
    "baseText": "Sie legen vorsichtshalber auch Zwiebeln in den Wagen und gehen weiter zur Fleischtheke. Es hat sich bereits eine lange Schlange gebildet und Sie müssen warten. Als Sie nach einer Weile endlich an der Reihe sind, sagen Sie der Verkäuferin, dass Sie gerne 1 Pfund Gehacktes, halb und halb, haben möchten. Die Verkäuferin sagt Ihnen, dass sie nur noch Rinderhack habe, das Schweinehack habe Sie gerade an den letzten Kunden verkauft. ",
    "highlightedText": "Verärgert ziehen Sie die Augenbrauen zusammen.",
    "task": "empty"
}
const einkauf5 = {
    "baseText": " Die Verkäuferin fragt, ob es sonst noch etwas sein dürfe. Sie überlegen. An der Wand hängen noch geräucherte Mettwürstchen. Sie können allerdings nicht erkennen, wie teuer diese sind. ",
    "highlightedText": "Sie kneifen die Augen zusammen, um das Schild zu lesen.",
    "task": "empty"
}
const einkauf6 = {
    "baseText": "Um die Warteschlange nicht noch länger aufzuhalten, nehmen Sie die Würstchen mit. Die Verkäuferin packt alles ein. Sie gehen weiter zur Kühlabteilung. Sie benötigen noch Parmesan. Vor Ihnen im Gang ist der ganze Boden mit Joghurt bedeckt. Scheinbar ist jemandem der Becher heruntergefallen. Es riecht unangenehm. ",
    "highlightedText": "Sie rümpfen die Nase.",
    "task": "empty"
}
const einkauf7 = {
    "baseText": "Sie machen den nächsten Mitarbeiter ausfindig und weisen ihn daraufhin. Der junge Mann eilt direkt los, holt Lappen und Putzmittel und beseitigt den Joghurt. ",
    "highlightedText": "Dankbar lächeln Sie.",
    "task": "empty"
}
const einkauf8 = {
    "baseText": "Sie gehen weiter zum Käseregal und suchen Blauschimmelkäse. Doch Sie können keinen finden. Verwundert wenden Sie sich an den Mitarbeiter, der noch dabei ist, den Joghurt zu beseitigen und der teilt Ihnen mit, dass der Käse ausverkauft sei. ",
    "highlightedText": "Enttäuscht schieben Sie die Unterlippe vor.",
    "task": "empty"
}
const einkauf9 = {
    "baseText": "Sie kaufen noch die restlichen Lebensmittel für das Essen ein und alles, was Ihnen sonst noch einfällt. Dann begeben Sie sich zur Kasse. Vor der Kasse bleiben Sie am Kühlregal für Getränke stehen und überlegen, ob Sie noch Limonade mitnehmen sollen. Dazu ",
    "highlightedText": "spitzen Sie die Lippen und bewegen sie nach rechts und links.",
    "task": "empty"
}
const einkauf10 = {
    "baseText": "Als Sie die Limonadenflasche aus dem Kühlregal ziehen, stoßen Sie versehentlich gegen die danebenliegenden Dosen mit Cola. Eine fällt runter. Für einen kurzen Moment sind Sie geschockt, ",
    "highlightedText": "pusten die Wangen auf und lassen die Luft wieder entweichen.",
    "task": "empty"
}
const einkauf11 = {
    "baseText": "An der Kasse angekommen, warten schon 8 Leute in der Schlange. Die Kassiererin scheint sichtlich überfordert, sie muss ständig die Preise nachschauen und scheint noch relativ neu zu sein. Das kann noch etwas dauern. ",
    "highlightedText": "Sie schieben die Unterlippe vor.",
    "task": "empty"
}
const einkauf12 = {
    "baseText": "Eine andere Kassiererin kommt aus der Pause. Zum Glück macht sie eine weitere Kasse auf. Sie stellen sich an und legen die Lebensmittel aufs Band. Als Sie an der Reihe sind, räumen Sie zügig die gescannten Artikel in den Wagen und kramen ihr Portmonee aus der Tasche. Doch es ist nicht wie gewohnt in der Tasche. Nervös ",
    "highlightedText": "beißen Sie mit den Zähnen auf die Ober-und Unterlippe.",
    "task": "empty"
}
const einkauf13 = {
    "baseText": "Sie durchwühlen Ihre Taschen. Als Sie das Portmonee endlich finden, sind Sie erleichtert. Sie bezahlen den Einkauf und verlassen den Supermarkt. ",
    "highlightedText": "Sie lächeln.",
    "task": "empty"
}

//const taskContent3 = new taskContent()


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

};

const defaultScenarios = {
    "umzug": {
        "tags": ["EYES", "LIPS"],
        "indices": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        "icon" : faTruck
    },
    "einzug": {
        "tags": ["EYES", "LIPS"],
        "indices": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,],
        "icon": faBox
    },
    "urlaub": {
        "tags": ["EYES", "LIPS"],
        "indices": [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,],
        "icon": faPlane
    },
    "einkauf": {
        "tags": ["EYES", "LIPS"],
        "indices": [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,],
        "icon": faStore
    }
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

const getIcon = (key) => {
    return defaultScenarios[key]["icon"]
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
    return allContents[currentContent]["highlightedText"];
}

const getTaskDescription = () => {
    var keyNum = currentSequence[currentContent-1];
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


export {
    getAllContents, getDefaultScenarios, getIcon,
    startLevel, getScenario, getHighlightedText, getScenarioLength, setCurrentContent, incrementCurrentContent,
    setCurrentSequence, getText, getCurrentContent, getCurrentSequence, getTags, getTaskDescription
};