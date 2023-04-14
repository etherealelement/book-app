import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.appState = state;
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
    return this.el;
  }
}
