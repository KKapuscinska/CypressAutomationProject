# ProjectRSMN

Project Description

The aim of this project is to create and execute a set of automated tests for the www.rossmann.pl web application. 
It is a project designed for training purposes in the field of test automation, utilizing the Cypress tool.


Test scenarios
Below are some sample test scenarios that have been automated in this project:

    Contact Page tests (9):
Contact Page (4)
Request category - Stationary drugstore (5)


Contact Page:

Test case 1 - Page loads correctly.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Verify visibility of map, company/contact information
3. Check content of company information

Test case 2 - Sending a blank contact form.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Click 'Wyślij wiadomość' button
3. Verify error messages (email, message, captcha)

Test case 3 - Validation of email, phone number and message field.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Type letter in email field
3. Type digit in phone number field
4. Type <19 characters in message field
5. Click 'Wyślij wiadomość' button
6. Verify error messages (phone number, email, message)

Test case 4 - Filling out the contact form.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Klub Rossmann" 
3. Type correct values into: First Name, Last Name, Email, Phone number, message, rossmann club card number
4. Click 'Wyślij wiadomość' button
5. Verify error messages (captcha)


Request category - Stationary drugstore:

Test case 1 - Verify "Numer karty klubu" field in "Klub Rossmann" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Klub Rossmann" 
3. Click 'Wyślij wiadomość' button
4. Verify error messages (rossmann club card number, captcha)
5. Type letter in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
6. Verify error messages (rossmann club card number) and clear field
7. Type digit in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
8. Verify error messages (rossmann club card number)
9. Type >13 characters in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
10. Verify error messages (rossmann club card number)
11. Type correct value (13 char) and click 'Wyślij wiadomość' button
12. Verify no error message

Test case 2 - Verify "Numer karty Programu Rossnę!" field in "Program Rossnę!" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Program Rossnę!" 
3. Click 'Wyślij wiadomość' button
4. Verify error messages (rossmann club card number, captcha)
5. Type letter in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
6. Verify error messages (rossmann club card number) and clear field
7. Type digit in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
8. Verify error messages (rossmann club card number)
9. Type >13 characters in field 'Numer karty klubu' and click 'Wyślij wiadomość' button
10. Verify error messages (rossmann club card number)
11. Type correct value (13 char) and click 'Wyślij wiadomość' button
12. Verify no error message

Test case 3 - Verify "Pytanie o produkt" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Pytanie o produkt" 
3. Click 'Wyślij wiadomość' button
4. Verify no error message
5. Verify text above 'Number katalogowy produktu' field

Test case 4 - Verify "Usługi fotograficzne Cewe/Kodak" category.
1. Navigate to url 'https://www.rossmann.pl/kontakt'
2. Choose category of message: "Drogeria stacjonarna" and "Usługi fotograficzne Cewe/Kodak" 
3. Verify that there is no field to enter the (card) number 

    Login tests (6):

Test case 1 - Incorecct Login and Password
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter incorrect login and password
3. Click 'Zaloguj się' button
4. Verify error message

Test case 2 - Incorecct Password
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter correct login and incorrect password
3. Click 'Zaloguj się' button
4. Verify error message

Test case 3 - Too Short Login
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter one letter into the login and password fields
3. Click 'Zaloguj się' button
4. Verify error message

Test case 4 - Empty Fields
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Click 'Zaloguj się' button without entering any crudentials
3. Verify error messages

Test case 5 - Show Password Functionality
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Enter password
3. Click 'show password' option
4. Verify that the password visibility is toggled correctly


    Profile tests (21):
Profile tab (3)
Purchase history tab (2)
Favourite tab (3)
Rossne tab (5)
Settings tab (7)
Payments tab (1)

Profile:
Test case 1 - User without any favourite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that favourite products list is empty and visible
5. Verify that Payments logos module is visible

Test case 2 - User with favourite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with user account that has favourite products
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that only three favourite products are visible
5. Verify that Payments logos module is visible

Test case 3 - Redirecting to the list of favorite products.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Login user with user account that has favourite products
3. Go to 'Settings' page and select 'Profile' tab
4. Verify that empty favorite products list is not visible
5. Click 'Zobacz wszystkie' button
6. Verify url

Purchase history:
Test case 1 - User without any orders - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with an empty user account
3. Go to Settings page and click on History tab
4. Verify visibility of the empty list and Payments logos module
5. Verify invisibility of purchase history cards

Test case 2 - User with order - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has purchase history
3. Go to Settings page and click on History tab
4. Verify visibility of payments history card and Payments logos module
5. Verify invisibility of empty list


Favorite:
Test case 1 - User without any favorite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with an empty user account
3. Go to Settings page and click on Favourite tab
4. Verify visibility of empty list, info about 0 products and Payments logos module

Test case 2 - User with favorite products - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has favorite products
3. Go to Settings page and click on Favourite tab
4. Verify visibility of 'Dodaj produkty do koszyka' button, info about limit of favourite products, category list, promotion switch and Payments logos module
5. Verify invisibility of empty list

Test case 3 - Displaying only promotional products.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has favorite products
3. Go to Settings page and click on Favourite tab
4. Click 'Tylko w promocji' switch
5. Verify the display of promotional prices and omnibus info on all products


Rossne:
Test case 1 - Tab not displayed for a user who is not enrolled in the Rossnę! program.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with an empty user account
3. Go to the Settings page
4. Verify invisibility of Rossne tab

Test case 2 - User who enrolled in the Rossnę! program - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Verify visibility of nsl rossne box, rossne program box and Payments logos module

Test case 3 - Approval of an empty checkbox in Rossnę! nsl
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Zapisuję się' button in nsl rossne box
5. Verify error message

Test case 4 - Giving consent to receive Rossnę! nsl.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click on checkbox in nsl rossne box
5. Click 'Zapisuję się' button in nsl rossne box
6. Verify of success toast message

Test case 5 - Opting-out from receiving Rossnę! nsl.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a Rossne user account
3. Go to Settings page and click on Rossne tab
4. Click 'Rezygnuję' button in nsl rossne box
5. Click 'Rezygnuję' button in resignation confirmation window
6. Verify of success toast message


Settings:
Test case 1 - Plain user - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page 
4. Verify content of header and button in 'Twój sklep' module
5. Verify visibility of the 'Moje dane', 'Zmień hasło', 'Adresy' modules and 'Usuń konto' button
6. Verify that the nsl KR checkbox is unchecked 
7. Verify KR module header 

Test case 2 - Opening the Your Shop edition - user without Your Shop selected.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to 'Settings' page
4. Click 'Wybierz sklep' button in 'Twój sklep' module
5. Verify url and header of new page
6. Type city name in search field
7. Check if the list of stores is visible
8. Click 'Wróć do ustawień' button
9. Verify setting url

Test case 3 - Tab with Your Shop selected loads correctly.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has selected a store in the 'Twój sklep' module
3. Go to Settings page 
4. Verify content of header and button in 'Twój sklep' module
5. Verify visibility of shop opening hourn and adress in 'Twój sklep' module

Test case 4 - Opening the Your Shop edition - user with Your Shop selected.'
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with a user account that has selected a store in the 'Twój sklep' module
3. Go to Settings page 
4. Click 'Edytuj' button in 'Twój sklep' module
5. Verify url and header of new page
6. Type city name in search field
7. Verify visibility of the list of stores
8. Click 'Wróć do ustawień' button
9. Verify setting url

Test case 5 - User in Rossmann Club - tab appearance.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in as a user in Rossmann Club
3. Go to the Settings page
4. Verify visibility of 'Twój sklep', 'Moje dane', 'Zmień hasło' modules and 'Usuń konto' button
5. Verify content of headers in Rossmann Club box and Rossmann Club nsl box 
6. Verify visibility of 'Rezygnuję' button in Rossmann Club box

Test case 6 - Giving consent to receive KR nsl.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in as a user in Rossmann Club
3. Go to the Settings page
4. Click on checkbox and 'Zapisuję się' button in nsl Rosmann Club box
5. Verify of success toast message

Test case 7 - Opting out from receiving KR nsl.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in as a user in Rossmann Club
3. Go to the Settings page
4. Click 'Rezygnuję' button in nsl Rosmann Club box
5. Click 'Rezygnuję' button in resignation confirmation window
5. Verify of success toast message


Payments:
Test case 1 - Sending a blank form for adding a payment card.
1. Navigate to url 'https://www.rossmann.pl/logowanie'
2. Log in with empty user account
3. Go to the Settings page and select the Payments tab
4. Click on 'Karty płatnicze' card and verify url
5. Click on 'Dodaj kartę kredytową lub debetową' card and verify url
6. Verify visibility of fields: 'Numer karty', 'MM/RR' and 'CVV'
7. Click 'Dodaj kartę płatniczą' button
8. Verify error toast message



    Rossne tests (9):
Rossne Page tests (1)
Rossne Page redirects - Top tile (4)
Rossne Page redirects - Benefits module (4)

Rossne Page tests:
Test case 1 - The Rossnę! page - appearance.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Verify content of headers in Top tile and Benefit module
4. Verify visibility of 3 photos and text under photos in 'Program Rossnę! jest dla:' module
5. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Rossne Page redirects - Top tile:
Test case 1 - Redirecting to the Rossnę! promotion.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz produkty w promocji' button in 'Promocje' box in top tile
4. Verify url
5. Verify that 'Promocje Rossnę!' checkbox in Filters is checked
6. Verify display of rossne label and omnibus info on all products

Test case 2 - Redirecting to the "Oferty specjalne" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz Benefity' button in 'Benefity' box in top tile
4. Verify url
5. Verify page header
6. Verify visibility of 3 products img
7. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 3 - Redirecting to the "Stera wiedzy" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Strefy wiedzy' button in 'Strefa wiedzy' box in top tile
4. Verify url
5. Verify page header
6. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 4 - Redirecting to the "Czyściochowo" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Czyściochowa' button in 'Czyściochowo dla dzieci' box in top tile
4. Verify url
5. Verify page header
6. Verify visibility of 6 animation heroes
7. Verify visibility of Rossne social module, Czyściochowa akademia module and FAQ


Rossne Page redirects - Benefits module:
Test case 1 - Redirecting to the Rossnę! promotion.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz produkty w promocji' button in 'Promocje' in 'Benefity programu' module
4. Verify url
5. Verify that the 'Promocje Rossnę!' checkbox in Filters is checked
6. Verify the display of rossne label and omnibus info on all products

Test case 2 - Redirecting to the "Oferty specjalne" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Zobacz oferty specjalne' button in 'Oferty specjalne' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verify visibility of 3 products img
7. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 3 - Redirecting to the "Stera wiedzy" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Strefy wiedzy' button in 'Strefa wiedzy' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verifi visibility of Rossne social module, Czyściochowa akademia module and FAQ

Test case 4 - Redirecting to the "Czyściochowo" page.
1. Navigate to url 'https://www.rossmann.pl
2. Go to Rossne Page
3. Click 'Przejdź do Czyściochowa' button in 'Czyściochowo dla dzieci' in 'Benefity programu' module
4. Verify url
5. Verify page header
6. Verify visibility of 6 animation heroes
7. Verify visibility of Rossne social module, Czyściochowa akademia module and FAQ

Please note that the above test cases are just examples of basic documentation for automation purpose, and more test scenarios can be added as needed.