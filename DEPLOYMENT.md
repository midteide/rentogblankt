# 🚀 Deployment Guide - Rent & Blankt AS

## Status
✅ Git repository initialisert  
✅ Alle filer er klare  
✅ Netlify-konfigurasjon er på plass  

## Neste steg for å publisere siden

### Steg 1: Push til GitHub (valgfritt, men anbefalt)

```bash
# Opprett et nytt repository på GitHub (github.com)
# Deretter kjør:

git remote add origin https://github.com/[ditt-brukernavn]/rentogblankt.git
git branch -M main
git push -u origin main
```

### Steg 2: Deploy til Netlify

**Alternativ A: Via Netlify Dashboard (Enklest)**
1. Gå til [app.netlify.com](https://app.netlify.com)
2. Logg inn eller opprett konto (gratis)
3. Klikk "Add new site" → "Deploy manually"
4. Dra og slipp hele `rentogblankt`-mappen inn i nettleseren
5. Netlify vil automatisk publisere siden
6. Du får en URL som `https://random-name-123.netlify.app`

**Alternativ B: Via GitHub (Automatisk)**
1. I Netlify: "Add new site" → "Import an existing project"
2. Velg GitHub og autoriser Netlify
3. Velg ditt `rentogblankt` repository
4. Klikk "Deploy site"
5. Netlify vil automatisk deploye ved hver push til GitHub

### Steg 3: Koble til domenet www.rentogblankt.no

1. **I Netlify:**
   - Gå til "Site settings" → "Domain management"
   - Klikk "Add custom domain"
   - Skriv inn `www.rentogblankt.no`
   - Netlify vil gi deg DNS-innstillinger

2. **Hos din domeneleverandør:**
   - Logg inn på din domeneleverandør (f.eks. One.com, Namecheap, etc.)
   - Gå til DNS-innstillinger for `rentogblankt.no`
   - Legg til følgende poster:

   **CNAME-post:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `[din-netlify-url].netlify.app` (f.eks. `random-name-123.netlify.app`)
   - TTL: `3600` (eller auto)

   **A-post for root-domenet (rentogblankt.no):**
   - Type: `A`
   - Name: `@` (eller tom)
   - Value: `75.2.60.5` (Netlify's IP - sjekk i Netlify dashboard for oppdatert IP)
   - TTL: `3600`

3. **Vent på DNS-propagation:**
   - Det kan ta 1-24 timer før endringene trer i kraft
   - Du kan sjekke status i Netlify dashboard

4. **SSL-sertifikat:**
   - Netlify vil automatisk sette opp HTTPS/SSL
   - Dette skjer vanligvis automatisk når DNS er konfigurert

### Steg 4: Oppdater organisasjonsnummer

1. Åpne `index.html`
2. Finn linjen: `<p>Org.nr: [Organisasjonsnummer]</p>` (rundt linje 180)
3. Erstatt `[Organisasjonsnummer]` med det faktiske nummeret
4. Commit og push endringene (hvis du bruker GitHub)

## ✅ Testliste

- [ ] Siden er publisert på Netlify
- [ ] DNS-innstillinger er oppdatert
- [ ] www.rentogblankt.no fungerer
- [ ] HTTPS/SSL er aktivert (automatisk)
- [ ] Organisasjonsnummer er oppdatert
- [ ] Kontaktinformasjon er korrekt
- [ ] Siden ser bra ut på mobil og desktop

## 🆘 Hjelp

- **Netlify dokumentasjon:** https://docs.netlify.com
- **DNS-problemer:** Sjekk at CNAME og A-poster er riktig satt
- **SSL-problemer:** Vent opptil 24 timer etter DNS-oppsett

## 📝 Notater

- Netlify tilbyr gratis hosting med automatisk HTTPS
- CDN er inkludert for rask lastetid
- Automatisk deployment hvis du kobler til GitHub
