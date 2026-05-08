// Gögn um flokka og málefni - Sveitarstjórnarkosningar Akureyri 2026
// Stigagjöf 1-5 byggð á skýrleika og þunga áherslu í stefnuskrá hvers flokks

const TOPICS = [
  {
    id: 'skoli',
    name: 'Grunn- og leikskólar',
    icon: '📚',
    description: 'Námsárangur, gæði kennslu, leikskólapláss, rekstrarform.'
  },
  {
    id: 'aeskulyd',
    name: 'Æskulýður (16–18 ára)',
    icon: '🎒',
    description: 'Frístundastyrkur, félagsmiðstöðvar, hagsmunagæsla VMA.'
  },
  {
    id: 'atvinnulif',
    name: 'Atvinnulíf og nýsköpun',
    icon: '💼',
    description: 'Atvinnulóðir, einföldun regluverks, nýsköpun, stuðningur við fyrirtæki.'
  },
  {
    id: 'alogur',
    name: 'Álögur og gjöld',
    icon: '💰',
    description: 'Lækkun fasteignagjalda og þjónustugjalda, aðhald í rekstri.'
  },
  {
    id: 'skipulag',
    name: 'Skipulag og húsnæði',
    icon: '🏗️',
    description: 'Aðalskipulag, framboð íbúða, þétting byggðar, fyrstu kaupendur.'
  },
  {
    id: 'velferd',
    name: 'Velferð og heilbrigði',
    icon: '❤️',
    description: 'Eldri borgarar, fatlað fólk, félagslegt húsnæði, hagsmunagæsla SAk.'
  },
  {
    id: 'menning',
    name: 'Menning og íþróttir',
    icon: '🎭',
    description: 'Menningarsjóðir, viðburðir, íþróttamannvirki, Hlíðarfjall.'
  },
  {
    id: 'stafvaeding',
    name: 'Stafvæðing og stjórnsýsla',
    icon: '🤖',
    description: 'Gervigreind í stjórnsýslu, stytting afgreiðslutíma, stafræn þjónusta.'
  },
  {
    id: 'samgongur',
    name: 'Samgöngur',
    icon: '🚌',
    description: 'Strætó, hjólaleiðir, flugvöllur, stytting Reykjavíkurleiðar.'
  }
];

const PARTIES = [
  {
    id: 'sjalfstaedisflokkurinn',
    name: 'Sjálfstæðisflokkurinn',
    shortName: 'Sjálfstæðisfl.',
    listLetter: 'D',
    tagline: 'Áframhaldandi rekstur, lágar álögur, atvinnulíf í fyrirrúmi',
    color: '#1F4E8C',
    colorLight: '#dde7f3',
    url: 'https://www.islendingur.is/',
    manifestoUrl: 'stefnuskra/sjalfstaedisflokkurinn-rekstur.html',
    manifestoFiles: [
      { title: 'Rekstur og stjórnsýsla', url: 'stefnuskra/sjalfstaedisflokkurinn-rekstur.html' },
      { title: 'Atvinnumál', url: 'stefnuskra/sjalfstaedisflokkurinn-atvinna.html' },
      { title: 'Menntamál', url: 'stefnuskra/sjalfstaedisflokkurinn-menntamal.html' },
      { title: 'Velferðarmál', url: 'stefnuskra/sjalfstaedisflokkurinn-velferd.html' },
      { title: 'Skipulagsmál', url: 'stefnuskra/sjalfstaedisflokkurinn-skipulag.html' },
      { title: 'Íþrótta- og tómstundamál', url: 'stefnuskra/sjalfstaedisflokkurinn-ithrott.html' },
      { title: 'Menningarmál', url: 'stefnuskra/sjalfstaedisflokkurinn-menning.html' },
      { title: 'Borgarhlutverk Akureyrarbæjar', url: 'stefnuskra/sjalfstaedisflokkurinn-borgarhlutverk.html' }
    ],
    scores: {
      skoli: 5,
      aeskulyd: 3,
      atvinnulif: 5,
      alogur: 5,
      skipulag: 4,
      velferd: 5,
      menning: 3,
      stafvaeding: 5,
      samgongur: 3
    },
    keyPoints: {
      skoli: [
        'Skýr áhersla á námsárangur — læsi, íslenska og stærðfræði',
        'Tölulegt einkunnakerfi og betri nýting upplýsingatækni',
        'Aukin fjölbreytni í rekstrarformi leik- og grunnskóla (valfrelsi)',
        'Áfram gjaldfrjáls leikskóli, fjölgun innritunartímabila',
        'Ný álma við Lundarskóla og Hagasteinn kláraður',
        'Farteymi sérfræðinga og snemmtæk íhlutun í geðheilbrigði'
      ],
      aeskulyd: [
        'Áframhaldandi hækkun frístundastyrks, óháð efnahag',
        'Bætt aðgengi fatlaðra barna að íþrótta- og tómstundastarfi',
        'Áframhaldandi efling frístundastrætós',
        'Sterkur þrýstingur á ríki um stækkun VMA'
      ],
      atvinnulif: [
        '„Akureyri sem besta bæjarfélag til að reka fyrirtæki"',
        'Lægri álögur á atvinnulíf og nægt framboð atvinnulóða',
        'Verulega styttri afgreiðslutími leyfa á kjörtímabilinu',
        'Skýr framtíðarsýn fyrir hafnarsvæðin (Krossanes, Dysnes)',
        'Heilsársferðaþjónusta í Hlíðarfjalli og á golfsvæði',
        'Sterkari tenging við HA og sprotafyrirtæki'
      ],
      alogur: [
        'Lækkun fasteignagjalda á íbúa og fyrirtæki',
        'Þjónustugjöld hækki ekki umfram verðbólgu — stefnt að lækkun',
        'Lækkun skuldahlutfalls á kjörtímabilinu',
        'Útvistun verkefna og hagræðing með gervigreind',
        'Gjaldfrjáls leikskóli og gjaldfrjáls Virk efri ár'
      ],
      skipulag: [
        'Uppfærsla aðalskipulags með skýrri framtíðarsýn',
        'Stuðningur við séreignarstefnuna og fyrstu kaupendur',
        'Bílastæðahús í miðbæ (Hólabraut/Brekkugata)',
        'Hraðari skipulagsferli, fjölbreytt húsnæði',
        'Aukin fjöldi bílastæða við heilsugæsluna í Sunnuhlíð'
      ],
      velferd: [
        'Lífsgæðakjarni fyrir eldri borgara — samþætt húsnæði og þjónusta',
        'Verkefnið Virk efri ár verði gjaldfrjáls',
        'Áframhaldandi uppbygging íbúðalausna fyrir fatlað fólk',
        'Stöndum vörð um Sjúkrahúsið á Akureyri',
        '140 ný hjúkrunarrými í Þurstaholti',
        'Þyrlusveit Landhelgisgæslunnar á Akureyri'
      ],
      menning: [
        'Stuðningur við skapandi greinar og listafólk',
        'Reglulegur aðgangur barna að listum í gegnum skólastarf',
        'Viðburðahald og hátíðir allt árið',
        'Sterkari menningarsamningur við ríkið'
      ],
      stafvaeding: [
        'Markviss notkun gervigreindar í stjórnsýslu',
        'Útvistun sérhæfðra verkefna þar sem hagkvæmt er',
        'Stafræn þjónusta — meirihluti umsókna stafrænn',
        'Skilgreindur afgreiðslutími í helstu þjónustuþáttum'
      ],
      samgongur: [
        'Bættar samgöngur við höfuðborgarsvæðið — vegur og flug',
        'Stöndum vörð um millilandaflugvöllinn á Akureyri',
        'Bætt umferðarlausnir og almenningssamgöngur innanbæjar',
        'Öruggar samgöngur við Hrísey og Grímsey allt árið'
      ]
    }
  },
  {
    id: 'akureyrarlistinn',
    name: 'Akureyrarlistinn',
    shortName: 'Akureyrarl.',
    listLetter: 'Y',
    tagline: 'Vöxtur, atvinnulíf, lægri skattar, sterkt mótvægi við höfuðborgarsvæðið',
    color: '#2D9C5C',
    colorLight: '#d8efe1',
    url: 'https://akureyrarlistinn.is/stefna/',
    manifestoUrl: 'stefnuskra/akureyrarlistinn.html',
    manifestoFiles: [
      { title: '8 lykilmál', url: 'stefnuskra/akureyrarlistinn.html' }
    ],
    scores: {
      skoli: 3,
      aeskulyd: 2,
      atvinnulif: 5,
      alogur: 5,
      skipulag: 5,
      velferd: 3,
      menning: 5,
      stafvaeding: 2,
      samgongur: 4
    },
    keyPoints: {
      skoli: [
        '„Afnemum fengitímann" — innritun í leikskóla tvisvar á ári',
        'Aukinn sveigjanleiki í vistunartíma og sumarleyfum',
        'Sértækur stuðningur við nemendur og kennara aukinn',
        'Tónlistarkennsla og samstarf tónlistarskóla við hefðbundna skóla',
        'Lóðir tilbúnar með leikskólum áður en hverfi byggjast upp'
      ],
      aeskulyd: [
        'Stækkun VMA er skýrt markmið',
        'Bætt aðstaða (Hlíðarfjall, ÍBA-svæði)',
        'Lítið tilgreint sérstaklega um félagsmiðstöðvar 16–18 ára'
      ],
      atvinnulif: [
        'Sterkt mótvægi við höfuðborgarsvæðið',
        'Lækkun fasteignagjalda á atvinnuhúsnæði',
        'Fjölgun atvinnulóða í bænum',
        'Einföldun regluverks fyrir lítil og meðalstór fyrirtæki',
        'Stuðningur við „norðlensk fyrirtæki" — versla í heimabyggð'
      ],
      alogur: [
        'Skýr lækkun fasteignagjalda á íbúa og fyrirtæki',
        'Hagræðing í stjórnsýslunni til að fjármagna þjónustu',
        'Halda aftur af verðhækkunum',
        'Yfirferð á eignum bæjarins — hámarka nýtingu'
      ],
      skipulag: [
        'Fjölgun íbúða í öllum verðflokkum, áhersla á fyrsta kaupendur',
        'Íbúðauppbygging á Oddeyri',
        'Fjölgun bílastæða í miðbænum',
        'Búsetukjarnar fyrir eldra fólk sem vill minnka við sig',
        'Dreifing gjalda yfir byggingartímann',
        'Hraðari innviðauppbygging — lóðir byggingarhæfar á tilsettum tíma'
      ],
      velferd: [
        'Nýr samkomusal fyrir eldri borgara',
        'Lífsgæðakjarni með glatvarma frá gagnaverum',
        'Karlar í skúrum — gegn félagslegri einangrun',
        'Stækkun Sjúkrahússins á Akureyri (samvinna við ríki)',
        'Uppbyggingu hjúkrunarheimila hraðað'
      ],
      menning: [
        'Klárum frágang á KA-svæðinu, byggjum íþróttahús á Þórs-svæði',
        'Nýr 9 holu golfvöllur á Jaðri, undirbúum á Skjaldarvík',
        'Vetraríþróttamiðstöð Íslands í Hlíðarfjalli — ný stólalyfta',
        '50 metra yfirbyggð keppnissundlaug — hönnun hefst',
        'Eflum Rósenborg, nýtt geymsluhúsnæði fyrir Minjasafnið',
        'Heitur pottur við Nökkva, regulartonleika í miðbænum'
      ],
      stafvaeding: [
        'Hagræðing í stjórnsýslu',
        'Yfirferð á eignum bæjarins til að hámarka nýtingu',
        'Lítið tilgreint sérstaklega um stafvæðingu/gervigreind'
      ],
      samgongur: [
        'Akureyrarflugvöllur sem önnur gátt inn í landið',
        'Aukin tíðni og samfella í millilandaflugi',
        'Bættar göngu- og hjólaleiðir — lýðheilsa og kolefnisspor',
        'Stytting leiðarinnar milli Akureyrar og Reykjavíkur',
        'Þrýstingur á samgöngubætur að Skógarböðum'
      ]
    }
  },
  {
    id: 'l-listinn',
    name: 'L-listinn',
    shortName: 'L-listinn',
    listLetter: 'L',
    tagline: 'Bæjarmálalisti með áherslu á aðhald og þjónustu',
    color: '#8B6F47',
    colorLight: '#e8e0d3',
    url: 'https://www.l-listinn.is/is/stefnumal',
    manifestoUrl: 'stefnuskra/l-listinn.html',
    manifestoFiles: [
      { title: 'Stefnumál', url: 'stefnuskra/l-listinn.html' }
    ],
    scores: {
      skoli: 4,
      aeskulyd: 4,
      atvinnulif: 3,
      alogur: 3,
      skipulag: 4,
      velferd: 4,
      menning: 4,
      stafvaeding: 1,
      samgongur: 3
    },
    keyPoints: {
      skoli: [
        'Tökum inn leikskólabörn tvisvar á ári',
        'Meiri gæði í skólamáltíðir',
        'Sumarfrístund — svar við ákalli foreldra',
        'Sveigjanlegri leikskólar og einfaldari gjaldskrár',
        'Hækkum heimgreiðslur',
        'Eflum starfsemi Hlíðarskóla — minni biðlistar, stærra húsnæði',
        'Skólahljómsveit og skólakór á grunnskólastigi'
      ],
      aeskulyd: [
        'Frístundastyrkur fyrir 5–18 ára, hækkar yfir kjörtímabilið',
        'Frístundastyrkur fyrir foreldri í fæðingarorlofi',
        'Öll börn óháð fötlun eða efnahag í íþróttum og tómstundum',
        'Fjölgun strætóskýla',
        'Stuðningur við stækkun VMA'
      ],
      atvinnulif: [
        'Léttum á álögum á íbúa',
        'Nægar atvinnulóðir',
        'Stuðningur við frumkvöðla',
        'Fáum unga fólkið heim eftir nám með sterkum innviðum',
        'Öflugt Hlíðarfjall, vetrarferðaþjónusta',
        'Byggja nýja slökkvistöð'
      ],
      alogur: [
        'Léttum á álögum (almennt)',
        'Aðhald í rekstri — sjálfbær rekstur',
        'Vandaðar og raunhæfar kostnaðaráætlanir',
        'Gjaldfrjáls bílastæði fyrir eldri borgara'
      ],
      skipulag: [
        '3-30-300 og kvaðir um birtuskilyrði í aðalskipulag',
        'Vöndum okkur með Akureyrarvöll',
        'Skynsamleg þétting með áherslu á bílastæði',
        'Bílastæðahús í miðbæinn',
        'Dreifing gjalda yfir byggingartímann',
        'Oddeyrin byggð upp — hús að hámarki 4 hæðir'
      ],
      velferd: [
        'Festum frístundastyrk eldri borgara í sessi',
        'Karlar í skúrum og aukið framboð tómstunda',
        'Lífsgæðakjarna fyrir eldri borgara',
        'Leysum aðstöðuvanda Brekkukots til frambúðar',
        'Styttum biðlista fyrir félagslegar íbúðir',
        'Stuðningur við byggingu óhagnaðardrifins húsnæðis'
      ],
      menning: [
        'Stækkum menningarsjóð á kjörtímabilinu',
        'Eflum list- og verkgreinakennslu í öllum grunnskólum',
        'Lengjum laun bæjarlistamanns í 12 mánuði',
        'Útisvið í miðbænum, endurvekjum skapandi sumarstörf',
        'Klárum uppbyggingu á félagsvæðum Þórs og KA',
        'Áframhaldandi uppbygging á Jaðri'
      ],
      stafvaeding: [
        'Aðhald í rekstri',
        'Vandaðar og raunhæfar kostnaðaráætlanir',
        'Lítið tilgreint um stafvæðingu eða gervigreind'
      ],
      samgongur: [
        'Eflum strætókerfið og fjölgum strætóskýlum',
        'Hjólavænni bær — hjólastæðaskýli í miðbænum',
        'Drögum úr svifryki — aukin þrif á götum',
        'Áframhaldandi stuðningur við millilandaflug',
        'Stuðningur við áframhaldandi loftbrú'
      ]
    }
  },
  {
    id: 'samfylkingin',
    name: 'Samfylkingin',
    shortName: 'Samfylkingin',
    listLetter: 'S',
    tagline: 'Velferð, jöfnuður, þjónusta — sterkari saman',
    color: '#E63946',
    colorLight: '#f9d7da',
    url: 'https://xs.is/sterkari-saman',
    manifestoUrl: 'stefnuskra/samfylkingin.html',
    manifestoFiles: [
      { title: 'Sterkari saman', url: 'stefnuskra/samfylkingin.html' }
    ],
    scores: {
      skoli: 4,
      aeskulyd: 5,
      atvinnulif: 4,
      alogur: 3,
      skipulag: 5,
      velferd: 5,
      menning: 4,
      stafvaeding: 2,
      samgongur: 5
    },
    keyPoints: {
      skoli: [
        'Þak á kostnað fjölskyldna vegna leikskólagjalda',
        '100% systkinaafsláttur, endurgjaldslausir skráningardagar',
        'Sumarfrístund fyrir 1.–4. bekk',
        'Tengjum síðasta leikskólasumarið við 6 ára bekk',
        'Átak í list- og verkgreinakennslu',
        'Stóraukin íslenska sem annað mál í grunnskólum',
        'Aukum sérúrræði eins og Hlíðaskóla'
      ],
      aeskulyd: [
        'Hækkum frístundastyrki barna í 75.000 kr',
        'Vinnum með íþróttafélögum að halda kostnaði niðri',
        'Sérstök efling félagsmiðstöðva 16–18 ára',
        'Myndlistarnám aðgengilegt á Akureyri'
      ],
      atvinnulif: [
        'Atvinnu- og vaxtarstefna',
        'Atvinnulífsstofa — einn tengipunktur sveitarfélagsins',
        'Lækkum fasteignagjöld á atvinnuhúsnæði',
        'Fjölbreyttari atvinnutækifæri og aðstaða til fjarvinnu',
        'Stöðugt framboð atvinnulóða með innviðum'
      ],
      alogur: [
        'Skýr og fyrirsjáanleg gjaldtaka — eitt yfirlit',
        'Lækkum fasteignagjöld (samkeppnishæfni v. höfuðborgar)',
        'Frítt í sund fyrir 70+',
        'Endurgjaldslausir skráningardagar',
        'En jafnframt: 75.000 kr frístundastyrkur, þak á leikskólagjöld'
      ],
      skipulag: [
        '35% óhagnaðardrifin uppbygging í öllu nýju skipulagi',
        'Skynsamleg þétting í sátt við íbúa',
        'Nýtt aðalskipulag — hátt mark á íbúafjölda og atvinnu',
        'Akureyrarvöllur sem græn perla',
        'Stóraukið framboð félagslegs húsnæðis'
      ],
      velferd: [
        'Almennileg félagsaðstaða fyrir eldra fólk (samstarf við EBAK)',
        'Frítt í sund fyrir 70+',
        'Samþætting þjónustu — verkefnið „Gott að eldast"',
        'Stuðningur við heilabilaða og aðstandendur',
        'Stóraukið framboð félagslegs húsnæðis, styttri biðlistar',
        'Stöndum vörð um Sjúkrahúsið á Akureyri'
      ],
      menning: [
        'Framlög til menningarmála fylgi verðlagi',
        'Ný menningarstefna (síðasta féll úr gildi 2018)',
        'Eflum félagsmiðstöðvastarf 16–18 ára',
        'Halda kostnaði v. búnaðar og keppnisferða niðri',
        'Bætt aðgengi að perlum bæjarins yfir vetrartímann'
      ],
      stafvaeding: [
        'Skýr og fyrirsjáanleg gjaldtaka — eitt yfirlit',
        'Stafrænar lausnir til að rjúfa félagslega einangrun',
        'Lítið tilgreint um gervigreind í stjórnsýslu'
      ],
      samgongur: [
        'Endurhönnum leiðakerfi strætós — minnkum skutlið',
        'Fjölgum ferðum þannig að strætó sé alvöru valkostur',
        'Stöndum vörð um millilandaflug til Akureyrar',
        'Berjumst fyrir styttri leiðum til og frá Akureyri',
        'Markaðssetning flugvallarins til erlendra og innlendra flugfélaga'
      ]
    }
  },
  {
    id: 'vidreisn',
    name: 'Viðreisn',
    shortName: 'Viðreisn',
    listLetter: 'C',
    tagline: '„Börnin okkar" + nýsköpun + svæðisborgin Akureyri',
    color: '#FF8C00',
    colorLight: '#ffe5cc',
    url: 'https://vidreisn.is/akureyri/stefnan/',
    manifestoUrl: 'stefnuskra/vidreisn.html',
    manifestoFiles: [
      { title: 'Stefnan á Akureyri', url: 'stefnuskra/vidreisn.html' }
    ],
    scores: {
      skoli: 3,
      aeskulyd: 4,
      atvinnulif: 4,
      alogur: 2,
      skipulag: 3,
      velferd: 3,
      menning: 2,
      stafvaeding: 5,
      samgongur: 3
    },
    keyPoints: {
      skoli: [
        '„Börnin okkar" hugmyndafræði frá Mosfellsbæ',
        'Kerfi tala saman — engin múr fyrir fjölskyldur',
        'Greitt aðgengi að geðrænum og félagslegum stuðningi',
        'Snemmtækur stuðningur og almennar forvarnir',
        'Faglegar starfsaðstæður í leik- og grunnskólum'
      ],
      aeskulyd: [
        'Frístunda- og félagsmiðstöðvarstarf sem grunnþjónusta',
        'Íþróttaskóli yngsta stigs í samstarfi við íþróttafélög',
        'Akureyri sem paradís afreksfólks',
        'Hagsmunagæsla VMA, MA, HA',
        'Hreyfing og tómstundir fléttaðar í daglegt líf'
      ],
      atvinnulif: [
        'Nýsköpunar- og tæknigarðar á Akureyri',
        'Stytting afgreiðslutíma og einföldun leyfisveitinga',
        'Stuðningur í öllum þremur byggðakjörnum',
        'Reglulegt samstarf við fyrirtæki, stofnanir og atvinnulíf',
        'Áttan-áfangastaður — heildarstefna lykilsvæðis'
      ],
      alogur: [
        'Ábyrgur og traustur grunnur í rekstri',
        'Gagnsæ stjórnsýsla',
        'Ekki tilgreint beint um lækkun fasteignagjalda',
        'Óljósari um álögur en aðrir flokkar'
      ],
      skipulag: [
        'Áttan — heildarstefna frá innbænum að Glerártorgi',
        'Listagilið, Akureyrarkirkja, Sundlaugin og Lystigarðurinn',
        'Skoða leikvelli inni í íbúðahverfum',
        'Lífsgæðakjarni fyrir eldri borgara — góð staðsetning'
      ],
      velferd: [
        '„Akureyri er fyrir okkur öll"',
        'Lífsgæðakjarni fyrir eldri borgara',
        'Einstaklingsmiðaðar grunnþjónustulausnir',
        'Upplýsingagjöf á þeim tungumálum sem íbúar skilja',
        'Hagsmunagæsla SAk, hjúkrunarheimila og heilbrigðisstofnana'
      ],
      menning: [
        'Áttan — listagilið og menningarstofnanir',
        'Samstarf við listaskóla og menningarstofnanir um afreksstarf',
        'Akureyri sem áfangastaður allra árstíða',
        'Lítið tilgreint sérstaklega um menningarsjóði'
      ],
      stafvaeding: [
        'Stærri skref í notkun gervigreindar í stjórnsýslu',
        'Bæta skipulag, þjónustu og ákvarðanatöku',
        'Áreiðanlegir, skilvirkir og gagnsæir verkferlar',
        'Stytting afgreiðslutíma og einföldun leyfisveitinga',
        'Skoða uppbyggingu og skipulag starfsstöðva'
      ],
      samgongur: [
        'Almenningssamgöngur tengja saman lykilsvæði bæjarins',
        'Akureyrarflugvöllur sem ein af helstu líflínum bæjarins',
        'Áfangastaður allra árstíða'
      ]
    }
  }
];

// Hlutlaus forstilling — allt á 5/10
const NEUTRAL_PRESET = {
  skoli: 5,
  aeskulyd: 5,
  atvinnulif: 5,
  alogur: 5,
  skipulag: 5,
  velferd: 5,
  menning: 5,
  stafvaeding: 5,
  samgongur: 5
};

// Reiknar samræmi flokka við áherslur notanda
// importance: 0-10 á hvern málaflokk
// scores: 1-5 stig á hvern málaflokk hjá hverjum flokki
// Skilar gildi 0-100 (% samræmi)
function calculateMatch(partyScores, importanceMap) {
  let weightedSum = 0;
  let maxPossible = 0;
  for (const topic of TOPICS) {
    const importance = importanceMap[topic.id] || 0;
    const score = partyScores[topic.id] || 0;
    weightedSum += importance * score;
    maxPossible += importance * 5;
  }
  if (maxPossible === 0) return 0;
  return Math.round((weightedSum / maxPossible) * 100);
}

function rankParties(importanceMap) {
  return PARTIES
    .map(party => ({
      party,
      match: calculateMatch(party.scores, importanceMap)
    }))
    .sort((a, b) => b.match - a.match);
}
