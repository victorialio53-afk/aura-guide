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
                "role": "Председатель СК ИМЭБ Председатель КМК СК ИМЭБ 2025-2026",
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
                "role": "и.о Председателя СК ЭФ Ответственный секретарь ОСО",
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
                "role": "Педседатель КРИС СК АТИ и.о Председателя КРИС ОСО",
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
                "role": "",
                "strength": "",
                "message": "",
                "missing": true,
                "photo": null
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
                "role": "Руководитель Менторского центра «ProMentor RUDN» 2024-2025 Руководитель PR-сектора «ProMentor RUDN» 2023-2024 Заместитель Председателя КСО ОСО 2023-2024",
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
                "role": "Заместитель председателя КМК СК ЭФ Студент года премии GoldenBrick",
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
                "role": "Президент землячества Республики Калмыкия в РУДН Заместитель председателя КМК СК ВШУ",
                "strength": "Найду язык с любым человеком",
                "message": "Фарми ауру. Студенчество ждёт тебя)",
                "missing": false,
                "photo": "assets/curator-nostaev_mergen.webp"
            },
            {
                "slot": 2,
                "name": "Ворокова Надежда",
                "role": "Глава Инклюзивного отдела «Connect» Председатель СК ИА 2025-2026",
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
                "role": "Председатель СК ИМЭБ 2024-2025 Руководитель НСВО 2023-2024",
                "strength": "Принятие",
                "message": "Коллеги, дерзайте! Не бойтесь высказываться, вам это пригодится в будущем",
                "missing": false,
                "photo": "assets/curator-dorofeeva_polina.webp"
            },
            {
                "slot": 2,
                "name": "Вирабян Нина",
                "role": "Председатель СК ЮИ Председатель КСО СК ЮИ 2025-2026",
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
                    OPEN PROFILE
                    <b>↗</b>
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


    curatorModalRole.textContent =
        curator.role ||
        "Должность не указана";


    curatorModalStrength.textContent =
        curator.strength ||
        "—";


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
/* AURI SIGNAL RUN V2 */
/* ================================================== */

const gameCanvas =
    document.getElementById(
        "game-canvas"
    );


const gameStage =
    document.querySelector(
        ".game-stage-wrap"
    );


const gameHud =
    document.querySelector(
        ".game-hud"
    );


const gameScoreElement =
    document.getElementById(
        "game-score"
    );


const gameBestElement =
    document.getElementById(
        "game-best"
    );


const gameOverlay =
    document.getElementById(
        "game-overlay"
    );


const gameOverlayTitle =
    document.getElementById(
        "game-overlay-title"
    );


const gameOverlayText =
    document.getElementById(
        "game-overlay-text"
    );


const gameStartButton =
    document.getElementById(
        "game-start"
    );


const gameLeftButton =
    document.getElementById(
        "game-left"
    );


const gameRightButton =
    document.getElementById(
        "game-right"
    );


const gameContext =
    gameCanvas
        ? gameCanvas.getContext("2d")
        : null;



/* ================================================== */
/* EXTRA HUD */
/* ================================================== */

let comboElement = null;
let fragmentsElement = null;
let shieldElement = null;
let gameEventToast = null;



function createExtraGameInterface() {

    if (
        gameHud &&
        !document.getElementById(
            "game-meta-bar"
        )
    ) {

        const metaBar =
            document.createElement(
                "div"
            );


        metaBar.id =
            "game-meta-bar";


        metaBar.className =
            "game-meta-bar";


        metaBar.innerHTML = `

            <div>
                <small>COMBO</small>
                <strong id="game-combo">
                    x1
                </strong>
            </div>

            <div>
                <small>DATA</small>
                <strong id="game-fragments">
                    00
                </strong>
            </div>

            <div>
                <small>SHIELD</small>
                <strong id="game-shield">
                    OFF
                </strong>
            </div>

        `;


        gameHud.insertAdjacentElement(
            "afterend",
            metaBar
        );

    }


    comboElement =
        document.getElementById(
            "game-combo"
        );


    fragmentsElement =
        document.getElementById(
            "game-fragments"
        );


    shieldElement =
        document.getElementById(
            "game-shield"
        );



    if (
        gameStage &&
        !document.getElementById(
            "game-event-toast"
        )
    ) {

        gameEventToast =
            document.createElement(
                "div"
            );


        gameEventToast.id =
            "game-event-toast";


        gameEventToast.className =
            "game-event-toast";


        gameStage.appendChild(
            gameEventToast
        );

    }
    else {

        gameEventToast =
            document.getElementById(
                "game-event-toast"
            );

    }

}



createExtraGameInterface();



/* ================================================== */
/* STORAGE */
/* ================================================== */

const bestScoreKey =
    "aura-signal-run-best-v2";


const fragmentsKey =
    "aura-signal-run-fragments-v1";



function safeReadNumber(
    key
) {

    try {

        return (
            Number(
                localStorage.getItem(
                    key
                )
            )
            ||
            0
        );

    }
    catch (error) {

        return 0;

    }

}



function safeSaveNumber(
    key,
    value
) {

    try {

        localStorage.setItem(
            key,
            String(
                value
            )
        );

    }
    catch (error) {

        console.log(
            "AURA.SYSTEM / STORAGE ERROR"
        );

    }

}



let bestScore =
    safeReadNumber(
        bestScoreKey
    );


let totalFragments =
    safeReadNumber(
        fragmentsKey
    );



/* ================================================== */
/* GAME STATE */
/* ================================================== */

let canvasWidth = 0;
let canvasHeight = 0;

let deviceScale = 1;


let gameRunning = false;

let animationFrame = null;

let lastFrameTime = 0;

let gameStartTime = 0;


let score = 0;


/*
    было 150
    теперь старт сразу ощутимо живее
*/

let speed = 215;


let spawnTimer = 0;


let entities = [];


let currentLane = 1;

let playerX = 0;

let targetPlayerX = 0;



/* бонусы */

let combo = 0;

let comboMultiplier = 1;

let signalsCollected = 0;

let runFragments = 0;



/* shield */

let shieldActive = false;

let shieldUntil = 0;



/* random event */

let surgeActive = false;

let surgeUntil = 0;

let nextSurgeAt = 0;



/* ================================================== */
/* AURI IMAGE */
/* ================================================== */

const auriGameImage =
    new Image();


auriGameImage.src =
    "assets/auri.png";



/* ================================================== */
/* HELPERS */
/* ================================================== */

function formatGameScore(
    value
) {

    return String(
        Math.max(
            0,
            Math.floor(
                value
            )
        )
    ).padStart(
        4,
        "0"
    );

}



function updateCombo() {

    comboMultiplier =
        Math.min(
            4,
            1
            +
            Math.floor(
                combo / 5
            )
        );

}



function resetCombo() {

    combo = 0;

    comboMultiplier = 1;

}



function updateGameHud() {

    if (gameScoreElement) {

        gameScoreElement.textContent =
            formatGameScore(
                score
            );

    }


    if (gameBestElement) {

        gameBestElement.textContent =
            formatGameScore(
                bestScore
            );

    }


    if (comboElement) {

        comboElement.textContent =
            `x${comboMultiplier}`;

    }


    if (fragmentsElement) {

        fragmentsElement.textContent =
            String(
                totalFragments
            ).padStart(
                2,
                "0"
            );

    }


    if (shieldElement) {

        shieldElement.textContent =
            shieldActive
                ? "ON"
                : "OFF";


        shieldElement.classList.toggle(
            "active",
            shieldActive
        );

    }

}



updateGameHud();



/* ================================================== */
/* EVENT MESSAGE */
/* ================================================== */

let toastTimeout = null;



function showGameEvent(
    text,
    duration = 1200
) {

    if (!gameEventToast) {
        return;
    }


    gameEventToast.textContent =
        text;


    gameEventToast.classList.add(
        "visible"
    );


    if (toastTimeout) {

        clearTimeout(
            toastTimeout
        );

    }


    toastTimeout =
        setTimeout(
            () => {

                gameEventToast.classList.remove(
                    "visible"
                );

            },
            duration
        );

}



/* ================================================== */
/* CANVAS SIZE */
/* ================================================== */

function resizeGameCanvas() {

    if (
        !gameCanvas ||
        !gameStage ||
        !gameContext
    ) {
        return;
    }


    const rect =
        gameStage.getBoundingClientRect();


    if (
        rect.width <= 0
        ||
        rect.height <= 0
    ) {
        return;
    }


    canvasWidth =
        rect.width;


    canvasHeight =
        rect.height;


    deviceScale =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    gameCanvas.width =
        Math.round(
            canvasWidth
            *
            deviceScale
        );


    gameCanvas.height =
        Math.round(
            canvasHeight
            *
            deviceScale
        );


    gameContext.setTransform(
        deviceScale,
        0,
        0,
        deviceScale,
        0,
        0
    );


    playerX =
        laneCenter(
            currentLane
        );


    targetPlayerX =
        playerX;


    drawGame();

}



window.addEventListener(
    "resize",
    resizeGameCanvas
);



/* ================================================== */
/* LANES */
/* ================================================== */

function laneCenter(
    laneIndex
) {

    const positions = [
        0.25,
        0.50,
        0.75
    ];


    return (
        canvasWidth
        *
        positions[
            laneIndex
        ]
    );

}



function movePlayer(
    direction
) {

    if (!gameRunning) {
        return;
    }


    currentLane +=
        direction;


    currentLane =
        Math.max(
            0,
            Math.min(
                2,
                currentLane
            )
        );


    targetPlayerX =
        laneCenter(
            currentLane
        );

}



/* ================================================== */
/* ENTITY SPAWNING */
/* ================================================== */

function randomLane(
    excluded = []
) {

    const available = [
        0,
        1,
        2
    ].filter(
        (lane) =>
            !excluded.includes(
                lane
            )
    );


    return available[
        Math.floor(
            Math.random()
            *
            available.length
        )
    ];

}



function createObstacle(
    lane
) {

    entities.push({

        type:
            "obstacle",

        lane:
            lane,

        y:
            -60,

        passed:
            false,

        dead:
            false

    });

}



function createSignal(
    lane
) {

    entities.push({

        type:
            "signal",

        lane:
            lane,

        y:
            -40,

        dead:
            false

    });

}



function createFragment(
    lane
) {

    entities.push({

        type:
            "fragment",

        lane:
            lane,

        y:
            -40,

        dead:
            false

    });

}



function createShield(
    lane
) {

    entities.push({

        type:
            "shield",

        lane:
            lane,

        y:
            -40,

        dead:
            false

    });

}



/* создаём одну строку игрового мира */

function spawnRow(
    elapsed
) {

    /*
        Иногда вместо препятствия
        появляется полностью бонусная строка.
    */

    if (
        Math.random()
        <
        0.14
    ) {

        createSignal(
            randomLane()
        );


        if (
            Math.random()
            <
            0.45
        ) {

            createSignal(
                randomLane()
            );

        }


        return;

    }



    /*
        После ~25 секунд иногда
        появляется два препятствия,
        но одна полоса ВСЕГДА остаётся свободной.
    */

    const doubleObstacle =
        elapsed > 25
        &&
        Math.random() < 0.28;


    const obstacleLanes = [];


    const firstLane =
        randomLane();


    obstacleLanes.push(
        firstLane
    );


    createObstacle(
        firstLane
    );


    if (doubleObstacle) {

        const secondLane =
            randomLane(
                obstacleLanes
            );


        obstacleLanes.push(
            secondLane
        );


        createObstacle(
            secondLane
        );

    }



    const safeLanes =
        [
            0,
            1,
            2
        ].filter(
            (lane) =>
                !obstacleLanes.includes(
                    lane
                )
        );


    if (
        safeLanes.length === 0
    ) {
        return;
    }


    const rewardLane =
        safeLanes[
            Math.floor(
                Math.random()
                *
                safeLanes.length
            )
        ];


    const rewardRoll =
        Math.random();



    /*
        редчайший бонус — shield
    */

    if (
        rewardRoll
        <
        0.055
    ) {

        createShield(
            rewardLane
        );

    }


    /*
        редкий DATA FRAGMENT
    */

    else if (
        rewardRoll
        <
        0.13
    ) {

        createFragment(
            rewardLane
        );

    }


    /*
        обычный signal node
    */

    else if (
        rewardRoll
        <
        0.82
    ) {

        createSignal(
            rewardLane
        );

    }

}



/* ================================================== */
/* DRAW HELPERS */
/* ================================================== */

function roundedRect(
    ctx,
    x,
    y,
    width,
    height,
    radius
) {

    const r =
        Math.min(
            radius,
            width / 2,
            height / 2
        );


    ctx.beginPath();


    ctx.moveTo(
        x + r,
        y
    );


    ctx.lineTo(
        x + width - r,
        y
    );


    ctx.quadraticCurveTo(
        x + width,
        y,
        x + width,
        y + r
    );


    ctx.lineTo(
        x + width,
        y + height - r
    );


    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - r,
        y + height
    );


    ctx.lineTo(
        x + r,
        y + height
    );


    ctx.quadraticCurveTo(
        x,
        y + height,
        x,
        y + height - r
    );


    ctx.lineTo(
        x,
        y + r
    );


    ctx.quadraticCurveTo(
        x,
        y,
        x + r,
        y
    );


    ctx.closePath();

}



/* ================================================== */
/* DRAW BACKGROUND */
/* ================================================== */

function drawGameBackground() {

    gameContext.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );


    const background =
        gameContext.createLinearGradient(
            0,
            0,
            0,
            canvasHeight
        );


    background.addColorStop(
        0,
        "#09080d"
    );


    background.addColorStop(
        1,
        "#050507"
    );


    gameContext.fillStyle =
        background;


    gameContext.fillRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );



    /* полосы */

    gameContext.save();


    gameContext.strokeStyle =
        surgeActive
            ? "rgba(137,86,255,0.35)"
            : "rgba(108,58,199,0.20)";


    gameContext.lineWidth =
        1;


    [
        0.375,
        0.625
    ].forEach(
        (position) => {

            gameContext.beginPath();


            gameContext.moveTo(
                canvasWidth
                *
                position,
                0
            );


            gameContext.lineTo(
                canvasWidth
                *
                position,
                canvasHeight
            );


            gameContext.stroke();

        }
    );


    gameContext.restore();



    /* движущаяся сетка */

    const gridGap =
        48;


    const movement =
        gameRunning
            ?
            (
                (
                    performance.now()
                    /
                    (
                        surgeActive
                            ? 7
                            : 10
                    )
                )
                %
                gridGap
            )
            :
            0;


    gameContext.save();


    gameContext.strokeStyle =
        "rgba(255,255,255,0.035)";


    for (
        let y = -gridGap;
        y <
        canvasHeight + gridGap;
        y += gridGap
    ) {

        gameContext.beginPath();


        gameContext.moveTo(
            0,
            y + movement
        );


        gameContext.lineTo(
            canvasWidth,
            y + movement
        );


        gameContext.stroke();

    }


    gameContext.restore();



    /* нижнее фиолетовое свечение */

    const glow =
        gameContext.createRadialGradient(
            canvasWidth / 2,
            canvasHeight * 0.78,
            10,
            canvasWidth / 2,
            canvasHeight * 0.78,
            canvasWidth * 0.55
        );


    glow.addColorStop(
        0,
        surgeActive
            ?
            "rgba(137,86,255,0.23)"
            :
            "rgba(108,58,199,0.14)"
    );


    glow.addColorStop(
        1,
        "rgba(108,58,199,0)"
    );


    gameContext.fillStyle =
        glow;


    gameContext.fillRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );

}



/* ================================================== */
/* DRAW ENTITIES */
/* ================================================== */

function drawObstacle(
    entity
) {

    const center =
        laneCenter(
            entity.lane
        );


    const width =
        Math.max(
            58,
            canvasWidth * 0.17
        );


    const height =
        38;


    const x =
        center
        -
        width / 2;


    gameContext.save();


    gameContext.shadowColor =
        "rgba(108,58,199,0.9)";


    gameContext.shadowBlur =
        15;


    roundedRect(
        gameContext,
        x,
        entity.y,
        width,
        height,
        8
    );


    gameContext.fillStyle =
        "rgba(108,58,199,0.24)";


    gameContext.fill();


    gameContext.strokeStyle =
        "rgba(151,103,255,0.95)";


    gameContext.lineWidth =
        1.5;


    gameContext.stroke();


    gameContext.shadowBlur =
        0;


    gameContext.beginPath();


    gameContext.moveTo(
        x + 10,
        entity.y
        +
        height / 2
    );


    gameContext.lineTo(
        x
        +
        width
        -
        10,
        entity.y
        +
        height / 2
    );


    gameContext.strokeStyle =
        "rgba(255,255,255,0.32)";


    gameContext.stroke();


    gameContext.restore();

}



function drawSignal(
    entity
) {

    const x =
        laneCenter(
            entity.lane
        );


    const y =
        entity.y;


    gameContext.save();


    gameContext.shadowColor =
        "rgba(137,86,255,0.95)";


    gameContext.shadowBlur =
        22;


    gameContext.beginPath();


    gameContext.arc(
        x,
        y,
        10,
        0,
        Math.PI * 2
    );


    gameContext.fillStyle =
        "#8B5DFF";


    gameContext.fill();


    gameContext.shadowBlur =
        0;


    gameContext.beginPath();


    gameContext.arc(
        x,
        y,
        17,
        0,
        Math.PI * 2
    );


    gameContext.strokeStyle =
        "rgba(139,93,255,0.38)";


    gameContext.lineWidth =
        1;


    gameContext.stroke();


    gameContext.restore();

}



function drawFragment(
    entity
) {

    const x =
        laneCenter(
            entity.lane
        );


    const y =
        entity.y;


    gameContext.save();


    gameContext.translate(
        x,
        y
    );


    gameContext.rotate(
        Math.PI / 4
    );


    gameContext.shadowColor =
        "rgba(255,255,255,0.8)";


    gameContext.shadowBlur =
        20;


    gameContext.fillStyle =
        "#d8cbff";


    gameContext.fillRect(
        -9,
        -9,
        18,
        18
    );


    gameContext.strokeStyle =
        "#8B5DFF";


    gameContext.lineWidth =
        2;


    gameContext.strokeRect(
        -12,
        -12,
        24,
        24
    );


    gameContext.restore();

}



function drawShield(
    entity
) {

    const x =
        laneCenter(
            entity.lane
        );


    const y =
        entity.y;


    gameContext.save();


    gameContext.shadowColor =
        "rgba(207,190,255,0.9)";


    gameContext.shadowBlur =
        24;


    gameContext.beginPath();


    gameContext.arc(
        x,
        y,
        18,
        0,
        Math.PI * 2
    );


    gameContext.strokeStyle =
        "#d8cbff";


    gameContext.lineWidth =
        3;


    gameContext.stroke();


    gameContext.beginPath();


    gameContext.arc(
        x,
        y,
        8,
        0,
        Math.PI * 2
    );


    gameContext.fillStyle =
        "#6C3AC7";


    gameContext.fill();


    gameContext.restore();

}



/* ================================================== */
/* PLAYER */
/* ================================================== */

function getPlayerSize() {

    /*
        модель стала заметно больше,
        чем в V1
    */

    return Math.max(
        96,
        Math.min(
            122,
            canvasWidth * 0.245
        )
    );

}



function getPlayerRect() {

    const playerSize =
        getPlayerSize();


    const y =
        canvasHeight
        -
        playerSize
        -
        38;


    return {

        x:
            playerX
            -
            playerSize * 0.22,

        y:
            y
            +
            playerSize * 0.13,

        width:
            playerSize * 0.44,

        height:
            playerSize * 0.70

    };

}



function drawPlayer() {

    const playerSize =
        getPlayerSize();


    const y =
        canvasHeight
        -
        playerSize
        -
        38;


    gameContext.save();



    if (shieldActive) {

        gameContext.shadowColor =
            "rgba(190,166,255,0.95)";


        gameContext.shadowBlur =
            28;


        gameContext.beginPath();


        gameContext.arc(
            playerX,
            y + playerSize / 2,
            playerSize * 0.47,
            0,
            Math.PI * 2
        );


        gameContext.strokeStyle =
            "rgba(205,187,255,0.75)";


        gameContext.lineWidth =
            2;


        gameContext.stroke();

    }



    gameContext.shadowColor =
        "rgba(108,58,199,0.60)";


    gameContext.shadowBlur =
        24;


    if (
        auriGameImage.complete
        &&
        auriGameImage.naturalWidth > 0
    ) {

        gameContext.drawImage(
            auriGameImage,
            playerX
            -
            playerSize / 2,
            y,
            playerSize,
            playerSize
        );

    }


    gameContext.restore();

}



/* ================================================== */
/* COLLISION */
/* ================================================== */

function rectanglesOverlap(
    first,
    second
) {

    return !(
        first.x + first.width < second.x
        ||
        first.x > second.x + second.width
        ||
        first.y + first.height < second.y
        ||
        first.y > second.y + second.height
    );

}



function getEntityRect(
    entity
) {

    const center =
        laneCenter(
            entity.lane
        );


    if (
        entity.type ===
        "obstacle"
    ) {

        const width =
            Math.max(
                58,
                canvasWidth * 0.17
            );


        return {

            x:
                center
                -
                width / 2,

            y:
                entity.y,

            width:
                width,

            height:
                38

        };

    }


    return {

        x:
            center - 17,

        y:
            entity.y - 17,

        width:
            34,

        height:
            34

    };

}



/* ================================================== */
/* DRAW GAME */
/* ================================================== */

function drawGame() {

    if (
        !gameContext
        ||
        canvasWidth === 0
    ) {
        return;
    }


    drawGameBackground();


    entities.forEach(
        (entity) => {

            if (entity.dead) {
                return;
            }


            if (
                entity.type ===
                "obstacle"
            ) {

                drawObstacle(
                    entity
                );

            }


            else if (
                entity.type ===
                "signal"
            ) {

                drawSignal(
                    entity
                );

            }


            else if (
                entity.type ===
                "fragment"
            ) {

                drawFragment(
                    entity
                );

            }


            else if (
                entity.type ===
                "shield"
            ) {

                drawShield(
                    entity
                );

            }

        }
    );


    drawPlayer();

}



/* ================================================== */
/* COLLECT */
/* ================================================== */

function collectEntity(
    entity
) {

    entity.dead =
        true;



    if (
        entity.type ===
        "signal"
    ) {

        combo++;

        updateCombo();


        signalsCollected++;


        const points =
            25
            *
            comboMultiplier;


        score +=
            points;


        if (
            combo > 0
            &&
            combo % 5 === 0
        ) {

            showGameEvent(
                `COMBO x${comboMultiplier}`
            );

        }

    }



    else if (
        entity.type ===
        "fragment"
    ) {

        runFragments++;

        totalFragments++;


        safeSaveNumber(
            fragmentsKey,
            totalFragments
        );


        score +=
            150;


        showGameEvent(
            "DATA FRAGMENT +1"
        );

    }



    else if (
        entity.type ===
        "shield"
    ) {

        shieldActive =
            true;


        shieldUntil =
            performance.now()
            +
            7000;


        score +=
            50;


        showGameEvent(
            "SHIELD ONLINE"
        );

    }


    updateGameHud();

}



/* ================================================== */
/* SIGNAL SURGE */
/* ================================================== */

function updateSignalSurge(
    now
) {

    if (
        surgeActive
        &&
        now >= surgeUntil
    ) {

        surgeActive =
            false;


        showGameEvent(
            "SIGNAL NORMALIZED"
        );

    }



    if (
        !surgeActive
        &&
        now >= nextSurgeAt
    ) {

        surgeActive =
            true;


        surgeUntil =
            now
            +
            5000;


        nextSurgeAt =
            surgeUntil
            +
            15000
            +
            Math.random()
            *
            9000;


        showGameEvent(
            "SIGNAL SURGE",
            1600
        );

    }

}



/* ================================================== */
/* GAME LOOP */
/* ================================================== */

function gameLoop(
    now
) {

    if (!gameRunning) {
        return;
    }


    if (!lastFrameTime) {

        lastFrameTime =
            now;

    }


    const deltaMilliseconds =
        Math.min(
            40,
            now - lastFrameTime
        );


    const delta =
        deltaMilliseconds
        /
        1000;


    lastFrameTime =
        now;


    const elapsed =
        (
            now
            -
            gameStartTime
        )
        /
        1000;



    /* ========================= */
    /* SPEED */
    /* ========================= */

    speed =
        Math.min(
            430,

            215
            +
            elapsed
            *
            6.2
        );



    updateSignalSurge(
        now
    );



    const currentSpeed =
        speed
        *
        (
            surgeActive
                ? 1.18
                : 1
        );



    /* ========================= */
    /* PLAYER MOVEMENT */
    /* ========================= */

    playerX +=
        (
            targetPlayerX
            -
            playerX
        )
        *
        Math.min(
            1,
            delta * 14
        );



    /* ========================= */
    /* SPAWN */
    /* ========================= */

    spawnTimer -=
        deltaMilliseconds;


    if (
        spawnTimer <= 0
    ) {

        spawnRow(
            elapsed
        );


        const basicInterval =
            Math.max(
                510,

                980
                -
                elapsed
                *
                7
            );


        spawnTimer =
            (
                surgeActive
                    ?
                    basicInterval * 0.74
                    :
                    basicInterval
            )
            +
            Math.random()
            *
            220;

    }



    /* ========================= */
    /* MOVE ENTITIES */
    /* ========================= */

    entities.forEach(
        (entity) => {

            entity.y +=
                currentSpeed
                *
                delta;

        }
    );



    const playerRect =
        getPlayerRect();



    /* ========================= */
    /* COLLISIONS */
    /* ========================= */

    for (
        const entity
        of entities
    ) {

        if (entity.dead) {
            continue;
        }


        const entityRect =
            getEntityRect(
                entity
            );


        if (
            rectanglesOverlap(
                playerRect,
                entityRect
            )
        ) {


            /*
                OBSTACLE
            */

            if (
                entity.type ===
                "obstacle"
            ) {

                if (
                    shieldActive
                ) {

                    entity.dead =
                        true;


                    shieldActive =
                        false;


                    shieldUntil =
                        0;


                    score +=
                        30;


                    showGameEvent(
                        "SHIELD ABSORBED"
                    );


                    updateGameHud();


                    continue;

                }


                gameOver();

                return;

            }



            /*
                BONUS
            */

            collectEntity(
                entity
            );

        }



        /* ========================= */
        /* MISSED SIGNAL */
        /* ========================= */

        if (
            entity.type ===
            "signal"
            &&
            entity.y
            >
            canvasHeight
            +
            30
            &&
            !entity.dead
        ) {

            entity.dead =
                true;


            resetCombo();


            updateGameHud();

        }



        /* obstacle safely passed */

        if (
            entity.type ===
            "obstacle"
            &&
            !entity.passed
            &&
            entity.y
            >
            playerRect.y
            +
            playerRect.height
        ) {

            entity.passed =
                true;


            score +=
                12;

        }

    }



    /* ========================= */
    /* SHIELD TIMER */
    /* ========================= */

    if (
        shieldActive
        &&
        now >= shieldUntil
    ) {

        shieldActive =
            false;


        showGameEvent(
            "SHIELD OFFLINE"
        );


        updateGameHud();

    }



    /* ========================= */
    /* CLEANUP */
    /* ========================= */

    entities =
        entities.filter(
            (entity) =>

                !entity.dead
                &&
                entity.y
                <
                canvasHeight
                +
                100
        );



    /* passive score */

    score +=
        delta
        *
        (
            surgeActive
                ? 10
                : 6
        );



    updateGameHud();


    drawGame();



    animationFrame =
        requestAnimationFrame(
            gameLoop
        );

}



/* ================================================== */
/* START GAME */
/* ================================================== */

function startGame() {

    resizeGameCanvas();


    entities = [];


    currentLane =
        1;


    playerX =
        laneCenter(
            currentLane
        );


    targetPlayerX =
        playerX;


    score =
        0;


    speed =
        215;


    spawnTimer =
        720;


    combo =
        0;


    comboMultiplier =
        1;


    signalsCollected =
        0;


    runFragments =
        0;


    shieldActive =
        false;


    shieldUntil =
        0;


    surgeActive =
        false;


    lastFrameTime =
        0;


    gameStartTime =
        performance.now();


    nextSurgeAt =
        gameStartTime
        +
        13000
        +
        Math.random()
        *
        7000;


    gameRunning =
        true;


    updateGameHud();



    if (gameOverlay) {

        gameOverlay.classList.add(
            "hidden"
        );

    }



    showGameEvent(
        "CONNECTION STABLE"
    );



    animationFrame =
        requestAnimationFrame(
            gameLoop
        );

}



/* ================================================== */
/* STOP GAME */
/* ================================================== */

function stopGame() {

    gameRunning =
        false;


    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );


        animationFrame =
            null;

    }

}



/* ================================================== */
/* GAME OVER */
/* ================================================== */

function gameOver() {

    stopGame();


    const finalScore =
        Math.floor(
            score
        );


    const previousBest =
        bestScore;


    if (
        finalScore
        >
        bestScore
    ) {

        bestScore =
            finalScore;


        safeSaveNumber(
            bestScoreKey,
            bestScore
        );

    }


    updateGameHud();



    if (gameOverlayTitle) {

        gameOverlayTitle.textContent =
            finalScore > previousBest
                ?
                "NEW RECORD"
                :
                "CONNECTION LOST";

    }



    if (gameOverlayText) {

        gameOverlayText.textContent =
            `SCORE ${formatGameScore(finalScore)} / DATA +${runFragments} / BEST ${formatGameScore(bestScore)}`;

    }



    if (gameStartButton) {

        gameStartButton.textContent =
            "RECONNECT";

    }



    if (gameOverlay) {

        gameOverlay.classList.remove(
            "hidden"
        );

    }

}



/* ================================================== */
/* GAME CONTROLS */
/* ================================================== */

if (gameStartButton) {

    gameStartButton.addEventListener(
        "click",
        () => {

            gameStartButton.textContent =
                "RECONNECT";


            startGame();

        }
    );

}



if (gameLeftButton) {

    gameLeftButton.addEventListener(
        "click",
        () => {

            movePlayer(
                -1
            );

        }
    );

}



if (gameRightButton) {

    gameRightButton.addEventListener(
        "click",
        () => {

            movePlayer(
                1
            );

        }
    );

}



/* keyboard */

window.addEventListener(
    "keydown",
    (event) => {

        if (!gameRunning) {
            return;
        }


        if (
            event.key ===
            "ArrowLeft"
            ||
            event.key.toLowerCase() ===
            "a"
        ) {

            movePlayer(
                -1
            );

        }


        if (
            event.key ===
            "ArrowRight"
            ||
            event.key.toLowerCase() ===
            "d"
        ) {

            movePlayer(
                1
            );

        }

    }
);



/* ================================================== */
/* SWIPE / TAP */
/* ================================================== */

let pointerStartX =
    null;



if (gameCanvas) {

    gameCanvas.addEventListener(
        "pointerdown",
        (event) => {

            pointerStartX =
                event.clientX;

        }
    );


    gameCanvas.addEventListener(
        "pointerup",
        (event) => {

            if (
                pointerStartX === null
                ||
                !gameRunning
            ) {
                return;
            }


            const difference =
                event.clientX
                -
                pointerStartX;



            /*
                SWIPE
            */

            if (
                Math.abs(
                    difference
                )
                >
                24
            ) {

                movePlayer(
                    difference > 0
                        ? 1
                        : -1
                );

            }



            /*
                TAP
            */

            else {

                const rect =
                    gameCanvas.getBoundingClientRect();


                const relativeX =
                    event.clientX
                    -
                    rect.left;


                movePlayer(
                    relativeX
                    <
                    rect.width / 2
                        ?
                        -1
                        :
                        1
                );

            }


            pointerStartX =
                null;

        }
    );

}



/* ================================================== */
/* INITIAL DRAW */
/* ================================================== */

auriGameImage.addEventListener(
    "load",
    () => {

        drawGame();

    }
);



console.log(
    "AURA.SYSTEM / AURI ONLINE"
);


console.log(
    "AURA.SYSTEM / CHECKLIST READY"
);


console.log(
    "AURA.SYSTEM / SIGNAL RUN V2 READY"
);
