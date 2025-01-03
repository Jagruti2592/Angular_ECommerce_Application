import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = 'Mens wear';

  //1. Create an Event.
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    //2. Emit the event.
    
  }

  updateSearchText(inputEL:HTMLInputElement){
    // this.searchText = event.target.value;
    // console.log(this.searchText);
    console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
