### Description:
This is my submission for the Lots-Homes take home challenge. The app supports 2 routes:
1. /homes - provides a list of homes rendered as cards on the page
2. /lots - provides a list of lots rendered as cards on the page

To get started:
Run `npm i` to install all dependencies
Run `npm start` and navigate to `localhost:3000`

### Note:
This was a fun and, at times, challenging project. Next time, I don't think I'll use a modal library and will instead just create a modal. 

You'll see that the functionality is all there, but the styling is not pixel perfect. I'll admit that not having touched CSS for a while is to blame, but it was fun getting back into it. 

### Some callouts:
- Within a modal, a user can click any of the compatible lots/homes cards and be routed directly to that particular lot/home modal
- When a user enters a modal URL (e.g. `/homes?selectedHomePlan=the-medita`) in a new browser tab, I chose to route the user to either /homes or /lots once they closed the modal.  
- Favorites are stored in Redux and disappear on refresh. In an ideal world, the favorites would persist on the backend.
- Given prior commitments and time constraints on my end, I didn't get around to writing any tests. You'll find a sampling of some of the tests below.
- The "Show Saved Lots/Homes" buttons do nothing, but if I were to implement it I would filter the current Homes/Lots on the page accordingly
- I'm sure there are a bunch of different ways to modularize the components and maybe even further than what I have. A perfect example of this would be the Lots and Home Plans components - they are almost exactly the same and if given more time I'd have them be the same component and then have some logic for displaying either Lots or Homes. 

### Tests:
App
- should render the App component

Home Plans
- should render the Home Plans component
- should render 4 cards
- should render the "View Saved Homes" button
- should toggle Favorite button when clicked
- should render the Modal when a card is clicked

Lots
- should render the Lots component
- should render 4 cards
- should render the "View Saved Lots" button
- should toggle Favorite button when clicked
- should render the Modal when a card is clicked

Cards
- should render the image
- should render the Favorites button
- should render home/lot information

Modal
- should render the Modal component
- should render the image
- should render the home/lot description (e.g. beds/baths, sqft, etc)
- should render the favorite button
- should render compatible homes/lots cards

Utils
- should convert acres to sqft
- should convert home name ("The Medita" => "the-medita")
- should convert lot address ("123 Fake Street, Raleigh, NC" => "123-fake-street")

Selectors
- Homes
  - getCompatibleHomesIds
    - should return an array of 3 integers
    - should return an array that contains the integer 1
  - getCompatibleHomesData
    - should return an array of 3 objects
    - should return an object containing the name "The Medita"
- Lots
    - getCompatibleLotsIds
    - should return an array of 3 integers
    - should return an array that contains the integer 1
  - getCompatibleLotsData
    - should return an array of 3 objects
    - should return an object containing the address "123 Far Far Away St, Nowhere, NC"
### Goals
 - Clean and easy-to-follow project structure
 - Reuse of components where possible
 - Best practice utilization of global store and router libraries
 - Good state management within and across pages/components
 - Understandable and clean logic within pages/components