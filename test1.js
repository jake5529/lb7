const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const bakimgel = document.getElementById('img');

let state = {} 

function startGame () {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

    if (textNode.img) {
        bakimgel.src = textNode.img;
        bakimgel.style.display = 'block';
    } else {
        bakimgel.style.display = 'none';
    }

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state);
}


function selectOption (option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
      return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId); 

}



const textNodes = [
    {
        id: 1,
        img: '1.jpg', 
        text: "Выберите сторону котики или крысы.",
        options: [
            {
                text: 'Котики',
                nextText: 15
            },
            {
                text: 'Крысы',
                nextText: 2
            }
        ]
    }, 
    {
        id: 2,
        img: '2.jpg',
        text:  'Крысы знают кто такие коты на самом деле и противостоят тихой экспансии котов.',
        options: [
            {
                text: 'Создать культ',
                nextText: 3
            },
            {
                text: 'Начать войну',
                nextText: 6
            },
            {
                text: 'назад',
                nextText: 1
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 3,
        img: '3.jpg',
        text:  'Культ крыс строит огромный, орбитальный лазерный указатель.Что будем с ним делать?',
        options: [
            {
                text: 'Соберём всех кошек в одном месте',
                nextText: 4
            },
            {
                text: 'Уничтожем Землю вместе с котами',
                nextText: 14
            },
            {
                text: 'назад',
                nextText: 2
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 4,
        img: '4.jpg',
        text:  'Когда лазер активируется, он создаёт огромный красный луч, который виден со всех уголков планеты.',
        options: [
            {
                text: 'Коты собираются в одной точке.',
                nextText: 5
            },
            {
                text: 'Коты раскрыли ваш план',
                nextText: 13
            },
            {
                text: 'назад',
                nextText: 3
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 5,
        img: '5.jpg',
        text:  'Оказывается что это был их план собраться вместе, чтобы объединить их способности.',
        options: [
            {
                text: 'Культ не сможет этому противостоять',
                nextText: 11
            },
            {
                text: 'Вмешаемся',
                nextText: 12
            },
            {
                text: 'назад',
                nextText: 4
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 6,
        img: '6.jpg',
        text:  'Из-за разрознености и нехватки ресурсов при ожесточённых боях, культ потерпел поражение',
        options: [
            {
                text: 'назад',
                nextText: 2
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 7,
        img: '7.jpg',
        text:  'Играясь, будто клубками с нитками он отправляет планеты и солнце в чёрную дыру.',
        options: [
            {
                text: 'Дальше',
                nextText: 8
            },
            {
                text: 'назад',
                nextText: 11
            },
            {
                text: 'начать сначала ',
                nextText: 1
            }
        ]
    },
    {
        id: 8,
        img: '8.jpg',
        text:  'И наступает тьма, сначала ему весело, он смеется что ему удалось одурачить всех, но потом ему очень грустно, потому что он больше никогда не увидит рыбов.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад ',
                nextText: 7
            },
        ]
    },
    {
        id: 14,
        img: '11.jpg',
        text:  'Культ одержал победу и начал править всей солнечной системой', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад ',
                nextText: 3
            },
        ]
    },
    {
        id: 13,
        img: '12.jpg',
        text:  'Культ вынужден сбежать.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад ',
                nextText: 4
            },
        ]
    },
    {
        id: 12,
        img: '13.jpg',
        text:  'Культу не удалось остановить котов и они все погибли. Коты начали править Землей', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад ',
                nextText: 5
            },
        ]
    },
    {
        id: 11,
        img: '14.jpg',
        text:  'Они объединяются все вместе в одного огромного, космического кота', 
        options: [
            {
                text: 'Дальше',
                nextText: 7
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад ',
                nextText: 5
            },
        ]
    },
    {
        id: 15, 
        img: '15.jpg',
        text: "Вы считаете котов милыми?",
        options: [
            {
                text: 'Да',
                nextText: 16
            },
            {
                text: 'Нет',
                nextText: 21
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 1
            }
        ]
    }, 
    {
        id: 16, 
        img: '16.jpg',
        text: "Вы можете противостоять их милоте?",
        options: [
            {
                text: 'Да',
                nextText: 17
            },
            {
                text: 'Нет',
                nextText: 20
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 15
            }
        ]
    }, 
    {
        id: 17, 
        img: '17.jpg',
        text: "Всё потому что они сами этого хотят и поэтому давят на жалость и используют самые действенные способы, прячутся на помойке, чтобы люди их находили и забирали к себе",
        options: [
            {
                text: 'Но для чего им быть рядом с людьми',
                nextText: 18
            },
            {
                text: 'Я не поддамся на провокации',
                nextText: 19
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 16
            }
        ]
    },
    {
        id: 21, 
        img: '18.jpg',
        text: "Правильно на самом деле милые котики - это пришельцы, которые надели на себя костюм кота.",
        options: [
            {
                text: 'Мы не знаем что могут эти пришельцы. Будем мирно сосуществовать.',
                nextText: 22
            },
            {
                text: 'Мы не можем им подчениться. Будем воевать с ними.',
                nextText: 23
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 15
            }
        ]
    },
    {
        id: 23, 
        img: '19.jpg',
        text: "В ходе войны люди обнаруживают нехватку ресурсов.",
        options: [
            {
                text: 'Продолжать сражаться',
                nextText: 24
            },
            {
                text: 'Сдаться',
                nextText: 25
            },
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 21
            }
        ]
    },
    {
        id: 25, 
        img: '20.jpg',
        text: "Коты решили посчадить людей, но стали властью на Земле основав свою базу на луне.",
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 23
            }
        ]
    },
    {
        id: 18,
        img: '21.jpg',
        text:  'Это всё ради одного - они очень любят рыбов.',
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 17
            }
        ] 
    },
    {
        id: 19,
        img: '22.jpg',
        text:  'Ну как можно не забрать такую милоту домой.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 17
            }
        ] 
    },
    {
        id: 20,
        img: '23.jpg',
        text:  'Вы не можете противостоять их милоте, потому что котики приручили людей с помощью телепатии', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 16
            }
        ] 
    },
    {
        id: 22,
        img: '24.jpg',
        text:  'Вместо открытого завоевания или агрессии, коты-пришельцы выбирают путь мирного сосуществования, используя свои способности для незаметного влияния на людей.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 21
            }
        ] 
    },
    {
        id: 24,
        img: '25.jpg',
        text:  'Коты-пришельцы полностью поработили дух и сознание людей.',
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
            {
                text: 'назад',
                nextText: 23
            }
        ]  
    },
]

startGame()
