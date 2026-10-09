/* Echte Artikeldaten von heikowild.de (Titel, Preise, Bilder, Texte). */
window.HW = (function () {
  const CATS = {
    mani: 'Maniküre & Pediküre',
    kosm: 'Kosmetik',
    pinz: 'Pinzetten',
    sch: 'Scheren',
    vet: 'Veterinär & Tierpflege',
    dent: 'Dental & Zahntechnik',
    skal: 'Skalpell-Klingen & Halter'
  };
  // [id, bildDatei, urlPfad, titel, cat, typ, preis, ausverkauft, kurztext, merkmale[]]
  const RAW = [
    [2820,'nagelknipser-ringlock-87mm.jpg','nagelknipser-fussnagelknipser/nagelknipser-ringlock-87mm','Nagelknipser 87 mm mit Ring Lock','mani','Nagelknipser',24.03,0,'Dieser große Edelstahlknipser mit Ring Lock System bietet kraftvolle Schnitte, ergonomische Form und saubere Ergebnisse – auch bei festen Nägeln.',['87 mm Länge für präzises Arbeiten','Ohne Bolzen dank Ring Lock System','Sauberer Schnitt auch bei dicken Nägeln','Ergonomisch und langlebig verarbeitet']],
    [886,'zeckenzange-edelstahl-2-mm-wildfang-steriliserbar.jpg','zeckenzangen-zeckenpinzetten/zeckenzange-edelstahl-2-mm-wildfang-steriliserbar','Zeckenzange Edelstahl 2 mm „Wildfang“','vet','Zeckenzangen',18.28,0,'Zeckenzange „Wildfang“ – Präzisionszange, selbsthaltend.',['Gesamtlänge = 125 mm','Maulbreite = ca. 2 mm','Rostfreier Edelstahl','Für Mensch und Tier']],
    [1160,'nagelschere-gerade-9-cm-mikroverzahnt-edelstahl.jpg','nagelscheren/nagelschere-gerade-9-cm-mikroverzahnt-edelstahl','Nagelschere – gerade 9 cm mikroverzahnt','sch','Nagelscheren',18.59,0,'Gerade Nagelschere mit mikroverzahnten Schneiden. Handgeschliffen in Tuttlingen aus rostfreiem Edelstahl.',['Ideal zum Kürzen harter Nägel','9 cm lang, hygienisch und langlebig','Für Maniküre und Pediküre geeignet']],
    [2627,'ohrreiniger-abgewinkelt-edelstahl.jpg','ohrreiniger/ohrreiniger-abgewinkelt-edelstahl','Ohrreiniger abgewinkelt „Edelstahl“ 150 mm','kosm','Ohrreiniger',20.90,0,'Edelstahl Ohrreiniger.',['Gesamtlänge = 150 mm, abgewinkelt','Schlingenbreite = ø 3,7 mm','Rostfreier Edelstahl','Sterilisierbar']],
    [2172,'nagelschere-klassisches-modell-gebogen-mikroverzahnt.jpg','nagelscheren/nagelschere-klassisches-modell-gebogen-mikroverzahnt','Nagelschere klassisches Modell, gebogen, mikroverzahnt','sch','Nagelscheren',18.59,0,'Klassische Nagelschere, geschliffen in Tuttlingen.',['Gebogene Ausführung','Mikroverzahnung','Länge = 90 mm','Rostfreier Edelstahl']],
    [1146,'saphir-flachfeile.jpg','nagelfeilen/saphir-flachfeile','Saphir-Flachfeile 80 mm','mani','Feilen',3.71,0,'Saphir-Nagelfeile flach.',['Länge: 80 mm','Grobe und feine Körnung','Spitz']],
    [1851,'zeckenpinzette-gebogen.jpg','zeckenpinzetten/zeckenpinzette-gebogen','Zeckenpinzette „gebogen“','vet','Zeckenpinzetten',13.76,0,'Stark gebogene Zeckenpinzette, in Tuttlingen von Hand veredelt.',['Stark gebogen und Nadelspitz','Länge = 120 mm','Rostfreier, gehärteter Edelstahl','Sterilisierbar, desinfizierbar']],
    [992,'kosmetikpinzette-extra-schmal-2-mm.jpg','Kosmetikpinzetten/kosmetikpinzette-extra-schmal-2-mm','Kosmetikpinzette extra schmal 2 mm','pinz','Kosmetikpinzetten',15.59,1,'Kosmetikpinzette 2 mm breit für eingewachsene Haare. Super geeignet zum Entfernen von eingewachsenen Haaren durch ihre schmale Fläche.',['Rostfreier Edelstahl, matt','Flach / schräg','Breite = ca. 2 mm','Gesamtlänge = 75 mm']],
    [857,'zeckenpinzette-mini-80-mm-gebogen-und-nadelspitz.jpg','zeckenpinzetten/zeckenpinzette-mini-80-mm-gebogen-und-nadelspitz','Zeckenpinzette Mini – 80 mm, gebogen und nadelspitz','vet','Zeckenpinzetten',11.19,0,'Kompakte Zeckenpinzette aus gehärtetem Edelstahl.',['80 mm lang, stark gebogen mit feiner Spitze','Glatter, stabiler Griff für sichere Handhabung','Matt gebürstete, blendfreie Oberfläche','Sterilisierbar und desinfizierbar','Ideal für tiefsitzende Zecken oder feine Arbeiten']],
    [1077,'kosmetikpinzette-profi-flach-und-schraeg.jpg','Kosmetikpinzetten/kosmetikpinzette-profi-flach-und-schraeg','Kosmetikpinzette „PROFI“ flach und schräg','pinz','Kosmetikpinzetten',15.14,0,'Kosmetikpinzette, handgeschliffen in Tuttlingen.',['Gesamtlänge = 8,5 cm','Flach und schräg, ca. 3,5 mm breit','Rostfreier Edelstahl','100 % haarfassend']],
    [1655,'zeckenzange-profi.jpg','zeckenzangen-zeckenpinzetten/zeckenzange-profi','Zeckenzange „Profi“','vet','Zeckenzangen',17.93,0,'Präzisionszange, selbsthaltend.',['Maulbreite ca. 3 mm','Gesamtlänge = 135 mm','Rostfreier Edelstahl','Ideal für Haustiere und Hoftiere']],
    [1282,'saphir-hohlfeile-nagelfeile-125mm.jpg','nagelfeilen/saphir-hohlfeile-nagelfeile-125mm','Saphir-Hohlfeile, Nagelfeile 125 mm','mani','Feilen',5.39,0,'Saphir-Nagelfeile hohl.',['Länge = 125 mm']],
    [3238,'komedonenquetscher-profi-165-mm-edelstahl-nadel-loeffel.jpg','komedonenquetscher/komedonenquetscher-profi-165-mm-edelstahl-nadel-loeffel','Komedonenquetscher PROFI – 165 mm, Edelstahl, Nadel & Löffel','kosm','Komedonenquetscher',24.03],
    [1924,'hornhauthobel-150-mm-pink-mit-rutschfestem-softgriff.jpg','hornhauthobel/hornhauthobel-150-mm-pink-mit-rutschfestem-softgriff','Hornhauthobel 150 mm pink mit rutschfestem Softgriff','mani','Hornhauthobel',6.51],
    [1087,'nagelschere-gerade-9-cm-aus-edelstahl-mit-grossen-ringen.jpg','nagelscheren/nagelschere-gerade-9-cm-aus-edelstahl-mit-grossen-ringen','Nagelschere gerade 9 cm aus Edelstahl mit großen Ringen','sch','Nagelscheren',23.09],
    [1334,'nagelzange-kopfschneider-glatter-griff-gerade-schneide14-cm.jpg','kopfschneider/nagelzange-kopfschneider-glatter-griff-gerade-schneide14-cm','Nagelzange / Kopfschneider – Glatter Griff, gerade Schneide, 14 cm','mani','Nagelzangen',53.57,1],
    [3147,'sehr-stabile-fussnagelschere-gebogen-mit-mikroverzahnung-12cm.jpg','nagelscheren/sehr-stabile-fussnagelschere-gebogen-mit-mikroverzahnung-12cm','Sehr stabile Fußnagelschere – gebogen, mit Mikroverzahnung, 12 cm','sch','Nagelscheren',26.08],
    [1775,'milienmesser-einzeln.jpg','milienmesser-komedonenentferner/milienmesser-einzeln','Milienmesser einzeln','kosm','Milienmesser',4.99],
    [1513,'zahnreiniger-fig-h6h7.jpg','zahnreiniger/zahnreiniger-fig-h6h7','Zahnreiniger Fig. H6/H7','dent','Zahnreiniger',16.91],
    [1846,'nagelreiniger-mini-mit-rundgriff.jpg','eckenheber/nagelreiniger-mini-mit-rundgriff','Eckenheber, Nagelreiniger „Mini“ 8 cm, Rundgriff','mani','Eckenheber',10.14],
    [3042,'nagelhautentferner-aus-rostfreiem-edelstahl-doppelendig-14-cm.jpg','nagel-fusspflege/nagelhautentferner-aus-rostfreiem-edelstahl-doppelendig-14-cm','Nagelhautentferner aus rostfreiem Edelstahl, doppelendig 14 cm','mani','Nagelhautentferner',14.90],
    [3242,'nagelreiniger-doppelendig-175-mm-mit-achtkantgriff.jpg','eckenheber/nagelreiniger-doppelendig-175-mm-mit-achtkantgriff','Nagelreiniger doppelendig 175 mm mit Achtkantgriff','mani','Eckenheber',14.76],
    [1818,'-stoffschere-profi-schneiderschere-aus-rostfreiem-edelstahl.jpg','stoff-kleiderschere/-stoffschere-profi-schneiderschere-aus-rostfreiem-edelstahl','Stoffschere „PROFI“ – Schneiderschere aus rostfreiem Edelstahl','sch','Stoffscheren',30.18],
    [1892,'hautschere-95-mm-gebogen-mit-turmspitze.jpg','hautscheren/hautschere-95-mm-gebogen-mit-turmspitze','Hautschere 95 mm gebogen mit Turmspitze','sch','Hautscheren',30.18],
    [3049,'hochglanz-hautschere-praezise-nagelhautschere-mit-hakenspitze.jpg','hautscheren/hochglanz-hautschere-praezise-nagelhautschere-mit-hakenspitze','Hochglanz Hautschere – präzise Nagelhautschere mit Hakenspitze','sch','Hautscheren',39.89],
    [790,'nagelschere-fuer-babyskinder-90-mm-edelstahl-abgerundete-spitze.jpg','nagelscheren/nagelschere-fuer-babyskinder-90-mm-edelstahl-abgerundete-spitze','Nagelschere für Babys & Kinder – 90 mm, Edelstahl, abgerundete Spitze','sch','Nagelscheren',18.59],
    [2215,'nagelschere-mikroverzahnung-gebogen.jpg','nagelscheren/nagelschere-mikroverzahnung-gebogen','Nagelschere mit Mikroverzahnung – gebogen, stabil, 95 mm','sch','Nagelscheren',30.18],
    [2639,'kosmetikpinzette-profi-superior-line-in-pink-95mm.jpg','Kosmetikpinzetten/kosmetikpinzette-profi-superior-line-in-pink-95mm','Kosmetikpinzette Profi „Superior-Line“ in Pink 95 mm','pinz','Kosmetikpinzetten',17.66],
    [924,'lupenpinzette-90-gebogen.jpg','lupenpinzetten/lupenpinzette-90-gebogen','Lupenpinzette „90“ gebogen','pinz','Lupenpinzetten',16.09],
    [2154,'kosmetikpinzette-ergonomisc-mattiert.jpg','Kosmetikpinzetten/kosmetikpinzette-ergonomisc-mattiert','Kosmetikpinzette ergonomisch geformt, mattiert','pinz','Kosmetikpinzetten',15.14],
    [3259,'universalpinzette-edelstahl-pvd-125mm.jpg','pinzetten/universalpinzette-edelstahl-pvd-125mm','Universalpinzette 125 mm – mikrokreuzgerieft, PVD-beschichtet','pinz','Universalpinzetten',24.91],
    [1365,'kosmetikpinzette-mit-4-lochgriff.jpg','Kosmetikpinzetten/kosmetikpinzette-mit-4-lochgriff','Kosmetikpinzette mit 4-Lochgriff schräg 95 mm','pinz','Kosmetikpinzetten',17.86],
    [2164,'wimpernformer-schwarz-beschichtet-11-cm.jpg','Kosmetikinstrumente/wimpernformer-schwarz-beschichtet-11-cm','Wimpernformer – Schwarz beschichtet, 11 cm','kosm','Wimpernformer',8.23],
    [3235,'komedonenquetscher-schamberg-100-mm-doppelseitig-rostfreier-edelstahl.jpg','Kosmetikinstrumente/komedonenquetscher-schamberg-100-mm-doppelseitig-rostfreier-edelstahl','Komedonenquetscher SCHAMBERG – 100 mm, doppelseitig, rostfreier Edelstahl','kosm','Komedonenquetscher',11.13],
    [1954,'komedonenquetscher-nadel-schlinge.jpg','Kosmetikinstrumente/komedonenquetscher-nadel-schlinge','Komedonenquetscher Nadel & Schlinge','kosm','Komedonenquetscher',10.82],
    [2095,'mitesserpinzette-komedonenquetscher-doppelseitig.jpg','mitesserpinzetten/mitesserpinzette-komedonenquetscher-doppelseitig','Mitesserpinzette & Komedonenquetscher – 150 mm, Edelstahl, doppelseitig','pinz','Mitesserpinzetten',23.56],
    [1302,'meridianstift-achtkantgriff.jpg','Kosmetikinstrumente/meridianstift-achtkantgriff','Meridianstift, Akupressurstift, rostfreier Edelstahl','kosm','Akupressur',16.09],
    [3039,'eckenfeile-aus-rostfreiem-edelstahl-mit-rundgriff-doppelendig-sehr-fein.jpg','nagel-fusspflege/eckenfeile-aus-rostfreiem-edelstahl-mit-rundgriff-doppelendig-sehr-fein','Eckenfeile aus rostfreiem Edelstahl mit Rundgriff, doppelendig, sehr fein','mani','Feilen',14.90],
    [1791,'glasnagelfeile-kurz.jpg','nagelfeilen/glasnagelfeile-kurz','Glasnagelfeile „kurz“ 9 cm, in verschiedenen Farben erhältlich','mani','Feilen',8.47],
    [2221,'keramikfeile-taschen-klappfeile-mit-feilenfuhrungb.jpg','nagelfeilen/keramikfeile-taschen-klappfeile-mit-feilenfuhrungb','Keramikfeile, Klappfeile, Taschennagelfeile mit Feilenführung, in Blau','mani','Feilen',14.09,1]
  ];
  const HITS = [2820, 886, 1160, 2627, 2172, 1146, 1851, 992, 857, 1077, 1655, 1282];
  const products = RAW.map(r => ({
    id: r[0], file: r[1], path: r[2], title: r[3], cat: r[4], type: r[5], price: r[6],
    out: !!r[7], blurb: r[8] || '', specs: r[9] || [], hit: HITS.indexOf(r[0])
  }));
  const img = (p, size) => 'https://heikowild.de/' + p.id + '-' + (size || 'large') + '_default/' + p.file;
  const eur = n => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  return { CATS, products, img, eur, byId: id => products.find(p => p.id === +id), hits: () => products.filter(p => p.hit > -1).sort((a, b) => a.hit - b.hit) };
})();
