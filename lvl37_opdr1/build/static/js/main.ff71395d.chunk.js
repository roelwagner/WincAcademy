(this.webpackJsonpdentist_react=this.webpackJsonpdentist_react||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),m=a.n(r),l=(a(27),a(2)),c=a(18),o=a(19),s=a(22),p=a(21),u=(a(15),a(8)),d=a(3),h=function(e){e.appointments;var t=e.patients,a=e.employees,n=e.addAppointment,r=Array.from({length:28},(function(e,t){return t+1})).map((function(e){return i.a.createElement("option",{key:e},e)})),m=Array.from({length:11},(function(e,t){return t+8})).map((function(e){return i.a.createElement("option",{key:e},e)})),l=t.map((function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.name," ",e.surname)})),c=a.filter((function(e){return"Dentist"===e.occupation})).map((function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.name," ",e.surname)})),o=a.filter((function(e){return"Assistent"===e.occupation})).map((function(e){return i.a.createElement("option",{key:e.id,value:e.id},e.name," ",e.surname)}));return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:n},"Make new appointment:",i.a.createElement("br",null),i.a.createElement("br",null),"Day: ",i.a.createElement("select",{name:"day"},r),"\xa0 Time: ",i.a.createElement("select",{name:"time"},m),"\xa0 Patient: ",i.a.createElement("select",{name:"patient"},l),"\xa0 Dentist: ",i.a.createElement("select",{name:"dentist"},c),"\xa0 Assistent: ",i.a.createElement("select",{name:"assistent"},i.a.createElement("option",{value:"none"},"--"),o),"\xa0",i.a.createElement("button",null,"Make appointment")))},b=function(e){var t=e.employees,a=e.addEmployee,n=e.makeEmployeeSick,r=t.map((function(e){return i.a.createElement("tr",{key:e.id,id:e.id},i.a.createElement("td",null,e.occupation),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.surname),i.a.createElement("td",null,e.phone),i.a.createElement("td",null,e.email),i.a.createElement("td",null,i.a.createElement("input",{type:"checkbox",onChange:n,checked:e.sick})))}));return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:a},i.a.createElement("input",{type:"text",name:"name",placeholder:"Name"}),i.a.createElement("input",{type:"text",name:"surname",placeholder:"Surname"}),i.a.createElement("input",{type:"number",name:"birthyear",placeholder:"Birthyear"}),i.a.createElement("select",{name:"occupation"},i.a.createElement("option",{name:"dentist"},"Dentist"),i.a.createElement("option",{name:"assistent"},"Assistent")),i.a.createElement("input",{type:"phone",name:"phone",placeholder:"Phone"}),i.a.createElement("input",{type:"mail",name:"email",placeholder:"E-mail"}),i.a.createElement("button",null,"Add Employee")),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",{className:"song-header"},i.a.createElement("th",null,"Occupation"),i.a.createElement("th",null,"First name"),i.a.createElement("th",null,"Last name"),i.a.createElement("th",null,"Phone number"),i.a.createElement("th",null,"E-mail"),i.a.createElement("th",null,"Sick")),r)))},y=function(e){var t=e.patients,a=e.makePatientSick,n=e.addPatient,r=t.map((function(e){return i.a.createElement("tr",{key:e.id,id:e.id},i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.surname),i.a.createElement("td",null,e.birthyear),i.a.createElement("td",null,e.phone),i.a.createElement("td",null,e.email),i.a.createElement("td",null,i.a.createElement("input",{type:"checkbox",onChange:a,checked:e.sick})))}));return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:n},i.a.createElement("input",{type:"text",name:"name",placeholder:"Name"}),i.a.createElement("input",{type:"text",name:"surname",placeholder:"Surname"}),i.a.createElement("input",{type:"number",name:"birthyear",placeholder:"Birthyear"}),i.a.createElement("select",{name:"occupation"},i.a.createElement("option",{name:"dentist"},"Dentist"),i.a.createElement("option",{name:"assistent"},"Assistent")),i.a.createElement("input",{type:"phone",name:"phone",placeholder:"Phone"}),i.a.createElement("input",{type:"mail",name:"email",placeholder:"E-mail"}),i.a.createElement("button",null,"Add Patient")),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",{className:"song-header"},i.a.createElement("th",null,"First name"),i.a.createElement("th",null,"Last name"),i.a.createElement("th",null,"Birthyear"),i.a.createElement("th",null,"Phone number"),i.a.createElement("th",null,"E-mail"),i.a.createElement("th",null,"Sick")),r)))},E=function(e){var t=e.appointments,a=e.employees,n=e.addEmployee,r=e.makeEmployeeSick,m=e.patients,l=e.makePatientSick,c=e.addPatient,o=e.addAppointment;return i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.b,{to:"/appointments"},"Appointments")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/patients"},"Patients")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/employees"},"Dentists / Assistents")))),i.a.createElement("main",null,i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/appointments"},i.a.createElement(h,{appointments:t,patients:m,employees:a,addAppointment:o})),i.a.createElement(d.a,{path:"/patients"},i.a.createElement(y,{patients:m,addPatient:c,makePatientSick:l})),i.a.createElement(d.a,{path:"/employees"},i.a.createElement(b,{employees:a,addEmployee:n,makeEmployeeSick:r}))))))},k=(a(33),function(e){var t=e.id,a=e.time,n=e.patient,r=e.dentist,m=e.removeAppointment,l=e.moveAppointment;return i.a.createElement("div",{className:"appointment "+(r.sick?"sick":"")},i.a.createElement("span",{className:"time"},function(e){return e<10?"0".concat(e,":00u"):"".concat(e,":00u")}(a)),i.a.createElement("span",{className:"patient"},n.name," ",n.surname," "),i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-trash-alt",id:t,onClick:m}),"\xa0",i.a.createElement("i",{className:"fas fa-edit",id:t,onClick:l})))}),f=function(e){var t=e.appointments,a=e.removeAppointment,n=e.moveAppointment,r=t.map((function(e,t){var r=e.time,m=e.patient,l=e.dentist,c=e.id;return i.a.createElement(k,{time:r,patient:m,dentist:l,key:t,id:c,removeAppointment:a,moveAppointment:n})})).sort((function(e,t){return e.props.time-t.props.time}));return i.a.createElement("div",{className:"day"},r)},v=function(e){var t=e.appointments,a=e.removeAppointment,n=e.moveAppointment,r=function(e){var t={};return e.forEach((function(e){var a=e.day;t.hasOwnProperty(a)||(t[a]=[]),t[a].push(e)})),t}(t),m=Object.values(r).map((function(e,t){return i.a.createElement(f,{appointments:e,key:t,removeAppointment:a,moveAppointment:n})}));return i.a.createElement("div",{className:"calendarview"},i.a.createElement("div",{className:"header"},i.a.createElement("div",null,"Maandag"),i.a.createElement("div",null,"Dinsdag"),i.a.createElement("div",null,"Woensdag"),i.a.createElement("div",null,"Donderdag"),i.a.createElement("div",null,"Vrijdag")),i.a.createElement("div",{className:"table"},m))},j=(a(34),function(e){var t=e.time,a=e.patient,n=e.dentist,r=e.assistent;return i.a.createElement("li",{className:"appointment"},i.a.createElement("div",{className:"time"},function(e){return e<10?"0".concat(e,":00u"):"".concat(e,":00u")}(t)),i.a.createElement("div",{className:"patient"},"Pati\xebnt: ",a.name," ",a.surname),i.a.createElement("div",{className:"dentist"},"Tandarts: ",n.name," ",n.surname),i.a.createElement("div",{className:"assistent"},"Assistent: ",r.name," ",r.surname))}),O=function(e){var t=e.appointments.map((function(e,t){var a=e.time,n=e.patient,r=e.dentist,m=e.assistent;return i.a.createElement(j,{time:a,patient:n,dentist:r,assistent:m,key:t})})).sort((function(e,t){return e.props.time-t.props.time}));return i.a.createElement("ul",{className:"dayview"},t)},g=function(e){var t=e.appointments,a=e.employees,n=e.addEmployee,r=e.makeEmployeeSick,m=e.patients,l=e.makePatientSick,c=e.addPatient,o=e.addAppointment,s=e.removeAppointment,p=e.moveAppointment;return i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/calendar"},"Calendar view")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/day"},"Day view")))),i.a.createElement("main",null,i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/calendar"},i.a.createElement(v,{appointments:t,removeAppointment:s,moveAppointment:p})),i.a.createElement(d.a,{path:"/day"},i.a.createElement(O,{appointments:t.filter((function(e){return 1===e.day}))})),i.a.createElement(d.a,{path:"/"},i.a.createElement(E,{appointments:t,employees:a,patients:m,addPatient:c,makePatientSick:l,addEmployee:n,makeEmployeeSick:r,addAppointment:o}))))))},A=a(1),S=[{id:Object(A.a)(),name:"Quinn",surname:"Bourgour",phone:"155-466-5847",email:"qbourgour0@gmpg.org",birthyear:1996,sick:!1},{id:Object(A.a)(),name:"Ilysa",surname:"Landon",phone:"221-427-7118",email:"ilandon1@altervista.org",birthyear:1979,sick:!1},{id:Object(A.a)(),name:"Frasco",surname:"Sumpter",phone:"782-711-6490",email:"fsumpter2@webnode.com",birthyear:1992,sick:!1},{id:Object(A.a)(),name:"Stesha",surname:"Golagley",phone:"166-165-7539",email:"sgolagley3@shutterfly.com",birthyear:1978,sick:!1},{id:Object(A.a)(),name:"Raynor",surname:"Meryett",phone:"197-267-3671",email:"rmeryett4@dion.ne.jp",birthyear:1990,sick:!1},{id:Object(A.a)(),name:"Frasco",surname:"Dymock",phone:"708-570-7068",email:"fdymock5@sakura.ne.jp",birthyear:1975,sick:!1},{id:Object(A.a)(),name:"Heda",surname:"Foakes",phone:"278-171-3619",email:"hfoakes6@nytimes.com",birthyear:1988,sick:!1},{id:Object(A.a)(),name:"Jolie",surname:"Budgen",phone:"798-570-0294",email:"jbudgen7@wix.com",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Danni",surname:"Estcourt",phone:"380-480-9524",email:"destcourt8@phpbb.com",birthyear:1988,sick:!1},{id:Object(A.a)(),name:"Rose",surname:"Dwire",phone:"199-223-3676",email:"rdwire9@bandcamp.com",birthyear:1992,sick:!1},{id:Object(A.a)(),name:"Roxana",surname:"Smallthwaite",phone:"207-401-3188",email:"rsmallthwaitea@i2i.jp",birthyear:1983,sick:!1},{id:Object(A.a)(),name:"Donnie",surname:"Duley",phone:"310-821-9660",email:"dduleyb@constantcontact.com",birthyear:1980,sick:!1},{id:Object(A.a)(),name:"Oralle",surname:"Piggins",phone:"860-230-2427",email:"opigginsc@yahoo.com",birthyear:1979,sick:!1},{id:Object(A.a)(),name:"Babbette",surname:"Ricardon",phone:"910-231-2636",email:"bricardond@yellowbook.com",birthyear:1986,sick:!1},{id:Object(A.a)(),name:"Daffi",surname:"Kimmel",phone:"905-149-1431",email:"dkimmele@whitehouse.gov",birthyear:1986,sick:!1},{id:Object(A.a)(),name:"Rici",surname:"Mowson",phone:"274-478-1037",email:"rmowsonf@usatoday.com",birthyear:1977,sick:!1},{id:Object(A.a)(),name:"Kayne",surname:"Secret",phone:"567-585-9210",email:"ksecretg@independent.co.uk",birthyear:1974,sick:!1},{id:Object(A.a)(),name:"Kori",surname:"Madner",phone:"823-483-8344",email:"kmadnerh@amazon.com",birthyear:1975,sick:!1},{id:Object(A.a)(),name:"Brigid",surname:"Stirling",phone:"448-308-6243",email:"bstirlingi@facebook.com",birthyear:1978,sick:!1},{id:Object(A.a)(),name:"Cobbie",surname:"Lattos",phone:"407-226-4556",email:"clattosj@mtv.com",birthyear:1994,sick:!1},{id:Object(A.a)(),name:"Joey",surname:"Broe",phone:"364-423-5600",email:"jbroek@canalblog.com",birthyear:1979,sick:!1},{id:Object(A.a)(),name:"Dunstan",surname:"Dedmam",phone:"986-754-0611",email:"ddedmaml@soundcloud.com",birthyear:1986,sick:!1},{id:Object(A.a)(),name:"Deeann",surname:"Serot",phone:"556-170-8329",email:"dserotm@icio.us",birthyear:1973,sick:!1},{id:Object(A.a)(),name:"Lissa",surname:"Gerardeaux",phone:"260-149-0985",email:"lgerardeauxn@shop-pro.jp",birthyear:1971,sick:!1},{id:Object(A.a)(),name:"Alessandra",surname:"Borland",phone:"145-509-5954",email:"aborlando@marriott.com",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Arny",surname:"Oxenford",phone:"816-100-2840",email:"aoxenfordp@feedburner.com",birthyear:1992,sick:!1},{id:Object(A.a)(),name:"Poul",surname:"Emsden",phone:"523-364-8021",email:"pemsdenq@unblog.fr",birthyear:1995,sick:!1},{id:Object(A.a)(),name:"Hy",surname:"Towns",phone:"544-777-8863",email:"htownsr@cnbc.com",birthyear:1974,sick:!1},{id:Object(A.a)(),name:"Lombard",surname:"Suthworth",phone:"998-507-3342",email:"lsuthworths@sfgate.com",birthyear:1990,sick:!1},{id:Object(A.a)(),name:"Jermain",surname:"Snellman",phone:"183-807-1358",email:"jsnellmant@sakura.ne.jp",birthyear:1996,sick:!1},{id:Object(A.a)(),name:"Lethia",surname:"Mochan",phone:"412-327-5178",email:"lmochanu@skyrock.com",birthyear:1998,sick:!1},{id:Object(A.a)(),name:"Susannah",surname:"Lamacraft",phone:"358-896-6054",email:"slamacraftv@msn.com",birthyear:1975,sick:!1},{id:Object(A.a)(),name:"Audy",surname:"Robel",phone:"523-127-7192",email:"arobelw@ucoz.com",birthyear:1997,sick:!1},{id:Object(A.a)(),name:"Patrizius",surname:"Wilcox",phone:"871-160-6160",email:"pwilcoxx@moonfruit.com",birthyear:1990,sick:!1},{id:Object(A.a)(),name:"Friedrich",surname:"McCarron",phone:"134-705-9363",email:"fmccarrony@mysql.com",birthyear:1972,sick:!1},{id:Object(A.a)(),name:"Zahara",surname:"Chasmar",phone:"531-816-3923",email:"zchasmarz@omniture.com",birthyear:1987,sick:!1},{id:Object(A.a)(),name:"Shea",surname:"Milsap",phone:"196-428-3557",email:"smilsap10@newsvine.com",birthyear:1991,sick:!1},{id:Object(A.a)(),name:"Charmain",surname:"Dominec",phone:"983-624-1905",email:"cdominec11@usda.gov",birthyear:1980,sick:!1},{id:Object(A.a)(),name:"Carine",surname:"Shilston",phone:"629-509-5547",email:"cshilston12@infoseek.co.jp",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Gabey",surname:"Volett",phone:"842-938-4131",email:"gvolett13@businesswire.com",birthyear:1993,sick:!1},{id:Object(A.a)(),name:"Ealasaid",surname:"Verrechia",phone:"807-838-4012",email:"everrechia14@loc.gov",birthyear:1969,sick:!1},{id:Object(A.a)(),name:"Axel",surname:"Genge",phone:"876-920-1049",email:"agenge15@soup.io",birthyear:1986,sick:!1},{id:Object(A.a)(),name:"Monro",surname:"Titmarsh",phone:"889-388-4762",email:"mtitmarsh16@printfriendly.com",birthyear:1981,sick:!1},{id:Object(A.a)(),name:"Lari",surname:"Hanburry",phone:"278-805-6334",email:"lhanburry17@forbes.com",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Lilia",surname:"Edison",phone:"310-580-0847",email:"ledison18@mail.ru",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Allen",surname:"Coppledike",phone:"998-936-9582",email:"acoppledike19@domainmarket.com",birthyear:1973,sick:!1},{id:Object(A.a)(),name:"Barrett",surname:"Schoolcroft",phone:"710-479-9713",email:"bschoolcroft1a@free.fr",birthyear:1992,sick:!1},{id:Object(A.a)(),name:"Shelli",surname:"Dibbs",phone:"485-865-1603",email:"sdibbs1b@reference.com",birthyear:1995,sick:!1},{id:Object(A.a)(),name:"Sabrina",surname:"Finlason",phone:"388-794-3834",email:"sfinlason1c@who.int",birthyear:1982,sick:!1},{id:Object(A.a)(),name:"Lissy",surname:"Beldon",phone:"329-688-0420",email:"lbeldon1d@sourceforge.net",birthyear:1987,sick:!1}],w=[{id:Object(A.a)(),name:"Paul",surname:"Thormwell",occupation:"Dentist",phone:"602-899-8744",email:"pthormwell46@tandartspraktijkbvt.nl",birthyear:1972,sick:!1},{id:Object(A.a)(),name:"Philippe",surname:"McCroft",occupation:"Dentist",phone:"819-421-0464",email:"pmccroft47@tandartspraktijkbvt.nl",birthyear:1996,sick:!1},{id:Object(A.a)(),name:"Francesco",surname:"Worpole",occupation:"Dentist",phone:"627-716-4884",email:"fworpole48@tandartspraktijkbvt.nl",birthyear:1989,sick:!1},{id:Object(A.a)(),name:"Ede",surname:"Sackur",occupation:"Dentist",phone:"324-221-5789",email:"esackur49@tandartspraktijkbvt.nl",birthyear:1978,sick:!0}],D=[{id:Object(A.a)(),name:"Arturo",surname:"Atter",occupation:"Assistent",phone:"894-351-2892",email:"aatter4a@tandartspraktijkbvt.nl",birthyear:1975,sick:!1},{id:Object(A.a)(),name:"Valerie",surname:"Birchall",occupation:"Assistent",phone:"792-318-5201",email:"vbirchall4b@tandartspraktijkbvt.nl",birthyear:1979,sick:!1}],P=function(){for(var e;;)if((e=Math.floor(24*Math.random()))>7&&e<19)return e},M=function(e){return Array(e).fill(0).map((function(e){return{id:Object(A.a)(),day:Math.floor(28*Math.random())+1,time:P(),patient:S[Math.floor(50*Math.random())],dentist:w[Math.floor(4*Math.random())],assistent:D[Math.floor(2*Math.random())]}}))},N=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a),(e=t.call(this)).addEmployee=function(t){var a=t.target.name.value,n=t.target.surname.value,i=t.target.birthyear.value,r=t.target.occupation.value,m=t.target.phone.value,c=t.target.email.value;""===a&&(a="John"),""===n&&(n="Doe");var o=[{id:Object(A.a)(),name:a,surname:n,occupation:r,phone:m,email:c,birthyear:i,sick:!1}].concat(Object(l.a)(e.state.employees));e.setState({employees:o}),t.preventDefault()},e.addPatient=function(t){var a=t.target.name.value,n=t.target.surname.value,i=t.target.birthyear.value,r=t.target.phone.value,m=t.target.email.value;if(""!==a&&""!==n){var c=[{id:Object(A.a)(),name:a,surname:n,phone:r,email:m,birthyear:i,sick:!1}].concat(Object(l.a)(e.state.patients));e.setState({patients:c})}t.preventDefault()},e.makeEmployeeSick=function(t){var a=t.target.parentElement.parentElement.id,n=Object(l.a)(e.state.employees).find((function(e){return e.id===a})),i=Object(l.a)(e.state.employees).map((function(e){return e===n&&(e.sick=!e.sick),e}));e.setState({employees:i})},e.filterSickPatients=function(t){var a=Object(l.a)(e.state.appointments).filter((function(e){return e.patient!==t}));e.setState({appointments:a})},e.makePatientSick=function(t){var a=t.target.parentElement.parentElement.id,n=Object(l.a)(e.state.patients).find((function(e){return e.id===a})),i=Object(l.a)(e.state.patients).map((function(e){return e===n&&(e.sick=!e.sick),e}));e.setState({patient:i}),e.filterSickPatients(n)},e.addAppointment=function(t){var a=Object(l.a)(e.state.patients).find((function(e){return e.id===t.target.patient.value})),n=Object(l.a)(e.state.employees).find((function(e){return e.id===t.target.dentist.value})),i=Object(l.a)(e.state.employees).find((function(e){return e.id===t.target.assistent.value})),r=parseInt(t.target.day.value),m=parseInt(t.target.time.value),c={id:Object(A.a)(),day:r,time:m,patient:a,dentist:n,assistent:i},o=Object(l.a)(e.state.appointments).find((function(e){return e.day===r&&e.time===m&&e.dentist===n})),s=Object(l.a)(e.state.appointments).find((function(e){return void 0!==i&&(e.day===r&&e.time===m&&e.assistent===i)}));if(o&&s)alert("Dentist and Assistent not available");else if(o)alert("Dentist not available");else if(s)alert("Assistent not available");else{var p=[c].concat(Object(l.a)(e.state.appointments));e.setState({appointments:p})}t.preventDefault()},e.removeAppointment=function(t){var a=Object(l.a)(e.state.appointments).find((function(e){return e.id===t.target.id})),n=Object(l.a)(e.state.appointments).filter((function(e){return e!==a}));e.setState({appointments:n})},e.moveAppointment=function(t){for(var a=!1,n=!1,i=0,r=0;!a;)(i=parseInt(prompt("set a new day between 1 to 28")))>0&&i<29&&(a=!0);for(;!n;)(r=parseInt(prompt("set a new time between 8 and 18")))>7&&r<19&&(n=!0);var m=Object(l.a)(e.state.appointments).find((function(e){return e.id===t.target.id})),c={id:m.id,day:i,time:r,patient:m.patient,dentist:m.dentist,assistent:m.assistent},o=Object(l.a)(e.state.appointments).find((function(e){return e.day===i&&e.time===r&&e.dentist===m.dentist})),s=Object(l.a)(e.state.appointments).find((function(e){return e.day===i&&e.time===r&&e.assistent===m.assistent}));if(o&&s)alert("Dentist and Assistent not available");else if(o)alert("Dentist not available");else if(s)alert("Assistent not available");else{var p=Object(l.a)(e.state.appointments).filter((function(e){return e!==m})),u=[c].concat(Object(l.a)(p));e.setState({appointments:u})}};var n=M(150),i=Object(l.a)(new Set(n.map((function(e){return e.dentist})))),r=Object(l.a)(new Set(n.map((function(e){return e.assistent})))),m=Object(l.a)(new Set(n.map((function(e){return e.patient})))),o=[].concat(Object(l.a)(i),Object(l.a)(r));return e.state={appointments:n,employees:o,patients:m},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{appointments:this.state.appointments,employees:this.state.employees,patients:this.state.patients,addPatient:this.addPatient,makePatientSick:this.makePatientSick,addEmployee:this.addEmployee,makeEmployeeSick:this.makeEmployeeSick,addAppointment:this.addAppointment,removeAppointment:this.removeAppointment,moveAppointment:this.moveAppointment}))}}]),a}(i.a.Component);m.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ff71395d.chunk.js.map