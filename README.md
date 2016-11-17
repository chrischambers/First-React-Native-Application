# First Attempt at React Native App - Score Screen

This is my first attempt at implementing a react-native ios application - I'd
estimate total time spent to be approximately 6-8 hours, though it's hard to
gauge given the painfully long bootstrapping/compilation times on a 7 year old
Macbook Pro.

To see it in action, it should simply be a case of firing up a terminal, cding
to the project directory, and entering

`react-native run-ios`

or opening the `./ios` folder in Xcode and hitting the Build+Run button.

The brief was presented as a win screen, but I naturally designed the main
component for the more general case (displaying the score irrespective of the
outcome). It would be a pretty trivial task to customise the 'You Won!' heading
based on whether the user's predictions agreed with the outcome.

The json provided had a few issues with it - as a result I edited it to
reflect the actual alterations I'd make to the backend:

1. The team fixture was a bit sparse in terms of the details provided - I
   modified it in particular to include both team's signature colours for
   displaying in the `TeamBar` component.
2. I've included the outcome in the json, which is necessary for the `ResultCard`
   component to output informative messages. A draw is represented as null
   values for both winner and loser, otherwise each should have either
   'homeTeam' or 'awayTeam' as its value. In practice this might be represented
   differently or come from a different API call, but this seemed a
   straightforward way of getting the job done.
3. I elected to put the experience gained in the json file itself - again, in
   practice it may well come from a different API call.

Where the mockup and the json have conflicted, I've presumed that the
information in the json takes precedence: (for example, the user's prediction
is a 2-2 draw, but the mockup displays a Chelsea win).
