<template>
  <div class="lightning-talks">
    <h1 class="title">⚡ Lightning Talks in Baltimore ⚡</h1>

    <div class="intro">
      <p>Join the vibrant and dynamic series of Lightning Talks hosted at Baltimore's most innovative spaces like
        <strong>Fast Forward University, Spark, and Betamore.</strong></p>
      <p>Engage with local tech enthusiasts, entrepreneurs, and professionals in a series of rapid, insightful
        presentations.</p>
    </div>

    <div class="sponsor-banner">
      <img src="../assets/img/smartlogic.svg" alt="Sponsored by SmartLogic">
      <p class="sponsor-text">Sponsored by SmartLogic</p>
    </div>

    <h2 class="section-title">Featured Talk</h2>
    <p>Discover the three kinds of data with Julian Loiacono in this example talk:</p>
    <div class="video-embed">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-o1Wm2MaK3w" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>

    <div class="talk-requirements">
      <h2 class="section-title">Talk Requirements</h2>
      <b>Duration:</b> Max 10 minutes
      <br>
      <b>Q&A:</b> Max 5 minutes
      <br>
      <br>
    </div>  
    <div class="talk-requirements">
      <a href="LINK_TO_SIGNUP_FORM" target="_blank" class="signup-btn">Sign Up for a Lightning Talk</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LightningTalks',
  // component setup and logic go here
};
</script>


<style lang="scss">
@import "../assets/theme/color_palette";

.lightning-talks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-weight: bold;
  color: $midnight_blue1;
  margin-bottom: 10px;
}

.intro p,
.sponsor-text {
  text-align: center;
  line-height: 1.6;
  font-size: 1.3rem;
}

.section-title {
  color: $midnight_blue1;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2rem;
}

.sponsor-banner img {
  max-width: 100%;
  height: auto;
}

.sponsor-text {
  margin-top: 10px;
  font-style: italic;
}

.video-embed iframe {
  max-width: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.talk-requirements {
  font-size: 2rem;
  text-align: center;
  padding: 0;
  margin-bottom: 3px;

}

.signup-btn {
  margin-top: 20px;
  background-color: $midnight_blue1;
  color: white;
  padding: 12px 40px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 3rem;
  transition: background-color 0.3s ease;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top:140px;
}

.signup-btn:hover {
  background-color: $midnight_blue1;
  font-size: 3rem;
}
</style>
