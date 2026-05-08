# Kosningar Akureyri 2026

Persónulegt yfirlit yfir stefnumál flokkanna sem bjóða fram í sveitarstjórnarkosningum á Akureyri **16. maí 2026**. Útbúið til einkanota fyrir mig og fjölskylduna.

## Hvað er á síðunni?

- **Yfirlit** ([`index.html`](index.html)) — kynning og listi yfir flokkana fimm.
- **Ákvörðunarvél** ([`akvardanavel.html`](akvardanavel.html)) — sleiðar fyrir hvert málefni, raðar flokkum eftir samræmi við þínar áherslur. Hlutlaus forstilling (5/10) sjálfgefin.
- **Samanburður** ([`samanburdur.html`](samanburdur.html)) — fylki sem sýnir hvernig hver flokkur stendur í hverju málefni, með drilldown á lykilatriði.
- **Stefnuskrár** (`stefnuskra/*.html`) — ein statísk síða fyrir hverja stefnuskrá (12 alls — Sjálfstæðisflokkurinn er með 8 málaflokka, hinir 1 hver). Öll skilaskráin er fyrirfram rendaður (úr .md) með samræmdri hönnun og hliðarstiku til að rata á milli flokka og skjala.

## Skráabygging

```
kosningar-2026/
├── index.html              # Forsíða
├── akvardanavel.html       # Ákvörðunarvél (sleiðar)
├── samanburdur.html        # Samanburðarmatrix
├── build_stefnuskra.py     # Smíðaskrifta — býr til HTML síður úr .md skjölum
├── README.md
├── assets/
│   ├── styles.css
│   └── data.js             # Stigagjöf og lykilatriði (1-5 stig á flokk/málefni)
├── stefnuskra/             # Sjálfgerðar HTML síður — ein á hverja stefnuskrá
│   ├── sjalfstaedisflokkurinn-*.html  (8 skjöl)
│   ├── akureyrarlistinn.html
│   ├── l-listinn.html
│   ├── samfylkingin.html
│   └── vidreisn.html
└── manifesto/              # Upprunalegu .md skjölin (heimild)
    ├── Sjálfstæðisflokkurinn - *.md  (8 skjöl)
    ├── Akureyrarlistinn - lykilmál.md
    ├── L-listinn - Stefnumál.md
    ├── Samfylkingin - Sterkari saman.md
    └── Viðreisn - Stefnan á Akureyri.md
```

> Vefurinn vísar **ekki** í `manifesto/.md` skrárnar á keyrslutíma — `stefnuskra/*.html` er statískt fyrirfram smíðað. Upprunalegu skjölin eru þó haldin í repoinu sem heimild og uppfærsluuppspretta.

## Að keyra þetta heima

Þetta er hreinn statískur vefur — engin þörf á vefþjóni. Tvísmelltu á `index.html` til að opna í vafranum.

Ef þú vilt samt keyra á vefþjóni (t.d. til að líkja eftir GitHub Pages):

```powershell
cd "C:\Users\RobertKarason\Cowork Workspace\kosningar-2026"
python -m http.server 8000
```
Opnaðu svo http://localhost:8000

## Að uppfæra stefnuskrárnar

Ef þú breytir einhverju .md skjali í `manifesto/`, eða bætir við nýju, þarftu að keyra smíðaskrifuna til að uppfæra `stefnuskra/*.html`:

```powershell
cd "C:\Users\RobertKarason\Cowork Workspace\kosningar-2026"
pip install markdown    # bara í fyrsta skipti
python build_stefnuskra.py
```

Skriftan les .md skjölin, breytir þeim í HTML og skrifar nýjar `stefnuskra/*.html` síður með sömu uppsetningu og hönnun. Bæði listi flokka og skjalaheiti eru hardcodað í skriftunni — bættu þeim þar við ef þú bætir nýju skjali við.

## Að deploya á GitHub Pages (frítt)

1. **Búa til repo á GitHub**:
   - Farðu á https://github.com/new
   - Nafn: t.d. `kosningar-2026` eða `akureyri-kosningar`
   - **Public** (krafa fyrir GitHub Pages á ókeypis aðgangi)
   - Ekki haka við „Initialize with README" (þú átt nú þegar README)

2. **Hlaða upp skránum** (úr þessari möppu):
   ```powershell
   cd "C:\Users\RobertKarason\Cowork Workspace\kosningar-2026"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<NOTANDANAFN>/<REPO-NAFN>.git
   git push -u origin main
   ```

3. **Virkja GitHub Pages**:
   - Farðu í repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Smelltu **Save**

4. **Bíða 1–2 mínútur**, svo opnaðu:
   ```
   https://<NOTANDANAFN>.github.io/<REPO-NAFN>/
   ```

### Ábending um repo-nafnið
Ef nafnið inniheldur íslenska stafi (t.d. á, é, ú) þá geta sumir vafrar fokkað þeim í URL — best að halda nafninu einföldu (`kosningar-2026`).

## Hvernig stigin eru reiknuð

Hver flokkur fær einkunn **1–5** í hverju málefni — hærri tala = skýrari og afgerandi áhersla í stefnuskrá. Þetta er huglægt mat byggt á lestri stefnuskránna.

Þegar þú stillir sleiðana (mikilvægi 0–10) reiknar vélin:

```
samræmi (%) = Σ(mikilvægi × stigaeinkunn flokks) / Σ(mikilvægi × 5) × 100
```

Sem þýðir: ef þú gefur málefni 0 í mikilvægi þá hefur stigaeinkunn flokksins í því málefni engin áhrif á útkomuna.

Sleiðar byrja á hlutlausri forstillingu (5/10 fyrir öll málefni). Hver notandi stillir sjálfur sín gildi.

## Að breyta stigagjöf eða bæta við lykilatriðum

Allt er í einni skrá: [`assets/data.js`](assets/data.js).

- **Til að breyta einkunn**: leitaðu að `scores: {` undir flokk og breyttu tölunni (1–5).
- **Til að breyta lykilatriðum**: leitaðu að `keyPoints: {` og bættu/færðu til atriði.
- **Til að bæta við málefni**: bættu því inn í `TOPICS` og passaðu að allir flokkar fái stig + lykilatriði í því.

## Athugaðu

- Þetta er **ekki** opinber kosningavél og ekki hlutlægt — stigagjöfin endurspeglar mat byggt á opinberum stefnuskrám.
- Heilbrigðismál eru að mestu á ábyrgð ríkis, ekki sveitarfélags. „Velferð og heilbrigði" hér nær aðallega til þjónustu sem sveitarfélagið rekur (eldri borgarar, fatlaðir, félagslegt húsnæði) auk hagsmunagæslu sveitarfélags gagnvart ríki um SAk.
- Framhaldsskólar (MA, VMA) eru ríkisreknir; það sem snýr að 16–18 ára á sveitarstjórnarstigi er einkum félagsmiðstöðvar, frístundastyrkir og tómstundir.
