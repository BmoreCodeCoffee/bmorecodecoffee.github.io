<template>
  <div class="event-page">

    <div class="content">
      <p>Welcome to our community gathering, a space where professionals, students, hobbyists, and dabblers come together to share work, projects, questions, or just to connect. Whether you're a technical person or tech-adjacent, we welcome you to join us.</p>

      <div class="info-section">
        <h1>Join Us!</h1>
        <div class="call-to-action">
          <a href="https://www.meetup.com/baltimore-code-and-coffee/events/" target="_blank" class="meetup-link">Meet Up page</a>
          <a href="https://slofile.com/slack/baltimoretech" target="_blank" class="slack-link">Baltimore Tech Slack</a>
        </div>
      </div>

      <div class="venue-directions">
        <h2>Directions to Digital Harbor Foundation</h2>
        <p><strong>Address:</strong> 1045 Light Street, Federal Hill</p>
        <p><strong>Parking:</strong> Available at the back of the building or metered street parking. Alternatively, the West Street Garage is nearby.</p>
        <p><strong>Public Transport:</strong> The free Charm City Circulator bus is an excellent option for local residents.</p>
        <p><strong>Accessibility:</strong> Entry is through the main door on Light Street. If closed, ring the doorbell.</p>
      </div>

      <div class="venue-directions">
        <h2>Directions to Spark</h2>
        <p><strong>Address:</strong> 15 Frederick St, Inner Harbor</p>
        <p><strong>Parking:</strong> Options include the parking lot at Frederick St, metered street parking, or the West Street Garage.</p>
        <p><strong>Public Transport:</strong> Consider the Charm City Circulator for a convenient, free ride.</p>
        <p><strong>Accessibility:</strong> Enter through the hallway at the first floor of the Ram's Head. If the main door is closed, instructions for entry will be provided on-site.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/globals";
@import "../assets/theme/color_palette";
@import "../assets/theme/screen_sizes";

.event-page {
  display: flex;
  justify-content: center; /* Center .content horizontally */
  height: 100%; /* Full height to enable centering */

  .content {
    width: 65%; /* Set the width to 50% of its parent */
    margin: auto; /* Centering within the page */
    font-size: 1.3rem; /* Increased font size */
    line-height: 2; /* Double line spacing */
    text-align: left; /* Align the text to the left */

    .info-section {
      text-align: center;
      margin: 40px 0;

      h1 {
        margin-bottom: 10px;
      }
      
      p {
        margin-bottom: 20px;
      }
    }

    .call-to-action {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 10px;

      .meetup-link, .slack-link {
        background-color: $midnight_blue1;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-size: 1.6rem;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
          background-color: darken($midnight_blue1, 10%);
        }
      }
    }

    .venue-directions {
      padding: 10px;
      border-bottom: 1px solid #eee;

      h2 {
        color: $midnight_blue1;
        margin-bottom: 10px;
        font-size: 2rem;
      }

      p {
        margin-bottom: 5px;
        padding: 5px
        strong {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
