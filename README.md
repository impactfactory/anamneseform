- die variable freetext aus select.svelte ist nun zwar überall verfügbar, aber aus jeder wiederholten einbindung von select auch nur eine statt mehrere gleich. wie mache ich, dass eine komponente bei einer neuerlichen einbindung auch einen eigenen wert hat?

- Wahrscheinlich dasselbe Problem dann beim Fliesstext, der geschrieben werden soll. Wie kriege die Antworten des Users in den Fliesstext?

- Es macht wohl am ehsten Sinn, wäre ein "Satz-Template" ein Attribut einer Frage. So bliebe es maximal dynamisch. Aber wie kriegt man Platzhalter in einem Frage-Attribut für die Values weiterer Frage-Attribute, die ja aber gar nicht im Frageobjekt gespeichert sind, sondern irgendwo im Svelte-Loop?

- wie binde ich copyclipboard.js ein?
- wie geht svelte:component (ssr-fehler)

- layout.svelte: wie kann es mir die klasse ins body setzen, damit ich die focus-ringe wegkriege, wenn ich NICHT via tastatur navigiere?

Möglicher ABLAUF

---

- Mpa bekommt neue Anmeldung, definiert Termin
- Mpa oder automatisches Terminmail schickt Patienten einen Link zum Formular,
  wo die Patienten-ID als Curamed als readonly bereits drin ist
  kann auch unverschlüsselt sein
- Patient bekommt diesen Link und füllt das Formular aus
- Patient kopiert erzeugten Text unten in seine Zwischenablage

- - - Patient unterbricht Prozess und speichert sich Link zur späteren Bearbeitung ab(?)
      Patient klickt gespeicherten Link und macht mit Bearbeitung weiter
      System warnt, dass der alte gespeicherte Link nicht mehr gültig ist und bei weiterem Unterbruch ein neuer abgespeichert werden muss
      Patient klickt gespeicherten Link und macht mit Bearbeitung weiter

- Patient schickt Text per HIN-Kommunikation zurück an Mpa
- Mpa kopiert Text ins Filemaker, oder schickt ihn dem Arzt oder erzeugt ein PDF und legt dieses in Curamed ab (????)

  BEDENKEN

  x wenn eine Mail aus irgendeinem Grund nicht ankommt (z.B. dem HIN-Filter oder Bedienungsfehler), gehen die Daten verloren.
