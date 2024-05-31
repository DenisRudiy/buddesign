import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  //   .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uk",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          lang: "Eng",
          headerNav1: "Our Services",
          headerNav2: "Technique",
          headerNav3: "Works",
          headerNav4: "Products",
          headerNav5: "Outsourcing",
          headerNav6: "Houses",
          headerNav7: "Recyclables",
          headerNav8: "About Us",
          headerNav9: "Projects",
          headerNav10: "Gallery",
          headerNav11: "Contacts",

          Technique: "Technique",
          Works: "Works",
          Gallery: "Gallery",
          Outsourcing: "Outsourcing",
          Photo: "Photo",
          Video: "Video",

          homeMainTitle: "Home",
          honeMainButton: "Calculate the cost",
          mainImageText: "Years of experience",
          aboutCompany: "About our company",
          aboutCompanyDescription:
            "Buddesign is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment.",
          mainAboutButton: "About Us",
          aboutTechniqueTextDescription:
            "Our fleet has a large number of vehicles: excavators, dump trucks, bulldozers, etc. That is why you have the opportunity to choose the best option for performing specific tasks at a high level.",
          aboutWorksTextDescription:
            "A wide range of high-quality services, reliable specialists, modern technologies and equipment allows us to implement all projects on time.",
          aboutTechniqueButtonOne: "Sample",
          TechnicMainTitle: "Our Technique",
          TechnicContentTitle: "Special Technique",
          TechnicText:
            "Our fleet has a large number of machines: excavators, dump trucks, bulldozers, etc. That is why you have the opportunity to choose the best option for performing specific tasks at a high level.",
          TechnicCardsTitle: "Technique Types",
          TechnicCardsTitleType1: "Dump trucks",
          TechnicCardsTitleType2: "Excavators",
          TechnicCardsTitleType3: "Bulldozers",
          TechnicCardsTitleType4: "Other",
          WorkMainTitle: "Our Works",
          WorksText:
            "A wide range of high-quality services, reliable specialists, modern technologies and equipment allows us to implement all projects on time.",
          WorksTextList1: "● dismantling of any complexity",
          WorksTextList2: "● excavation of pits",
          WorksTextList3: "● cargo transportation",
          WorksTextList4: "● Site preparation for construction",
          ProductsMainTitle: "Our Products",
          ProductsContentTitle: "Our Products",
          ProductsText:
            "Bulk construction materials can be very different and have a wide range of physical and mechanical properties, which provides them with a wide range of applications in construction. Crushed material of different size fractions can be used as an independent component or as part of various construction mixtures.",
          OutsourcingContentTitle: "Outsourcing and Outstaffing",
          OutsourcingText:
            "When you contact us, you pay only for the time your employees work. We will provide you with the number of employees you need. This is how the problem of peak workload and staff downtime is solved",
          HousesMainTitle: "Our Houses",
          HousesContentTitle: "Our Houses",
          HousesText:
            "When implementing various projects, our company offers a wide range of construction materials of appropriate quality and reliability. We guarantee high quality of our products and fast delivery, which makes us a reliable partner for any us a reliable partner for any construction project.",
          RecyclablesMainTitle: "Recyclables",
          RecyclablesContentTitle: "Recyclables",
          RecyclablesText: "Our mission is to conserve resources and take care of the environment",
          AboutUsMainTitle: "Our company",
          InfoAboutUs: "About Us",
          InfoAboutCompany: "About our company",
          InfoAboutCompanyDescription:
            "Buddesign is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment.",
          AboutUsYearsItemDescription:
            "Buddesign is a company with many years of experience, high-quality projects, a team of professionals, and modern equipment.",
          AboutUsYearsItemTitle: "Years in the construction services market",

          AdventagesTitle: "OUR ADVANTAGES",
          AdventagesItemTitle1: "Customer focus",
          AdventagesItemTitle2: "Reliability",
          AdventagesItemTitle3: "Transparency",
          AdventagesItemListDot1_1: "High-quality service",
          AdventagesItemListDot1_2: "Focus on long-term customer relationships",
          AdventagesItemListDot1_3: "High quality workmanship and attention to detail",
          AdventagesItemListDot2_1: "Licenses",
          AdventagesItemListDot2_2: "Extensive experience in the market",
          AdventagesItemListDot2_3: "Cooperation with well-known companies",
          AdventagesItemListDot2_4: "Experienced specialists",
          AdventagesItemListDot3_1:
            "We provide all the necessary information for making rational decisions in an open, complete, timely and understandable manner",
          AdventagesItemListDot3_2: "We publish the process on social media and on the website",

          OurProjectsTitle: "OUR PROJECTS",
          VacanciesTitle: "Our Vacancies",
          ProjectsMainTitle: "Projects",
          ProjectsOurTitle: "OUR PROJECTS",
          ProjectsOurContentTitle1: "Modern minimalist exterior design",
          ProjectsOurContentTitle2: "Pure harmony between space and function",

          lookMore: "Look More",
          reasons: "Reasons to cooperate with us",
          reason1: "Completion of work on time",
          reason2: "High quality and special attention to detail",
          reason3: "Innovation and reliability",
          ourContacts: "Our Contacts",
          ourContacts1: "Special equipment and robots",
          ourContacts2: "Outsourcing",
          ourContacts3: "Recyclables",
          ourContacts4: "Houses",
          copyrighting: "Buddesign-21",
          phoneMain: "main",
          footerRightSectionTitle: "Request a call",
          footerPlaceholer1: "Name",
          footerPlaceholer2: "Phone",
          footerSend: "Send",

          HomeProjectsTitle: "Our Projects",
          HomeProjectSmallTitle: "our project",
        },
      },
      uk: {
        translation: {
          lang: "Укр",
          headerNav1: "Наші послуги",
          headerNav2: "Техніка",
          headerNav3: "Роботи",
          headerNav4: "Товари",
          headerNav5: "Аутсорсинг",
          headerNav6: "Будинки",
          headerNav7: "Вторсировина",
          headerNav8: "Про нас",
          headerNav9: "Проекти",
          headerNav10: "Галерея",
          headerNav11: "Контакти",

          Technique: "Техніка",
          Works: "Роботи",
          Gallery: "Галерея",
          Outsourcing: "Аутсорсинг",
          Photo: "Фото",
          Video: "Відео",

          homeMainTitle: "Головна",
          honeMainButton: "Розрахувати вартість",
          mainImageText: "Років досвіду",
          aboutCompany: "Про нашу компанію",
          aboutCompanyDescription:
            "Buddesign-компанія з багаторічним досвідом, якісно виконаними проєктами, командою професіоналів та сучасною технікою.",
          mainAboutButton: "Про нас",
          aboutTechniqueTextDescription:
            "Наш парк має велику кількість техніки: екскаватори, самоскиди, бульдозери та ін.. Саме тому, ви маєте можливість обрати оптимальний варіант, для виконання конкретних завдань, на високому рівні.",
          aboutWorksTextDescription:
            "Широкий спектр високоякісних послуг ,надійних фахівців ,сучасних технологій та техніки, дає змогу реалізувати всі проєкти у встановлені терміни.",
          aboutTechniqueButtonOne: "Зразок",
          TechnicMainTitle: "Наша Техніка",
          TechnicContentTitle: "Спецтехніка",
          TechnicText:
            "Наш парк має велику кількість техніки: екскаватори, самоскиди, бульдозери та ін.. Саме тому, ви маєте можливість обрати оптимальний варіант, для виконання конкретних завдань, на високому рівні.",
          TechnicCardsTitle: "Типи Техніки",
          TechnicCardsTitleType1: "Самоскиди",
          TechnicCardsTitleType2: "Екскаватори",
          TechnicCardsTitleType3: "Бульдозери",
          TechnicCardsTitleType4: "Інше",
          WorkMainTitle: "Наші Роботи",
          WorksText:
            "Широкий спектр високоякісних послуг ,надійних фахівців ,сучасних технологій та техніки, дає змогу реалізувати всі проєкти у встановлені терміни.",
          WorksTextList1: "● демонтаж будь-якої складності",
          WorksTextList2: "● розробка котлованів",
          WorksTextList3: "● перевезення вантажів",
          WorksTextList4: "● підготовка майданчику до будівництва",
          ProductsMainTitle: "Наші Товари",
          ProductsContentTitle: "Наші Товари",
          ProductsText:
            "Сипучі будівельні матеріали бувають дуже різні, можуть мати великий набір фізико-механічних властивостей, що забезпечує їм широку сферу застосування в будівництві. Подрібнений матеріал різних за розміром фракцій може бути використаний як самостійний компонент, так і в складі різних будівельних сумішей.",
          OutsourcingContentTitle: "Аутсорсинг та Аутстафінг",
          OutsourcingText:
            "Звертаючись до нас, ви платите тільки за відпрацьований час працівників. Ми надамо вам ту кількість працівників, в яких є необхідність. Саме так, вирішується проблема пікового навантаження і простою персоналу",
          HousesMainTitle: "Наші Будинки",
          HousesContentTitle: "Наші будинки",
          HousesText:
            "При реалізації різноманітних проектів, наша компанія пропонує широкий спектр будівельних матеріалів відповідної якості та надійності. Ми гарантуємо високу якість наших продуктів та швидку поставку, що робить нас надійним партнером для будь-якого будівельного проекту.",
          RecyclablesMainTitle: "Вторсировина",
          RecyclablesContentTitle: "Вторсировина",
          RecyclablesText: "Наш місія - це збереження ресурсів і турбота про навколишнє середовище",
          AboutUsMainTitle: "Наша компанія",
          InfoAboutUs: "Про нас",
          InfoAboutCompany: "Про нашу компанію",
          InfoAboutCompanyDescription:
            "Buddesign-компанія з багаторічним досвідом, якісно виконаними проєктами, командою професіоналів та сучасною технікою.",
          AboutUsYearsItemDescription:
            "Buddesign-компанія з багаторічним досвідом, якісно виконаними проєктами, командою професіоналів та сучасною технікою.",
          AboutUsYearsItemTitle: "Років на ринку будівельних послуг",

          AdventagesTitle: "НАШІ ПЕРЕВАГИ",
          AdventagesItemTitle1: "Клієнтоорієнтованість",
          AdventagesItemTitle2: "Надійність",
          AdventagesItemTitle3: "Прозорість",
          AdventagesItemListDot1_1: "Високоякісний сервіс",
          AdventagesItemListDot1_2: "Орієнтація на довгострокові відносини з клієнтами",
          AdventagesItemListDot1_3: "Висока якість виконання робіт та увага деталям",
          AdventagesItemListDot2_1: "Ліцензії",
          AdventagesItemListDot2_2: "Великий досвід на ринку",
          AdventagesItemListDot2_3: "Співпраця з відомими компаніями",
          AdventagesItemListDot2_4: "Досвідчені фахівці",
          AdventagesItemListDot3_1:
            "Надаємо всю необхідну інформацію для прийняття раціональних рішень у відкритій, повній, своєчасній і зрозумілій формі",
          AdventagesItemListDot3_2: "Публікуємо процес роботи в соціальних мережах та на сайті",

          OurProjectsTitle: "НАШІ ПРОЄКТИ",
          VacanciesTitle: "Наші вакансії",
          ProjectsMainTitle: "Проекти",
          ProjectsOurTitle: "НАШІ ПРОЄКТИ",
          ProjectsOurContentTitle1: "Сучасний мінімалістичний зовнішній дизайн",
          ProjectsOurContentTitle2: "Чиста гармонія між простором і функцією",

          lookMore: "Дивитися більше",
          reasons: "Причини співпраці з нами",
          reason1: "Виконання робіт у встановлені терміни",
          reason2: "Висока якість та особлива увага деталям",
          reason3: "Інновації та надійність",
          ourContacts: "Наші контакти",
          ourContacts1: "Спецтехніка та роботи",
          ourContacts2: "Аутсорсинг",
          ourContacts3: "Вторсировина",
          ourContacts4: "Будинки",
          copyrighting: "Буддизайн-21",
          phoneMain: "основний",
          footerRightSectionTitle: "Замовити дзвінок",
          footerPlaceholer1: "Ім'я",
          footerPlaceholer2: "Телефон",
          footerSend: "Відправити",

          HomeProjectsTitle: "Наші проєкти",
          HomeProjectSmallTitle: "Наш проєкт",
        },
      },
    },
  });

export default i18n;
