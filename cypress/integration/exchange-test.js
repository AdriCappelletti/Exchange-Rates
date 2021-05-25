const URL = "http://192.168.0.12:8080"

context("exchange-rates",()=>{
    before(()=>{cy.visit(URL)})
    it("checks if there is rates options", ()=>{
        cy.get(".rate").should('have.length.greaterThan', 1)
    })

    it('checks if rates options matches api rates', ()=>{
        let exchangeApiInfo
    
        cy.request('https://v6.exchangerate-api.com/v6/e38513aaab8ad9013a8733cc/latest/USD').then((response)=>{
            exchangeApiInfo = response.body.conversion_rates
        })

        
        cy.get('.rate').each((rate)=>{
            const rateValue = rate[0].value
            cy.get('#rates').select(rateValue)
            compareRates(rateValue)
        })
        
        const compareRates = (rateValue)=>{
            cy.get('#check-btn').click()
            let rate= exchangeApiInfo[rateValue].toFixed(2)
            cy.get('#rate-value').should('have.text',rate)
        }
    
    })
})
