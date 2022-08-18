- wie blende ich am besten ein textarea ein wenn eine spezifische option selected ist

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
