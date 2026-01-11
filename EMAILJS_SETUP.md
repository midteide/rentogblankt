# 📧 EmailJS Setup - Alternativ løsning for e-post

Hvis Netlify Forms ikke fungerer, kan du bruke EmailJS som en pålitelig alternativ løsning.

## Steg 1: Opprett EmailJS-konto

1. Gå til [emailjs.com](https://www.emailjs.com)
2. Opprett en gratis konto (100 e-poster/måned gratis)
3. Verifiser e-posten din

## Steg 2: Konfigurer EmailJS

1. **Gå til Email Services:**
   - I EmailJS Dashboard, klikk "Email Services"
   - Klikk "Add New Service"
   - Velg din e-postleverandør (Gmail, Outlook, etc.)
   - Følg instruksjonene for å koble til

2. **Opprett Email Template:**
   - Gå til "Email Templates"
   - Klikk "Create New Template"
   - Template ID: `template_xxxxx` (husk denne!)
   - Sett opp malen:
     ```
     Navn: {{name}}
     E-post: {{email}}
     Telefon: {{phone}}
     Melding: {{message}}
     ```

3. **Få Public Key:**
   - Gå til "Account" → "General"
   - Kopier "Public Key" (du trenger denne)

## Steg 3: Oppdater nettsiden

Jeg kan oppdatere koden for deg, eller du kan gjøre det selv:

1. Legg til EmailJS script i `<head>`:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   ```

2. Oppdater `script.js` med EmailJS-kode (jeg kan gjøre dette for deg)

## Steg 4: Test

Send inn et test-skjema og sjekk e-posten din!

## Fordeler med EmailJS

- ✅ Mer pålitelig enn Netlify Forms
- ✅ Fungerer direkte fra frontend
- ✅ Ingen server nødvendig
- ✅ 100 gratis e-poster/måned
- ✅ Enkel oppsett

## Vil du at jeg setter opp EmailJS?

Si fra hvis du vil at jeg skal implementere EmailJS-løsningen!
