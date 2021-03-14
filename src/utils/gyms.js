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
    address: ["Ірпінська 76", "м. Академмістечко"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел.(044) 332-32-05",
    ],
    gymInfo: ["Просторий тренажерний зал", "2 зали для фітнесу та танців"],
  },
  {
    id: 2,
    club: "semashko",
    title: "Семашко 13, м. Житомирська",
    src: semashkoImg,
    centerPosition: { lat: 50.460556, lng: 30.362529 },
    marker: [{ lat: 50.460556, lng: 30.362529 }],
    address: ["Семашко 13", "м. Житомирська"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел.(044) 332-32-42",
    ],
    gymInfo: ["Просторий тренажерний зал", "зал для фітнесу"],
  },
  {
    id: 3,
    club: "koltsova",
    title: "Кольцова 14, Борщагівка",
    src: koltsovaImg,
    centerPosition: { lat: 50.422328, lng: 30.37929 },
    marker: [{ lat: 50.422328, lng: 30.37929 }],
    address: ["Кольцова 14", "Борщагівка"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел. (044) 332-30-25",
    ],
    gymInfo: [
      "Просторий тренажерний зал",
      "Просторий зал для фітнесу, танців та йоги",
    ],
    gymAdditionalInfo: ["Вертикальний турбо-солярій 6 грн/хв"],
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
