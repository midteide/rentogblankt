# Rent & Blankt AS - Nettside

Profesjonell landingsside for Rent & Blankt AS, et rengjøringsfirma i Oslo.

## 🚀 Deployment til Netlify

### Metode 1: Via Netlify Dashboard (Anbefalt)

1. **Opprett Netlify-konto**
   - Gå til [netlify.com](https://www.netlify.com)
   - Opprett en gratis konto (kan bruke GitHub, Google, eller e-post)

2. **Last opp prosjektet**
   - Klikk på "Add new site" → "Deploy manually"
   - Dra og slipp hele mappen `rentogblankt` inn i Netlify-dashboardet
   - Netlify vil automatisk publisere siden

3. **Koble til domenet www.rentogblankt.no**
   - Gå til "Site settings" → "Domain management"
   - Klikk "Add custom domain"
   - Skriv inn `www.rentogblankt.no`
   - Følg instruksjonene for å oppdatere DNS-innstillinger

### Metode 2: Via Git (Automatisk deployment)

1. **Push til GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [din-github-repo-url]
   git push -u origin main
   ```

2. **Koble til Netlify**
   - I Netlify: "Add new site" → "Import an existing project"
   - Velg GitHub og autoriser Netlify
   - Velg ditt repository
   - Netlify vil automatisk oppdage at dette er en statisk side
   - Klikk "Deploy site"

3. **Koble til domenet**
   - Følg samme steg som i Metode 1, steg 3

## 🔧 DNS-innstillinger

For å koble domenet ditt til Netlify, må du oppdatere DNS-innstillingene hos din domeneleverandør:

1. **I Netlify:**
   - Gå til "Site settings" → "Domain management"
   - Klikk på domenet ditt
   - Du vil se DNS-innstillinger som må legges til

2. **Hos din domeneleverandør:**
   - Logg inn på din domeneleverandør (f.eks. One.com, Namecheap, etc.)
   - Gå til DNS-innstillinger
   - Legg til en CNAME-post:
     - **Type:** CNAME
     - **Name:** www
     - **Value:** [din-netlify-url].netlify.app
   - Legg til en A-post for root-domenet (rentogblankt.no):
     - **Type:** A
     - **Name:** @
     - **Value:** [IP-adressen Netlify gir deg]

3. **Vent på DNS-propagation**
   - Det kan ta opptil 24-48 timer før endringene trer i kraft
   - Vanligvis tar det 1-2 timer

## 📝 Oppdater organisasjonsnummer

1. Åpne `index.html`
2. Finn linjen med `Org.nr: [Organisasjonsnummer]` i footer-seksjonen
3. Erstatt `[Organisasjonsnummer]` med det faktiske organisasjonsnummeret

## 🎨 Tilpasninger

### Endre farger
Rediger CSS-variablene i `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a8e8;
    /* ... */
}
```

### Endre kontaktinformasjon
Rediger kontaktseksjonen i `index.html`:
- Telefonnummer
- E-postadresse
- Adresse
- Åpningstider

### Legge til bilder
1. Opprett en `images`-mappe
2. Legg til bildene der
3. Oppdater HTML for å referere til bildene

## 📱 Responsivt design

Siden er fullt responsiv og fungerer på:
- Desktop
- Tablet
- Mobil

## 🔒 Sikkerhet

Netlify tilbyr automatisk:
- HTTPS/SSL-sertifikater
- DDoS-beskyttelse
- CDN-distribusjon

## 📞 Support

For spørsmål om Netlify:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Support](https://www.netlify.com/support/)

## 📄 Lisens

© 2025 Rent & Blankt AS. Alle rettigheter reservert.
