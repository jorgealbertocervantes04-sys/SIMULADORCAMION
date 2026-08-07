export default class LoadingOverlay {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "loading";
    document.body.appendChild(this.container);

    this.container.innerHTML = `
      <div class="loader-card">
        <h1>TRUCK INSPECTION PRO</h1>
        <div class="progress">
          <div class="bar"></div>
        </div>
        <p class="percent">0%</p>
      </div>
    `;

    this.bar = this.container.querySelector(".bar");
    this.percent = this.container.querySelector(".percent");
  }

  setProgress(value) {
    this.bar.style.width = value + "%";
    this.percent.innerHTML = value + "%";
  }

  hide() {
    this.container.style.opacity = 0;
    setTimeout(() => {
      this.container.remove();
    }, 800);
  }
}
