import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifsearch',
  templateUrl: './gifsearch.component.html',
  styleUrls: ['./gifsearch.component.css']
})
export class GifsearchComponent implements OnInit {
  
  data = {
    gifs: []
  }

  constructor() { }

  searchGif (search: String) {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Z2IU9ynLCIABokBbv8xQE3rzuwZHRWsW&q=${search.value}&limit=25&offset=0&rating=G&lang=en`)
      .then(res => res.json())
      .then(data => {
      this.data.gifs = [...data.data]
      })
  }

  ngOnInit() {

  }

}
