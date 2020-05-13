let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

count = 0;
for (let i = 0; i < story.length; i++) {
  if (story[i] === '.' || story[i] === '!') {
    count += 1
  }
};
console.log('There are ' + count + ' sentences in the story.');


const storyWords = story.split(' ');
console.log('There are ' + storyWords.length + ' words in the story.');


let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word => ! unnecessaryWords.includes(word));

// console.log(betterWords);

let overusedWords = betterWords.filter(word => word === 'really' || word === 'very' || word === 'basically').length;
let overusedWord1 = betterWords.filter(word => word === 'really').length;
let overusedWord2 = betterWords.filter(word => word === 'very').length;
let overusedWord3 = betterWords.filter(word => word === 'basically').length;
console.log("Overused words appeared " + overusedWords + ' times in the story: ');
console.log("'Really' was used " + overusedWord1 + ' times.');
console.log("'Very' was used " + overusedWord2 + ' times.');
console.log("'Basically' was used " + overusedWord3 + ' times.');


console.log('The improves story looks a little something like this: \n' + betterWords.join(' '));