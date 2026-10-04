/* =====================================================================
   GERM DETECTIVES — BOOK CONTENT
   This is the only file you need to edit to change text or add books.

   Text formatting inside "text":
     • Each line is shown on its own line.
     • **double stars** make text bold.
     • _underscores_ make text italic (use for species names).
     • A line starting with "- " becomes a bullet point.

   Pictures: put text-free illustrations in img/<book-id>/ as
     p1-1600.webp and p1-960.webp, p2-1600.webp ... (see README).
   Printed pages (optional): the finished pages with the text inside
     the picture go in img/<book-id>/print/ as p1-960.webp, p1-1600.webp,
     p1-2400.webp ... and each page gets   printed: "img/<book-id>/print/p1"
     When every page of a book has one, readers can switch between
     "Printed page" and "Large text".

   Narration: set narration.en / narration.es to true once the audio
   files exist at audio/<book-id>/en/page-1.mp3 ... (see README).
   ===================================================================== */

window.GERM_DETECTIVES = {
  series:  { en: "Germ Detectives", es: "Detectives de los gérmenes" },
  tagline: { en: "Exploring Science Together", es: "Explorando la ciencia juntos" },
  credit:  { en: "Tennessee Tech University", es: "Tennessee Tech University" },

  books: [
    /* ------------------------------------------------------------ BOOK 1 */
    {
      id: "book1",
      caseNumber: 1,
      ready: true,
      title: { en: "Farm Safety", es: "Seguridad en la granja" },
      topic: { en: "Farm safety", es: "Seguridad en la granja" },
      cover: "img/covers/book1",
      coverAlt: {
        en: "Cover of Farm Safety: Uncle Bob kneels between Sam and Deanna in front of a red barn, with their dog, a cow, a pig, and chickens.",
        es: "Portada de Seguridad en la granja: el tío Bob, arrodillado entre Sam y Deanna frente a un granero rojo, con su perro, una vaca, un cerdo y gallinas."
      },
      blurb: {
        en: "Sam and Deanna love solving mysteries. When clues around the farm lead them to animals, eggs, milk, and muddy water, the Germ Detectives learn simple farm safety rules that help keep people and animals healthy.",
        es: "A Sam y a Deanna les encanta resolver misterios. Cuando unas pistas en la granja los llevan hasta los animales, los huevos, la leche y el agua con barro, los detectives de los gérmenes aprenden reglas sencillas de seguridad en la granja que ayudan a mantener sanas a las personas y a los animales."
      },
      narration: { en: false, es: false },

      pages: [
        { // 1
          image: "img/book1/p1", printed: "img/book1/print/p1", side: "left", focus: 70,
          alt: {
            en: "Sam and Deanna, with their dog, look worried at a quiet chicken coop and a tired calf lying on the ground.",
            es: "Sam y Deanna, con su perro, miran preocupados un gallinero silencioso y un ternero cansado tumbado en el suelo."
          },
          text: {
            en: `“Look, something’s wrong,” said Deanna.
The chickens were quiet, and a calf looked tired.
“Time for a new case!” shouted Sam.
They pulled out their notebooks.
**Today, we’re Germ Detectives.**
**Let’s solve this farm mystery!**`,
            es: `“¡Mira, algo anda mal!”, dijo Deanna.
Las gallinas estaban calladas y un ternero parecía cansado.
“¡Tenemos un nuevo caso!”, exclamó Sam.
Sacaron sus cuadernos.
**¡Hoy somos detectives de los gérmenes!**
**¡Vamos a resolver el misterio de la granja!**`
          }
        },
        { // 2
          image: "img/book1/p2", printed: "img/book1/print/p2", side: "left", focus: 62,
          alt: {
            en: "A teacher points to a screen about bacteria and viruses while students listen at their desks.",
            es: "Una profesora señala una pantalla sobre bacterias y virus mientras los alumnos escuchan en sus pupitres."
          },
          text: {
            en: `At school, our teacher told us about microbes.
They are too tiny to see with our eyes alone.
Bacteria and viruses are different kinds of microbes.
**Many microbes are harmless, but some can make us sick.**`,
            es: `En la escuela, nuestra profesora nos habló de los microbios.
Son tan pequeños que no podemos verlos a simple vista.
Las bacterias y los virus son distintos tipos de microbios.
**Muchos son inofensivos, pero algunos pueden enfermarnos.**`
          }
        },
        { // 3
          image: "img/book1/p3", printed: "img/book1/print/p3", side: "left", focus: 50,
          alt: {
            en: "Inside the chicken coop, Deanna inspects eggs in dirty straw with a magnifying glass while Sam takes notes.",
            es: "Dentro del gallinero, Deanna examina con una lupa unos huevos sobre paja sucia mientras Sam toma notas."
          },
          text: {
            en: `The coop smelled bad. Eggs lay in dirty straw.
“Clue found!” said Deanna.
“_Salmonella_ and _Campylobacter_ are bacteria that can be on eggshells and in chicken poop,” explained Sam.
**Washing our hands and cooking chicken and eggs well help protect us.**`,
            es: `El gallinero olía mal. Los huevos estaban sobre paja sucia.
“¡Encontramos una pista!”, dijo Deanna.
“_Salmonella_ y _Campylobacter_ son bacterias que pueden estar en las cáscaras de los huevos y en la caca de las gallinas”, explicó Sam.
**Lavarnos las manos y cocinar bien el pollo y los huevos nos ayuda a protegernos.**`
          }
        },
        { // 4
          image: "img/book1/p4", printed: "img/book1/print/p4", side: "left", focus: 58,
          alt: {
            en: "Sam and Deanna lean on a fence, watching pigs sneeze in a muddy pen.",
            es: "Sam y Deanna se apoyan en una cerca y observan a unos cerdos que estornudan en un corral con barro."
          },
          text: {
            en: `The pigs snorted and sneezed.
“They had the flu last year,” whispered Deanna.
“Pig flu can sometimes spread to people,” said Sam.
“A disease that spreads from animals to people is called a zoonosis.”
**“Germs can spread through coughs and sneezes, too,” added Deanna.**`,
            es: `Los cerdos resoplaban y estornudaban.
“Tuvieron gripe el año pasado”, susurró Deanna.
“La gripe de los cerdos a veces puede pasar a las personas”, dijo Sam.
“Una enfermedad que pasa de animales a personas se llama zoonosis”.
**“Los gérmenes también pueden transmitirse con la tos y los estornudos”, añadió Deanna.**`
          }
        },
        { // 5
          image: "img/book1/p5", printed: "img/book1/print/p5", side: "left", focus: 75,
          alt: {
            en: "A cow drinks from a trough of dirty water. A magnified circle shows E. coli and Salmonella bacteria.",
            es: "Una vaca bebe de un bebedero con agua sucia. Un círculo ampliado muestra las bacterias E. coli y Salmonella."
          },
          text: {
            en: `A cow drank water contaminated with manure.
“Clue two,” Sam wrote. “Cows can spread bacteria like _Salmonella_ and some types of _Escherichia coli_.”
**“Germs in food or water can make people and animals sick,”** said Deanna.`,
            es: `Una vaca bebía agua contaminada con estiércol.
“Segunda pista”, escribió Sam. “Las vacas pueden transmitir bacterias como _Salmonella_ y algunos tipos de _Escherichia coli_”.
**“Los gérmenes en el agua o la comida pueden enfermar a las personas y a los animales”**, dijo Deanna.`
          }
        },
        { // 6
          image: "img/book1/p6", printed: "img/book1/print/p6", side: "left", focus: 70,
          alt: {
            en: "Uncle Bob sits in his living room holding up a glass of milk as Sam and Deanna come through the door.",
            es: "El tío Bob, sentado en su sala, levanta un vaso de leche mientras Sam y Deanna entran por la puerta."
          },
          text: {
            en: `Uncle Bob smiled and held up a glass.
“Fresh raw milk!”
“Raw milk can carry bacteria like _Salmonella_,” said Deanna. “They can make us sick!”
“Pasteurization heats milk at a set temperature for a set time to kill harmful germs,” explained Sam.
**“Choose pasteurized milk!”**`,
            es: `El tío Bob sonrió y levantó un vaso.
“¡Leche fresca cruda!”
“La leche cruda puede tener bacterias como _Salmonella_”, dijo Deanna. “¡Pueden enfermarnos!”
“La pasteurización usa una temperatura y un tiempo controlados para eliminar gérmenes dañinos de la leche”, explicó Sam.
**“¡Elige leche pasteurizada!”**`
          }
        },
        { // 7
          image: "img/book1/p7", printed: "img/book1/print/p7", side: "left", focus: 50,
          alt: {
            en: "Sam and Deanna sit at a table covered with clue notes and their Germ Safety Plan.",
            es: "Sam y Deanna, sentados a una mesa llena de notas con pistas y su plan contra los gérmenes."
          },
          text: {
            en: `Sam spread out their notes.
**“We need a Germ Safety Plan!”**
Together, they made a list:
- Wash your hands and clean your boots.
- Eat meat and eggs that are thoroughly cooked.
- Do not play in dirty water.
- Drink pasteurized milk.`,
            es: `Sam extendió sus notas.
**“¡Necesitamos un plan contra los gérmenes!”**
Juntos, hicieron una lista:
- Lávate las manos y limpia tus botas.
- Come carne y huevos bien cocinados.
- No juegues en agua sucia.
- Bebe leche pasteurizada.`
          }
        },
        { // 8
          image: "img/book1/p8", printed: "img/book1/print/p8", side: "right", focus: 22,
          alt: {
            en: "At sunset, Uncle Bob, Sam, and Deanna wave by the barn, with healthy cows, pigs, and chickens around them.",
            es: "Al atardecer, el tío Bob, Sam y Deanna saludan junto al granero, rodeados de vacas, cerdos y gallinas sanos."
          },
          text: {
            en: `A week later, the animals were active again, and Uncle Bob felt better.
“Our Germ Safety Plan helps keep everyone healthy!” said Deanna.
“Case solved!” cheered Sam.
**Not all microbes are harmful.**
**Washing your hands, eating well-cooked food, and staying away from dirty water are simple ways to help protect everyone.**`,
            es: `Una semana después, los animales estaban activos de nuevo y el tío Bob se sentía mejor.
“¡Nuestro plan contra los gérmenes nos ayuda a cuidar la salud de todos!”, dijo Deanna.
“¡Caso resuelto!”, celebró Sam.
**No todos los microbios son dañinos.**
**Lavarnos las manos, comer alimentos bien cocinados y alejarnos del agua sucia son formas sencillas de ayudar a protegernos.**`
          }
        }
      ],

      /* End-of-book quiz. "answer" is the position of the right option,
         counting from 0. Nothing a reader chooses is saved or sent anywhere. */
      quiz: [
        {
          q: { en: "What are microbes?", es: "¿Qué son los microbios?" },
          options: [
            { en: "Tiny things too small to see with our eyes alone", es: "Cosas tan pequeñas que no podemos verlas a simple vista" },
            { en: "Little bugs that live on leaves", es: "Bichitos que viven en las hojas" },
            { en: "A kind of farm animal", es: "Un tipo de animal de granja" }
          ],
          answer: 0,
          why: {
            en: "Bacteria and viruses are kinds of microbes. Many are harmless, but some can make us sick.",
            es: "Las bacterias y los virus son tipos de microbios. Muchos son inofensivos, pero algunos pueden enfermarnos."
          }
        },
        {
          q: { en: "Which bacteria can be on eggshells and in chicken poop?", es: "¿Qué bacterias pueden estar en las cáscaras de huevo y en la caca de las gallinas?" },
          options: [
            { en: "Ladybugs and ants", es: "Mariquitas y hormigas" },
            { en: "_Salmonella_ and _Campylobacter_", es: "_Salmonella_ y _Campylobacter_" },
            { en: "Dust and pollen", es: "Polvo y polen" }
          ],
          answer: 1,
          why: {
            en: "That’s why we wash our hands and cook chicken and eggs well.",
            es: "Por eso nos lavamos las manos y cocinamos bien el pollo y los huevos."
          }
        },
        {
          q: { en: "What do we call a disease that spreads from animals to people?", es: "¿Cómo se llama una enfermedad que pasa de los animales a las personas?" },
          options: [
            { en: "Pasteurization", es: "Pasteurización" },
            { en: "A clue", es: "Una pista" },
            { en: "A zoonosis", es: "Una zoonosis" }
          ],
          answer: 2,
          why: {
            en: "Pig flu is one example. Germs can also spread through coughs and sneezes.",
            es: "La gripe de los cerdos es un ejemplo. Los gérmenes también se transmiten con la tos y los estornudos."
          }
        },
        {
          q: { en: "Why is pasteurized milk safer than raw milk?", es: "¿Por qué la leche pasteurizada es más segura que la leche cruda?" },
          options: [
            { en: "It was heated to kill harmful germs", es: "Se calentó para eliminar los gérmenes dañinos" },
            { en: "It is kept extra cold", es: "Se guarda muy fría" },
            { en: "It comes from bigger cows", es: "Viene de vacas más grandes" }
          ],
          answer: 0,
          why: {
            en: "Pasteurization heats milk at a set temperature for a set time.",
            es: "La pasteurización calienta la leche a una temperatura y durante un tiempo controlados."
          }
        },
        {
          q: { en: "Which one is part of the Germ Safety Plan?", es: "¿Cuál es parte del plan contra los gérmenes?" },
          options: [
            { en: "Play in muddy water", es: "Jugar en agua con barro" },
            { en: "Wash your hands and clean your boots", es: "Lavarte las manos y limpiar tus botas" },
            { en: "Drink raw milk", es: "Beber leche cruda" }
          ],
          answer: 1,
          why: {
            en: "The plan also says to eat well-cooked meat and eggs and to drink pasteurized milk.",
            es: "El plan también dice que comamos carne y huevos bien cocinados y que bebamos leche pasteurizada."
          }
        },
        {
          q: { en: "Are all microbes harmful?", es: "¿Todos los microbios son dañinos?" },
          options: [
            { en: "Yes, every single one", es: "Sí, todos" },
            { en: "No, many are harmless", es: "No, muchos son inofensivos" }
          ],
          answer: 1,
          why: {
            en: "Not all microbes are harmful. Simple habits help protect us from the ones that are.",
            es: "No todos los microbios son dañinos. Unos hábitos sencillos nos protegen de los que sí lo son."
          }
        }
      ]
    },

    /* ------------------------------------------------- BOOKS 2–5 (coming) */
    {
      id: "book2", caseNumber: 2, ready: false,
      title: { en: "The Water Mystery", es: "El misterio del agua" },
      topic: { en: "Water microorganisms", es: "Microorganismos del agua" },
      cover: "img/covers/book2",
      coverAlt: { en: "Cover of The Water Mystery", es: "Portada de El misterio del agua" }
    },
    {
      id: "book3", caseNumber: 3, ready: false,
      title: { en: "The Food Safety Case", es: "El caso de la seguridad alimentaria" },
      topic: { en: "Food safety", es: "Seguridad alimentaria" },
      cover: "img/covers/book3",
      coverAlt: { en: "Cover of The Food Safety Case", es: "Portada de El caso de la seguridad alimentaria" }
    },
    {
      id: "book4", caseNumber: 4, ready: false,
      title: { en: "The Buzzing Mystery Case", es: "El caso del misterio zumbador" },
      topic: { en: "Vector-borne diseases", es: "Enfermedades transmitidas por vectores" },
      cover: "img/covers/book4",
      coverAlt: { en: "Cover of The Buzzing Mystery Case", es: "Portada de El caso del misterio zumbador" }
    },
    {
      id: "book5", caseNumber: 5, ready: false,
      title: { en: "The Superbug Mystery", es: "El misterio de las superbacterias" },
      topic: { en: "Antibiotic use", es: "Uso de antibióticos" },
      cover: "img/covers/book5",
      coverAlt: { en: "Cover of The Superbug Mystery", es: "Portada de El misterio de las superbacterias" }
    }
  ]
};
