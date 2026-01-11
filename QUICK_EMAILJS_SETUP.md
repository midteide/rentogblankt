# 🚀 Quick EmailJS Setup - 5 minutter

## Problem: Netlify Forms sender ikke e-post

Løsning: Bruk EmailJS som er mer pålitelig!

## Steg 1: Opprett EmailJS-konto (2 min)

1. Gå til [emailjs.com](https://www.emailjs.com)
2. Klikk "Sign Up" (gratis)
3. Verifiser e-posten din

## Steg 2: Konfigurer Email Service (1 min)

1. I EmailJS Dashboard → **Email Services**
2. Klikk **"Add New Service"**
3. Velg **"Gmail"** (eller din e-postleverandør)
4. Følg instruksjonene (enkel kobling)
5. **Kopier Service ID** (f.eks. `service_abc123`)

## Steg 3: Opprett Email Template (1 min)

1. Gå til **Email Templates**
2. Klikk **"Create New Template"**
3. Template navn: `Rent & Blankt Contact Form`
4. Sett opp malen:

**Subject:**
```
Ny henvendelse fra Rent & Blankt AS nettside - {{name}}
```

**Content:**
```
Ny henvendelse fra nettsiden:

Navn: {{name}}
E-post: {{email}}
Telefon: {{phone}}
Melding:
{{message}}

---
Sendt fra: Rent & Blankt AS nettside
```

5. **Kopier Template ID** (f.eks. `template_xyz789`)

## Steg 4: Få Public Key (30 sek)

1. Gå til **Account** → **General**
2. Scroll ned til **"API Keys"**
3. **Kopier Public Key** (f.eks. `abcdefghijklmnop`)

## Steg 5: Oppdater koden (1 min)

1. Åpne `script.js`
2. Finn linjen med `EMAILJS_CONFIG` (rundt linje 40)
3. Erstatt:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'YOUR_SERVICE_ID',      // Sett inn din Service ID
       templateId: 'YOUR_TEMPLATE_ID',    // Sett inn din Template ID
       publicKey: 'YOUR_PUBLIC_KEY'       // Sett inn din Public Key
   };
   ```

4. Lagre filen

## Steg 6: Deploy (automatisk via CI/CD)

```bash
git add script.js
git commit -m "Configure EmailJS for contact form"
git push
```

Netlify vil automatisk deploye!

## Steg 7: Test

1. Gå til nettsiden din
2. Fyll ut kontaktskjemaet
3. Send inn
4. Sjekk e-posten din! ✉️

## ✅ Ferdig!

E-postene vil nå komme direkte til `kontakt@rentogblankt.no` via EmailJS.

## Troubleshooting

**Får ikke e-post?**
- Sjekk spam-mappen
- Sjekk at alle ID-er er riktig i `script.js`
- Sjekk EmailJS Dashboard → Logs for feilmeldinger

**EmailJS kvote full?**
- Gratis plan: 100 e-poster/måned
- Oppgrader til betalt plan hvis nødvendig

## Fordeler med EmailJS

- ✅ Fungerer 100% pålitelig
- ✅ Ingen server nødvendig
- ✅ Rask oppsett
- ✅ 100 gratis e-poster/måned
- ✅ Fungerer uavhengig av Netlify Forms
