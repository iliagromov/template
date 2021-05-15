

let l;

let mentors =
{
    "records": [
        {
            "id": "recK7qq0Ovl5rN8qU",
            "Name": "Anna Evgenova",
            "Enable": 1,
            "Capacity": 50,
            "Calendly_Link": "https://calendly.com/anna-evgenova-nutritionist/45min",
            "Characteristic": [
                "Мотивирующий",
                "Структурированный"
            ],
            "canHelp": [
                "Расфокус и прокрастинация",
                "Снизить вес",
                "Правильно питаться",
                "Наладить физическую активность",
                "Мало энергии и сил"
            ],
            "canTHelp": [
                "Work-life balance",
                "Предотвратить выгорание",
                "Расфокус и прокрастинация"
            ]
        },
        {
            "id": "rec4HmdIaTuzw9NXZ",
            "Name": "Ksenya Blagova",
            "Enable": 1,
            "Capacity": 50,
            "Calendly_Link": "https://calendly.com/ksenyabobrovamsu/45min",
            "Characteristic": [

                "Эмпатичный",
                "Мотивирующий",
                "Дружеский",
                "Структурированный"
            ],
            "canHelp": [
                "Мало энергии и сил",
                "Предотвратить выгорание",
                "Снизить вес",
                "Правильно питаться",
                "Лучше спать",
                "Управление тревогой и стрессом",
                "Другое"
            ],
            "canTHelp": null
        }, {
            "id": "rec4HmdIaTuzw9NXZ",
            "Name": "test",
            "Enable": 1,
            "Capacity": 50,
            "Calendly_Link": "https://calendly.com/ksenyabobrovamsu/45min",
            "Characteristic": [

                "Эмпатичный",
                "Мотивирующий",
                "Дружеский",
                "Структурированный"
            ],
            "canHelp": [
                "Work-life balance",
                "Другое"
            ],
            "canTHelp": [
                "Предотвратить выгорание",
            ]
        },
        {
            "id": "recK7qq0Ovl5rN8qU",
            "Name": "Anna Evgenova2",
            "Enable": 1,
            "Capacity": 50,
            "Calendly_Link": "https://calendly.com/anna-evgenova-nutritionist/45min",
            "Characteristic": [
                "Мотивирующий",
                "Структурированный"
            ],
            "canHelp": [
                "Расфокус и прокрастинация",
                "Work-life balance",
                "Снизить вес",
                "Правильно питаться",
                "Наладить физическую активность",
                "Мало энергии и сил"
            ],
            "canTHelp": null
        },
        {
            "id": "recK7qq0Ovl5rN8qU",
            "Name": "Anna Evgenova3",
            "Enable": 1,
            "Capacity": 50,
            "Calendly_Link": "https://calendly.com/anna-evgenova-nutritionist/45min",
            "Characteristic": [
                "Мотивирующий",
                "Структурированный"
            ],
            "canHelp": [
                "Расфокус и прокрастинация",
                "Work-life balance",
                "Снизить вес",
                "Правильно питаться",
                "Наладить физическую активность",
                "Мало энергии и сил"
            ],
            "canTHelp": null
        },
    ]
}
    ;

// mentors.records.forEach((mentor)=>{console.log(mentor)});
// mentors.records.forEach((mentor)=>{console.log(mentor.fields.Characteristic)});

//  let res = mentors.records.forEach((mentor) => { 
//     mentor.fields.Characteristic.filter((i)=>{
//         i == "Мотивирующий"}) 
//     });
// console.log(res);
// let res;
// res = mentors.records.filter((mentor)=>{
//      return mentor.fields.Characteristic[0] === "Мотивирующий";
// });
// console.log(res);


// let res = [];
// let pointsMentor = ["Мотивирующий", "Структурированный"];
// let pointsMentor = "Мотивирующий";
// function getMentors() { }

// mentors.records.forEach((mentor) => {
//     let characteristics = mentor.fields.Characteristic;

//     if (Array.isArray(pointsMentor) && pointsMentor.length > 1) {
//         pointsMentor.find((point) => {
//             characteristics.find((charact) => {
//                 if(point === charact){
//                     return res.push(Object.assign({},mentor.id, mentor.fields.Calendly_Link30));
//                 }
//             });
//             return point;
//         });
//     } else {
//         characteristics.forEach((charact) => {
//             if (charact === pointsMentor) {
//                  return res.push(Object.assign({},{id : mentor.id, link: mentor.fields.Calendly_Link30}));
//              }
//          });
//     }



// });

// const random = Math.floor(Math.random() * res.length);
// console.log(random, res[random]);

// console.log(res[random]);
// console.log(res);
let questionWhatHelp = [{
    "label": "Work-life balance",
    "value": 0
},
{
    "label": "Расфокус и прокрастинация",
    "value": 0
}];
//points.questionWhatHelp
// let questionWhatHelp = [{
//     "label": "Другое",
//     "value": 0
// }];
let whatMentors = 'У меня уже есть наставник';
// let whatMentors = 'Мотивирующий';
// let whatMentors = 'Эмпатичный';

function checkHelp(mentorHelp, mentorCanTHelp, answerUserWhatHelp) {
    let canthelp;
    let help = mentorHelp.find((itemHelp) => {
        return answerUserWhatHelp.find((itemUserHelp) => {
            return itemHelp === itemUserHelp.label;
        })
    });
   
    if(mentorCanTHelp){
         canthelp = mentorCanTHelp.find((itemHelp) => {
            return answerUserWhatHelp.find((itemUserHepl) => {
                return itemHelp === itemUserHepl.label;
            })
        });
    } 
    if(help && !canthelp){
        return help; 
        
    } else {
        return false;
    }
}


function getMentors(mentors) {
    if (mentors.records && mentors.records.lenght !== 0) {
        let result = [];
        function compatibilityMentor(result){

            result.forEach((r, index)=>{
                let cnt = 0;
                r.canHelp.filter((c)=>{
                    questionWhatHelp.filter((q)=>{
                        return c === q.label ? cnt++ : false;
                    });
                });
                Object.assign(result[index], {compatibility: cnt});
        
            });
        }
        if (whatMentors === 'У меня уже есть наставник') {
            result = mentors.records.filter((mentor) => {
                if (mentor.Capacity !== 0) {
                    return checkHelp(mentor.canHelp, mentor.canTHelp,questionWhatHelp);
                }
            });
           
            compatibilityMentor(result);
        }
        else {
            result = mentors.records.filter((mentor) => {
                if (mentor.Capacity !== 0) {
                    return mentor.Characteristic.find((charact) => {
                        if (charact === whatMentors) {
                            return checkHelp(mentor.canHelp,mentor.canTHelp, questionWhatHelp);
                        }
                    });
                }
            });
            compatibility(result);
        }
        
        const random = Math.floor(Math.random() * result.length);
     
   

        console.log(result);
        console.log(result[random].id);
        console.log(result[random].Calendly_Link);
        console.log(result[random].Name);
        return result[random].Calendly_Link;
    }
}
getMentors(mentors);

