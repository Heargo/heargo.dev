# CVs

The site serves the CVs from `public/cv/` (`CV_Hugo_Rey_fr.pdf`, `CV_Hugo_Rey_en.pdf`); the CV button picks the file for the current language.

The public CVs carry **no phone number or email**, so bots scraping the site can't harvest them; the Contact block only links to https://cv.app.heargo.dev.

- **French**: made in Canva. Remove the phone and email lines in Canva, export it as PDF and replace `public/cv/CV_Hugo_Rey_fr.pdf`.
- **English**: [`cv_en.html`](cv_en.html) recreates the Canva layout (A4, `#274977` blue, Glacial Indifference + Raleway) with the translated text. When the French CV changes, update the text here and regenerate:

```sh
chromium --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/cv/CV_Hugo_Rey_en.pdf "file://$PWD/docs/cv/cv_en.html"
```

Check that it is still a single page (`pdfinfo public/cv/CV_Hugo_Rey_en.pdf | grep Pages`).

Fonts in `fonts/` are under the SIL Open Font License (see the `OFL-*.txt` files).
