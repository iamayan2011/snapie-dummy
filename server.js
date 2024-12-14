// Importing required modules
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


// Setting the port
const PORT = 3000;

// Sample news data
const newsData = [
    {
      "Article_ID": "001",
      "Source": "BBC News",
      "URL": "https://www.euronews.com/my-europe/2024/12/14/who-is-mikheil-kavelashvili-georgias-new-president",
      "Description": "Major economic summit held to discuss global inflation challenges.",
      "Category": "Politics",
      "Original_Content": "World leaders gathered to address the rising inflation affecting global economies. Discussions focused on strategies for stabilization.",
      "Image_Thumbnail": "https://static.euronews.com/articles/stories/08/91/18/66/1920x1080_cmsv2_eeb91c39-772e-5507-817d-00912a18673e-8911866.jpg",
      "News_Summary_Finnish": "Maailman johtajat kokoontuivat käsittelemään kasvavaa inflaatiota, joka vaikuttaa globaaleihin talouksiin. Huippukokouksen aikana keskusteltiin eri strategioista taloudellisen vakauden edistämiseksi. Tavoitteena oli löytää tehokkaita ratkaisuja tilanteen hallintaan ja talouden tukemiseen maailmanlaajuisesti. Kokous toi esille myös tarpeen lisätä yhteistyötä maiden välillä inflaation torjumiseksi.",
      "News_Summary_Swedish": "Världsledare samlades för att diskutera den växande inflationen som påverkar globala ekonomier. Under toppmötet diskuterades olika strategier för ekonomisk stabilisering. Målet var att hitta effektiva lösningar för att hantera situationen och stödja ekonomier globalt. Mötena betonade också behovet av samarbete mellan länder för att bekämpa inflation.",
      "News_Summary_English": "World leaders convened to address growing inflation impacting global economies. The summit focused on various strategies to foster economic stability. Leaders aimed to find effective solutions to manage the crisis and support economies worldwide. Discussions highlighted the importance of international cooperation to combat inflation and mitigate its widespread effects."
    },
    {
      "Article_ID": "002",
      "Source": "ESPN",
      "URL": "https://www.euronews.com/my-europe/2024/12/14/ex-football-player-kavelashvili-becomes-georgias-president-as-ruling-party-consolidates-po",
      "Description": "Ex-football player Kavelashvili becomes Georgia's president as ruling party consolidates power",
      "Category": "Sports",
      "Original_Content": "The championship game between the two top teams ended dramatically with a stunning goal in the final seconds, sending fans into a frenzy.",
      "Image_Thumbnail": "https://static.euronews.com/articles/stories/08/91/15/30/1920x1080_cmsv2_f19c6f49-f68f-57c3-aa60-d6f00f891998-8911530.jpg",
      "News_Summary_Finnish": "Mestaruutensa puolustaneet huippujoukkueet kohtasivat ottelussa, joka päättyi henkeäsalpaavasti viime sekuntien maaliin. Tämä teki ottelusta unohtumattoman ja sytytti kannattajien riemun. Peliä hallitsi jännitys alusta loppuun, mikä osoitti molempien joukkueiden erinomaisen tason ja taistelutahdon. Ratkaisu jätti yleisön huokaamaan hämmästyksestä.",
      "News_Summary_Swedish": "De två främsta lagen möttes i en dramatisk match som avgjordes med ett sista-minuten mål. Matchen bjöd på spänning från start till slut och fick fansen att explodera i glädje. Spelet speglade lagens högsta klass och kampvilja, vilket gjorde det till en oförglömlig upplevelse för alla.",
      "News_Summary_English": "The top teams clashed in a thrilling championship match that ended with a breathtaking last-minute goal. The dramatic finish made the game unforgettable and electrified fans worldwide. Filled with tension and skill, the game showcased the teams' determination and excellence, leaving spectators in awe of the unforgettable moment."
    },
    {
      "Article_ID": "003",
      "Source": "Reuters",
      "URL": "https://nordic.ign.com/creature-commandos/89739/video/streaming-update-what-to-watch-this-week",
      "Description": "New policies announced to address climate change concerns.",
      "Category": "Politics",
      "Original_Content": "Governments worldwide are pledging new measures to combat climate change, focusing on reducing emissions and increasing renewable energy use.",
      "Image_Thumbnail": "https://sm.ign.com/t/ign_nordic/screenshot/default/streaming-update_q5k8.1200.png",
      "News_Summary_Finnish": "Hallitus ympäri maailmaa esittivät uusia toimenpiteitä ilmastonmuutoksen torjumiseksi. Päähuomio oli päästöjen vähentämisessä ja uusiutuvan energian käytön lisäämisessä. Uudistukset ovat osa pitkäjänteistä pyrkimystä pysäyttää ilmastonmuutos ja suojella ympäristöä tuleville sukupolville. Näillä politiikoilla pyritään saavuttamaan kestävää kehitystä ja vaikuttamaan maailmanlaajuisesti.",
      "News_Summary_Swedish": "Regeringar världen över har tillkännagivit nya åtgärder för att bekämpa klimatförändringar. Fokus ligger på att minska utsläpp och öka användningen av förnybar energi. Åtgärderna är en del av en långsiktig plan för att bromsa klimatförändringarna och skydda miljön för framtida generationer.",
      "News_Summary_English": "Governments around the world announced new policies to combat climate change. These measures focus on cutting emissions and promoting renewable energy usage. The reforms are part of a long-term effort to slow climate change and protect the environment for future generations while ensuring global sustainability."
    },
    {
      "Article_ID": "004",
      "Source": "Sky Sports",
      "URL": "https://menafn.com/1108992797/World-Squash-Team-Cship-Indian-Men-End-Fifth-For-Best-Ever-Finish-Women-Claim-7Th-Spot",
      "Description": "Top tennis player announces retirement after 20 years.",
      "Category": "Sports",
      "Original_Content": "The iconic player, a legend in the sport, revealed their decision to retire, reflecting on two decades of unparalleled achievements.",
      "Image_Thumbnail": "https://menafn.com/updates/pr/2024-12/14/I_ddb22image_story.jpeg",
      "News_Summary_Finnish": "Tenniksen huippupelaaja ilmoitti uransa päättymisestä. 20 vuoden aikana saavutetut ennätykset ja palkinnot ovat tehneet hänestä todellisen urheilun ikonin. Eläkkeelle jäämisen päätöstä sävytti sekä menestyksen juhla että haikeus. Pelaaja kiitti faneja ja toivoi, että hänen tarinansa inspiroi tulevia sukupolvia.",
      "News_Summary_Swedish": "En av tennisens största profiler meddelade sitt beslut att gå i pension efter två decennier av framgång. Spelaren har blivit en ikon genom otaliga segrar och rekord. Avskedet blev känslosamt, med uttryck av tacksamhet till fansen och en önskan att inspirera kommande generationer.",
      "News_Summary_English": "A tennis legend announced their retirement after two decades of unprecedented success. The player, revered for numerous victories and records, shared an emotional farewell, thanking fans and expressing hope that their journey inspires future generations. This marks the end of an extraordinary career in the sport."
    },
    {
      "Article_ID": "005",
      "Source": "The Guardian",
      "URL": "https://menafn.com/1108992739/Ukraines-Premier-predicts-financial-assistance-from-alliance-countries",
      "Description": "Ukraine's Premier predicts financial assistance from alliance countries",
      "Category": "Politics",
      "Original_Content": "The government unveiled comprehensive reforms aimed at improving healthcare accessibility and reducing costs for citizens.",
      "Image_Thumbnail": "https://menafn.com/updates/pr/Menafn_News_Images/Local_Politics_1046.jpg",
      "News_Summary_Finnish": "Hallitus esitteli merkittäviä uudistuksia, joiden tarkoituksena on parantaa terveydenhuollon saavutettavuutta ja vähentää kustannuksia. Uudistukset tähtäävät myös siihen, että kaikki kansalaiset saavat tasa-arvoista hoitoa. Tämä aloite on osa laajempaa strategiaa terveydenhuollon uudistamiseksi pitkällä aikavälillä.",
      "News_Summary_Swedish": "Regeringen presenterade omfattande reformer för att förbättra tillgången till sjukvård och minska kostnader för medborgarna. Målet är att säkerställa lika vård för alla och skapa ett mer hållbart sjukvårdssystem på lång sikt.",
      "News_Summary_English": "The government introduced sweeping reforms to enhance healthcare accessibility and reduce costs. The changes aim to ensure equitable treatment for all citizens and are part of a broader strategy to revamp the healthcare system for long-term sustainability."
    }
  ];
  

// Endpoint to fetch news data
app.get('/api/news', (req, res) => {
  res.json(newsData);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
