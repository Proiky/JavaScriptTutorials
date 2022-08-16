//installing node.js

//Do sad smo svaki put morali rucno refreshovat straincu kad zelimo da vidimo neku promjenu koju smo uradili unutar naseg koda
//U stvarnom svijetu ni jedan developer to ne radi rucno kao sto smo mi do sad!

//Mi cemo sad instalirat LiveServer koji je tool koji radi refresh za nas.
//Mozemo extension u VS kodu instalirat, a mozemo i instalirat node

//nodejs je nacin na koji mozemo runnati JS izvan browsera, i za neke od tools-a kao sto je LiveServer
//mi ga imamo instaliranog, samo otvorimo terminal i napisemo node -v.
//to nam vrati verziju naseg node-a

// sudo npm install live-server -g -> ovo -g znaci globally

// sad da ga otvorimo napisemo live-server u terminalu i to je to!
//ovaj tab je povezan sa nasim folderom!

//sad cemo isprobati to sto se samo reloada kad nesto promijenimo !

const calcAge = (birthYear) => 2022 - birthYear;
console.log(calcAge(1920));

//top radi
//cak se uradi reload i kad u index.html nesto promijenimo sto sam i probao!
//Radi cak i kad zatvorimo terminal, i uvijek ga mozemo otvoriti ponovo
