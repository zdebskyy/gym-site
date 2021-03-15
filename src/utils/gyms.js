import irpinskaImg from "../img/schedules/irpenskaya_sayt1.jpg";
import semashko13Img from "../img/schedules/semashko_dlya_sayta1.jpg";
import koltsovaImg from "../img/schedules/kolcova_dlya_sayta1.jpg";
import trxImg from "../img/schedules/trh_dlya_sayta1.jpg";

const schedules = [
  {
    id: 1,
    club: "irpinska",
    title: "Ірпінська 76",
    src: irpinskaImg,
    centerPosition: { lat: 50.4600634, lng: 30.3484614 },
    marker: [{ lat: 50.4600634, lng: 30.3484614 }],
    address: ["Ірпінська 76", "м. Академмістечко"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел.(044) 332-32-05",
    ],
    gymInfo: ["Просторий тренажерний зал", "Два зали для фітнесу та танців"],
  },
  {
    id: 2,
    club: "semashko13",
    title: "Семашко 13",
    src: semashko13Img,
    centerPosition: { lat: 50.460556, lng: 30.362529 },
    marker: [{ lat: 50.460556, lng: 30.362529 }],
    address: ["Семашко 13", "м. Житомирська"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел.(044) 332-32-42",
    ],
    gymInfo: ["Просторий тренажерний зал", "Зал для фітнесу"],
  },

  {
    id: 3,
    club: "semashko8a",
    title: "Семашко 8a",
    src: semashko13Img,
    centerPosition: { lat: 50.4634439, lng: 30.3636877 },
    marker: [{ lat: 50.4634439, lng: 30.3636877 }],
    address: ["Семашко 8а", "м. Академмістечко"],
    workTime: [
      "Пн-Пт – з 07:00 до 23:00.",
      "Сб-Нд – з 09:00 до 20:00.",
      "тел. (044) 332-32-06",
    ],
    gymInfo: ["Тренажерний зал"],
    gymAdditionalInfo: ["Вертикальний турбо-солярій 6 грн/хв"],
  },

  {
    id: 4,
    club: "koltsova",
    title: "Кольцова 14",
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
    id: 5,
    club: "trx",
    title: "Міні групи TRX",
    src: trxImg,
    centerPosition: { lat: 50.460461, lng: 30.355339 },
    marker: [
      { lat: 50.4600634, lng: 30.3484614 },
      { lat: 50.460556, lng: 30.362529 },
    ],
    address: [
      "Тренування проходять у клубах за адресами Ірпінська 76 та Семашко 13",
    ],
  },
];

export default schedules;
