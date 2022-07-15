import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public product: any = [];
  constructor() { 
    this.product= productItemList;
  }

  ngOnInit(): void {
  }

}


const productItemList=[
  {
    id:1,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Ultricies condimentum imperdiet",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:2,
    imgPath:"/assets/images/png/sofas-under-2.png",
    productTitle:"Vitae suspendisse sed",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:3,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Sed at fermentum",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:4,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Ultricies condimentum imperdiet",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:5,
    imgPath:"/assets/images/png/sofas-under-2.png",
    productTitle:"Vitae suspendisse sed",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:6,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Sed at fermentum",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:7,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Ultricies condimentum imperdiet",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:8,
    imgPath:"/assets/images/png/sofas-under-2.png",
    productTitle:"Vitae suspendisse sed",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
  {
    id:9,
    imgPath:"/assets/images/png/sofas-under-1.png",
    productTitle:"Sed at fermentum",
    pdActualPrice:26.00,
    pdDiscountPrice:42.00,
  },
]
