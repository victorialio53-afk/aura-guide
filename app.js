/* ================================================== */
/* AURI MESSAGES */
/* ================================================== */

const messageElement =
    document.getElementById("auri-message");


const typingIndicator =
    document.getElementById("typing-indicator");



const auriMessages = [

    "Дорогой игрок, система AURA приветствует тебя.",

    "Авторизация завершена. Ты подключён к миру AURA.",

    "Задание 1 «Брейншторм» уже доступно. Дедлайн — 11 октября, 23:59.",

    "База кураторов подключена. Найди свою команду и открой профиль проводника.",

    "Ты можешь открыть мою 3D-модель и рассмотреть меня поближе."

];


let currentMessageIndex = 0;



function showNextAuriMessage() {

    if (
        !messageElement ||
        !typingIndicator
    ) {
        return;
    }


    messageElement.classList.add(
        "message-hidden"
    );


    setTimeout(() => {

        messageElement.style.display =
            "none";


        typingIndicator.classList.add(
            "active"
        );


        setTimeout(() => {

            typingIndicator.classList.remove(
                "active"
            );


            currentMessageIndex =
                (
                    currentMessageIndex + 1
                )
                %
                auriMessages.length;


            messageElement.textContent =
                auriMessages[
                    currentMessageIndex
                ];


            messageElement.style.display =
                "block";


            requestAnimationFrame(() => {

                messageElement.classList.remove(
                    "message-hidden"
                );

            });


        }, 900);


    }, 220);

}



setInterval(
    showNextAuriMessage,
    6500
);



/* ================================================== */
/* SCREENS */
/* ================================================== */

const mainScreen =
    document.getElementById(
        "main-screen"
    );


const checklistScreen =
    document.getElementById(
        "checklist-screen"
    );


const gameScreen =
    document.getElementById(
        "game-screen"
    );


const curatorsScreen =
    document.getElementById(
        "curators-screen"
    );


const openChecklistButton =
    document.getElementById(
        "open-checklist"
    );


const backFromChecklistButton =
    document.getElementById(
        "back-from-checklist"
    );


const openGameButton =
    document.getElementById(
        "open-game"
    );


const openCuratorsButton =
    document.getElementById(
        "open-curators"
    );


const backFromCuratorsButton =
    document.getElementById(
        "back-from-curators"
    );


const backFromGameButton =
    document.getElementById(
        "back-from-game"
    );



function showScreen(screen) {

    const screens =
        document.querySelectorAll(
            ".app-screen"
        );


    screens.forEach(
        (item) => {

            item.classList.remove(
                "active-screen"
            );

        }
    );


    screen.classList.add(
        "active-screen"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



if (openChecklistButton) {

    openChecklistButton.addEventListener(
        "click",
        () => {

            showScreen(
                checklistScreen
            );

        }
    );

}



if (backFromChecklistButton) {

    backFromChecklistButton.addEventListener(
        "click",
        () => {

            showScreen(
                mainScreen
            );

        }
    );

}



if (openCuratorsButton) {

    openCuratorsButton.addEventListener(
        "click",
        () => {

            showScreen(
                curatorsScreen
            );

        }
    );

}



if (backFromCuratorsButton) {

    backFromCuratorsButton.addEventListener(
        "click",
        () => {

            showScreen(
                mainScreen
            );

        }
    );

}



if (openGameButton) {

    openGameButton.addEventListener(
        "click",
        () => {

            enterAuraGameMode();

            showScreen(
                gameScreen
            );


            requestAnimationFrame(
                resizeGameCanvas
            );

        }
    );

}



if (backFromGameButton) {

    backFromGameButton.addEventListener(
        "click",
        () => {

            stopGame();
            exitAuraGameMode();

            showScreen(
                mainScreen
            );

        }
    );

}




/* ================================================== */
/* CURATOR DATABASE */
/* ================================================== */

const curatorTeams = [
    {
        "team": 1,
        "curators": [
            {
                "slot": 1,
                "name": "Шакирова Кристина",
                "role": "Заместитель Председателя СК ВШУ",
                "strength": "ЭМОЦИОНАЛЬНАЯ",
                "message": "Йоу, студенчество!",
                "missing": false,
                "photo": "assets/curator-shakirova_kristina.webp"
            },
            {
                "slot": 2,
                "name": "Судьенкова Софья",
                "role": "Председатель КМК СК ИМЭБ",
                "strength": "ТВОРИТЬ И СОЗДАВАТЬ",
                "message": "Вот такой вот форум, собачка.",
                "missing": false,
                "photo": "assets/curator-sudenkova_sofya.webp"
            }
        ]
    },
    {
        "team": 2,
        "curators": [
            {
                "slot": 1,
                "name": "Ворфоломеева Виктория",
                "role": ["Председатель СК ИМЭБ", "Председатель КМК СК ИМЭБ 2025-2026"],
                "strength": "Эм... я весёлая и стараюсь веселить остальных",
                "message": "Коллеги, делаем!!! #связь #команда #яввасверю",
                "missing": false,
                "photo": "assets/curator-vorfolomeeva_viktoriya.webp"
            },
            {
                "slot": 2,
                "name": "Каракачан Дарья",
                "role": "и.о Председателя ПСО «Диалог»",
                "strength": "ОБЪЕДИНЯТЬ ЛЮДЕЙ",
                "message": "Пусть у каждого из вас останется от студенчества не только диплом, но и целая коллекция историй, людей и моментов, которыми захочется поделиться",
                "missing": false,
                "photo": "assets/curator-karakachan_darya.webp"
            }
        ]
    },
    {
        "team": 3,
        "curators": [
            {
                "slot": 1,
                "name": "Цеплакова Мария",
                "role": "Председатель СК ФФ",
                "strength": "Находить общий язык со всеми, поддерживать свою команду",
                "message": "Студенчество — лучшее время для реализации своих идей, используйте все возможности по-максимуму! А мы вам поможем и поддержим!)",
                "missing": false,
                "photo": "assets/curator-tseplakova_mariya.webp"
            },
            {
                "slot": 2,
                "name": "Эстебан Гутьеррес",
                "role": "Президент Ассоциации студетов из Стран Латинской Америки и карибского басейна (2025-2026)",
                "strength": "Помогать и решать проблемы",
                "message": "Не упустите возможности, которые вы сами сделали возможными!",
                "missing": false,
                "photo": "assets/curator-esteban_josue_gutierrez_benavides.webp"
            }
        ]
    },
    {
        "team": 4,
        "curators": [
            {
                "slot": 1,
                "name": "Ларионов Артём",
                "role": "Председатель ККО ОСО РУДН",
                "strength": "Слышать студентов",
                "message": "Если делаем - то делаем качественно)",
                "missing": false,
                "photo": "assets/curator-larionov_artyom.webp"
            },
            {
                "slot": 2,
                "name": "Захарова Мария",
                "role": "Председатель СК ИА",
                "strength": "СЛУШАТЬ, СЛЫШАТЬ И ПОНИМАТЬ",
                "message": "Ребят, ну короче, вас там ждет что-то прикольное, нишевое и тд...",
                "missing": false,
                "photo": "assets/curator-zakharova_mariya.webp"
            }
        ]
    },
    {
        "team": 5,
        "curators": [
            {
                "slot": 1,
                "name": "Курбонмамадов Нируф",
                "role": "Председатель СК ВШУ",
                "strength": "ОБЪЕДИНЯТЬ ЛЮДЕЙ",
                "message": "Братва, будьте собой, мы дадим вам суперскую возможность раскрыться и двигать свои проекты на масштабный уровень.",
                "missing": false,
                "photo": "assets/curator-kurbonmamadov_niruf.webp"
            },
            {
                "slot": 2,
                "name": "Губа Василина",
                "role": ["и.о Председателя СК ЭФ", "Ответственный секретарь ОСО"],
                "strength": "УМЕЮ ПОДСТРАИВАТЬСЯ ПОД ЛЮБУЮ КОМАНДУ",
                "message": "Всё будет круто! Делайте, легенды!",
                "missing": false,
                "photo": "assets/curator-guba_vasilina.webp"
            }
        ]
    },
    {
        "team": 6,
        "curators": [
            {
                "slot": 1,
                "name": "Милёхин Андрей",
                "role": "Председатель СК ФГСН",
                "strength": "НАХОДЧИВОСТЬ И СПРАВЕДЛИВОСТЬ",
                "message": "Я люблю РУДН! Уверен, вы тоже полюбите.",
                "missing": false,
                "photo": "assets/curator-milyokhin_andrey.webp"
            },
            {
                "slot": 2,
                "name": "Салчак Айжен",
                "role": "Заместитель Председателя СК ЭФ",
                "strength": "ЗАВОЗ",
                "message": "Упасть, отжаться!",
                "missing": false,
                "photo": "assets/curator-salchak_aizhen.webp"
            }
        ]
    },
    {
        "team": 7,
        "curators": [
            {
                "slot": 1,
                "name": "Манукян Захар",
                "role": "Председатель СК ФФМиЕН",
                "strength": "ВАЙБИТЬ",
                "message": "Мне вас жаль / вы уже знаете",
                "missing": false,
                "photo": "assets/curator-manukyan_zakhar.webp"
            },
            {
                "slot": 2,
                "name": "Бурцева Лилия",
                "role": "Экс-председатель КМК СК ЮИ",
                "strength": "Заряжать позитивом и видеть лучшее",
                "message": "Студактив — это возможность найти себя и друзей. Действуйте!",
                "missing": false,
                "photo": "assets/curator-burtseva_liliya.webp"
            }
        ]
    },
    {
        "team": 8,
        "curators": [
            {
                "slot": 1,
                "name": "Сидорова Арина",
                "role": "Председатель КМК СК ФФМиЕН",
                "strength": "ДОБРЯК",
                "message": "Газ вместе ловить общий вайб!",
                "missing": false,
                "photo": "assets/curator-sidorova_arina.webp"
            },
            {
                "slot": 2,
                "name": "Василиади Полина",
                "role": ["Педседатель КРИС СК АТИ", "и.о Председателя КРИС ОСО"],
                "strength": "ДРУЖЕЛЮБИЕ",
                "message": "Каждый из вас маленькая звездочка, которая должна засиять. Здесь точно найдешь своë созвездие единомышленников!",
                "missing": false,
                "photo": "assets/curator-vasiliadi_polina.webp"
            }
        ]
    },
    {
        "team": 9,
        "curators": [
            {
                "slot": 1,
                "name": "Мбайндолум Фиделе",
                "role": "Председатель Совета студенческого городка",
                "strength": "УМЕНИЕ ОБЪЕДИНЯТЬ ЛЮДЕЙ",
                "message": "Не бойтесь задавать вопросы, пробовать новое и ошибаться. Главное — двигаться вперёд вместе и поддерживать друг друга.",
                "missing": false,
                "photo": "assets/curator-mbaindolum_fidele.webp"
            },
            {
                "slot": 2,
                "name": "Ефанова Дарья",
                "role": "Руководитель ВО “OHANA”",
                "strength": "ПОНИМАТЬ КАЖДОГО С ПОЛУСЛОВА",
                "message": "Будьте собой, а Студсовет будет рядом, чтобы поддержать!",
                "missing": false,
                "photo": "assets/curator-efanova_darya.webp"
            }
        ]
    },
    {
        "team": 10,
        "curators": [
            {
                "slot": 1,
                "name": "Деев Дмитрий",
                "role": "Председатель Студенческой Киберспортивной Организации «GOPLIT»",
                "strength": "Создаём будущее студенчества",
                "message": "Здесь можно найти друзей и единомышленников среди тех, кто горит общим делом. Тут ты точно не останешься в стороне)",
                "missing": false,
                "photo": "assets/curator-deev_dmitriy.webp"
            },
            {
                "slot": 2,
                "name": "Ушмадеева Анастасия",
                "role": "Главный редактор «В курсе media RUDN»",
                "strength": "СОЗДАВАТЬ ПЛЮС ВАЙБ",
                "message": "Не бойтесь раскрываться, ведь Студенческий совет — пространство для вашего же развития!",
                "missing": false,
                "photo": "assets/curator-ushmadeeva_anastasiya.webp"
            }
        ]
    },
    {
        "team": 11,
        "curators": [
            {
                "slot": 1,
                "name": "Пуняева Варвара",
                "role": "и.о Председателя КСО ОСО",
                "strength": "ЭМПАТИЯ",
                "message": "Делай как по кайфу!",
                "missing": false,
                "photo": "assets/curator-punyaeva_varvara.webp"
            },
            {
                "slot": 2,
                "name": "Гуреев Василий",
                "role": "Заместитель Председателся КСВО СК АТИ",
                "strength": "ГРОМКИЙ ГОЛОС",
                "message": "Кто громче кричит, тот и прав, но это не точно...",
                "missing": false,
                "photo": "assets/curator-gureev_vasiliy.webp"
            }
        ]
    },
    {
        "team": 12,
        "curators": [
            {
                "slot": 1,
                "name": "Чудакова Александра",
                "role": "Основатель студенческого  интернет-издания «В курсе media RUDN», наставник главного редактора издания",
                "strength": "ОБЪЕДИНЯТЬ ЛЮДЕЙ И ПРИКАЛЫВАТЬ ПРИКОЛЫ",
                "message": "Студсовет — это только начало вашего большого пути, поэтому сияйте и делайте то, что нравится!",
                "missing": false,
                "photo": "assets/curator-chudakova_aleksandra.webp"
            },
            {
                "slot": 2,
                "name": "Белашева Маргарита",
                "role": "Заместитель Председателя СК ИВЭБиТД",
                "strength": "Поддержание комфорта в коллективе. /Связь",
                "message": "Погнали фармить ауру вместе!",
                "missing": false,
                "photo": "assets/curator-belasheva_margarita.webp"
            }
        ]
    },
    {
        "team": 13,
        "curators": [
            {
                "slot": 1,
                "name": "Трущук Анастасия",
                "role": ["Руководитель Менторского центра «ProMentor RUDN» 2024-2025", "Руководитель PR-сектора «ProMentor RUDN» 2023-2024", "Заместитель Председателя КСО ОСО 2023-2024"],
                "strength": "ЧУВСТВОВАТЬ И НАПРАВЛЯТЬ",
                "message": "Цени студенчество, это самое уникальное время в жизни.",
                "missing": false,
                "photo": "assets/curator-trushchuk_anastasiya.webp"
            },
            {
                "slot": 2,
                "name": "Казанцева Екатерина",
                "role": "Ответственный секретарь СК ЭФ",
                "strength": "Заряжаю людей на работу",
                "message": "Чтобы не нарушать правила, придумайте их сами.",
                "missing": false,
                "photo": "assets/curator-kazantseva_ekaterina.webp"
            }
        ]
    },
    {
        "team": 14,
        "curators": [
            {
                "slot": 1,
                "name": "Фаткуллина Дарина",
                "role": "Заместитель председателя Женского комитета РУДН",
                "strength": "Слышать каждого",
                "message": "Совсем скоро ты поймёшь, как круто быть активистом. Осторожно, это затягивает",
                "missing": false,
                "photo": "assets/curator-fatkullina_darina.webp"
            },
            {
                "slot": 2,
                "name": "Данилкина Вася",
                "role": "Председатель КСО ИМЭБ",
                "strength": "треки мэдкида",
                "message": "wake up, вы ауры оппозиция",
                "missing": false,
                "photo": "assets/curator-danilkina_vasilisa.webp"
            }
        ]
    },
    {
        "team": 15,
        "curators": [
            {
                "slot": 1,
                "name": "Самороковский Даниил",
                "role": ["Заместитель председателя КМК СК ЭФ", "Студент года премии GoldenBrick"],
                "strength": "Верить в своих",
                "message": "Нам всем нужно завайбиться",
                "missing": false,
                "photo": "assets/curator-samorokovskiy_daniil.webp"
            },
            {
                "slot": 2,
                "name": "Наркулова Виктория",
                "role": "Председатель СК ИРЯ",
                "strength": "Быть заинтересованным в каждом",
                "message": "Ищите себя, но не теряйте по пути",
                "missing": false,
                "photo": "assets/curator-narkulova_viktoriya.webp"
            }
        ]
    },
    {
        "team": 16,
        "curators": [
            {
                "slot": 1,
                "name": "Ностаев Мерген",
                "role": ["Президент землячества Республики Калмыкия в РУДН", "Заместитель председателя КМК СК ВШУ"],
                "strength": "Найду язык с любым человеком",
                "message": "Фарми ауру. Студенчество ждёт тебя)",
                "missing": false,
                "photo": "assets/curator-nostaev_mergen.webp"
            },
            {
                "slot": 2,
                "name": "Ворокова Надежда",
                "role": ["Глава Инклюзивного отдела «Connect»", "Председатель СК ИА 2025-2026"],
                "strength": "Слышать каждого и находить подход",
                "message": "Не нужно быть идеальным — нужно быть настоящим. Остальному научимся по пути",
                "missing": false,
                "photo": "assets/curator-vorokova_nadezhda.webp"
            }
        ]
    },
    {
        "team": 17,
        "curators": [
            {
                "slot": 1,
                "name": "Мутаев Муртазаали",
                "role": "Руководитель отдела креаторов студенческого интернет-издания «В курсе media RUDN»",
                "strength": "Бородатый, дружелюбный",
                "message": "Студенчество - лучшее время для проб и ошибок, так что пробуйте и ошибайтесь",
                "missing": false,
                "photo": "assets/curator-mutaev_murtuz.webp"
            },
            {
                "slot": 2,
                "name": "Шмитько Юлия",
                "role": "Председатель СК ИЭ",
                "strength": "Быть опорой для студентов",
                "message": "Лучше сделать и пожалеть, чем пожалеть о том, что не сделал. Поэтому — действуйте!",
                "missing": false,
                "photo": "assets/curator-shmitko_yuliya.webp"
            }
        ]
    },
    {
        "team": 18,
        "curators": [
            {
                "slot": 1,
                "name": "Дорофеева Полина",
                "role": ["Председатель СК ИМЭБ 2024-2025", "Руководитель НСВО 2023-2024"],
                "strength": "Принятие",
                "message": "Коллеги, дерзайте! Не бойтесь высказываться, вам это пригодится в будущем",
                "missing": false,
                "photo": "assets/curator-dorofeeva_polina.webp"
            },
            {
                "slot": 2,
                "name": "Вирабян Нина",
                "role": ["Председатель СК ЮИ", "Председатель КСО СК ЮИ 2025-2026"],
                "strength": "могаю",
                "message": "Без повода не беспокойте, с поводом тоже",
                "missing": false,
                "photo": "assets/curator-virabyan_nina.webp"
            }
        ]
    },
    {
        "team": 19,
        "curators": [
            {
                "slot": 1,
                "name": "Кадухин Алексей",
                "role": "Заместитель председателя СК ИИЯ",
                "strength": "Всегда отстаиваю своих",
                "message": "Зачильтесь, это студактив, а не работа.",
                "missing": false,
                "photo": "assets/curator-kadukhin_aleksey.webp"
            },
            {
                "slot": 2,
                "name": "Бабешко Юлия",
                "role": "Заместитель по внутренней деятельности Проектного офиса ОСО",
                "strength": "Быстро много думаю",
                "message": "Вы реально всё можете, хотите верьте, хотите нет.",
                "missing": false,
                "photo": "assets/curator-babeshko_yuliya.webp"
            }
        ]
    },
    {
        "team": 20,
        "curators": [
            {
                "slot": 1,
                "name": "Клименко Алёна",
                "role": "Экс-председатель КСВО СК ФФМиЕН",
                "strength": "Объединять и поддерживать",
                "message": "Не бойся пробовать!",
                "missing": false,
                "photo": "assets/curator-klimenko_alena.webp"
            },
            {
                "slot": 2,
                "name": "Тарарышкина Ксения",
                "role": "Председатель ККО СК ИИЯ",
                "strength": "Желание помочь всем и вся",
                "message": "Не бойтесь показаться странным",
                "missing": false,
                "photo": "assets/curator-tararyshkina_kseniya.webp"
            }
        ]
    }
];


const curatorsGrid =
    document.getElementById(
        "curators-grid"
    );


const curatorModal =
    document.getElementById(
        "curator-modal"
    );


const curatorModalBackdrop =
    document.getElementById(
        "curator-modal-backdrop"
    );


const curatorModalClose =
    document.getElementById(
        "curator-modal-close"
    );


const curatorModalCode =
    document.getElementById(
        "curator-modal-code"
    );


const curatorModalPhoto =
    document.getElementById(
        "curator-modal-photo"
    );


const curatorModalPhotoWrap =
    document.getElementById(
        "curator-modal-photo-wrap"
    );


const curatorModalName =
    document.getElementById(
        "curator-modal-name"
    );


const curatorModalRole =
    document.getElementById(
        "curator-modal-role"
    );


const curatorModalStrength =
    document.getElementById(
        "curator-modal-strength"
    );


const curatorModalMessage =
    document.getElementById(
        "curator-modal-message"
    );



function padTeamNumber(
    number
) {

    return String(
        number
    ).padStart(
        2,
        "0"
    );

}



function curatorCardMarkup(
    curator,
    teamNumber
) {

    const teamCode =
        padTeamNumber(
            teamNumber
        );


    if (
        curator.missing
    ) {

        return `

            <article class="curator-card pending">

                <div class="curator-card-photo">

                    <div class="curator-placeholder">
                        PROFILE<br>
                        PENDING
                    </div>

                </div>

                <div class="curator-card-body">

                    <span class="curator-card-index">
                        TEAM ${teamCode} // CURATOR ${curator.slot}
                    </span>

                    <strong class="curator-card-name">
                        ${curator.name}
                    </strong>

                    <span class="curator-card-open">
                        DATA NOT RECEIVED
                    </span>

                </div>

            </article>

        `;

    }


    return `

        <button
            class="curator-card"
            type="button"
            data-team="${teamNumber}"
            data-slot="${curator.slot}"
        >

            <div class="curator-card-photo">

                <img
                    src="${curator.photo}"
                    alt="${curator.name}"
                    loading="lazy"
                    decoding="async"
                >

            </div>

            <div class="curator-card-body">

                <span class="curator-card-index">
                    TEAM ${teamCode} // CURATOR ${curator.slot}
                </span>

                <strong class="curator-card-name">
                    ${curator.name}
                </strong>

                <span class="curator-card-open">
                    ОТКРЫТЬ ПРОФИЛЬ

                    <svg
                        class="curator-card-arrow"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                    >
                        <path
                            d="M4 12L12 4M6 4H12V10"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.35"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>

            </div>

        </button>

    `;

}



function renderCurators() {

    if (
        !curatorsGrid
    ) {
        return;
    }


    curatorsGrid.innerHTML =
        curatorTeams
            .map(
                (team) => {

                    const teamCode =
                        padTeamNumber(
                            team.team
                        );


                    const members =
                        team.curators
                            .map(
                                (curator) =>
                                    curatorCardMarkup(
                                        curator,
                                        team.team
                                    )
                            )
                            .join(
                                ""
                            );


                    return `

                        <article class="curator-pair">

                            <div class="curator-pair-head">

                                <span>
                                    TEAM // ${teamCode}
                                </span>

                                <small>
                                    CURATOR PAIR
                                </small>

                            </div>

                            <div class="curator-pair-members">
                                ${members}
                            </div>

                        </article>

                    `;

                }
            )
            .join(
                ""
            );


    curatorsGrid
        .querySelectorAll(
            ".curator-card[data-team]"
        )
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const teamNumber =
                            Number(
                                button.dataset.team
                            );


                        const slot =
                            Number(
                                button.dataset.slot
                            );


                        const team =
                            curatorTeams.find(
                                (item) =>
                                    item.team ===
                                    teamNumber
                            );


                        const curator =
                            team
                                ?.curators
                                .find(
                                    (item) =>
                                        item.slot ===
                                        slot
                                );


                        if (
                            curator
                            &&
                            !curator.missing
                        ) {

                            openCuratorProfile(
                                curator,
                                teamNumber
                            );

                        }

                    }
                );

            }
        );

}



function openCuratorProfile(
    curator,
    teamNumber
) {

    if (
        !curatorModal
    ) {
        return;
    }


    curatorModalCode.textContent =
        `TEAM // ${padTeamNumber(teamNumber)}  ·  CURATOR // ${curator.slot}`;


    curatorModalName.textContent =
        curator.name;


    const curatorRoles =
        Array.isArray(curator.role)
            ? curator.role
            : curator.role
                ? [curator.role]
                : [];


    if (curatorRoles.length) {

        curatorModalRole.innerHTML = `
            <ul class="curator-profile-roles">
                ${curatorRoles
                    .map(
                        (role) => `
                            <li>${role}</li>
                        `
                    )
                    .join("")}
            </ul>
        `;

    }
    else {

        curatorModalRole.textContent =
            "Должность не указана";

    }


    curatorModalStrength.textContent =
        curator.strength
            ? curator.strength.trim().toUpperCase()
            : "—";


    curatorModalMessage.textContent =
        curator.message ||
        "—";


    if (
        curator.photo
    ) {

        curatorModalPhoto.src =
            curator.photo;


        curatorModalPhoto.alt =
            curator.name;


        curatorModalPhotoWrap.style.display =
            "flex";

    }
    else {

        curatorModalPhoto.removeAttribute(
            "src"
        );


        curatorModalPhotoWrap.style.display =
            "none";

    }


    curatorModal.classList.add(
        "open"
    );


    curatorModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "curator-modal-open"
    );

}



function closeCuratorProfile() {

    if (
        !curatorModal
    ) {
        return;
    }


    curatorModal.classList.remove(
        "open"
    );


    curatorModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "curator-modal-open"
    );

}



if (
    curatorModalClose
) {

    curatorModalClose.addEventListener(
        "click",
        closeCuratorProfile
    );

}



if (
    curatorModalBackdrop
) {

    curatorModalBackdrop.addEventListener(
        "click",
        closeCuratorProfile
    );

}



document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
            &&
            curatorModal?.classList.contains(
                "open"
            )
        ) {

            closeCuratorProfile();

        }

    }
);



renderCurators();



/* ================================================== */
/* CHECKLIST */
/* ================================================== */

const checklistStorageKey =
    "aura-checklist-progress-v1";


const checklistItems =
    Array.from(
        document.querySelectorAll(
            ".checklist-item"
        )
    );


const checklistProgressNumber =
    document.getElementById(
        "checklist-progress-number"
    );


const checklistModuleProgress =
    document.getElementById(
        "checklist-module-progress"
    );


const checklistProgressBar =
    document.getElementById(
        "checklist-progress-bar"
    );


const checklistComplete =
    document.getElementById(
        "checklist-complete"
    );


let checklistState = {};



try {

    const storedChecklist =
        localStorage.getItem(
            checklistStorageKey
        );


    if (storedChecklist) {

        checklistState =
            JSON.parse(
                storedChecklist
            );

    }

}
catch (error) {

    checklistState = {};

}



function saveChecklist() {

    try {

        localStorage.setItem(
            checklistStorageKey,
            JSON.stringify(
                checklistState
            )
        );

    }
    catch (error) {

        console.log(
            "AURA.SYSTEM / CHECKLIST SAVE ERROR"
        );

    }

}



function updateChecklist() {

    let completedCount = 0;


    checklistItems.forEach(
        (item) => {

            const checkId =
                item.dataset.checkId;


            const completed =
                Boolean(
                    checklistState[
                        checkId
                    ]
                );


            item.classList.toggle(
                "completed",
                completed
            );


            item.setAttribute(
                "aria-pressed",
                completed
                    ? "true"
                    : "false"
            );


            if (completed) {
                completedCount++;
            }

        }
    );


    const totalCount =
        checklistItems.length;


    const progressText =
        `${completedCount} / ${totalCount}`;


    if (checklistProgressNumber) {

        checklistProgressNumber.textContent =
            progressText;

    }


    if (checklistModuleProgress) {

        checklistModuleProgress.textContent =
            progressText;

    }


    if (checklistProgressBar) {

        const percentage =
            totalCount === 0
                ? 0
                : (
                    completedCount
                    /
                    totalCount
                )
                *
                100;


        checklistProgressBar.style.width =
            `${percentage}%`;

    }


    if (checklistComplete) {

        checklistComplete.classList.toggle(
            "visible",
            (
                totalCount > 0
                &&
                completedCount === totalCount
            )
        );

    }

}



checklistItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            () => {

                const checkId =
                    item.dataset.checkId;


                checklistState[
                    checkId
                ] =
                    !checklistState[
                        checkId
                    ];


                saveChecklist();

                updateChecklist();

            }
        );

    }
);



updateChecklist();



/* ================================================== */
/* AURA BLOCKS */
/* ================================================== */

const blocksBoardElement =
    document.getElementById("blocks-board");

const blocksTrayElement =
    document.getElementById("blocks-tray");

const blocksParticlesElement =
    document.getElementById("blocks-particles");

const gameScoreElement =
    document.getElementById("game-score");

const gameBestElement =
    document.getElementById("game-best");

const gameComboElement =
    document.getElementById("game-combo");

const blocksStatusElement =
    document.getElementById("blocks-status");

const blocksToastElement =
    document.getElementById("blocks-toast");

const gameOverlay =
    document.getElementById("game-overlay");

const gameOverlayTitle =
    document.getElementById("game-overlay-title");

const gameOverlayText =
    document.getElementById("game-overlay-text");

const gameStartButton =
    document.getElementById("game-start");

const blocksResetButton =
    document.getElementById("blocks-reset");


const BLOCKS_SIZE = 8;
const BLOCKS_BEST_KEY = "aura-blocks-best-v1";
const BLOCK_CLEAR_MS = 430;

const BLOCK_COLORS = [
    // AURA palette: colors are deliberately different enough to read at a glance,
    // but all stay soft / slightly muted so the field does not turn into a rainbow.
    { id: "violet", value: "#9368ff" }, // base AURA violet
    { id: "blue", value: "#6f96e8" },   // pastel system blue
    { id: "cyan", value: "#71c6c4" },   // soft cyan
    { id: "gold", value: "#d8c472" },   // muted pastel yellow
    { id: "lilac", value: "#ba8de2" },  // warm lilac
    { id: "ice", value: "#d9dde8" },    // cold white
    { id: "indigo", value: "#6670c8" }  // soft indigo
];

let blocksBoard = [];
let blocksPieces = [];
let blocksScore = 0;
let blocksBest = 0;
let blocksCombo = 1;
let blocksRunning = false;
let blocksAnimating = false;
let blocksToastTimer = null;
let blocksDrag = null;


const BLOCK_SHAPES = [
    [[0,0]],
    [[0,0],[0,1]],
    [[0,0],[1,0]],
    [[0,0],[0,1],[0,2]],
    [[0,0],[1,0],[2,0]],
    [[0,0],[0,1],[0,2],[0,3]],
    [[0,0],[1,0],[2,0],[3,0]],
    [[0,0],[0,1],[1,0],[1,1]],
    [[0,0],[1,0],[1,1]],
    [[0,0],[0,1],[1,1]],
    [[0,0],[1,0],[2,0],[2,1]],
    [[0,1],[1,1],[2,0],[2,1]],
    [[0,0],[0,1],[0,2],[1,1]],
    [[0,1],[1,0],[1,1],[1,2]],
    [[0,0],[1,0],[2,0],[1,1]],
    [[0,0],[0,1],[1,1],[1,2]],
    [[0,1],[0,2],[1,0],[1,1]],
    [[0,0],[0,1],[0,2],[1,0],[2,0]],
    [[0,0],[0,1],[0,2],[1,2],[2,2]],
    [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]],
    [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]]
];


function blocksHaptic(type = "light") {
    try {
        const feedback =
            window.Telegram &&
            window.Telegram.WebApp &&
            window.Telegram.WebApp.HapticFeedback;

        if (!feedback) return;

        if (type === "success") {
            feedback.notificationOccurred("success");
        }
        else if (type === "error") {
            feedback.notificationOccurred("error");
        }
        else {
            feedback.impactOccurred(type);
        }
    }
    catch (error) {
        /* Haptics are optional. */
    }
}


function enterAuraGameMode() {
    document.body.classList.add("aura-game-mode");

    try {
        const tg = window.Telegram && window.Telegram.WebApp;
        if (!tg) return;

        if (typeof tg.ready === "function") tg.ready();
        if (typeof tg.expand === "function") tg.expand();
        if (typeof tg.requestFullscreen === "function") {
            try {
                tg.requestFullscreen();
            }
            catch (fullscreenError) {
                /* CSS fullscreen remains active as a fallback. */
            }
        }
    }
    catch (error) {
        /* Browser fallback is intentional. */
    }
}


function exitAuraGameMode() {
    cancelBlocksDrag();
    document.body.classList.remove("aura-game-mode");

    try {
        const tg = window.Telegram && window.Telegram.WebApp;
        if (tg && typeof tg.exitFullscreen === "function") {
            try {
                tg.exitFullscreen();
            }
            catch (fullscreenError) {}
        }
    }
    catch (error) {}
}


function readBlocksBest() {
    try {
        return Number(localStorage.getItem(BLOCKS_BEST_KEY)) || 0;
    }
    catch (error) {
        return 0;
    }
}


function saveBlocksBest(value) {
    try {
        localStorage.setItem(BLOCKS_BEST_KEY, String(value));
    }
    catch (error) {}

    try {
        const cloud =
            window.Telegram &&
            window.Telegram.WebApp &&
            window.Telegram.WebApp.CloudStorage;

        if (cloud && typeof cloud.setItem === "function") {
            cloud.setItem(BLOCKS_BEST_KEY, String(value), () => {});
        }
    }
    catch (error) {}
}


function tryLoadCloudBest() {
    try {
        const cloud =
            window.Telegram &&
            window.Telegram.WebApp &&
            window.Telegram.WebApp.CloudStorage;

        if (!cloud || typeof cloud.getItem !== "function") return;

        cloud.getItem(BLOCKS_BEST_KEY, (error, value) => {
            if (error) return;

            const cloudBest = Number(value) || 0;

            if (cloudBest > blocksBest) {
                blocksBest = cloudBest;
                updateBlocksHud();
                try {
                    localStorage.setItem(BLOCKS_BEST_KEY, String(cloudBest));
                }
                catch (storageError) {}
            }
        });
    }
    catch (error) {}
}


function formatBlocksScore(value) {
    return String(Math.max(0, Math.floor(value))).padStart(4, "0");
}


function emptyBlocksBoard() {
    return Array.from(
        { length: BLOCKS_SIZE },
        () => Array(BLOCKS_SIZE).fill(null)
    );
}


function normalizeShape(shape) {
    const minRow = Math.min(...shape.map(([row]) => row));
    const minCol = Math.min(...shape.map(([, col]) => col));

    return shape.map(([row, col]) => [
        row - minRow,
        col - minCol
    ]);
}


function shapeDimensions(shape) {
    const rows = Math.max(...shape.map(([row]) => row)) + 1;
    const cols = Math.max(...shape.map(([, col]) => col)) + 1;
    return { rows, cols };
}


function randomShape() {
    const source =
        BLOCK_SHAPES[
            Math.floor(Math.random() * BLOCK_SHAPES.length)
        ];

    return normalizeShape(source.map(([row, col]) => [row, col]));
}


function randomBlockColor() {
    return BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
}


function newPiece(index) {
    return {
        id: `${Date.now()}-${index}-${Math.random()}`,
        shape: randomShape(),
        color: randomBlockColor(),
        used: false
    };
}


function generateBlocksPieces() {
    // Give the three available pieces different colors whenever possible.
    // This makes the palette visible without changing the game mechanics.
    const colors = [...BLOCK_COLORS];

    for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    blocksPieces = [0, 1, 2].map((index) => {
        const piece = newPiece(index);
        piece.color = colors[index % colors.length];
        return piece;
    });

    renderBlocksTray();
}


function updateBlocksHud() {
    if (gameScoreElement) {
        gameScoreElement.textContent = formatBlocksScore(blocksScore);
    }

    if (gameBestElement) {
        gameBestElement.textContent = formatBlocksScore(blocksBest);
    }

    if (gameComboElement) {
        gameComboElement.textContent = `x${blocksCombo}`;
    }
}


function showBlocksToast(message, kind = "normal") {
    if (!blocksToastElement) return;

    blocksToastElement.textContent = message;
    blocksToastElement.dataset.kind = kind;
    blocksToastElement.classList.add("visible");

    clearTimeout(blocksToastTimer);

    blocksToastTimer = setTimeout(() => {
        blocksToastElement.classList.remove("visible");
    }, 1050);
}


function getBlockColorValue(colorId) {
    const match = BLOCK_COLORS.find((item) => item.id === colorId);
    return match ? match.value : BLOCK_COLORS[0].value;
}


function renderBlocksBoard() {
    if (!blocksBoardElement) return;

    blocksBoardElement.innerHTML = "";

    for (let row = 0; row < BLOCKS_SIZE; row++) {
        for (let col = 0; col < BLOCKS_SIZE; col++) {
            const cell = document.createElement("div");
            cell.className = "blocks-cell";
            cell.dataset.row = String(row);
            cell.dataset.col = String(col);
            cell.setAttribute("role", "gridcell");
            cell.setAttribute("aria-label", `Строка ${row + 1}, столбец ${col + 1}`);

            const value = blocksBoard[row][col];

            if (value) {
                cell.classList.add("filled");
                cell.dataset.color = value.color;
                cell.style.setProperty("--block-color", getBlockColorValue(value.color));
            }

            blocksBoardElement.appendChild(cell);
        }
    }
}


function clearBlocksPreview() {
    if (!blocksBoardElement) return;

    blocksBoardElement
        .querySelectorAll(".preview-valid, .preview-invalid")
        .forEach((cell) => {
            cell.classList.remove("preview-valid", "preview-invalid");
            cell.style.removeProperty("--preview-color");
        });
}


function previewBlocksPlacement(piece, row, col) {
    clearBlocksPreview();

    if (!blocksRunning || blocksAnimating || !piece) return false;

    const valid = canPlaceBlocksShape(piece.shape, row, col);

    piece.shape.forEach(([shapeRow, shapeCol]) => {
        const targetRow = row + shapeRow;
        const targetCol = col + shapeCol;

        if (
            targetRow < 0 ||
            targetRow >= BLOCKS_SIZE ||
            targetCol < 0 ||
            targetCol >= BLOCKS_SIZE
        ) {
            return;
        }

        const selector =
            `.blocks-cell[data-row="${targetRow}"][data-col="${targetCol}"]`;

        const cell = blocksBoardElement.querySelector(selector);

        if (cell) {
            cell.classList.add(valid ? "preview-valid" : "preview-invalid");
            cell.style.setProperty("--preview-color", piece.color.value);
        }
    });

    return valid;
}


function buildPiecePreview(piece, className = "blocks-piece-grid") {
    const { rows, cols } = shapeDimensions(piece.shape);
    const preview = document.createElement("span");
    preview.className = className;
    preview.style.setProperty("--piece-rows", String(rows));
    preview.style.setProperty("--piece-cols", String(cols));
    preview.style.setProperty("--piece-color", piece.color.value);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const dot = document.createElement("i");
            const active = piece.shape.some(
                ([shapeRow, shapeCol]) => shapeRow === row && shapeCol === col
            );

            if (active) dot.classList.add("active");
            preview.appendChild(dot);
        }
    }

    return preview;
}


function renderBlocksTray() {
    if (!blocksTrayElement) return;

    blocksTrayElement.innerHTML = "";

    blocksPieces.forEach((piece, pieceIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "blocks-piece";
        button.dataset.pieceIndex = String(pieceIndex);
        button.setAttribute("aria-label", "Перетащить фигуру на игровое поле");

        if (piece.used) {
            button.classList.add("used");
            button.disabled = true;
        }

        button.appendChild(buildPiecePreview(piece));

        button.addEventListener("pointerdown", (event) => {
            startBlocksDrag(event, piece, button);
        });

        blocksTrayElement.appendChild(button);
    });
}


function canPlaceBlocksShape(shape, startRow, startCol) {
    return shape.every(([row, col]) => {
        const targetRow = startRow + row;
        const targetCol = startCol + col;

        return (
            targetRow >= 0 &&
            targetRow < BLOCKS_SIZE &&
            targetCol >= 0 &&
            targetCol < BLOCKS_SIZE &&
            !blocksBoard[targetRow][targetCol]
        );
    });
}


function canShapeFitAnywhere(shape) {
    for (let row = 0; row < BLOCKS_SIZE; row++) {
        for (let col = 0; col < BLOCKS_SIZE; col++) {
            if (canPlaceBlocksShape(shape, row, col)) return true;
        }
    }

    return false;
}


function getBoardMetrics() {
    if (!blocksBoardElement) return null;

    const cells = blocksBoardElement.querySelectorAll(".blocks-cell");
    if (cells.length < 2) return null;

    const first = cells[0].getBoundingClientRect();
    const second = cells[1].getBoundingClientRect();
    const ninth = cells[8] ? cells[8].getBoundingClientRect() : null;

    return {
        first,
        cellWidth: first.width,
        cellHeight: first.height,
        stepX: second.left - first.left,
        stepY: ninth ? ninth.top - first.top : first.height,
        boardRect: blocksBoardElement.getBoundingClientRect()
    };
}


function createBlocksDragGhost(piece, pointerType) {
    const metrics = getBoardMetrics();
    if (!metrics) return null;

    const { rows, cols } = shapeDimensions(piece.shape);
    const ghost = document.createElement("div");
    ghost.className = "blocks-drag-ghost";
    ghost.style.setProperty("--drag-cell-w", `${metrics.cellWidth}px`);
    ghost.style.setProperty("--drag-cell-h", `${metrics.cellHeight}px`);
    ghost.style.setProperty("--drag-gap-x", `${Math.max(0, metrics.stepX - metrics.cellWidth)}px`);
    ghost.style.setProperty("--drag-gap-y", `${Math.max(0, metrics.stepY - metrics.cellHeight)}px`);
    ghost.style.setProperty("--piece-rows", String(rows));
    ghost.style.setProperty("--piece-cols", String(cols));
    ghost.style.setProperty("--piece-color", piece.color.value);
    ghost.dataset.pointerType = pointerType || "mouse";

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const dot = document.createElement("i");
            const active = piece.shape.some(
                ([shapeRow, shapeCol]) => shapeRow === row && shapeCol === col
            );
            if (active) dot.classList.add("active");
            ghost.appendChild(dot);
        }
    }

    document.body.appendChild(ghost);
    return ghost;
}


function positionBlocksDragGhost(clientX, clientY) {
    if (!blocksDrag || !blocksDrag.ghost) return;

    const ghost = blocksDrag.ghost;
    const width = ghost.offsetWidth;
    const height = ghost.offsetHeight;
    const isTouch = blocksDrag.pointerType === "touch" || blocksDrag.pointerType === "pen";

    const left = clientX - width / 2;
    const top = isTouch
        ? clientY - height - 54
        : clientY - height / 2;

    ghost.style.transform = `translate3d(${left}px, ${top}px, 0)`;

    const metrics = getBoardMetrics();
    if (!metrics) return;

    const startCol = Math.round((left - metrics.first.left) / metrics.stepX);
    const startRow = Math.round((top - metrics.first.top) / metrics.stepY);

    const ghostRight = left + width;
    const ghostBottom = top + height;
    const nearBoard = !(
        ghostRight < metrics.boardRect.left - metrics.stepX ||
        left > metrics.boardRect.right + metrics.stepX ||
        ghostBottom < metrics.boardRect.top - metrics.stepY ||
        top > metrics.boardRect.bottom + metrics.stepY
    );

    blocksDrag.row = startRow;
    blocksDrag.col = startCol;
    blocksDrag.overBoard = nearBoard;
    blocksDrag.valid = nearBoard && previewBlocksPlacement(blocksDrag.piece, startRow, startCol);

    ghost.classList.toggle("valid", blocksDrag.valid);
    ghost.classList.toggle("invalid", nearBoard && !blocksDrag.valid);
}


function startBlocksDrag(event, piece, sourceButton) {
    if (!blocksRunning || blocksAnimating || piece.used) return;
    if (event.button !== undefined && event.button !== 0) return;

    event.preventDefault();
    cancelBlocksDrag();

    const ghost = createBlocksDragGhost(piece, event.pointerType);
    if (!ghost) return;

    blocksDrag = {
        pointerId: event.pointerId,
        pointerType: event.pointerType || "mouse",
        piece,
        sourceButton,
        ghost,
        row: null,
        col: null,
        valid: false,
        overBoard: false
    };

    sourceButton.classList.add("dragging");
    if (blocksStatusElement) blocksStatusElement.textContent = "ПЕРЕМЕЩЕНИЕ";

    positionBlocksDragGhost(event.clientX, event.clientY);

    window.addEventListener("pointermove", handleBlocksDragMove, { passive: false });
    window.addEventListener("pointerup", handleBlocksDragEnd, { passive: false });
    window.addEventListener("pointercancel", handleBlocksDragCancel, { passive: false });

    blocksHaptic("light");
}


function handleBlocksDragMove(event) {
    if (!blocksDrag || event.pointerId !== blocksDrag.pointerId) return;
    event.preventDefault();
    positionBlocksDragGhost(event.clientX, event.clientY);
}


function removeBlocksDragListeners() {
    window.removeEventListener("pointermove", handleBlocksDragMove);
    window.removeEventListener("pointerup", handleBlocksDragEnd);
    window.removeEventListener("pointercancel", handleBlocksDragCancel);
}


function cancelBlocksDrag() {
    removeBlocksDragListeners();
    clearBlocksPreview();

    if (!blocksDrag) return;

    if (blocksDrag.sourceButton) {
        blocksDrag.sourceButton.classList.remove("dragging");
    }

    if (blocksDrag.ghost && blocksDrag.ghost.parentNode) {
        blocksDrag.ghost.parentNode.removeChild(blocksDrag.ghost);
    }

    blocksDrag = null;
}


async function handleBlocksDragEnd(event) {
    if (!blocksDrag || event.pointerId !== blocksDrag.pointerId) return;
    event.preventDefault();

    const drag = blocksDrag;
    const canDrop = drag.valid && drag.overBoard;
    const row = drag.row;
    const col = drag.col;
    const piece = drag.piece;
    const wasOverBoard = drag.overBoard;

    cancelBlocksDrag();

    if (canDrop) {
        await commitBlocksPiece(piece, row, col);
    }
    else if (wasOverBoard) {
        showBlocksToast("ЗДЕСЬ НЕ ПОМЕЩАЕТСЯ", "error");
        blocksHaptic("error");
    }
    else if (blocksStatusElement) {
        blocksStatusElement.textContent = "ONLINE";
    }
}


function handleBlocksDragCancel(event) {
    if (!blocksDrag || event.pointerId !== blocksDrag.pointerId) return;
    cancelBlocksDrag();
    if (blocksStatusElement) blocksStatusElement.textContent = "ONLINE";
}


function findCompletedBlocksLines() {
    const rows = [];
    const cols = [];

    for (let row = 0; row < BLOCKS_SIZE; row++) {
        if (blocksBoard[row].every(Boolean)) rows.push(row);
    }

    for (let col = 0; col < BLOCKS_SIZE; col++) {
        let complete = true;

        for (let row = 0; row < BLOCKS_SIZE; row++) {
            if (!blocksBoard[row][col]) {
                complete = false;
                break;
            }
        }

        if (complete) cols.push(col);
    }

    return { rows, cols };
}


function getClearingCells(rows, cols) {
    if (!blocksBoardElement) return [];

    const keys = new Set();
    rows.forEach((row) => {
        for (let col = 0; col < BLOCKS_SIZE; col++) keys.add(`${row}:${col}`);
    });
    cols.forEach((col) => {
        for (let row = 0; row < BLOCKS_SIZE; row++) keys.add(`${row}:${col}`);
    });

    return [...keys]
        .map((key) => {
            const [row, col] = key.split(":");
            return blocksBoardElement.querySelector(
                `.blocks-cell[data-row="${row}"][data-col="${col}"]`
            );
        })
        .filter(Boolean);
}


function emitBlocksParticles(cells) {
    if (!blocksParticlesElement || !cells.length) return;

    const layerRect = blocksParticlesElement.getBoundingClientRect();

    cells.forEach((cell, cellIndex) => {
        const rect = cell.getBoundingClientRect();
        const color = cell.style.getPropertyValue("--block-color") || "#9368ff";
        const centerX = rect.left - layerRect.left + rect.width / 2;
        const centerY = rect.top - layerRect.top + rect.height / 2;

        for (let i = 0; i < 3; i++) {
            const particle = document.createElement("i");
            particle.className = "blocks-particle";
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.setProperty("--particle-color", color);

            const angle = ((cellIndex * 47 + i * 119) % 360) * Math.PI / 180;
            const distance = 18 + ((cellIndex + i * 7) % 24);
            particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
            particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
            particle.style.setProperty("--delay", `${(i * 18) + (cellIndex % 4) * 10}ms`);

            blocksParticlesElement.appendChild(particle);
            setTimeout(() => particle.remove(), 650);
        }
    });
}


function waitBlocks(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function animateAndClearBlocksLines(rows, cols) {
    const cells = getClearingCells(rows, cols);
    cells.forEach((cell, index) => {
        cell.classList.add("line-clearing");
        cell.style.setProperty("--clear-delay", `${(index % 8) * 14}ms`);
    });

    emitBlocksParticles(cells);
    await waitBlocks(BLOCK_CLEAR_MS);

    rows.forEach((row) => {
        for (let col = 0; col < BLOCKS_SIZE; col++) {
            blocksBoard[row][col] = null;
        }
    });

    cols.forEach((col) => {
        for (let row = 0; row < BLOCKS_SIZE; row++) {
            blocksBoard[row][col] = null;
        }
    });
}


async function commitBlocksPiece(piece, row, col) {
    if (!blocksRunning || blocksAnimating || piece.used) return;

    if (!canPlaceBlocksShape(piece.shape, row, col)) {
        showBlocksToast("ЗДЕСЬ НЕ ПОМЕЩАЕТСЯ", "error");
        blocksHaptic("error");
        return;
    }

    piece.shape.forEach(([shapeRow, shapeCol]) => {
        blocksBoard[row + shapeRow][col + shapeCol] = {
            color: piece.color.id
        };
    });

    piece.used = true;
    blocksScore += piece.shape.length * 10;

    renderBlocksBoard();
    renderBlocksTray();
    updateBlocksHud();
    blocksHaptic("light");

    const completed = findCompletedBlocksLines();
    const cleared = completed.rows.length + completed.cols.length;

    if (cleared > 0) {
        blocksAnimating = true;
        if (blocksStatusElement) blocksStatusElement.textContent = "SYNC";

        const bonus = cleared * 100 * blocksCombo;
        blocksScore += bonus;

        const label =
            cleared > 1
                ? `SYNC x${cleared} // +${bonus}`
                : `LINE SYNC // +${bonus}`;

        showBlocksToast(label, "success");
        blocksHaptic("success");
        updateBlocksHud();

        await animateAndClearBlocksLines(completed.rows, completed.cols);
        blocksCombo += 1;
        blocksAnimating = false;
        renderBlocksBoard();
    }
    else {
        blocksCombo = 1;
    }

    if (blocksScore > blocksBest) {
        blocksBest = blocksScore;
        saveBlocksBest(blocksBest);
    }

    if (blocksPieces.every((item) => item.used)) {
        generateBlocksPieces();
    }
    else {
        renderBlocksTray();
    }

    updateBlocksHud();

    if (blocksStatusElement) {
        blocksStatusElement.textContent = "ONLINE";
    }

    checkBlocksGameOver();
}


function checkBlocksGameOver() {
    if (!blocksRunning || blocksAnimating) return;

    const remaining = blocksPieces.filter((piece) => !piece.used);
    const anyFits = remaining.some((piece) => canShapeFitAnywhere(piece.shape));

    if (!anyFits) finishAuraBlocks();
}


function showBlocksOverlay(title, text, buttonText) {
    if (gameOverlayTitle) gameOverlayTitle.textContent = title;
    if (gameOverlayText) gameOverlayText.textContent = text;
    if (gameStartButton) gameStartButton.textContent = buttonText;
    if (gameOverlay) gameOverlay.classList.remove("hidden");
}


function hideBlocksOverlay() {
    if (gameOverlay) gameOverlay.classList.add("hidden");
}


function startAuraBlocks() {
    cancelBlocksDrag();
    blocksBoard = emptyBlocksBoard();
    blocksScore = 0;
    blocksCombo = 1;
    blocksRunning = true;
    blocksAnimating = false;

    generateBlocksPieces();
    renderBlocksBoard();
    updateBlocksHud();
    hideBlocksOverlay();

    if (blocksStatusElement) {
        blocksStatusElement.textContent = "ONLINE";
    }

    showBlocksToast("GRID CONNECTED", "success");
    blocksHaptic("success");
}


function finishAuraBlocks() {
    cancelBlocksDrag();
    blocksRunning = false;

    const previousBest = blocksBest;

    if (blocksScore > blocksBest) {
        blocksBest = blocksScore;
        saveBlocksBest(blocksBest);
    }

    updateBlocksHud();

    showBlocksOverlay(
        blocksScore > previousBest && blocksScore > 0
            ? "NEW HIGH SCORE"
            : "GRID OVERLOAD",
        `СЧЁТ ${formatBlocksScore(blocksScore)} // РЕКОРД ${formatBlocksScore(blocksBest)}`,
        "ИГРАТЬ ЕЩЁ"
    );

    if (blocksStatusElement) {
        blocksStatusElement.textContent = "OVERLOAD";
    }

    blocksHaptic("error");
}


/* Compatibility with the existing navigation code. */
function resizeGameCanvas() {
    renderBlocksBoard();
    renderBlocksTray();
    updateBlocksHud();
}


function stopGame() {
    cancelBlocksDrag();
}


if (gameStartButton) {
    gameStartButton.addEventListener("click", startAuraBlocks);
}


if (blocksResetButton) {
    blocksResetButton.addEventListener("click", () => {
        cancelBlocksDrag();
        showBlocksOverlay(
            "НОВАЯ ИГРА?",
            "Текущий результат будет сброшен. Рекорд сохранится.",
            "НАЧАТЬ ЗАНОВО"
        );
        blocksRunning = false;
    });
}


blocksBest = readBlocksBest();
blocksBoard = emptyBlocksBoard();
generateBlocksPieces();
renderBlocksBoard();
updateBlocksHud();
tryLoadCloudBest();


console.log("AURA.SYSTEM / AURI ONLINE");
console.log("AURA.SYSTEM / CHECKLIST READY");
console.log("AURA.SYSTEM / AURA BLOCKS READY");

