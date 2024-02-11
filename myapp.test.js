const  {sortBoardingCards}  = require('./myapp');
//jest test (TDD)

describe("Sorts all boarding cards and display journey", () => {
    it("Should sorts all boarding cards and display journey", () => {
        const unsortedCards = [
            {
                "TransportType": "Flight",
                "flight_number": "SK22",
                "From": "Stockholm",
                "Destination": "New York JFK",
                "Gate": "22",
                "seat": "7B",
                "baggage_transfer": true
            },
            {
                "TransportType": "Flight",
                "flight_number": "SK455",
                "From": "Gerona Airport",
                "Destination": "Stockholm",
                "Gate": "45B",
                "seat": "3A",
                "baggage_drop": "ticket counter 344"
            },
            {
                "TransportType": "Bus",
                "From": "Barcelona",
                "Destination": "Gerona Airport",
                "seat": "No seat"
            },
            {
                "TransportType": "Train",
                "TransportName": "78A",
                "From": "Madrid",
                "Destination": "Barcelona",
                "seat": "45B"
            }
        ];

        const sortedJourney = sortBoardingCards(unsortedCards);
        expect(sortedJourney).toMatch(/^Take Train from Madrid to Barcelona\. Sit in seat 45B\.(\s|\S)*?Take Bus from Barcelona to Gerona Airport\. No seat assignment\.(\s|\S)*?Take Flight from Gerona Airport to Stockholm\. SK455\. Gate 45B, seat 3A\. Baggage drop at ticket counter 344\.(\s|\S)*?Take Flight from Stockholm to New York JFK\. SK22\. Gate 22, seat 7B\. Baggage will be automatically transferred from your last leg\.$/);
    });
});
