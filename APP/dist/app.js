(function () {
  'use strict';

  class AbstractView {
    constructor() {
      this.app = document.getElementById("root");
    }

    setTitle(title) {
  		document.title = title;
  	}

    render() {
      return;
    }
    destoy() {
      return;
    }
  }

  class MainView extends AbstractView {
    constructor() {
      super();
  		this.setTitle("Поиск книнг");
    }

  	render() {
  		const main = document.createElement("div");
  		main.innerHTML = "Test";
  		this.app.innerHTML = "";
  		this.app.append(main);
  	}
  }

  class App {
  	routes = [
  		{path: "", view: MainView}
  	];
  	constructor() {
  		window.addEventListener("hashchange", this.route.bind(this));
  		this.route();
  	}

  	route() {
  		if(this.currentView) {
  			this.currentView.destoy();
  		}
  		const view = this.routes.find(r => r.path == location.hash)	.view;
  		this.currentView = new view();
  		this.currentView.render();
  	}
  }

  new App();

})();
