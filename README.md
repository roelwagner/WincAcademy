# WincAcademy

This Repository contains all my assignments foor WincAcademy!
Thats it.

Feel free contact me at: rlwgnr@gmail.com




Opdracht omschrijving: Domain Modelling – Tandartsbedrijf B.V.T.

Let op: dit is een zeer uitgebreide opdracht. Wij gaan ervan uit dat als je hier full-time mee bezig zou zijn, je bijna twee volle dagen bezig bent! Neem je tijd, lees goed de instructies en requirement. Stel je vragen in het #vraagbaak kanaal van Slack!



Het is gelukt, je bent als programmeur aan de slag gegaan. En als freelancer nog wel! En je hebt ook al een eerste klant: Tandartspraktijk B.V.T.!







Zij willen dat jij een systeem bouwt waarmee de assistenten en tandartsen kunnen werken om afspraken te beheren. De focus van deze opdracht ligt op het correct "modelleren" van de verschillende "entiteiten" (dingen) en operaties (veranderingen) in dit systeem. Je richt je bij deze opdracht dus met name op de state van je applicatie.



Om het rekenen met dagen makkelijker te maken kun je doen alsof maandag dag 1 is, dinsdag dag 2 is etc, er zijn precies 4 weken in elke maand en elke maand is (dus) 28 dagen. Alle afspraken vallen binnen deze maand. We zitten nu vóór die maand (dus alle afspraken kunnen nog gewijzigd worden).



Om het rekenen met tijd makkelijker te maken duurt elke afspraak een uur en valt elke afspraak op het hele uur, dus 9:00u, 14:00u etc.



Je mag zelf namen, telefoonnummers, emailadressen verzinnen voor de mensen in het systeem. Je kan met behulp van https://www.mockaroo.com of uinames.com random persoonsdata genereren.



Dit is een voorbeeld van een call voor 25 random namen uit Nederland met extended info: http://uinames.com/api/?amount=25&region=netherlands&ext


de praktijk heeft tandartsen
de praktijk heeft assistenten
elke tandarts en assistent heeft een voornaam, een achternaam, een telefoonnummer en een emailadres dat eindigt op "tandartspraktijkbvt.nl"
tandartsen en assistenten kunnen ziek worden, ze kunnen dan niet werken
patiënten kunnen ziek worden, de afspraak moet dan verwijderd worden
de praktijk heeft patiënten
elke patiënt heeft een voornaam, een achternaam, een telefoonnummer, een emailadres en een geboortejaar (geen datum)
een afspraak is altijd met één patiënt
een afspraak is altijd met één tandarts
een afspraak is soms ook met een assistent erbij
een afspraak heeft een datum (dat is het dagnummer) en een tijdstip in hele uren
in het weekend is de praktijk gesloten
een tandarts of assistent kan niet twee afspraken op hetzelfde moment hebben


Als je de React applicatie opstart moeten alle entiteiten aanwezig zijn in je systeem:

4 tandartsen
2 assistenten
50 patiënten
150 afspraken in de komende maand


Gebruik één JavaScript object hebt met daarin alle state van deze applicatie, zoals je dat bij een simpele React applicatie zou hebben.


Views
De views krijg je van ons, je hoeft de HTML en CSS dus niet te verzinnen maar wel genereren op basis van de state van je systeem.

in het voorbeeld-kalendaroverzicht zijn de afspraken niet gesorteerd op tijd, dat moet wel
in het voorbeeld-dagoverzicht zijn de afspraken niet gesorteerd op tijd, dat moet wel
als een afspraak géén tandarts heeft (vanwege ziekte bijvoorbeeld), geef die dan een rode achtergrondkleur


Download de view components:

$git clone   https://github.com/WincAcademy/dentist_react in een nieuwe directory (map) op je computer
in deze nieuwe directory doe je npm install en dan npm start
je kunt de applicatie nu open op http://localhost:3000


Operaties/veranderingen
Het leven is hectisch en helemaal bij een drukke tandartsenpraktijk. De hele dag door gebeuren er dingen waardoor de inhoud van het systeem anders moet worden. Hieronder komt een lijstje van dingen die kunnen gebeuren. Het is jouw taak om deze operaties op de data goed te implementeren.

Maak deze veranderingen "immutable".

Je krijgt de function calls, maar de implementatie van de functie moet je zelf doen, hoe precies je dat doet ligt ook aan hoe je de state van je applicatie opzet.

voeg een tandarts toe:

newState = addDentist(state, "Toos", "Trekker", "06-12345678", "toos@tandartspraktijkbvt.nl")
voeg een patiënt toe:

newState = addPatient(state, "Piet", "Auw", "06-12345679", "piet@wincacademy.nl", 1985)
een tandarts wordt ziek, geef elke afspraak met die tandarts een rode achtergrondkleur in de views

newState = makeDentistSick(state, dentistId)
voeg een afspraak toe zonder assistent

newState = addAppointment(state, dayNumber, time, patientId, dentistId)
een afspraak op een dag + tijdstip mag alleen toegevoegd worden als die tandarts en/of assistent op dat moment vrij is
voeg een afspraak toe met assistent

newState = addAppointment(state, dayNumber, time, patientId, dentistId, assistentId)
verwijder een afspraak

newState = removeAppointment(state, appointmentId)
een patiënt is ziek, verwijder alle afspraken van die patiënt

newState = makePatientSick(state, patientId)
verplaats een afspraak

newState = moveAppointment(state, appointmentId, newDayNumber, newTime)
let op de beschikbaarheid van de tandarts of assistent, ze kunnen niet twee afspraken tegelijk doen
Bonusopdrachten:
behandeltypes
elke tandarts heeft een aantal vaardigheden (gaatjes vullen, kroon zetten, tanden trekken, kaakchirurgie)
niet elke tandarts heeft elke vaardigheid
elke afspraak heeft één behandeltype
in de kalenderview zie je de behandeltypes niet
in de dagview zie je de behandeltypes wél
maak werkende formulieren en knoppen voor de operaties


Inleveren

Deze opdracht kun je inleveren op de volgende pagina!