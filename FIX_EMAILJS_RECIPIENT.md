# 🔧 Fix: E-post sendes til feil adresse

## Problem
E-postene sendes til EmailJS-registreringsadressen i stedet for adressen i servicen.

## Løsning: Oppdater EmailJS Template

### Steg 1: Gå til EmailJS Template
1. Logg inn på [emailjs.com](https://www.emailjs.com)
2. Gå til **Email Templates**
3. Klikk på din template (f.eks. `template_leegxfb`)

### Steg 2: Sett "To Email" i templaten
1. I template-editoren, finn feltet **"To Email"** (eller "To")
2. **Alternativ 1 (Anbefalt):** Sett den direkte til din e-postadresse:
   ```
   kontakt@rentogblankt.no
   ```
   
   **Alternativ 2:** Bruk variabel (hvis du vil ha dynamisk adresse):
   ```
   {{to_email}}
   ```
   Dette vil bruke `to_email`-variabelen fra koden.

3. **Viktig:** Sjekk at "To Email"-feltet ikke er tomt og ikke peker til registreringsadressen din

### Steg 3: Lagre template
1. Klikk **"Save"** eller **"Update"**
2. Template er nå oppdatert

### Steg 4: Test
1. Send inn et test-skjema fra nettsiden
2. E-post skal nå komme til `kontakt@rentogblankt.no` (eller den adressen du satte)

## Hvorfor skjer dette?

EmailJS bruker "To Email"-feltet i templaten for å bestemme mottaker. Hvis dette ikke er satt, bruker den registreringsadressen som fallback.

## Alternativ: Oppdater koden

Hvis du vil bruke dynamisk adresse, kan jeg oppdatere koden til å sende `to_email` som en parameter. Men den enkleste løsningen er å sette det direkte i templaten.

## Sjekkliste

- [ ] Gått til EmailJS → Email Templates
- [ ] Åpnet din template
- [ ] Satt "To Email" til `kontakt@rentogblankt.no`
- [ ] Lagret template
- [ ] Testet skjemaet

Etter dette skal e-postene komme til riktig adresse!
