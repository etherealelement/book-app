import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.appState = state;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
			<div class="search-wrapper">
					<input 
					type="text" 
					placeholder = "Найти книгу или автора...." 
					class="search__input"
					/>
				<img src="/static/search.svg" alt="Search icon">
			</div>	
			<button  aria-label = "search">
			<img src="/static/search-white.svg" alt="Search icon">
			</button>
		`;
    this.el.querySelector("button").addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (e)=> {
      if (e.code === "Enter") {
        this.search();
      }
    })
    return this.el;
  }
}
