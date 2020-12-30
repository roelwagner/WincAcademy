import { nanoid } from "nanoid";

const patients = [
  {id:nanoid(),name:"Quinn",surname:"Bourgour",phone:"155-466-5847",email:"qbourgour0@gmpg.org",birthyear:1996,sick:false},
  {id:nanoid(),name:"Ilysa",surname:"Landon",phone:"221-427-7118",email:"ilandon1@altervista.org",birthyear:1979,sick:false},
  {id:nanoid(),name:"Frasco",surname:"Sumpter",phone:"782-711-6490",email:"fsumpter2@webnode.com",birthyear:1992,sick:false},
  {id:nanoid(),name:"Stesha",surname:"Golagley",phone:"166-165-7539",email:"sgolagley3@shutterfly.com",birthyear:1978,sick:false},
  {id:nanoid(),name:"Raynor",surname:"Meryett",phone:"197-267-3671",email:"rmeryett4@dion.ne.jp",birthyear:1990,sick:false},
  {id:nanoid(),name:"Frasco",surname:"Dymock",phone:"708-570-7068",email:"fdymock5@sakura.ne.jp",birthyear:1975,sick:false},
  {id:nanoid(),name:"Heda",surname:"Foakes",phone:"278-171-3619",email:"hfoakes6@nytimes.com",birthyear:1988,sick:false},
  {id:nanoid(),name:"Jolie",surname:"Budgen",phone:"798-570-0294",email:"jbudgen7@wix.com",birthyear:1989,sick:false},
  {id:nanoid(),name:"Danni",surname:"Estcourt",phone:"380-480-9524",email:"destcourt8@phpbb.com",birthyear:1988,sick:false},
  {id:nanoid(),name:"Rose",surname:"Dwire",phone:"199-223-3676",email:"rdwire9@bandcamp.com",birthyear:1992,sick:false},
  {id:nanoid(),name:"Roxana",surname:"Smallthwaite",phone:"207-401-3188",email:"rsmallthwaitea@i2i.jp",birthyear:1983,sick:false},
  {id:nanoid(),name:"Donnie",surname:"Duley",phone:"310-821-9660",email:"dduleyb@constantcontact.com",birthyear:1980,sick:false},
  {id:nanoid(),name:"Oralle",surname:"Piggins",phone:"860-230-2427",email:"opigginsc@yahoo.com",birthyear:1979,sick:false},
  {id:nanoid(),name:"Babbette",surname:"Ricardon",phone:"910-231-2636",email:"bricardond@yellowbook.com",birthyear:1986,sick:false},
  {id:nanoid(),name:"Daffi",surname:"Kimmel",phone:"905-149-1431",email:"dkimmele@whitehouse.gov",birthyear:1986,sick:false},
  {id:nanoid(),name:"Rici",surname:"Mowson",phone:"274-478-1037",email:"rmowsonf@usatoday.com",birthyear:1977,sick:false},
  {id:nanoid(),name:"Kayne",surname:"Secret",phone:"567-585-9210",email:"ksecretg@independent.co.uk",birthyear:1974,sick:false},
  {id:nanoid(),name:"Kori",surname:"Madner",phone:"823-483-8344",email:"kmadnerh@amazon.com",birthyear:1975,sick:false},
  {id:nanoid(),name:"Brigid",surname:"Stirling",phone:"448-308-6243",email:"bstirlingi@facebook.com",birthyear:1978,sick:false},
  {id:nanoid(),name:"Cobbie",surname:"Lattos",phone:"407-226-4556",email:"clattosj@mtv.com",birthyear:1994,sick:false},
  {id:nanoid(),name:"Joey",surname:"Broe",phone:"364-423-5600",email:"jbroek@canalblog.com",birthyear:1979,sick:false},
  {id:nanoid(),name:"Dunstan",surname:"Dedmam",phone:"986-754-0611",email:"ddedmaml@soundcloud.com",birthyear:1986,sick:false},
  {id:nanoid(),name:"Deeann",surname:"Serot",phone:"556-170-8329",email:"dserotm@icio.us",birthyear:1973,sick:false},
  {id:nanoid(),name:"Lissa",surname:"Gerardeaux",phone:"260-149-0985",email:"lgerardeauxn@shop-pro.jp",birthyear:1971,sick:false},
  {id:nanoid(),name:"Alessandra",surname:"Borland",phone:"145-509-5954",email:"aborlando@marriott.com",birthyear:1989,sick:false},
  {id:nanoid(),name:"Arny",surname:"Oxenford",phone:"816-100-2840",email:"aoxenfordp@feedburner.com",birthyear:1992,sick:false},
  {id:nanoid(),name:"Poul",surname:"Emsden",phone:"523-364-8021",email:"pemsdenq@unblog.fr",birthyear:1995,sick:false},
  {id:nanoid(),name:"Hy",surname:"Towns",phone:"544-777-8863",email:"htownsr@cnbc.com",birthyear:1974,sick:false},
  {id:nanoid(),name:"Lombard",surname:"Suthworth",phone:"998-507-3342",email:"lsuthworths@sfgate.com",birthyear:1990,sick:false},
  {id:nanoid(),name:"Jermain",surname:"Snellman",phone:"183-807-1358",email:"jsnellmant@sakura.ne.jp",birthyear:1996,sick:false},
  {id:nanoid(),name:"Lethia",surname:"Mochan",phone:"412-327-5178",email:"lmochanu@skyrock.com",birthyear:1998,sick:false},
  {id:nanoid(),name:"Susannah",surname:"Lamacraft",phone:"358-896-6054",email:"slamacraftv@msn.com",birthyear:1975,sick:false},
  {id:nanoid(),name:"Audy",surname:"Robel",phone:"523-127-7192",email:"arobelw@ucoz.com",birthyear:1997,sick:false},
  {id:nanoid(),name:"Patrizius",surname:"Wilcox",phone:"871-160-6160",email:"pwilcoxx@moonfruit.com",birthyear:1990,sick:false},
  {id:nanoid(),name:"Friedrich",surname:"McCarron",phone:"134-705-9363",email:"fmccarrony@mysql.com",birthyear:1972,sick:false},
  {id:nanoid(),name:"Zahara",surname:"Chasmar",phone:"531-816-3923",email:"zchasmarz@omniture.com",birthyear:1987,sick:false},
  {id:nanoid(),name:"Shea",surname:"Milsap",phone:"196-428-3557",email:"smilsap10@newsvine.com",birthyear:1991,sick:false},
  {id:nanoid(),name:"Charmain",surname:"Dominec",phone:"983-624-1905",email:"cdominec11@usda.gov",birthyear:1980,sick:false},
  {id:nanoid(),name:"Carine",surname:"Shilston",phone:"629-509-5547",email:"cshilston12@infoseek.co.jp",birthyear:1989,sick:false},
  {id:nanoid(),name:"Gabey",surname:"Volett",phone:"842-938-4131",email:"gvolett13@businesswire.com",birthyear:1993,sick:false},
  {id:nanoid(),name:"Ealasaid",surname:"Verrechia",phone:"807-838-4012",email:"everrechia14@loc.gov",birthyear:1969,sick:false},
  {id:nanoid(),name:"Axel",surname:"Genge",phone:"876-920-1049",email:"agenge15@soup.io",birthyear:1986,sick:false},
  {id:nanoid(),name:"Monro",surname:"Titmarsh",phone:"889-388-4762",email:"mtitmarsh16@printfriendly.com",birthyear:1981,sick:false},
  {id:nanoid(),name:"Lari",surname:"Hanburry",phone:"278-805-6334",email:"lhanburry17@forbes.com",birthyear:1989,sick:false},
  {id:nanoid(),name:"Lilia",surname:"Edison",phone:"310-580-0847",email:"ledison18@mail.ru",birthyear:1989,sick:false},
  {id:nanoid(),name:"Allen",surname:"Coppledike",phone:"998-936-9582",email:"acoppledike19@domainmarket.com",birthyear:1973,sick:false},
  {id:nanoid(),name:"Barrett",surname:"Schoolcroft",phone:"710-479-9713",email:"bschoolcroft1a@free.fr",birthyear:1992,sick:false},
  {id:nanoid(),name:"Shelli",surname:"Dibbs",phone:"485-865-1603",email:"sdibbs1b@reference.com",birthyear:1995,sick:false},
  {id:nanoid(),name:"Sabrina",surname:"Finlason",phone:"388-794-3834",email:"sfinlason1c@who.int",birthyear:1982,sick:false},
  {id:nanoid(),name:"Lissy",surname:"Beldon",phone:"329-688-0420",email:"lbeldon1d@sourceforge.net",birthyear:1987,sick:false},
  // {id:51,name:"Sly",surname:"Place",phone:"851-370-2613",email:"splace1e@youku.com",birthyear:1995,sick:true},
  // {id:52,name:"Bathsheba",surname:"Humbles",phone:"174-459-0621",email:"bhumbles1f@forbes.com",birthyear:1979,sick:false},
  // {id:53,name:"Danella",surname:"Verdie",phone:"601-497-3950",email:"dverdie1g@latimes.com",birthyear:1996,sick:true},
  // {id:54,name:"Ripley",surname:"Sargint",phone:"481-540-5448",email:"rsargint1h@house.gov",birthyear:1981,sick:true},
  // {id:55,name:"Fayre",surname:"Tiffin",phone:"309-363-5799",email:"ftiffin1i@vistaprint.com",birthyear:1984,sick:false},
  // {id:56,name:"Regina",surname:"Rosbottom",phone:"411-295-3629",email:"rrosbottom1j@ifeng.com",birthyear:1990,sick:true},
  // {id:57,name:"Calvin",surname:"Creasey",phone:"430-559-9699",email:"ccreasey1k@dedecms.com",birthyear:1983,sick:false},
  // {id:58,name:"Ring",surname:"Eacle",phone:"925-855-0844",email:"reacle1l@biglobe.ne.jp",birthyear:1996,sick:false},
  // {id:59,name:"Joell",surname:"Rudeyeard",phone:"755-248-7489",email:"jrudeyeard1m@biblegateway.com",birthyear:1988,sick:false},
  // {id:60,name:"Martita",surname:"Tumilty",phone:"202-838-5027",email:"mtumilty1n@issuu.com",birthyear:1975,sick:false},
  // {id:61,name:"Colan",surname:"Papez",phone:"756-565-1743",email:"cpapez1o@sphinn.com",birthyear:1991,sick:false},
  // {id:62,name:"Emmaline",surname:"Curado",phone:"510-614-2088",email:"ecurado1p@nature.com",birthyear:1986,sick:true},
  // {id:63,name:"Milty",surname:"Sansome",phone:"232-499-4033",email:"msansome1q@xrea.com",birthyear:1975,sick:false},
  // {id:64,name:"Deny",surname:"Klaessen",phone:"448-223-2315",email:"dklaessen1r@stanford.edu",birthyear:1977,sick:false},
  // {id:65,name:"Rosalinde",surname:"Bleeze",phone:"340-580-1211",email:"rbleeze1s@npr.org",birthyear:1993,sick:true},
  // {id:66,name:"Rivalee",surname:"Dablin",phone:"829-749-1436",email:"rdablin1t@bbc.co.uk",birthyear:1988,sick:false},
  // {id:67,name:"Bryn",surname:"Jubb",phone:"893-971-4263",email:"bjubb1u@nydailynews.com",birthyear:1981,sick:true},
  // {id:68,name:"Aubrey",surname:"Divine",phone:"852-733-7637",email:"adivine1v@hexun.com",birthyear:1996,sick:false},
  // {id:69,name:"Anett",surname:"Aggas",phone:"986-578-0644",email:"aaggas1w@bravesites.com",birthyear:1989,sick:false},
  // {id:70,name:"Brenna",surname:"Fetterplace",phone:"465-615-7443",email:"bfetterplace1x@123-reg.co.uk",birthyear:1995,sick:true},
  // {id:71,name:"Clary",surname:"Beernt",phone:"634-228-7458",email:"cbeernt1y@deviantart.com",birthyear:1985,sick:true},
  // {id:72,name:"Nicky",surname:"Kopta",phone:"860-980-8616",email:"nkopta1z@blog.com",birthyear:1986,sick:true},
  // {id:73,name:"Clywd",surname:"Tuffield",phone:"150-933-6672",email:"ctuffield20@phpbb.com",birthyear:1979,sick:true},
  // {id:74,name:"Marabel",surname:"Stollwerck",phone:"907-724-8532",email:"mstollwerck21@bandcamp.com",birthyear:1970,sick:true},
  // {id:75,name:"Ripley",surname:"Fellon",phone:"133-538-5200",email:"rfellon22@washington.edu",birthyear:1991,sick:false},
  // {id:76,name:"Mayne",surname:"Trethewey",phone:"996-251-9419",email:"mtrethewey23@youku.com",birthyear:1994,sick:false},
  // {id:77,name:"Hilliard",surname:"Hucks",phone:"441-713-6172",email:"hhucks24@comcast.net",birthyear:1991,sick:true},
  // {id:78,name:"Sonnnie",surname:"Amburgy",phone:"319-219-2176",email:"samburgy25@mit.edu",birthyear:1970,sick:true},
  // {id:79,name:"Tani",surname:"D'Alesio",phone:"160-978-6961",email:"tdalesio26@shutterfly.com",birthyear:1984,sick:true},
  // {id:80,name:"Amabel",surname:"Falkus",phone:"900-930-2522",email:"afalkus27@amazon.de",birthyear:1981,sick:false},
  // {id:81,name:"Gaye",surname:"Perllman",phone:"381-871-9660",email:"gperllman28@state.gov",birthyear:1979,sick:false},
  // {id:82,name:"Allix",surname:"Frear",phone:"408-503-1456",email:"afrear29@digg.com",birthyear:1987,sick:true},
  // {id:83,name:"Harmonia",surname:"Lockhart",phone:"787-604-3675",email:"hlockhart2a@statcounter.com",birthyear:1995,sick:true},
  // {id:84,name:"Ian",surname:"Cunnah",phone:"949-836-7685",email:"icunnah2b@timesonline.co.uk",birthyear:1979,sick:false},
  // {id:85,name:"Boony",surname:"Harrowsmith",phone:"452-544-4117",email:"bharrowsmith2c@deviantart.com",birthyear:1990,sick:false},
  // {id:86,name:"Justin",surname:"Brezlaw",phone:"836-325-6114",email:"jbrezlaw2d@drupal.org",birthyear:1983,sick:true},
  // {id:87,name:"Lion",surname:"Kingzeth",phone:"408-708-1679",email:"lkingzeth2e@xinhuanet.com",birthyear:1992,sick:false},
  // {id:88,name:"Vincenty",surname:"Sugg",phone:"726-919-4897",email:"vsugg2f@uol.com.br",birthyear:1969,sick:true},
  // {id:89,name:"Phylis",surname:"Basili",phone:"527-160-2505",email:"pbasili2g@google.nl",birthyear:1976,sick:true},
  // {id:90,name:"Maisey",surname:"Emblem",phone:"839-111-1010",email:"memblem2h@lycos.com",birthyear:1996,sick:true},
  // {id:91,name:"Casar",surname:"Francombe",phone:"491-105-1569",email:"cfrancombe2i@lycos.com",birthyear:1993,sick:false},
  // {id:92,name:"Del",surname:"Tomisch",phone:"948-434-3893",email:"dtomisch2j@noaa.gov",birthyear:1995,sick:false},
  // {id:93,name:"Dani",surname:"Gilchrest",phone:"374-492-6476",email:"dgilchrest2k@geocities.jp",birthyear:1982,sick:true},
  // {id:94,name:"Claire",surname:"Mullett",phone:"955-181-0497",email:"cmullett2l@last.fm",birthyear:1985,sick:true},
  // {id:95,name:"Eduino",surname:"Lago",phone:"513-436-5890",email:"elago2m@ycombinator.com",birthyear:1993,sick:true},
  // {id:96,name:"Dinnie",surname:"Simoneton",phone:"224-789-7389",email:"dsimoneton2n@pinterest.com",birthyear:1972,sick:false},
  // {id:97,name:"Chevalier",surname:"Spadazzi",phone:"480-655-3407",email:"cspadazzi2o@yellowbook.com",birthyear:1995,sick:true},
  // {id:98,name:"Godwin",surname:"Killick",phone:"832-347-3230",email:"gkillick2p@amazon.de",birthyear:1987,sick:true},
  // {id:99,name:"Virgie",surname:"Rigden",phone:"423-563-1410",email:"vrigden2q@discuz.net",birthyear:1980,sick:false},
  // {id:100,name:"Nikki",surname:"Goodlud",phone:"559-677-7511",email:"ngoodlud2r@live.com",birthyear:1994,sick:true},
  // {id:101,name:"Nari",surname:"Ludewig",phone:"424-462-1883",email:"nludewig2s@phpbb.com",birthyear:1992,sick:false},
  // {id:102,name:"Tiena",surname:"Crain",phone:"455-963-6248",email:"tcrain2t@psu.edu",birthyear:1995,sick:true},
  // {id:103,name:"Harrison",surname:"Farrimond",phone:"402-794-4184",email:"hfarrimond2u@wikia.com",birthyear:1990,sick:false},
  // {id:104,name:"Davin",surname:"Spitaro",phone:"253-924-8320",email:"dspitaro2v@yelp.com",birthyear:1978,sick:true},
  // {id:105,name:"Willette",surname:"Danihel",phone:"283-852-5609",email:"wdanihel2w@blogs.com",birthyear:1982,sick:true},
  // {id:106,name:"Dorotea",surname:"Meake",phone:"554-821-7679",email:"dmeake2x@comsenz.com",birthyear:1980,sick:true},
  // {id:107,name:"Heinrick",surname:"Coare",phone:"702-848-4756",email:"hcoare2y@nationalgeographic.com",birthyear:1983,sick:true},
  // {id:108,name:"Thedric",surname:"Boolsen",phone:"561-254-4186",email:"tboolsen2z@wikispaces.com",birthyear:1996,sick:true},
  // {id:109,name:"Chaddy",surname:"Beney",phone:"813-685-7433",email:"cbeney30@bluehost.com",birthyear:1987,sick:false},
  // {id:110,name:"Gregoor",surname:"Galiford",phone:"749-227-2690",email:"ggaliford31@ask.com",birthyear:1978,sick:false},
  // {id:111,name:"Nonnah",surname:"De Bruijne",phone:"924-975-9315",email:"ndebruijne32@uiuc.edu",birthyear:1975,sick:false},
  // {id:112,name:"Isacco",surname:"Verdie",phone:"695-575-1420",email:"iverdie33@hud.gov",birthyear:1974,sick:false},
  // {id:113,name:"Huey",surname:"Warlton",phone:"249-768-7788",email:"hwarlton34@networkadvertising.org",birthyear:1978,sick:false},
  // {id:114,name:"Maribel",surname:"Marchant",phone:"421-516-1688",email:"mmarchant35@furl.net",birthyear:1988,sick:false},
  // {id:115,name:"Damon",surname:"Patient",phone:"756-960-0207",email:"dpatient36@latimes.com",birthyear:1997,sick:true},
  // {id:116,name:"Lazarus",surname:"Sherme",phone:"857-501-3033",email:"lsherme37@facebook.com",birthyear:1978,sick:true},
  // {id:117,name:"Huberto",surname:"Wall",phone:"808-339-2658",email:"hwall38@sina.com.cn",birthyear:1945,sick:true},
  // {id:118,name:"Dorie",surname:"Luxton",phone:"766-835-7730",email:"dluxton39@cornell.edu",birthyear:1961,sick:true},
  // {id:119,name:"Marion",surname:"Sanja",phone:"985-232-8712",email:"msanja3a@1688.com",birthyear:1964,sick:false},
  // {id:120,name:"Camilla",surname:"Genner",phone:"245-766-4427",email:"cgenner3b@techcrunch.com",birthyear:1996,sick:false},
  // {id:121,name:"Clio",surname:"Van Cassel",phone:"369-983-0100",email:"cvancassel3c@cnbc.com",birthyear:1997,sick:false},
  // {id:122,name:"Torrie",surname:"Trounson",phone:"210-236-8180",email:"ttrounson3d@cocolog-nifty.com",birthyear:1982,sick:false},
  // {id:123,name:"Joanie",surname:"Bumphries",phone:"438-856-2408",email:"jbumphries3e@bravesites.com",birthyear:1980,sick:false},
  // {id:124,name:"Eunice",surname:"Morphey",phone:"840-915-4207",email:"emorphey3f@rediff.com",birthyear:1991,sick:false},
  // {id:125,name:"Cassandry",surname:"Gerckens",phone:"740-137-0802",email:"cgerckens3g@booking.com",birthyear:1995,sick:true},
  // {id:126,name:"Marsiella",surname:"Benkin",phone:"346-782-7815",email:"mbenkin3h@vk.com",birthyear:1993,sick:false},
  // {id:127,name:"Helaine",surname:"Mullender",phone:"970-508-4730",email:"hmullender3i@nymag.com",birthyear:1995,sick:false},
  // {id:128,name:"Keary",surname:"Dulake",phone:"721-609-7056",email:"kdulake3j@netlog.com",birthyear:1992,sick:true},
  // {id:129,name:"Lucilia",surname:"Dunkley",phone:"859-488-7892",email:"ldunkley3k@clickbank.net",birthyear:1992,sick:false},
  // {id:130,name:"Archie",surname:"Dell Casa",phone:"108-992-8300",email:"adellcasa3l@army.mil",birthyear:1977,sick:true},
  // {id:131,name:"Sally",surname:"Brickwood",phone:"809-325-3018",email:"sbrickwood3m@google.it",birthyear:1975,sick:false},
  // {id:132,name:"Laurel",surname:"Valerio",phone:"608-756-9102",email:"lvalerio3n@google.it",birthyear:1990,sick:false},
  // {id:133,name:"Heall",surname:"Sundin",phone:"830-935-1165",email:"hsundin3o@4shared.com",birthyear:1972,sick:true},
  // {id:134,name:"Caterina",surname:"Norcutt",phone:"530-479-4723",email:"cnorcutt3p@apple.com",birthyear:1980,sick:false},
  // {id:135,name:"Johann",surname:"McGannon",phone:"932-214-3420",email:"jmcgannon3q@mac.com",birthyear:1989,sick:true},
  // {id:136,name:"Rachel",surname:"Heathorn",phone:"791-474-1617",email:"rheathorn3r@tumblr.com",birthyear:1976,sick:false},
  // {id:137,name:"Constance",surname:"Ruhben",phone:"272-683-9117",email:"cruhben3s@feedburner.com",birthyear:1989,sick:true},
  // {id:138,name:"Minnie",surname:"Bonhomme",phone:"760-588-7195",email:"mbonhomme3t@utexas.edu",birthyear:1977,sick:false},
  // {id:139,name:"Dal",surname:"Delong",phone:"153-276-3545",email:"ddelong3u@icio.us",birthyear:1998,sick:true},
  // {id:140,name:"Ibby",surname:"Bowton",phone:"627-649-5412",email:"ibowton3v@ucoz.ru",birthyear:1947,sick:true},
  // {id:141,name:"Claire",surname:"Baty",phone:"679-936-7580",email:"cbaty3w@exblog.jp",birthyear:1957,sick:true},
  // {id:142,name:"Grethel",surname:"Moan",phone:"904-499-1524",email:"gmoan3x@ebay.com",birthyear:1991,sick:false},
  // {id:143,name:"Estell",surname:"Bednell",phone:"822-992-6230",email:"ebednell3y@usgs.gov",birthyear:1992,sick:false},
  // {id:144,name:"Kelley",surname:"Webb",phone:"399-458-2975",email:"kwebb3z@4shared.com",birthyear:1988,sick:true},
  // {id:145,name:"Atalanta",surname:"Beahan",phone:"319-821-4262",email:"abeahan40@apple.com",birthyear:1997,sick:false},
  // {id:146,name:"Hedvige",surname:"Emney",phone:"328-151-0771",email:"hemney41@geocities.jp",birthyear:1984,sick:true},
  // {id:147,name:"Tabor",surname:"McPhater",phone:"888-956-3634",email:"tmcphater42@printfriendly.com",birthyear:1995,sick:false},
  // {id:148,name:"Iggy",surname:"Fazan",phone:"555-229-8500",email:"ifazan43@un.org",birthyear:1984,sick:true},
  // {id:149,name:"Marthe",surname:"Ozintsev",phone:"962-455-7177",email:"mozintsev44@shutterfly.com",birthyear:1954,sick:true},
  // {id:150,name:"Tannie",surname:"Ivakhnov",phone:"671-752-9450",email:"tivakhnov45@toplist.cz",birthyear:1971,sick:false},
];
const dentists = [
  {id:nanoid(),name:"Paul",surname:"Thormwell",occupation: "Dentist",phone:"602-899-8744",email:"pthormwell46@tandartspraktijkbvt.nl",birthyear:1972,sick:false},
  {id:nanoid(),name:"Philippe",surname:"McCroft",occupation: "Dentist",phone:"819-421-0464",email:"pmccroft47@tandartspraktijkbvt.nl",birthyear:1996,sick:false},
  {id:nanoid(),name:"Francesco",surname:"Worpole",occupation: "Dentist",phone:"627-716-4884",email:"fworpole48@tandartspraktijkbvt.nl",birthyear:1989,sick:false},
  {id:nanoid(),name:"Ede",surname:"Sackur",occupation: "Dentist",phone:"324-221-5789",email:"esackur49@tandartspraktijkbvt.nl",birthyear:1978,sick:true},
]
const assistents = [
  {id:nanoid(),name:"Arturo",surname:"Atter",occupation: "Assistent",phone:"894-351-2892",email:"aatter4a@tandartspraktijkbvt.nl",birthyear:1975,sick:false},
  {id:nanoid(),name:"Valerie",surname:"Birchall",occupation: "Assistent",phone:"792-318-5201",email:"vbirchall4b@tandartspraktijkbvt.nl",birthyear:1979,sick:false},
]

const getRandomPatient = () => {
  const person = patients[Math.floor(Math.random() * 50)];
  return person;
};
const getRandomDentist = () => {
  const person = dentists[Math.floor(Math.random() * 4)];
  return person;
};
const getRandomAssistent = () => {
  const person = assistents[Math.floor(Math.random() * 2)];
  return person;
};

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  id: nanoid(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomPatient(),
  dentist: getRandomDentist(),
  assistent: getRandomAssistent(),
});

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());

export default generateRandomAppointments;