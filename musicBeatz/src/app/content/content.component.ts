import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  modalWindow = false;
  files;
  track;
  namesTrack = [];
  tracks = [];
  constructor() { }

  ngOnInit() {
  }

  modalView() {
    this.modalWindow = true;
  }

  closeWindow() {
    this.modalWindow = false;
  }

  addMusic(e) {
    this.files = e.files;
    const reader  = new FileReader();
    reader.readAsDataURL(e.files[0]);
    this.namesTrack.push(e.files[0].name);
    reader.onload = () => {
      this.tracks.push(reader.result);
    };
    this.modalWindow = false;
    this.track = null;
  }

  deleteTrack(audio) {
    this.tracks = this.tracks.filter((track) => audio !== track);
  }

}
