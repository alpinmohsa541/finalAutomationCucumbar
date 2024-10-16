Feature: kasiraja Login Tests 

    @all 
    Scenario: Login successfully with valid credentials
        Given I open kasiraja website
        When I Login with valid credentials
        Then I should be on the dashboard page
        
    @all 
    Scenario: Verify login failed with invalid username
        Given I open kasiraja website
        When I Login with invalid username
        Then I should see an error message
        
    @all 
    Scenario: Verify login failed with invalid password
        Given I open kasiraja website
        When I Login with invalid password
        Then I should see an error message
