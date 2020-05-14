import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  productNames = [];
  page = 1;
  totalPages = 0;
  constructor(public router: Router, private productService: ProductService, private ngxUiLoaderService: NgxUiLoaderService) { }

  ngOnInit(): void {
    const payload = {
      pageno: this.page - 1
    };
    this.getProducts(payload);
  }
  getProducts(payload) {
    /*this.ngxUiLoaderService.start();
     this.productService.(payload).subscribe((res: any) => {
      console.log(res);
     this.organizations = res.data;
      for (const[index, organization] of this.organizations.entries()) {
        //this.organizationNames.push(organization.organizationName);
      }
      console.log('names' + this.organizationNames);
      this.totalPages = res.pageable.pages;
      this.ngxUiLoaderService.stop();
    }, error => {
      this.ngxUiLoaderService.stop();
    });*/
  }
}
