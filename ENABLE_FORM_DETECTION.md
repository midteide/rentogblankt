# 🔧 Aktiver Form Detection i Netlify

## Du ser "Enable form detection" - Slik fikser du det:

### Metode 1: Aktiver Form Detection (Enklest)

1. **I Netlify Dashboard:**
   - Gå til ditt site → **Forms**
   - Du ser "Enable form detection" - **Klikk på det!**
   - Netlify vil nå scanne siden din for skjemaer

2. **Vent 1-2 minutter:**
   - Netlify scanner siden din
   - Du skal se skjemaet "contact" dukke opp

3. **Hvis skjemaet ikke dukker opp:**
   - Gå til **Site settings** → **Build & deploy** → **Post processing**
   - Sjekk at "Form detection" er aktivert
   - Trigger en ny deploy (push en liten endring til GitHub)

### Metode 2: Manuell Form Registrering

Hvis form detection ikke fungerer:

1. **I Netlify Dashboard:**
   - Gå til **Forms**
   - Klikk **"Add form"** eller **"Register form manually"**
   - Skriv inn form-navnet: `contact`
   - Klikk **"Save"**

2. **Sett opp notifikasjoner:**
   - Klikk på skjemaet "contact"
   - Gå til **"Settings"** → **"Form notifications"**
   - Klikk **"Add notification"** → **"Email notification"**
   - Fyll inn e-postadressen din
   - Lagre

### Metode 3: Trigger Ny Deploy

Noen ganger må Netlify scanne siden på nytt:

1. **Push en liten endring:**
   ```bash
   # Gjør en liten endring i index.html (f.eks. legg til et mellomrom)
   git add .
   git commit -m "Trigger Netlify form detection"
   git push
   ```

2. **I Netlify Dashboard:**
   - Gå til **Deploys**
   - Vent til deploy er ferdig
   - Gå til **Forms**
   - Skjemaet skal nå være oppdaget

### Metode 4: Sjekk Form Attributter

Sjekk at skjemaet har riktige attributter:

```html
<form name="contact" method="POST" netlify netlify-honeypot="bot-field">
```

Viktig:
- ✅ `name="contact"` - må være med
- ✅ `netlify` - må være med (ikke `data-netlify="true"`)
- ✅ `method="POST"` - må være med
- ✅ Alle input-felter må ha `name` attributter

### Hva jeg har fikset

Jeg har oppdatert skjemaet til å bruke `netlify` attributt i stedet for `data-netlify="true"`. Dette hjelper Netlify med å oppdage skjemaet bedre.

### Neste steg etter form detection er aktivert

1. **Sjekk at skjemaet er oppdaget:**
   - Gå til Forms → Du skal se "contact" skjemaet

2. **Test skjemaet:**
   - Send inn et test-skjema fra nettsiden
   - Gå til Forms → contact → Submissions
   - Du skal se innsendte skjemaer der

3. **Sett opp e-post-notifikasjoner:**
   - Forms → contact → Settings → Form notifications
   - Add notification → Email notification
   - Fyll inn e-postadressen
   - Lagre

## 🆘 Hvis ingenting fungerer

1. **Sjekk Netlify's status:**
   - https://www.netlifystatus.com/

2. **Kontakt Netlify support:**
   - https://www.netlify.com/support/

3. **Alternativ løsning:**
   - Bruk Formspree eller EmailJS i stedet

## ✅ Checklist

- [ ] Klikket på "Enable form detection" i Netlify
- [ ] Ventet 1-2 minutter
- [ ] Sjekket Forms-seksjonen for "contact" skjemaet
- [ ] Testet skjemaet og sjekket Submissions
- [ ] Satt opp e-post-notifikasjoner
