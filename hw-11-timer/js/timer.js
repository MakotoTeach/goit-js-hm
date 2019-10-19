class Countdown {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.distance = null;

    this.interval();
  }

  interval() {
    const count = setInterval(() => {
      this.distance = this.targetDate - new Date().getTime();

      if(this.distance < 0){
        clearInterval(count);
        this.selector.innerHTML = `${this.targetDate} has come`;
        return
      }
      this.createLayout();
    }, 1000);
  }

  days() {
    const days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    return this.pad(days);
  }

  hours() {
    const hours = Math.floor(
      (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    return this.pad(hours);
  }

  mins() {
    const mins = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    return this.pad(mins);
  }

  secnds() {
    const secnds = Math.floor((this.distance % (1000 * 60)) / 1000);
    return this.pad(secnds);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  createLayout() {
    this.selector.innerHTML = `<div style="display: inline-block;" class="field ">
    <span style="font-size: 4.5rem;" class="value" data-value="days">${this.days()}</span>
    <span style="font-size: 3.5rem;"  class="label">Days</span>
  </div>

  <div style="display: inline-block;" class="field">
    <span style="font-size: 4.5rem;" class="value" data-value="hours">${this.hours()}</span>
    <span style="font-size: 3.5rem;" class="label">Hours</span>
  </div>

  <div style="display: inline-block;" class="field">
    <span style="font-size: 4.5rem;" class="value" data-value="mins">${this.mins()}</span>
    <span style="font-size: 3.5rem;" class="label">Minutes</span>
  </div>

  <div style="display: inline-block;" class="field">
    <span style="font-size: 4.5rem;" class="value" data-value="secs">${this.secnds()}</span>
    <span style="font-size: 3.5rem;" class="label">Seconds</span>
  </div>
    `;
  }
}

const targetDate = new Date("Jan 30, 2020 20:00:00").getTime();

new Countdown(document.querySelector("#timer-1"), targetDate);

const tagretSecndDate = new Date("Oct 19, 2019 16:37:20");

new Countdown(document.querySelector("#timer-2"), tagretSecndDate);
