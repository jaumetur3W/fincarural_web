# MAS DE L'ALZINA — Private stays, celebrations & retreats
### Lloc web d'hospitalitat rural mediterrània i sol·licitud d'esdeveniments privats

---

## 1. Visió General del Projecte

**Mas de l'Alzina** és una experiència web dissenyada i desenvolupada per a una marca conceptual d'allotjament rural i esdeveniments privats a l'interior de la província de València.

El disseny prioritza una **direcció d'art editorial, serena i arquitectònica**, allunyada tant de les plantilles corporatives genèriques com de les pàgines de menjar ràpid o reserves immediates.

---

## 2. Paleta i Identitat Visual

- **Chalk (#F5F2EA)**: Fons general principal càlid.
- **Warm White (#FBF9F4)**: Superfícies de contingut i targetes editorials obertes.
- **Olive (#343D2D)**: Color mestre per a la navegació, botons principals i contrastos.
- **Deep Brown (#51483D)**: Text secundari i lletra de lectura d'alta llegibilitat.
- **Terracotta (#B56F50)**: Acentuacions puntuals en xifres, etiquetes i crides a l'acció.
- **Sand (#DDD4C5)**: Línies fines separadores i relleus minerals.
- **Tipografia**: Combinació de serif editorial clàssica (`Cormorant Garamond`) per a grans titulars i sans-serif contemporània neta (`Plus Jakarta Sans`) per a lectura, navegació i formularis.

---

## 3. Arquitectura de Rutes i Pàgines Implementades

1. **Inici (`/`)**: Hero arquitectònic immersiu, manifest editorial, 3 línies d'experiència, destacats d'espais, explicació del procés en 3 passos i tancament editorial.
2. **La Finca (`/la-finca`)**: Història de la rehabilitació amb calç i fusta, característiques sostenibles i galeria arquitectònica filtrable per racons amb visualitzador en pantalla completa (Lightbox).
3. **Estades (`/estades`)**: Propostes de lloguer íntegre i suites singulars, equipament, banys amb pedra natural i sol·licitud de dates.
4. **Celebracions (`/celebracions`)**: Trobades familiars pausades, enllaços íntims (fins a 60 persones), consells d'espais i proveïdors locals respectuosos.
5. **Encuentres de Empresa (`/encuentres`)**: Proposta de valor per a comitès estratègics, retirs de direcció i tallers de cohesió en un entorn confidencial.
6. **Sol·licitar Disponibilitat (`/sollicitud`)**: **Formulari interactiu multipas** complet (Pas 1: Tipologia, Pas 2: Dates i aforament, Pas 3: Preferències condicionals, Pas 4: Contacte i mode de prova, Pas 5: Resum de revisió).
7. **Informació & FAQ (`/faq`)**: Preguntes freqüents amb acordió dinàmic dividit per temàtiques (reserves, horaris, restauració, accés).
8. **Condicions de la Demo & Privacitat (`/legal`)**: Explicació explícita de la naturalesa de portfolio i tractament de dades en frontend.
9. **Pàgina 404 (`*`)**: Estat no trobat amb retorn guiat.

---

## 4. Formulari Multipas Operatiu

- **Validació en temps real per camp**: dates no en el passat, coherència d'arribada/sortida, límit de persones, formats de correu i acceptació no premarcada.
- **Camps condicionals**: les preguntes del pas 3 s'adapten si l'usuari ha triat estada privada, celebració o trobada d'empresa.
- **Mode de simulació**: selector integrat per provar tant l'enviament reeixit (amb feedback animat) com l'estat d'error de xarxa.
- **Resum previ editable**: pas 5 per revisar les dades abans de l'enviament final.
- **Zero persistència indeguda**: les dades s'executen a l'estat del client sense enviar-se a tercers.

---

## 5. Instruccions d'Execució Local

```bash
# Instal·lar dependències (si no s'ha fet prèviament)
npm install

# Iniciar servidor de desenvolupament local
npm run dev

# Compilar per a producció
npm run build
```

El servidor s'iniciarà a `http://localhost:5173/`.

---

## 6. Passos Necessaris per Connectar un Backend Real

1. **API Endpoint**: connectar el pas 5 del formulari a un endpoint `POST /api/inquiries`.
2. **Notificacions per correu**: integració d'un servei transaccional (Resend, SendGrid o SMTP propi) per enviar còpia tant a l'equip del Mas com al client.
3. **Calendari de bloqueig**: integració amb iCal o taula SQL/PostgreSQL per bloquejar dates ocupades en temps real.
