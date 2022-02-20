import { calculateDate } from "./utils.js";

const channels = [

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'TV Kalendar',
    description: 'Povijesni događaji na današnji datum',
    startTime: calculateDate(8, 0),
    endTime: calculateDate(8, 59),
    category: 'Informativno',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Gitak TV',
    description: 'KO-ŠAR-KA',
    startTime: calculateDate(9, 0),
    endTime: calculateDate(9, 59),
    category: 'Komedija',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Potjera',
    description: 'Brzopotezna pitanja',
    startTime: calculateDate(10, 0),
    endTime: calculateDate(11, 59),
    category: 'Informativno',
    reprisal: true
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Dnevnik',
    description: 'Dnevne novosti',
    startTime: calculateDate(12, 0),
    endTime: calculateDate(12, 59),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Idemo na put sa Goranom Milićem',
    description: 'Putopisi Gorana Milića',
    startTime: calculateDate(13, 0),
    endTime: calculateDate(14, 59),
    category: 'Putopis',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Zločesti momci',
    description: 'Zadnje sate posla provedite uz zločeste momke',
    startTime: calculateDate(15, 0),
    endTime: calculateDate(15, 59),
    category: 'Adult',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Utakmica: Hajduk - Gorica',
    description: 'FIFA finali prvenstva',
    startTime: calculateDate(16, 0),
    endTime: calculateDate(17, 59),
    category: 'Sportski program',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'DUMP Days konferencija',
    description: 'Konferencija za mlade programere',
    startTime: calculateDate(18, 0),
    endTime: calculateDate(19, 59),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Dnevnik',
    description: 'Dnevne novosti',
    startTime: calculateDate(20, 0),
    endTime: calculateDate(20, 59),
    category: 'Informativni program',
    reprisal: true
  },

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'Prohujalo s vihorom',
    description: 'Najbolji film svih vremena',
    startTime: calculateDate(21, 0),
    endTime: calculateDate(0, 0),
    category: 'Ljubavna drama',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Glazbeni kutak',
    description: 'Laganini glazba za jutro',
    startTime: calculateDate(8, 0),
    endTime: calculateDate(8, 59),
    category: 'Glazbeni program',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Regionalni dnevnik',
    description: 'Dnevne novosti iz regije',
    startTime: calculateDate(9, 0),
    endTime: calculateDate(9, 59),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Umorstva u Midsommeru',
    description: 'Kriminalistički serijal',
    startTime: calculateDate(10, 0),
    endTime: calculateDate(11, 59),
    category: 'Krimi drama',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Misa iz Karlovca',
    description: 'Prijenos mise iz župe u Karlovcu',
    startTime: calculateDate(12, 0),
    endTime: calculateDate(12, 59),
    category: 'Religiozni program',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Australian Open',
    description: 'Finali kupa: Marin Čilić - Rafael Nadal',
    startTime: calculateDate(13, 0),
    endTime: calculateDate(14, 59),
    category: 'Sportski program',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Regionalni dnevnik',
    description: 'Dnevne novosti iz regije',
    startTime: calculateDate(15, 0),
    endTime: calculateDate(15, 59),
    category: 'Informativni program',
    reprisal: true
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Terminator 2: Sudnji dan',
    description: 'Drugi nastavak u franšizi',
    startTime: calculateDate(16, 0),
    endTime: calculateDate(17, 59),
    category: 'Sci-Fi film',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'High School Musical',
    description: 'Mjuzikl za mlade',
    startTime: calculateDate(18, 0),
    endTime: calculateDate(19, 59),
    category: 'Mjuzikl',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'NBA Bucks - LA Lakers',
    description: 'Doigravanje 7. utakmica',
    startTime: calculateDate(20, 0),
    endTime: calculateDate(21, 59),
    category: 'Sportski program',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Umorstva u Midsommeru',
    description: 'Kriminalistički serijal',
    startTime: calculateDate(22, 0),
    endTime: calculateDate(0, 0),
    category: 'Krimi drama',
    reprisal: true
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Tomislav i prijatelji',
    description: 'Dječja serija o vlakićima',
    startTime: calculateDate(8, 0),
    endTime: calculateDate(8, 59),
    category: 'Serija za djecu',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Ninja kornjače',
    description: 'Prave su oklopnjače',
    startTime: calculateDate(9, 0),
    endTime: calculateDate(9, 59),
    category: 'Serija za djecu',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Inspektor Rex',
    description: 'Krimi serija sa pasima',
    startTime: calculateDate(10, 0),
    endTime: calculateDate(11, 59),
    category: 'Krimi serija',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Dnevnik u podne',
    description: 'Dnevne novosti',
    startTime: calculateDate(12, 0),
    endTime: calculateDate(12, 59),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'IN Magazin',
    description: 'Drame i najnoviji tračevi',
    startTime: calculateDate(13, 0),
    endTime: calculateDate(14, 30),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Ljubav je na selu',
    description: 'Uff',
    startTime: calculateDate(14, 31),
    endTime: calculateDate(15, 59),
    category: 'Domaći reality',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Super talent',
    description: 'Emisija gdje svi imaju tužnu životnu priču',
    startTime: calculateDate(16, 0),
    endTime: calculateDate(17, 59),
    category: 'Zabavni program',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Dnevnik Nove TV',
    description: 'Večeras su s Vama: Ivana Paradžiković i Petar Pereža',
    startTime: calculateDate(18, 0),
    endTime: calculateDate(18, 59),
    category: 'Informativni program',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Američka pita',
    description: 'Maturanti traže pratilje za maturalnu...',
    startTime: calculateDate(19, 0),
    endTime: calculateDate(21, 59),
    category: 'Komedija',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'IN Magazin',
    description: 'Drame i najnoviji tračevi',
    startTime: calculateDate(22, 0),
    endTime: calculateDate(0, 0),
    category: 'Informativni program',
    reprisal: true
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'YU-GI-OH',
    description: 'D-D-D-DVODOJ',
    startTime: calculateDate(8, 0),
    endTime: calculateDate(8, 59),
    category: 'Serija za djecu',
    reprisal: false
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'Dora istražuje',
    description: 'Dora istražuje je napeta avantura u kojoj Dora mora pronaći put do neotkrivenih blaga',
    startTime: calculateDate(9, 0),
    endTime: calculateDate(9, 59),
    category: 'Serija za djecu',
    reprisal: false
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'Tri dva jedan KUHAJ',
    description: 'Kuhanje sa Ivanom Pažaninom',
    startTime: calculateDate(10, 0),
    endTime: calculateDate(11, 59),
    category: 'Kulinarska emisija',
    reprisal: true
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'RTL Vijesti',
    description: 'Dnevne novosti',
    startTime: calculateDate(12, 0),
    endTime: calculateDate(12, 59),
    category: 'Informativno',
    reprisal: false
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'Miss Bikini Bačvice Edition',
    description: 'Biramo najlipšu žensku na Baćama',
    startTime: calculateDate(10, 0),
    endTime: calculateDate(11, 59),
    category: 'Adult',
    reprisal: false
  },
]

export {channels};