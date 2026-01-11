# 📧 Kontaktskjema Setup Guide

## Netlify Forms er nå aktivert!

Kontaktskjemaet er nå konfigurert til å bruke Netlify Forms, som automatisk sender e-post når noen sender inn skjemaet.

## Slik setter du opp e-post-notifikasjoner

### Steg 1: Gå til Netlify Dashboard
1. Logg inn på [app.netlify.com](https://app.netlify.com)
2. Velg ditt site (rentogblankt)

### Steg 2: Konfigurer e-post-notifikasjoner
1. Gå til **Site settings** → **Forms** → **Form notifications**
2. Klikk **Add notification**
3. Velg **Email notification**
4. Fyll inn:
   - **To:** `kontakt@rentogblankt.no` (eller din e-postadresse)
   - **From:** `Netlify Forms <forms@netlify.com>` (eller tilpass)
   - **Subject:** `Ny henvendelse fra Rent & Blankt AS nettside`
   - **Email template:** Velg "Default" eller tilpass

### Steg 3: Test skjemaet
1. Gå til din live nettside
2. Fyll ut kontaktskjemaet
3. Send inn
4. Sjekk e-posten din!

## Hva skjer når noen sender inn skjemaet?

1. **Brukeren fyller ut skjemaet** på nettsiden
2. **Netlify mottar dataene** automatisk
3. **Du får e-post** med alle skjemadataene
4. **Dataene lagres** i Netlify Dashboard (Forms → Submissions)

## Se innsendte skjemaer

I Netlify Dashboard:
- Gå til **Forms** → **Active forms** → **contact**
- Her ser du alle innsendte skjemaer
- Du kan eksportere dataene som CSV

## Spam-beskyttelse

Skjemaet har innebygd spam-beskyttelse:
- **Honeypot field** - skjult felt som bots fyller ut
- **Netlify's spam filter** - automatisk spam-deteksjon

## Tilpass e-post-mal

Du kan tilpasse e-post-malen i Netlify:
1. Gå til **Forms** → **Form notifications**
2. Klikk på notifikasjonen din
3. Velg **Custom email template**
4. Bruk variabler som:
   - `{{form_name}}` - Navn på skjemaet
   - `{{name}}` - Navn fra skjemaet
   - `{{email}}` - E-post fra skjemaet
   - `{{message}}` - Melding fra skjemaet

## Eksempel på e-post-mal

```
Ny henvendelse fra Rent & Blankt AS nettside

Navn: {{name}}
E-post: {{email}}
Telefon: {{phone}}
Melding: {{message}}

---
Sendt fra: {{site_name}}
```

## Troubleshooting

### Får ikke e-post?
- Sjekk spam-mappen
- Sjekk at e-postadressen er riktig i Netlify
- Sjekk Netlify Dashboard → Forms → Submissions (ser du skjemaet der?)
- Sjekk at skjemaet har `data-netlify="true"` attributt

### Skjemaet fungerer ikke?
- Sjekk at Netlify Forms er aktivert for ditt site
- Sjekk nettleserens konsoll for feilmeldinger
- Sjekk at alle felter har `name` attributter

## Alternativer

Hvis du vil bruke en annen e-posttjeneste:
- **Formspree** - Tredjepartstjeneste for skjemaer
- **EmailJS** - Send e-post direkte fra frontend
- **Zapier/Make** - Automatiser skjemainnsendinger

Men Netlify Forms er enklest og gratis for opptil 100 innsendinger/måned!
