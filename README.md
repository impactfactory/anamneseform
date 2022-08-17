- wollen wir ein git repository starten?
  wie?
  gerne terminal only zeigen
- verliere die ganze Zeit Code, an was kann das liegen? Kann man einrichten, dass man beim Programm schliessen gewarnt wird,
  dass man noch abspeichern muss?

- soll html-inputs in Forms.svelte als Komponenten anlegen, damits übersichtlicher ist? wenn ja, wie? variable undefined....

- g9bt es die Möglichkeit, die Formulardefintionen aus dem index rauszunehmen und ein übersichtliches quasi config File zu haben?

- wie initialisiere ich eine bind-variable, wenn die inputs dynamisch erzeugt werden am besten?
  manuell verstehe ich, dynamisch habe ich das nich geschafft
  forReach forEch dann window[] hat nicht funktioniert
- flussdiagramm was svelte überhaupt macht möglich?

- wie publishe ich eine app eigentlich? hab dazu keine funktionierende anleitung gefunden

- ux: wie präsentiert man ein solch langes formular am besten? kapitel für kapitel?

- wie blende ich am besten ein textarea ein wenn eine spezifische option selected ist
  mit css geht meines wissen nach noch nicht (:has() noch nicht unterstützt)
  Geht javascript direkt in der condition in einer componente? st eigenlich typische :bind-Sache....

ABLAUF

---

- Mpa bekommt neue Anmeldung, definiert Termin
- Mpa oder automatisches Terminmail schickt Patienten einen Link zum Formular,
  wo die Patienten-ID als Curamed als readonly bereits drin ist
  kann auch unverschlüsselt sein
- Patient bekommt diesen Link und füllt das Formular aus
- Patient klickt Button und der Link wird in die Zwischenablage gelegt
  oder Patient copy pasted den Link
  (oder kriegt ein PDF, das mit uns bekanntem Pw verschlüsselt ist und er ungeschützt verschicken kann)

- - - Patient unterbricht Prozess und speichert sich Link zur späteren Bearbeitung ab(?)
      Patient klickt gespeicherten Link und macht mit Bearbeitung weiter
      System warnt, dass der alte gespeicherte Link nicht mehr gültig ist und bei weiterem Unterbruch ein neuer abgespeichert werden muss
      Patient klickt gespeicherten Link und macht mit Bearbeitung weiter

- Patient schickt Link/PDF per HIN-Kommunikation zurück an Mpa
- Mpa schickt Link/PDF kurz vor Praxis-Termin an Arzt (oder kopiert diesen in Agenda rein)
- LÜCKE . . . .
- Arzt bekommt Link zu einem fertigen Text, den er in einen zu erstellenden Bericht kopieren kann (am besten wohl als .txt oder .rtf)
  Text muss Absätze, Fett-Auszeichnungen, ev. Listen und Überschriften ermöglichen

  BEDENKEN

  ***

  x Ein einfacher Sende-Button statt Copy Paste des Links wäre bedeutend kundenfreundlicher... auch weil
  x wenn eine Mail aus irgendeinem Grund nicht ankommt (z.B. dem HIN-Filter oder Bedienungsfehler), gehen die Daten verloren
  x Das Formular ist echt riesig. Schritt für Schritt mit Fortschrittsanzeige wäre wohl freundlicher
