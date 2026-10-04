# Germ Detectives: reading website

A small website where children, families and teachers can read the Germ Detectives books on a phone, tablet or laptop, in English or Spanish, and finish each book with a short quiz.

The site doesn't need a server, a database, accounts or a build step. Everything in this folder gets uploaded as-is.

## What's in this folder

| File or folder | What it is |
|---|---|
| `index.html` | The app. You shouldn't need to edit it. |
| `books.js` | **All the book content**: titles, page text (English and Spanish), quiz questions. Edit this to fix text or add books. |
| `img/book1/` | Book 1 illustrations **without text**, as `p1-1600.webp` / `p1-960.webp` for large and small screens. |
| `img/book1/print/` | Book 1's **finished pages with the text inside the picture** (from `Book1_ready`), in three sizes. |
| `img/covers/` | Front covers for the library page. |
| `audio/` | Empty for now. This is where narration recordings go (see below). |
| `fonts/` | The three typefaces, stored here so the site never calls Google. Andika is a font designed for early readers. |
| `tools/make_images.py` | Turns your PNG illustrations into the web-sized images the site uses. |

## Two ways to read each page

- **Printed page** shows your finished page exactly as printed, with English and Spanish together. It's the default on laptops, projectors and tablets held sideways, where the words are big enough to read.
- **Large text** shows the picture with the story as real text in one language at a time. It's the default on phones and on tablets held upright, where the printed words would be too small.

Readers can switch with the **Printed page / Large text** buttons at the top, and the site remembers their choice. In Printed page view on a small screen, a "Words too small?" link switches to Large text. Screen readers always get the story as text.

## Put it online with GitHub Pages (about 10 minutes, no coding)

1. Sign in at github.com and click **New repository**. Name it `germ-detectives` and set it to **Public**. (A free account can only publish public repositories. If you have GitHub Pro, for example through GitHub Education, a private repository also works.)
2. In the new repository, click **Add file → Upload files**. Drag in **everything inside this folder**, keeping the subfolders, and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, then branch **main** and folder **/ (root)**. Click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/germ-detectives/`.

To change something later, edit the file on GitHub (pencil icon) or upload the new version. The site updates by itself within a minute or two.

> Before sharing publicly, check with TTU University Communications about showing the Tennessee Tech logo, which appears on the covers, on a public website.

## Links you can share

Add these to the end of the site address:

- `#es` opens the library in Spanish.
- `#book1` opens Farm Safety. `#book1-es` opens it in Spanish.
- `#book1-p5` opens page 5 directly, which is handy for projecting one page in class.

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

## Add Books 2–5

1. Make sure you have the text-free illustrations named `1.png`, `2.png` … and the front/back cover spread in the book's folder.
2. From inside this website folder, run:
   ```
   pip install pillow
   python tools/make_images.py "C:\Manuel\Grant_applications\Children's_book\Book2_Water_microorganisms" book2
   ```
   When the finished pages with text are ready (for example in a `Book2_ready` folder with `Page_1.png` …), also run:
   ```
   python tools/make_images.py "C:\Manuel\Grant_applications\Children's_book\Book2_Water_microorganisms\Book2_ready" book2 --printed
   ```
   Then give each page in `books.js` a `printed: "img/book2/print/p1"` line, like Book 1. The Printed page / Large text switch appears once every page of the book has one. If you later change a finished page, run the `--printed` command again and upload the new images.
3. In `books.js`, find the `book2` entry. Copy the `blurb`, `narration`, `pages` and `quiz` sections from Book 1, replace the text, and change `ready: false` to `ready: true`.
   - `side: "left"` or `"right"` puts the story card where the picture has empty space on wide screens.
   - `focus` (0–100) is the part of the picture kept on phones held upright (0 = left edge, 100 = right edge).
   - `alt` is a one-sentence description of the picture for children who use screen readers.

## The quiz and Phase 4 assessment

The quiz is practice only. **Nothing a reader does is saved or sent anywhere**, and the site has no analytics. That matters because most readers are under 13 (COPPA) and in schools (FERPA).

If you want to use responses for the project's impact assessment, collect them with an IRB-approved instrument outside this site (for example a teacher survey or a Qualtrics link). Don't add tracking to the site.

## Text differences from the printed pages

In **Large text** view, the story text matches the printed Book 1 except for punctuation that seemed to be missing in print. The **Printed page** view shows your pages exactly as they are, so fix these in Photoshop if you agree:

- Page 3 (EN): added quotation marks to *"Clue found!" said Deanna.* and *"Salmonella and Campylobacter … chicken poop," explained Sam.*
- Page 3 (ES): added the opening quotation marks to *"¡Encontramos una pista!", dijo Deanna.* and *"Salmonella y Campylobacter … gallinas", explicó Sam.*
- Page 4 (EN): added quotation marks to *"They had the flu last year," whispered Deanna.*

These are new and need a native-speaker review: the Spanish book titles (all five), the Spanish back-cover summary for Book 1, the picture descriptions (`alt`), and the quiz in both languages.
