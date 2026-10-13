# Germ Detectives: reading website

A small website where children, families and teachers can read the Germ Detectives books on a phone, tablet or laptop, in English or Spanish, and finish each book with a short quiz.

The site doesn't need a server, a database, accounts or a build step. Everything in this folder gets uploaded as-is.

## What's in this folder

| File or folder | What it is |
|---|---|
| `index.html` | The app. You shouldn't need to edit it. |
| `books.js` | **All the book content**: titles, which picture each page uses, the story text shown on phones, picture descriptions, and the quizzes. |
| `img/book1/` … `img/book5/` | Each book's **finished pages with the text inside the picture**, in three sizes (inside a `print` folder). |
| `img/covers/` | Front covers for the library page. |
| `audio/` | Empty for now. This is where narration recordings go (see below). |
| `fonts/` | The three typefaces, stored here so the site never calls Google. Andika is a font designed for early readers. |
| `tools/make_images.py` | Turns your finished PNG pages and cover into the web-sized images the site uses. |

## How the pages look

- **Laptops, projectors and tablets held sideways** show your finished page exactly as printed, with English and Spanish together.
- **Phones and tablets held upright** show the picture part of the same page (the text box is cut away) with the story underneath as large, real text in the language picked with **EN / ES**. A **Whole page** button shows the full printed page. Turning a phone sideways shows the picture and the text side by side.

The picture part comes from `artBox` in `books.js`, so there are no extra images to make.

Colors follow the official Tennessee Tech palette: Purple `#753BBD` and Gold `#FFD100`, with Gray `#444444`, Black and White ([tntech.edu/ocm/color.php](https://www.tntech.edu/ocm/color.php)).

## The site on GitHub

The site lives in the `germ-detectives` repository on GitHub and is published at **https://manueljara.github.io/germ-detectives/**.

**GitHub's web upload takes fewer than 100 files at a time**, so upload folder by folder, from inside the matching GitHub folder:

1. In GitHub, click into the folder you're updating (for example **img**, then **covers**).
2. Click **Add file → Upload files**, drag in the files or folder from the same place in this folder on your computer, and click **Commit changes**.
3. Upload `books.js` **last**, from the main page of the repository. That way a book only appears in the library once its pictures are already online.

A file with the same name replaces the old one. Files you don't upload stay as they are.

After an upload, give GitHub about two minutes to publish. Book changes show up on the next visit, because the site always fetches the latest `books.js`. Browsers can keep their saved copy of `index.html` (the app's design) and of the pictures for up to 10 minutes. To see a change right away, press **Ctrl + Shift + R**, or open the site with `?v=` and any new number at the end, for example `https://manueljara.github.io/germ-detectives/?v=7`.

> Before sharing publicly, check with TTU University Communications about showing the Tennessee Tech logo, which appears on the covers, on a public website.

## Links you can share

Add these to the end of the site address:

- `#es` opens the library in Spanish.
- `#book1` … `#book5` open a book. `#book3-es` opens Book 3 in Spanish.
- `#book2-p5` opens page 5 of Book 2 directly, which is handy for projecting one page in class.

## Add narration (recorded voices)

1. Record one MP3 per page per language. Phone voice memos are fine. A quiet room matters more than the microphone.
2. Name and place the files like this:
   ```
   audio/book1/en/page-1.mp3 ... page-8.mp3
   audio/book1/es/page-1.mp3 ... page-8.mp3
   audio/book1/en/page-0.mp3   (optional: reads the back-cover summary on the cover screen)
   ```
3. In `books.js`, change `narration: { en: false, es: false }` to `true` for each language you've recorded.

A **Listen** button then appears on every page. Once a child taps it, each page they turn plays its recording automatically until they tap **Pause**. To keep files small, export as mono MP3 at 64–96 kbps. Audacity (free) can convert them.

## Fix or replace a finished page

1. Fix the page in Photoshop and save it as `Page_N.png` in the book's folder, as before.
2. From inside this website folder, run (Book 3 shown):
   ```
   pip install pillow
   python tools/make_images.py "C:\Manuel\Grant_applications\Children's_book\Book3_Food_safety" book3
   ```
   This remakes all of that book's web pictures in `img\book3\print`.
3. In GitHub, go into **img → book3 → print**, then **Add file → Upload files**. Drag in the new files for that page (for example `p7-960.webp`, `p7-1600.webp`, `p7-2400.webp`) and click **Commit changes**.
4. If the page's words changed, update that page's `text` in `books.js` too (phones show this text), then upload `books.js`.

To change a cover, run the same command with `--cover` at the end, and upload the two files from `img\covers` into **img → covers**.

In `books.js`, each page has:
- `printed: "img/book3/print/p1"` (p2, p3 …): the picture.
- `artBox: [left, top, right, bottom]`: the picture part shown on phones, in % of the page's width and height, kept clear of the text box.
- `text`: the story in English and Spanish. Phones show it under the picture and screen readers read it aloud, so it must match the printed page.
- `alt`: a one-sentence description of the picture, for screen readers.

## The quiz and Phase 4 assessment

The quiz is practice only. **Nothing a reader does is saved or sent anywhere**, and the site has no analytics. That matters because most readers are under 13 (COPPA) and in schools (FERPA).

If you want to use responses for the project's impact assessment, collect them with an IRB-approved instrument outside this site (for example a teacher survey or a Qualtrics link). Don't add tracking to the site.

## Corrections to make on the printed pages

Laptops show your pages exactly as printed. The phone text in `books.js` already has the fixes below, so the printed pages are the only place they're needed. After fixing a page, follow "Fix or replace a finished page" above.

**Book 1 – Farm Safety**
- Page 3 (EN): add quotation marks to *"Clue found!" said Deanna.* and *"Salmonella and Campylobacter … chicken poop," explained Sam.*
- Page 3 (ES): add the opening quotation marks to *"¡Encontramos una pista!", dijo Deanna.* and *"Salmonella y Campylobacter … gallinas", explicó Sam.*
- Page 4 (EN): add quotation marks to *"They had the flu last year," whispered Deanna.*

**Book 2 – The Water Mystery**
- Page 1 (ES): "Detectives de los **G**érmenes" is capitalized here but not elsewhere in the series.

**Book 3 – The Food Safety Case**
- Page 7 (ES): the last bullet ends with leftover words: "…en el refrigerador. **podemos guardarlo.**"
- Page 3 (EN): the closing quotation mark of "those drips," slipped to the start of the next line.
- Page 1: the English says **Deanna** opened the notebook, the Spanish says **Sam** (the picture shows Sam).
- Page 3 (ES): leaves out "They called an adult to clean up."
- Page 2 (ES): *Salmonella* and *Campylobacter* aren't in italics.

**Book 4 – The Buzzing Mystery Case**
- Page 3 (ES): "pueden llevar **el** enfermedades" has an extra "el".
- Page 7 (ES): "…Deanna y Sam**.:**" has a period before the colon.
- Page 7 (EN): there's an empty bullet point above the divider line.

**Book 5 – The Superbug Mystery**
- Back cover (EN): "they discover simple rules **working and people healthy**" is missing words, probably "rules **to keep antibiotics** working and people healthy". The library summary uses that wording.
- Page 2 (ES): the last line ends with a stray closing quotation mark: "…en el cuaderno.**"**"
- Page 8 (ES): the opening quotation mark of "¿Podemos llevar el cartel…?" sits at the end of the line above.

These were written for the site and need a native-speaker review: the Spanish book titles and library summaries, the picture descriptions (`alt`), and the quizzes in both languages.
