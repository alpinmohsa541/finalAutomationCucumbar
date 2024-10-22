Feature: kasiraja Register Tests 

    @all
    Scenario: Register successfully with valid credentials
        Given I open kasiraja website
        When I Register with valid credentials
        Then I should be on the login page
