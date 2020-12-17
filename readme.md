# Candidate number- 10113

# PROG2053 eksamen v2020
* Lag en FORK av dette repositoriet og gi meg leserettigheter (aland.a.mendoza@ntnu.no). Det som er i repositoriet på slutten av eksamen teller som din besvarelse.
* Legg inn studentnummeret ditt øverst i readme.md fila.
* IKKE kjør "npm install" i www mappa i oppgave, se siste kommentar i oppgaven.

## Oppgave - Web komponenter
*Merk: det er ferdige PHP skript i oppgave/www/api for å hente og oppdatere informasjon.*

Lag en side som lister ut alle brukere. Hent brukere fra api/fetchUsers.php med fetch i JavaScript. Vis lista med brukere på venstre side av skjermen. Når en bruker velges fra lista skal et skjema for å redigere brukerens info vises på høyre side av skjermen.

I denne oppgaven skal du lage samme funksjonaliteten med web komponenter. I filen oppgave3.html finner du startpunktet for denne oppgaven. Denne filen bruker users-list.js komponenten i js/components mappen til å lage en liste av alle brukere, funksjonaliteten i denne komponenten er ferdig laget. I render (på linje 56) brukes en edit-user.js komponent, denne komponenten får tilsendt den valgte brukeren. Det som mangler i edit-user.js er funksjonaliteten for å oppdatere en bruker.

NB, i oppgave/www/node_modules ligger lit-element med de endringer som skal til for at det fungerer uten å bruke "polymer serve" (dvs, koden fungerer direkte i docker/XAMPP).

# Solution

Lag en side som lister ut alle brukere. Hent brukere fra api/fetchUsers.php med fetch i JavaScript. Vis lista med brukere på venstre side av skjermen. Når en bruker velges fra lista skal et skjema for å redigere brukerens info vises på høyre side av skjermen.

- Created the javascript file for this, it's in the www folder, and getUsers.js. The code works locally and give no error message.

I denne oppgaven skal du lage samme funksjonaliteten med web komponenter. I filen oppgave3.html finner du startpunktet for denne oppgaven. Denne filen bruker users-list.js komponenten i js/components mappen til å lage en liste av alle brukere, funksjonaliteten i denne komponenten er ferdig laget. I render (på linje 56) brukes en edit-user.js komponent, denne komponenten får tilsendt den valgte brukeren. Det som mangler i edit-user.js er funksjonaliteten for å oppdatere en bruker.

- The edit-user javascript was edited to make ut possible to edit user data. It returns and html form where a chose to use Bootstrap for better styling. The userUpdate function was also tested locally, working with no errors.

# Some things to be noted

Could not get either XAMPP nor Docker to work with these files. Got a message about 'lit-element' not found, and since I could not use npm install I don't really know what to do. Tried several times to re-pull the project, edit some include paths etc. The code I have provided with this project works locally for me and does what it's supposed to do. But since i could not get the project setup to work I wasn't able to test it with the exam project.