# 🚀 GitHub Setup for Netlify

## Steg 1: Opprett GitHub Repository

1. Gå til [github.com](https://github.com) og logg inn
2. Klikk på "+" i øvre høyre hjørne → "New repository"
3. Fyll inn:
   - **Repository name:** `rentogblankt` (eller hva du vil)
   - **Description:** "Landingsside for Rent & Blankt AS"
   - **Visibility:** Public (eller Private hvis du vil)
   - **Ikke** hukk av for "Initialize with README" (vi har allerede filer)
4. Klikk "Create repository"

## Steg 2: Kopier Repository URL

Etter at repositoryet er opprettet, kopier URL-en. Den ser ut som:
- `https://github.com/[ditt-brukernavn]/rentogblankt.git`

## Steg 3: Koble lokal kode til GitHub

Kjør disse kommandoene i terminalen (du er allerede i riktig mappe):

```bash
git remote add origin https://github.com/[ditt-brukernavn]/rentogblankt.git
git branch -M main
git push -u origin main
```

**Erstatt `[ditt-brukernavn]` med ditt faktiske GitHub-brukernavn!**

## Steg 4: Koble til Netlify

1. Gå tilbake til Netlify
2. I Netlify, velg "Import an existing project"
3. Klikk på "GitHub" og autoriser Netlify
4. Velg ditt `rentogblankt` repository
5. Netlify vil automatisk oppdage innstillingene
6. Klikk "Deploy site"

Netlify vil nå automatisk deploye siden din, og den vil oppdateres hver gang du pusher til GitHub!

## Hvis du får feil

**Feil: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/[ditt-brukernavn]/rentogblankt.git
```

**Feil: "authentication failed"**
- Du må kanskje bruke en personal access token i stedet for passord
- Eller bruk GitHub CLI: `gh auth login`
