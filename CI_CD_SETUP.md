# 🚀 CI/CD Pipeline Setup Guide

## Oversikt

Prosjektet har nå en fullstendig CI/CD pipeline som gjør det enkelt å deploye endringer uten manuelle steg i nettleseren.

## Hvordan det fungerer

### Automatisk Deployment
1. **Du pusher til GitHub** → Netlify deployer automatisk
2. **GitHub Actions validerer** koden før deployment
3. **Ingen manuelle steg** i Netlify-dashboardet nødvendig!

## To måter å deploye på

### Metode 1: Enkel deploy-script (Anbefalt) 🎯

```bash
./deploy.sh
```

Scriptet vil:
- ✅ Sjekke for ucommittede endringer
- ✅ Hjelpe deg med å committe endringer
- ✅ Pushe til GitHub
- ✅ Netlify deployer automatisk

### Metode 2: Standard Git workflow

```bash
git add .
git commit -m "Din commit melding"
git push
```

Netlify vil automatisk deploye!

## GitHub Actions Workflows

### 1. Validate Workflow
- Kjører ved hver push og pull request
- Validerer HTML, CSS og JavaScript
- Sjekker at alle nødvendige filer er til stede
- Blokkerer deployment hvis noe er feil

### 2. Deploy Workflow
- Kjører kun ved push til `main` branch
- Deployer automatisk til Netlify (hvis konfigurert)
- Krever Netlify secrets (se nedenfor)

## Netlify Secrets Setup (Valgfritt)

Hvis du vil at GitHub Actions skal deploye direkte (i tillegg til Netlify's automatiske deployment):

1. Gå til Netlify Dashboard → Site settings → Build & deploy → Continuous Deployment
2. Kopier **Site ID** og **Auth Token**

3. I GitHub:
   - Gå til ditt repository → Settings → Secrets and variables → Actions
   - Legg til:
     - `NETLIFY_AUTH_TOKEN` (fra Netlify)
     - `NETLIFY_SITE_ID` (fra Netlify)

**Note:** Dette er valgfritt! Netlify deployer automatisk når du pusher til GitHub, så du trenger ikke GitHub Actions for deployment.

## Workflow Oversikt

```
┌─────────────┐
│  Lokal kode │
└──────┬──────┘
       │
       │ git push
       ▼
┌─────────────┐
│   GitHub    │
└──────┬──────┘
       │
       ├──► GitHub Actions (validering)
       │
       └──► Netlify (automatisk deployment)
            │
            ▼
       ┌─────────────┐
       │  Live site  │
       └─────────────┘
```

## Testing lokalt

Før du pusher, kan du teste endringene lokalt:

```bash
# Åpne index.html i nettleseren
open index.html

# Eller bruk en lokal server (anbefalt)
python3 -m http.server 8000
# Åpne http://localhost:8000
```

## Troubleshooting

### GitHub Actions feiler
- Sjekk at alle filer er committet
- Sjekk at HTML/CSS/JS har riktig syntaks
- Se Actions-tab i GitHub for detaljerte feilmeldinger

### Netlify deployer ikke
- Sjekk at Netlify er koblet til GitHub-repositoryet
- Sjekk Netlify Dashboard → Deploys for feilmeldinger
- Sjekk at du pusher til `main` branch

### Deploy-scriptet fungerer ikke
- Sjekk at scriptet har execute-rettigheter: `chmod +x deploy.sh`
- Sjekk at du er i riktig mappe
- Sjekk at git remote er konfigurert: `git remote -v`

## Best Practices

1. **Commit ofte** - Små, meningsfulle commits
2. **Test lokalt først** - Åpne siden i nettleseren før du pusher
3. **Bruk beskrivende commit-meldinger** - "Update contact info" er bedre enn "fix"
4. **Sjekk Netlify deploy** - Gå til Netlify dashboard for å se deployment status

## Quick Reference

```bash
# Enkel deployment
./deploy.sh

# Eller manuelt
git add .
git commit -m "Beskrivelse av endringer"
git push

# Sjekk deployment status
gh run list  # Hvis du har GitHub CLI
```

## Support

- **GitHub Actions:** Se `.github/workflows/` mappen
- **Netlify:** Sjekk Netlify Dashboard
- **Deploy script:** Se `deploy.sh` for detaljer
