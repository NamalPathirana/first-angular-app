import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  newServer:string = 'No server was created!';
  serverName:string = 'test name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
      },
      3000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.newServer = 'New server created. Server Name :'+this.serverName;
  }

  onChangeServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
