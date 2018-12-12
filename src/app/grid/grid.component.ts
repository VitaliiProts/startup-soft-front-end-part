import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  closeResult: string;
  p: number = 1;
  items = [
    {
      name: 'skadfhksdhkf',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 300',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'kdfklsdgklflg',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 200',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'knsl;dgj;ld3',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 370',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'ksjhgur',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 140',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'rsgjkldg',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 356',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'slkgjlkjhkl',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 450',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'wrgrdg',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 450',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'rsggedg',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 450',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'dhyery',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 450',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
    {
      name: 'slkgjlksfdbhgnjhkl',
      img: 'http://fakeimg.pl/325x325/',
      price: '$ 450',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, itaque.'
    },
  ]
  constructor(private modalService: NgbModal) { }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
