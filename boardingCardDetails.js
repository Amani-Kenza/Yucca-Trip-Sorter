//using DDD
// Define the BoardingCard class
class BoardingCard {
    constructor({ TransportType, From, Destination, TransportName, seat, flight_number, Gate, baggage_drop, baggage_transfer }) {
        this.TransportType = TransportType;
        this.From = From;
        this.Destination = Destination;
        this.TransportName = TransportName;
        this.seat = seat;
        this.flight_number = flight_number;
        this.Gate = Gate;
        this.baggage_drop = baggage_drop;
        this.baggage_transfer = baggage_transfer;
    }

    // Method to generate journey description for the boarding card
    JourneyDescription() {
        let description = `Take ${this.TransportType} from ${this.From} to ${this.Destination}. `;
    
        if (this.TransportType === "Train") {
            if (this.seat) description += `Sit in seat ${this.seat}.`;
        } else if (this.TransportType === "Bus") {
            description += "No seat assignment.";
        } else if (this.TransportType === "Flight") {
            if (this.flight_number) description += `${this.flight_number}. `;
            if (this.Gate) description += `Gate ${this.Gate}, `;
            if (this.seat) description += `seat ${this.seat}. `;
            if (this.baggage_drop) description += `Baggage drop at ${this.baggage_drop}. `;
            else if (this.baggage_transfer) description += `Baggage will be automatically transferred from your last leg.`;
        }
    
        return description;
    }
    
}

module.exports = BoardingCard;