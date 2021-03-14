import irpinskaImg from "../img/schedules/irpenskaya_sayt1.jpg";
import semashkoImg from "../img/schedules/semashko_dlya_sayta1.jpg";
import koltsovaImg from "../img/schedules/kolcova_dlya_sayta1.jpg";
import trxImg from "../img/schedules/trh_dlya_sayta1.jpg";

const schedules = [
  {
    id: 1,
    club: "irpinska",
    title: "Ірпінська 76, м. Академмістечко",
    src: irpinskaImg,
    centerPosition: { lat: 50.4600634, lng: 30.3484614 },
    marker: [{ lat: 50.4600634, lng: 30.3484614 }],
  },
  {
    id: 2,
    club: "semashko",
    title: "Семашко 13, м. Житомирська",
    src: semashkoImg,
    centerPosition: { lat: 50.460556, lng: 30.362529 },
    marker: [{ lat: 50.460556, lng: 30.362529 }],
  },
  {
    id: 3,
    club: "koltsova",
    title: "Кольцова 14, Борщагівка",
    src: koltsovaImg,
    centerPosition: { lat: 50.422328, lng: 30.37929 },
    marker: [{ lat: 50.422328, lng: 30.37929 }],
  },
  {
    id: 4,
    club: "trx",
    title:
      "Тренування TRX проходять у клубах за адресами Ірпінська 76 та Семашко 13",
    src: trxImg,
    centerPosition: { lat: 50.460461, lng: 30.355339 },
    marker: [
      { lat: 50.4600634, lng: 30.3484614 },
      { lat: 50.460556, lng: 30.362529 },
    ],
  },
];

export default schedules;
