# 📧 Netlify Forms E-post Setup - Steg for Steg Guide

## Problem: Jeg får ikke e-post fra kontaktskjemaet

Dette er fordi e-post-notifikasjoner må settes opp manuelt i Netlify Dashboard. Skjemaet fungerer, men Netlify sender ikke e-post automatisk uten konfigurasjon.

## ✅ Løsning: Sett opp e-post-notifikasjoner i Netlify

### Steg 1: Logg inn på Netlify
1. Gå til [app.netlify.com](https://app.netlify.com)
2. Logg inn med din konto

### Steg 2: Finn ditt site
1. Klikk på ditt site (rentogblankt)
2. Du skal nå se site-dashboardet

### Steg 3: Gå til Forms
1. I venstre meny, klikk på **"Forms"**
2. Du skal se en liste over aktive skjemaer
3. Du skal se skjemaet ditt med navnet **"contact"**

### Steg 4: Sjekk at skjemaet fungerer
1. Klikk på **"contact"** skjemaet
2. Gå til **"Submissions"** tab
3. Her skal du se alle innsendte skjemaer
4. **Test:** Send inn et test-skjema fra nettsiden din
5. Sjekk om det dukker opp her (kan ta noen sekunder)

**Hvis skjemaet ikke vises her:**
- Sjekk at skjemaet har `data-netlify="true"` attributt (det har det)
- Sjekk at Netlify har deployet den nyeste versjonen
- Vent noen minutter og prøv igjen

### Steg 5: Sett opp e-post-notifikasjoner
1. Mens du er i **Forms** → **contact** skjemaet
2. Klikk på **"Settings"** tab (eller "Form settings")
3. Scroll ned til **"Form notifications"**
4. Klikk **"Add notification"**
5. Velg **"Email notification"**

### Steg 6: Konfigurer e-post-notifikasjonen
Fyll inn følgende:

**Notification details:**
- **To:** `kontakt@rentogblankt.no` (eller din e-postadresse)
- **From name:** `Rent & Blankt AS Nettside`
- **From email:** `noreply@rentogblankt.no` (eller bruk Netlify's default)
- **Reply-to:** `{{email}}` (dette bruker e-postadressen fra skjemaet)
- **Subject:** `Ny henvendelse fra nettsiden - {{name}}`

**Email template:**
Du kan bruke standard mal eller tilpasse. Her er en god mal:

```
Ny henvendelse fra Rent & Blankt AS nettside

Navn: {{name}}
E-post: {{email}}
Telefon: {{phone}}
Melding:
{{message}}

---
Sendt fra: {{site_name}}
Tidspunkt: {{submission_created_at}}
```

### Steg 7: Lagre og test
1. Klikk **"Save"** eller **"Add notification"**
2. Gå tilbake til nettsiden din
3. Send inn et test-skjema
4. Sjekk e-posten din (og spam-mappen!)

## 🔍 Troubleshooting

### Får fortsatt ikke e-post?

1. **Sjekk spam-mappen**
   - E-post kan havne i spam
   - Legg til Netlify i kontakter hvis nødvendig

2. **Sjekk at notifikasjonen er aktiv**
   - Gå til Forms → contact → Settings → Form notifications
   - Sjekk at notifikasjonen er "Active" (grønn)

3. **Sjekk e-postadressen**
   - Er e-postadressen riktig?
   - Har du tilgang til den e-postadressen?

4. **Sjekk Netlify's e-postgrenser**
   - Gratis plan: 100 e-poster/måned
   - Sjekk om du har nådd grensen

5. **Test med en annen e-postadresse**
   - Prøv med en Gmail eller annen e-post først
   - For å se om problemet er med e-postadressen eller Netlify

### Se innsendte skjemaer uten e-post

Selv uten e-post-notifikasjoner kan du se alle innsendte skjemaer:
1. Gå til Netlify Dashboard → Forms → contact → Submissions
2. Her ser du alle innsendte skjemaer
3. Du kan eksportere dem som CSV

### Alternativer hvis Netlify Forms ikke fungerer

1. **Formspree** - Tredjepartstjeneste for skjemaer
2. **EmailJS** - Send e-post direkte fra frontend
3. **Zapier/Make** - Automatiser skjemainnsendinger til e-post

## 📊 Sjekk skjema-statistikk

I Netlify Dashboard → Forms → contact kan du se:
- Antall innsendte skjemaer
- Spam-rate
- Suksess-rate
- Alle innsendte skjemaer

## ✅ Checklist

- [ ] Skjemaet vises i Netlify Dashboard → Forms
- [ ] Test-skjema dukker opp i Submissions
- [ ] E-post-notifikasjon er satt opp
- [ ] E-postadresse er riktig
- [ ] Test-e-post er sendt og mottatt
- [ ] Sjekket spam-mappen

## 🆘 Hjelp

Hvis du fortsatt har problemer:
1. Sjekk Netlify's dokumentasjon: https://docs.netlify.com/forms/setup/
2. Sjekk Netlify's status: https://www.netlifystatus.com/
3. Kontakt Netlify support: https://www.netlify.com/support/
