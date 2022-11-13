## Pioneer Valley Travel Green

## For HackHolyoke 2022

Access at https://amarrap.github.io/HackHolyoke/

## Inspiration
For our project, we decided to tackle the major environmental concern that is passenger vehicle greenhouse gas emissions. We live in a culture that treats driving a car as a mark of independence and power, and the CO_2 emitted as an unfortunate but necessary side effect. Driving is so built in to our everyday lives that we often aren't able to look objectively at the practical costs and benefits of driving compared to other modes of transportation. With the Five Colleges Travel Green website, we hoped to create a tool that helps travelers in the Pioneer Valley get that objective look. This site could be referenced as a practical guide to travel distance and efficiency before any trip, while at the same time serving as a gentle reminder that driving does have a cost, and it's not the only option.

## What it does
With our site, users are able to input a location and a destination and see a recommended route on a map. Our program then calculates and displays additional information for the user's route:
- Total estimated cost of driving given average local gas prices and set MPG rate of 25
- Total estimated greenhouse gas emissions when driving
- Total estimated cost of bus trip given local bus pass fees
- Total estimated greenhouse gas emissions by bus
- Total steps taken when walking

## How we built it
We hosted our site on Github and built it using JavaScript, HTML, and CSS. The core of our service relies on several Google Maps APIs: namely, the distance matrix, directions, and place autocomplete APIs.
Our final program would retrieve two locations as user input on the home page using the autocomplete API to retrieve address information, and run them through the distance matrix API to get different routes and travel information for driving, bus travel, and walking. It would then display the various routes on the map using the directions API and perform calculations using JavaScript.

## Challenges we ran into
Unfortunately, we were not able to get our website fully functional this weekend. This was the first time using JavaScript for both of us, and it turned out to be a major challenge to make this new language work in conjunction with APIs and HTML. After successfully implementing the place autocomplete API to intake user input and setting up the directions API and our travel calculation functions to display useful output, we got stuck on channeling our user input into the distance matrix API and we were never able to connect these two layers of the site.

## Accomplishments that we're proud of

We are very proud of how much we were able to accomplish in such a short time span this weekend. We truly believe in the concept behind our project, and we're proud we were able to turn our passion for the environment into the beginnings of a useful product.
For both of us, this was our first Hackathon, our first time using JavaScript, and our first time implementing APIs on our own. We're proud of the fact that we were able to make it this far considering everything we didn't know, and we're incredibly proud of how much we learned in the process.

## What we learned

We learned how to implement APIs, how to code in JavaScript, HTML, and CSS, and how to use all of those languages in conjunction with each other, how to host a site and how to make a webpage interactive and intuitive for users, how to work collaboratively with Git, how to plan a project in a very limited time span, and how to turn a concept into a working product. This has been an incredibly valuable learning experience for both of us!!

## What's next for Pioneer Valley Travel Green
We limited our location search feature to Western Massachusetts in order to specifically encourage appreciation of the PVTA; however, as a future project we'd love to expand this to other parts of the country and the world.
Another feature we'd like to add with a bit more time is a bike rental price calculation – we decided this was beyond our scope for the weekend because of the complicated pricing options for bike rental services, but we feel biking is a valuable and underutilized option for transportation and we'd like to highlight how accessible it can be.
