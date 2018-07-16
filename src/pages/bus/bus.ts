import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus',
  templateUrl: 'bus.html',
})
export class BusPage implements OnInit {

  busRoutes = [];
  computedBusRoute = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.busRoutes = [{
      ITEM_TYPE: 'BUS_ROUTE_LIST',
      expanded: false,
      routeName: 'Indra Nagar',
      totalStudents: 3,
      students:[{
        avatar: './assets/imgs/jessie.png',
        name: 'ABC',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/buzz.png',
        name: 'buzz',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/woody.png',
        name: 'woody',
        email: 'abc@asdf.ddf'
      }]
    },{
      ITEM_TYPE: 'BUS_ROUTE_LIST',
      expanded: false,
      routeName: 'RS Palayam',
      totalStudents: 5,
      students:[{
        avatar: './assets/imgs/jessie.png',
        name: 'ABC',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/buzz.png',
        name: 'buzz',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/woody.png',
        name: 'woody',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/buzz.png',
        name: 'buzz',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/woody.png',
        name: 'woody',
        email: 'abc@asdf.ddf'
      }]
    },{
      ITEM_TYPE: 'BUS_ROUTE_LIST',
      expanded: false,
      routeName: 'Central',
      totalStudents: 2,
      students:[{
        avatar: './assets/imgs/jessie.png',
        name: 'ABC',
        email: 'abc@asdf.ddf'
      },{
        avatar: './assets/imgs/buzz.png',
        name: 'buzz',
        email: 'abc@asdf.ddf'
      }]
    }];

    this.computedBusRoute = this.busRoutes.slice();
  }

  onBusRouteExpanded(index, studentList, isExpanded) {
    const hasStudentList = this.computedBusRoute.filter(a => a.ITEM_TYPE === 'STUDENT_LIST').length !== 0;
    this.computedBusRoute = [];
    if (!isExpanded) {
      this.computedBusRoute = this.busRoutes.slice();
      return;
    }
    if (index === this.busRoutes.length && hasStudentList) {
      index = index - 1;
    }
    const firstBusRouteArr = this.busRoutes.slice(0, index);
    const secondBusRouteArr = this.busRoutes.slice(index);
    this.computedBusRoute.push(...firstBusRouteArr);
    let studentListObj = {
      ITEM_TYPE: 'STUDENT_LIST',
      students: studentList
    };
    this.computedBusRoute.push(studentListObj);
    this.computedBusRoute.push(...secondBusRouteArr);
  }

  resetExpanded() {
    for (let i = 0; i < this.busRoutes.length; i++) {
      this.busRoutes[i].expanded = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusPage', this.busRoutes);
  }
}
