# Tuinapp

## Login gegevens
User: tuinmaster@hogent.be
Pw: P@ssword1234

User: student@hogent.be
Pw: P@ssword1234

(Deze gegevens staan ook in het consolevenster van de API + registreren is mogelijk)

## Issues:
-probleem met validatie van formulier + de eerste keer werkt formArray, de tweede keer niet
- grafieken werken momenteel met statische data, ik kan niet werken met het @Input() property
(mogelijk probleem: de getter wil data gebruiken maar kan dit niet doen omdat het property nog opgehaald wordt van de api?)
- (eventueel) 2 testen van planten falen omdat het data-cy element niet gevonden wordt


### eventueel ToDo
- Momenteel wordt er een statische db gebruikt voor de omgeving. De databank met data is aanwezig maar niet geimplementeerd.
- Url in databank van foto's klopt niet, het python script in de Rasberry Pie geeft een verkeerde dropbox url terug waardoor de foto's niet zichtbaar zijn in html img tag. Kan opgelost worden door python script te herbekijken. Ik ga de url momenteel statisch meegeven.
- Fotoslider om foto's te kunnen kiezen van vroeger(?)
- Temperatuur grafiek met +- afgelopen maand data
- Luchtdruk grafiek om weervoorspellingen te kunnen maken
