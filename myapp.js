const boardingCards =require('./UnsortedBoardingCards.json');
const BoardingCard =require('./boardingCardDetails');
  
//sort boarding cards
  function sortBoardingCards(boardingCards) {
    boardingCards.sort((a, b) => {
        if (a.Destination === b.From) {
            return -1;
        } else if (a.From === b.Destination) {
            return 1;
        }
        return 0;
    });
    
    // Generate journey description for each boarding card
    const journeyDescriptions = boardingCards.map(card => {
      const boardingCard = new BoardingCard(card);
      return boardingCard.JourneyDescription();
    });
  
    return journeyDescriptions.join('\n');
  }

const sortedJourney = sortBoardingCards(boardingCards);
console.log(sortedJourney);

module.exports = {sortBoardingCards};