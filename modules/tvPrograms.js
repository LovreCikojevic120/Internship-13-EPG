import { calculateDate } from "./utils.js";

const channels = [

  {
    channelName: 'HRT-1',
    channelNumber: 1,
    programName: 'TV Kalendar',
    description: 'wpifvvpifbv',
    startTime: calculateDate(21, 0),
    endTime: calculateDate(22, 0),
    category: 'Adult',
    reprisal: false
  },

  {
    channelName: 'HRT-2',
    channelNumber: 2,
    programName: 'Gitak TV',
    description: 'wpifvvpifbv',
    startTime: new Date('2022-2-16 11-30'),
    endTime: new Date('2022-2-16 12-00'),
    category: 'Triler',
    reprisal: false
  },

  {
    channelName: 'Nova TV',
    channelNumber: 3,
    programName: 'Provjereno',
    description: 'wpifvvpifbv',
    startTime: new Date('2022-2-16 11-30'),
    endTime: new Date('2022-2-16 12-00'),
    category: 'Sci-Fi',
    reprisal: true
  },

  {
    channelName: 'RTL Televizija',
    channelNumber: 4,
    programName: 'DnevnikRTL',
    description: 'wpifvvpifbv',
    startTime: new Date('2022-2-16 11-30'),
    endTime: new Date('2022-2-16 12-00'),
    category: 'Informativni program',
    reprisal: false
  }
]

export {channels};