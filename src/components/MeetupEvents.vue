<script>
  import ICAL from "ical.js"
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
  const meetupIcalFeedUrl = "https://www.meetup.com/Baltimore-Code-and-Coffee/events/ical/";
  const iCalendarDataFeed = await fetch(`${corsAnywhere}${meetupIcalFeedUrl}`)
  const iCalData = await iCalendarDataFeed.text();
  var jCalData = ICAL.parse(iCalData);
  debugger;
</script>

<template>
  [meetup widgets will go here]
</template>
