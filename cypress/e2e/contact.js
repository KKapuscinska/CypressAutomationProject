// <reference types="Cypress" />

import { contactPage } from "../pages/pageObjects/contactPage"
import { mainPage } from "../pages/pageObjects/mainPage/mainPage"

describe ('Contact page', function (){

    beforeEach(() => {
        cy.visit('/kontakt')
        cy.fixture('contact').then(function(data)
    {
        this.data=data
    })
      
    })

    it('Page loads correctly.', function(){
      
        contactPage.getContactPageTitle().contains(this.data.pageTitle)
        contactPage.getRossMap().should('be.visible')
        contactPage.getCentralaBox().should('be.visible')
        contactPage.getCentralaBox().find('.h3').contains(this.data.rossFullName)
        contactPage.getCentralaBoxInfo().eq(0).should('have.text', this.data.centralaAdress)
        contactPage.getCentralaBoxInfo().eq(1).should('have.text', this.data.centralaContact)
        contactPage.getCentralaBoxInfo().eq(2).should('have.text', this.data.centralaInfo)

        contactPage.getSendMsgBtn().should('have.text', this.data.sendBtnText)

        contactPage.getContactFormHeader().find('.h1').should('have.text', this.data.contactFormHeader)

        contactPage.getCompanyContactModule().find('.title').eq(0).should('have.text', this.data.companyContactModuleFirstHeader)
        contactPage.getCompanyContactModule().find('.title').eq(1).contains(this.data.companyContactModuleSecondHeader)
        contactPage.getCompanyContactModule().find('.title').eq(2).contains(this.data.companyContactModuleThirdHeader)


    })

    it('Sending a blank contact form.', function(){
      
        contactPage.getSendMsgBtn().scrollIntoView()
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - blank email field
        contactPage.getUserContactFields().eq(0).find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.emailLackFeedback)
          
        //Checking the validation message - blank message field
        contactPage.getTaskFields().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.msgLackFeedback)

        //Checking the validation message - Captcha
        contactPage.getCaptcha().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.captchaInvalidFeedback)
        
    })

    it('Validation of email, phone number and message field.', function(){

        contactPage.getFirstName().scrollIntoView()
        mainPage.cookiesAgreement()

        contactPage.getEmail().type(this.data.letter).should('have.value', (this.data.letter))

        contactPage.getPhoneNumber().type(this.data.digit)
        
        //Validation of max length - message
        contactPage.getMsg().should('have.attr','maxlength','5000')

        contactPage.getMsg().type(this.data.tooShortMsg).should('have.value', (this.data.tooShortMsg))

        cy.scrollTo('bottom')
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - incorrect email
        contactPage.getUserContactFields().find(contactPage.getFeedbackText()).eq(0)
        .should('be.visible').and('have.text', this.data.emailInvalidFeedback)

        ////Checking the validation message - too short value in Phone number field
        contactPage.getUserContactFields().find(contactPage.getFeedbackText()).eq(1)
        .should('be.visible').and('have.text', this.data.phoneNumberInvalidFeedback)
      
        //Checking the validation message - too short value in Message field
        contactPage.getTaskFields().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text',this.data.msgInvalidFeedback)

    })

    it('Filling out the contact form.', function(){

        contactPage.getContactFormHeader().scrollIntoView()
        mainPage.cookiesAgreement()

        contactPage.getFirstName().type(this.data.firstName).should('have.value', (this.data.firstName))   
        contactPage.getLastName().type(this.data.lastName).should('have.value', (this.data.lastName)) 
        contactPage.getEmail().type(this.data.mail).should('have.value', (this.data.mail))
        contactPage.getPhoneNumber().type(this.data.phone).should('have.value', (this.data.phone))
        
        contactPage.getTaskFields().find(contactPage.getCategoryRadio()).eq(0).check({force:true}).should('be.checked')
        
        contactPage.getTaskFields().eq(1).click()

        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category1)
            {
                cy.wrap($el).click()
            }  
        }) 

        contactPage.getNumberFieldInCategory().type(this.data.clubCardNumber)

        contactPage.getMsg().type(this.data.message).should('have.value', (this.data.message))

        cy.scrollTo('bottom')
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - Captcha
        contactPage.getCaptcha().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.captchaInvalidFeedback)     
                
    })

})

describe ('Request category - Stationary drugstore.', function (){

    beforeEach(() => {
        cy.visit('/kontakt')
        cy.fixture('contact').then(function(data)
        
    {
        this.data=data

        contactPage.getEmail().scrollIntoView()
        contactPage.getTaskFields().find(contactPage.getCategoryRadio()).eq(0).check({force:true}).should('be.checked')
        
    })
    
      
    })

    it('Verify "Numer karty klubu" field in "Klub Rossmann" category.', function(){

        contactPage.getTaskFields().eq(1).click()
        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category1)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()        
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - blank 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory().type(this.data.letter)

        //Checking the validation message - letter in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory().type('{backspace}')

        contactPage.getNumberFieldInCategory().type(this.data.digit)
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - too short value in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory().type(this.data.clubCardNumber)

        //Checking the validation message - too long value in 'Numer karty klubu' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory().type('{backspace}')
        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed in correct value
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('not.exist')

    })

    it('Verify "Numer karty Programu Rossnę!" field in "Program Rossnę!" category.', function(){

        contactPage.getTaskFields().eq(1).click()
        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category2)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()        
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - blank 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory().type(this.data.letter)

        //Checking the validation message - letter in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberLackFeedback)

        contactPage.getNumberFieldInCategory().type('{backspace}')

        contactPage.getNumberFieldInCategory().type(this.data.digit)
        contactPage.getSendMsgBtn().click()

        //Checking the validation message - too short value in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory().type(this.data.clubCardNumber)

        //Checking the validation message - too long value in 'Numer karty Programu Rossnę!' field
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('be.visible').and('have.text', this.data.cardNumberInvalidFeedback)

        contactPage.getNumberFieldInCategory().type('{backspace}')
        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed in correct value
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('not.exist')

    })

    it('Verify "Pytanie o produkt" category.', function(){

        contactPage.getTaskFields().eq(1).click()
        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category4)
            {
                cy.wrap($el).click()
            }  
        })

        mainPage.cookiesAgreement()        
        contactPage.getSendMsgBtn().click()

        //Checking if the validation message is not displayed
        contactPage.getUnitOfNumberFieldInCategory().find(contactPage.getFeedbackText())
        .should('not.exist')

        //Checking value of text above 'Number katalogowy produktu' field
        contactPage.getCategoryDescription().should('be.visible').and('have.text', this.data.category4Description)

    })  

    it('Verify "Usługi fotograficzne Cewe/Kodak" category.', function(){

        contactPage.getTaskFields().eq(1).click()
        contactPage.getCategoryList().find(contactPage.getCategory()).each(($el, index, $list) => {
            if($el.text()=== this.data.category6)
            {
                cy.wrap($el).click()
            }  
        })

        //Checking if the (card) number field is not displayed
        contactPage.getNumberFieldInCategory().should('not.exist')

    })

    

})   
    