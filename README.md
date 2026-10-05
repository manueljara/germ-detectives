# Germ Detectives: reading website

A small website where children, families and teachers can read the Germ Detectives books on a phone, tablet or laptop, in English or Spanish, and finish each book with a short quiz.

The site doesn't need a server, a database, accounts or a build step. Everything in this folder gets uploaded as-is.

## What's in this folder

| File or folder | What it is |
|---|---|
| `index.html` | The app. You shouldn't need to edit it. |
| `books.js` | **All the book content**: titles, which picture each page uses, the story text for screen readers, and the quiz. Edit this to add books. |
| `img/book1/print/` | Book 1's **finished pages with the text inside the picture** (from `Book1_ready`), in three sizes. |
| `img/covers/` | Front covers for the library page. |
| `audio/` | Empty for now. This is where narration recordings go (see below). |
| `fonts/` | The three typefaces, stored here so the site never calls Google. Andika is a font designed for early readers. |
| `tools/make_images.py` | Turns your finished PNG pages and cover into the web-sized images the site uses. |

## How the pages look

- **Laptops, projectors and tablets held sideways** show your finished page exactly as printed, with English and Spanish together.
- **Phones and tablets held upright** show the picture part of the same page (the text box is cut away) with the story underneath as large, real text in the language picked with **EN / ES**. A **Whole page** button shows the full printed page. Turning a phone sideways shows the picture and the text side by side.

The picture part comes from `artBox` in `books.js`, so there are no extra images to make.

Colors follow the official Tennessee Tech palette: Purple `#753BBD` and Gold `#FFD100`, with Gray `#444444`, Black and White ([tntech.edu/ocm/color.php](https://www.tntech.edu/ocm/color.php)).

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

1. From inside this website folder, prepare the finished pages (the folder with `Page_1.png`, `Page_2.png` …) and the cover:
   ```
   pip install pillow
   python tools/make_images.py "C:\Manuel\Grant_applications\Children's_book\Book2_Water_microorganisms\Book2_ready" book2
   python tools/make_images.py "C:\Manuel\Grant_applications\Children's_book\Book2_Water_microorganisms" book2 --cover
   ```
   If you later change a finished page, run the first command again and upload the new images.
2. In `books.js`, find the `book2` entry. Copy the `blurb`, `narration`, `pages` and `quiz` sections from Book 1, replace the content, and change `ready: false` to `ready: true`. For each page:
   - `printed: "img/book2/print/p1"` (p2, p3 …) is the picture.
   - `artBox: [left, top, right, bottom]` is the picture part shown on phones, in % of the page's width and height. Keep it clear of the text box and about 5:4 in shape. For Book 1 it's `[46.5, 10, 100, 86.1]` when the text box is on the left. If you leave it out, the app uses the side of the page opposite the text box (`side: "left"` or `"right"`).
   - `text` is the story in English and Spanish. Phones show it under the picture and screen readers read it aloud, so it must match the printed page.
   - `alt` is a one-sentence description of the picture, also for screen readers.

## The quiz and Phase 4 assessment

The quiz is practice only. **Nothing a reader does is saved or sent anywhere**, and the site has no analytics. That matters because most readers are under 13 (COPPA) and in schools (FERPA).

If you want to use responses for the project's impact assessment, collect them with an IRB-approved instrument outside this site (for example a teacher survey or a Qualtrics link). Don't add tracking to the site.

## Punctuation to check on the printed pages

Laptops show your pages exactly as printed. These look like missing quotation marks. The phone text in `books.js` already has them, so if you agree, fix them in Photoshop and rerun `make_images.py`:

- Page 3 (EN): added quotation marks to *"Clue found!" said Deanna.* and *"Salmonella and Campylobacter … chicken poop," explained Sam.*
- Page 3 (ES): added the opening quotation marks to *"¡Encontramos una pista!", dijo Deanna.* and *"Salmonella y Campylobacter … gallinas", explicó Sam.*
- Page 4 (EN): added quotation marks to *"They had the flu last year," whispered Deanna.*

These were written for the site and need a native-speaker review: the Spanish book titles (all five), the Spanish back-cover summary for Book 1, the picture descriptions (`alt`), and the quiz in both languages.
