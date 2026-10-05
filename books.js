/* =====================================================================
   GERM DETECTIVES — BOOK CONTENT
   This is the only file you need to edit to change text or add books.

   Text formatting inside "text":
     • Each line is shown on its own line.
     • **double stars** make text bold.
     • _underscores_ make text italic (use for species names).
     • A line starting with "- " becomes a bullet point.

   Pages: each page is your finished page with the text inside the picture,
     saved in img/<book-id>/print/ as p1-960.webp, p1-1600.webp, p1-2400.webp
     (tools/make_images.py --printed makes these). For each page:
       printed: "img/<book-id>/print/p1"   which picture to show
       artBox:  [left, top, right, bottom] the picture part of the page without the
                text box, in % of the page width/height. Phones show this part, with
                the story below it as large text in the chosen language.
       text:    the story in English and Spanish. Phones show it under the picture;
                screen readers read it aloud.

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
          printed: "img/book1/print/p1", artBox: [46.5, 10, 100, 86.1],
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
          printed: "img/book1/print/p2", artBox: [46.5, 12, 100, 88.1],
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
          printed: "img/book1/print/p3", artBox: [46.5, 4, 100, 80.1],
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
          printed: "img/book1/print/p4", artBox: [46.5, 4, 100, 80.1],
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
          printed: "img/book1/print/p5", artBox: [46.5, 22, 100, 98.1],
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
          printed: "img/book1/print/p6", artBox: [46.5, 14, 100, 90.1],
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
          printed: "img/book1/print/p7", artBox: [46.5, 8, 100, 84.1],
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
          printed: "img/book1/print/p8", artBox: [0, 16, 53.5, 92.1],
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

    /* ------------------------------------------------------------ BOOK 2 */
    {
      id: "book2",
      caseNumber: 2,
      ready: true,
      title: { en: "The Water Mystery", es: "El misterio del agua" },
      topic: { en: "Water microorganisms", es: "Microorganismos del agua" },
      cover: "img/covers/book2",
      coverAlt: {
        en: "Cover of The Water Mystery: by a creek, Deanna looks through a microscope next to a jar of water while Sam writes in his clue log. A magnifying glass shows tiny water germs.",
        es: "Portada de El misterio del agua: junto a un arroyo, Deanna mira por un microscopio al lado de un frasco con agua mientras Sam escribe en su cuaderno de pistas. Una lupa muestra gérmenes diminutos del agua."
      },
      blurb: {
        en: "Sam and Deanna love solving mysteries. When clues in the creek lead the Germ Detectives to tiny water germs, wells, and safe drinking water, they discover simple water safety rules that help families stay healthy.",
        es: "A Sam y a Deanna les encanta resolver misterios. Cuando unas pistas en el arroyo llevan a los detectives de los gérmenes hasta gérmenes diminutos del agua, pozos y agua potable segura, descubren reglas sencillas de seguridad del agua que ayudan a las familias a mantenerse sanas."
      },
      narration: { en: false, es: false },

      pages: [
        { // 1
          printed: "img/book2/print/p1", artBox: [46, 6, 100, 82.8],
          alt: {
            en: "Sam and Deanna crouch at the edge of a clear creek, filling a jar with water, while their friend Ben holds his stomach.",
            es: "Sam y Deanna se agachan a la orilla de un arroyo de agua clara para llenar un frasco, mientras su amigo Ben se sujeta el estómago."
          },
          text: {
            en: `“The creek looks so clear!” said Deanna.
“Clear doesn’t always mean safe,” Sam replied.
Ben arrived, holding his stomach. “My tummy hurts. I drank water from our well.”
“Let’s tell an adult and look for clues,” said Deanna.
**“Germ Detectives, we have a mystery!”**`,
            es: `“¡El agua del arroyo se ve tan clara!”, dijo Deanna.
“Que sea clara no significa que sea segura”, respondió Sam.
Ben llegó con dolor de estómago. “Me duele la barriga. Bebí agua de nuestro pozo”.
“Avisemos a un adulto y busquemos pistas”, dijo Deanna.
**“¡Detectives de los Gérmenes, tenemos un misterio!”**`
          }
        },
        { // 2
          printed: "img/book2/print/p2", artBox: [49, 27, 100, 99.5],
          alt: {
            en: "Sam looks at a jar of creek water through a magnifying glass. A magnified circle shows the parasites Giardia and Cryptosporidium.",
            es: "Sam mira un frasco con agua del arroyo a través de una lupa. Un círculo ampliado muestra los parásitos Giardia y Cryptosporidium."
          },
          text: {
            en: `“My magnifying glass can’t show these germs,” said Sam.
Deanna pointed to an enlarged drawing. “_Giardia_ and _Cryptosporidium_ are tiny parasites. They can get into water through poop from infected people or animals.
**Swallowing that water can cause stomachaches and diarrhea.**”`,
            es: `“Mi lupa no permite ver estos gérmenes”, dijo Sam.
Deanna señaló un dibujo ampliado. “_Giardia_ y _Cryptosporidium_ son parásitos diminutos. Pueden llegar al agua a través de la caca de personas o animales infectados.
**Si tragamos esa agua, podemos tener dolor de barriga y diarrea**”.`
          }
        },
        { // 3
          printed: "img/book2/print/p3", side: "right", artBox: [0, 20, 53, 95.4],
          alt: {
            en: "Cows graze on a hill above the creek while muddy rainwater runs down into it. Deanna points at the water and Sam takes notes. A magnified circle shows E. coli bacteria.",
            es: "Unas vacas pastan en una colina sobre el arroyo mientras el agua de lluvia con barro baja hasta él. Deanna señala el agua y Sam toma notas. Un círculo ampliado muestra bacterias E. coli."
          },
          text: {
            en: `Cows grazed above the creek.
“Look at the muddy rainwater!” said Deanna.
“Rain can wash manure, or animal poop, into the stream.”
“It can carry bacteria,” said Sam.
**“Some kinds of _E. coli_ can make us sick if we swallow them.”**`,
            es: `Unas vacas pastaban cerca del arroyo.
“¡Mira el agua de lluvia llena de barro!”, dijo Deanna.
“La lluvia puede arrastrar estiércol, o caca de animales, hasta el arroyo”.
“Puede llevar bacterias”, dijo Sam.
**“Algunos tipos de _E. coli_ pueden enfermarnos si los tragamos”.**`
          }
        },
        { // 4
          printed: "img/book2/print/p4", artBox: [49, 24, 100, 96.5],
          alt: {
            en: "A cutaway view of the ground shows underground water flowing from a leaking septic tank toward a spring, carrying germs. Deanna points at it while Sam writes in his notebook.",
            es: "Un corte del suelo muestra agua subterránea que sale de un tanque séptico con fugas y llega a un manantial llevando gérmenes. Deanna la señala mientras Sam escribe en su cuaderno."
          },
          text: {
            en: `The detectives followed the creek to a spring.
“Water underground can feed springs and wells,” said Deanna.
“Germs from animal poop or leaking sewage tanks can reach that water.”
Sam opened his notebook.
**“An underground clue! Let’s ask an adult to help check the well.”**`,
            es: `Los detectives siguieron el arroyo hasta un manantial.
“El agua bajo tierra puede llegar a manantiales y pozos”, dijo Deanna. “La caca de animales o las fugas de tanques de aguas residuales pueden llevar gérmenes hasta ella”.
Sam abrió su cuaderno.
**“¡Una pista subterránea! Pidamos ayuda a un adulto para revisar el pozo”.**`
          }
        },
        { // 5
          printed: "img/book2/print/p5", artBox: [46, 8, 100, 99],
          alt: {
            en: "Sam and Deanna watch a garden sprinkler spray a fine mist with a rainbow. A small diagram shows water from a pipe becoming mist that a child breathes into his lungs.",
            es: "Sam y Deanna observan un rociador de jardín que lanza una neblina fina con un arcoíris. Un pequeño diagrama muestra el agua de una tubería convirtiéndose en neblina que un niño respira hasta sus pulmones."
          },
          text: {
            en: `At a sprinkler, Sam noticed the mist.
“Those are tiny water droplets,” he said.
“Bacteria called _Legionella_ can grow in warm water that sits in pipes,” said Deanna.
**“Breathing in droplets containing these bacteria can cause a lung infection. Adults help keep water systems safe.”**`,
            es: `Sam observó la neblina de un rociador.
“Son gotitas de agua”, dijo.
“Las bacterias _Legionella_ pueden crecer en agua tibia estancada en tuberías”, explicó Deanna.
**“Respirar gotitas que contienen estas bacterias puede causar una infección en los pulmones. Los adultos ayudan a cuidar los sistemas de agua”.**`
          }
        },
        { // 6
          printed: "img/book2/print/p6", artBox: [49, 22, 100, 97],
          alt: {
            en: "In a classroom with several empty seats, Deanna points and Sam thinks. A diagram shows germs spreading from a glass of water and unwashed hands to a sick child and a door handle.",
            es: "En un salón de clases con varios asientos vacíos, Deanna señala y Sam piensa. Un diagrama muestra gérmenes que pasan de un vaso de agua y de unas manos sin lavar a un niño enfermo y a la manija de una puerta."
          },
          text: {
            en: `The next day, several classmates were home with a stomach bug.
“Viruses such as norovirus can cause vomiting and diarrhea,” said Deanna.
**“They can spread through contaminated water or from unwashed hands to our mouths,” said Sam. “Soap and water help stop them!”**`,
            es: `Al día siguiente, varios compañeros faltaron por una infección estomacal.
“Virus como el norovirus pueden causar vómitos y diarrea”, dijo Deanna.
**“Pueden propagarse por agua contaminada o pasar de las manos sin lavar a la boca”, dijo Sam. “¡El agua y el jabón ayudan a detenerlos!”**`
          }
        },
        { // 7
          printed: "img/book2/print/p7", artBox: [46, 22, 100, 98.8],
          alt: {
            en: "Sam, Deanna, and their classmates gather around a table to make a poster called Our Water Safety Plan.",
            es: "Sam, Deanna y sus compañeros se reúnen alrededor de una mesa para hacer un cartel llamado Nuestro plan de seguridad del agua."
          },
          text: {
            en: `“Let’s turn our clues into a plan!” said Sam.
**Together, they wrote:**
- Drink water from a safe source.
- Wash hands with soap and water before eating and after using the toilet.
- Don’t drink untreated water from streams or springs.
- Ask adults to have wells checked and protected.`,
            es: `“¡Convirtamos nuestras pistas en un plan!”, dijo Sam. **Juntos escribieron:**
- Beber agua de una fuente segura.
- Lavarse las manos con agua y jabón antes de comer y después de ir al baño.
- No beber agua sin tratar de arroyos o manantiales.
- Pedir a los adultos que revisen y protejan los pozos.`
          }
        },
        { // 8
          printed: "img/book2/print/p8", artBox: [49, 25, 100, 97.5],
          alt: {
            en: "Ben, now feeling better, smiles with Sam, Deanna, and their friends next to a repaired well and a sign that says Clean Water, Healthy Life!",
            es: "Ben, ya recuperado, sonríe con Sam, Deanna y sus amigos junto a un pozo reparado y un letrero que dice: Clean Water, Healthy Life! (¡Agua limpia, vida sana!)."
          },
          text: {
            en: `A week later, Ben felt better.
“Adults had our well tested and repaired,” he said. “They followed advice to make our drinking water safe.”
Deanna closed her notebook.
**“We learned to look beyond clear water!”**
“And to ask for help,” said Sam.
“Case solved!”`,
            es: `Una semana después, Ben se sentía mejor.
“Los adultos hicieron analizar el agua y reparar nuestro pozo”, dijo. “Siguieron las indicaciones para que el agua fuera segura para beber”.
Deanna cerró su cuaderno.
**“¡Aprendimos que no basta con que el agua se vea clara!”**
“Y que debemos pedir ayuda”, dijo Sam.
“¡Caso resuelto!”`
          }
        }
      ],

      /* End-of-book quiz. "answer" is the position of the right option,
         counting from 0. Nothing a reader chooses is saved or sent anywhere. */
      quiz: [
        {
          q: { en: "Does clear water always mean safe water?", es: "¿El agua clara siempre es agua segura?" },
          options: [
            { en: "Yes, if it looks clear it is safe to drink", es: "Sí, si se ve clara se puede beber" },
            { en: "No, it can have germs too small to see", es: "No, puede tener gérmenes demasiado pequeños para verlos" }
          ],
          answer: 1,
          why: {
            en: "Clear doesn’t always mean safe. Some germs are so tiny that even a magnifying glass can’t show them.",
            es: "Que sea clara no significa que sea segura. Algunos gérmenes son tan pequeños que ni con lupa se pueden ver."
          }
        },
        {
          q: { en: "Which tiny parasites can get into water through poop?", es: "¿Qué parásitos diminutos pueden llegar al agua a través de la caca?" },
          options: [
            { en: "Ladybugs and spiders", es: "Mariquitas y arañas" },
            { en: "Tadpoles and minnows", es: "Renacuajos y pececitos" },
            { en: "_Giardia_ and _Cryptosporidium_", es: "_Giardia_ y _Cryptosporidium_" }
          ],
          answer: 2,
          why: {
            en: "Swallowing water with these parasites can cause stomachaches and diarrhea.",
            es: "Tragar agua con estos parásitos puede causar dolor de barriga y diarrea."
          }
        },
        {
          q: { en: "How can bacteria like _E. coli_ get into a stream?", es: "¿Cómo pueden llegar bacterias como _E. coli_ a un arroyo?" },
          options: [
            { en: "Rain washes manure, or animal poop, into it", es: "La lluvia arrastra estiércol, o caca de animales, hasta él" },
            { en: "Fish bring them from the ocean", es: "Los peces las traen del mar" },
            { en: "Sunlight makes them", es: "La luz del sol las crea" }
          ],
          answer: 0,
          why: {
            en: "That’s why muddy rainwater near animals is a clue to watch for.",
            es: "Por eso el agua de lluvia con barro cerca de los animales es una pista importante."
          }
        },
        {
          q: { en: "Where can _Legionella_ bacteria grow?", es: "¿Dónde pueden crecer las bacterias _Legionella_?" },
          options: [
            { en: "In cold snow", es: "En la nieve fría" },
            { en: "In warm water that sits in pipes", es: "En agua tibia estancada en tuberías" },
            { en: "In dry sand", es: "En la arena seca" }
          ],
          answer: 1,
          why: {
            en: "Breathing in tiny droplets with these bacteria can cause a lung infection. Adults help keep water systems safe.",
            es: "Respirar gotitas con estas bacterias puede causar una infección en los pulmones. Los adultos ayudan a cuidar los sistemas de agua."
          }
        },
        {
          q: { en: "What helps stop viruses like norovirus from spreading?", es: "¿Qué ayuda a detener virus como el norovirus?" },
          options: [
            { en: "Sharing cups with friends", es: "Compartir vasos con los amigos" },
            { en: "Washing hands with soap and water", es: "Lavarse las manos con agua y jabón" },
            { en: "Drinking water from a stream", es: "Beber agua de un arroyo" }
          ],
          answer: 1,
          why: {
            en: "Norovirus can spread through contaminated water or from unwashed hands to our mouths.",
            es: "El norovirus puede propagarse por agua contaminada o pasar de las manos sin lavar a la boca."
          }
        },
        {
          q: { en: "What should you do if you think your water might not be safe?", es: "¿Qué debes hacer si crees que el agua podría no ser segura?" },
          options: [
            { en: "Tell an adult and ask for help", es: "Avisar a un adulto y pedir ayuda" },
            { en: "Drink it anyway", es: "Beberla de todos modos" },
            { en: "Keep it a secret", es: "No decírselo a nadie" }
          ],
          answer: 0,
          why: {
            en: "Adults can have wells checked and protected so the water is safe to drink.",
            es: "Los adultos pueden hacer revisar y proteger los pozos para que el agua sea segura para beber."
          }
        }
      ]
    },

    /* ------------------------------------------------- BOOKS 3–5 (coming) */
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
