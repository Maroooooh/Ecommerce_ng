import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  curProdId: number = 0;
  product: Iproducts | undefined = undefined;
  constructor(
    private ActiveRoute: ActivatedRoute,
    private prdservice: ProductService,
    private router: Router ,
    public prodWithApiService : ProductsWithApiService 
  ) {}
  productIDSList: number[] = [];
  curProductIndex: number = 0;
  ngOnInit(): void {
    // this.curProdId = (this.ActiveRoute.snapshot.paramMap.get('idprod')) ?Number
    // (this.ActiveRoute.snapshot.paramMap.get('idprod')) : 0 ;
    // console.log(this.curProdId) ;
    this.ActiveRoute.paramMap.subscribe((paramMap) => {
      this.curProdId = paramMap.get('idprod')
        ? Number(paramMap.get('idprod'))
        : 0;
      // let foundproduct = this.prdservice.getProductById(this.curProdId);
      // if (foundproduct) {
      //   this.product = foundproduct ; 
      // }else {
      //   alert("Not Found ") ;
      //   this.router.navigate(['**'])
      // }
     
      
    // this.product = this.prdservice.getProductById(this.curProdId);
    // this.productIDSList = this.prdservice.getProductIDSList();
    // throw new Error('Method not implemented.');
 // Day 6
    this.prodWithApiService.getprodbyid(this.curProdId) .subscribe((data )=>{
      if (data )
         this.product = data ; 
      else {
        alert("Not Found ") ;
        this.router.navigate(['**'])
      } 
    })

  });
  }

  backFunc() {
    this.router.navigate(['/mainpath/Product Parent']);
  }

  previousFunc() {
    this.curProductIndex = this.productIDSList.indexOf(this.curProdId);
    this.router.navigate([
      '/productdetails',
      this.productIDSList[this.curProductIndex - 1],
    ]);
  }
  nextFunc() {
    this.curProductIndex = this.productIDSList.indexOf(this.curProdId);
    this.router.navigate([
      '/productdetails',
      this.productIDSList[this.curProductIndex + 1],
    ]);
  }


  // Day6
  // productsAfterSearch:Iproducts[]=[];
  // searchwitMat(material:string){
  //   this.prodWithApiService.searchWithMaterial(material).subscribe({
  //     next:(data)=>{

  //       this.productsAfterSearch=data;
  //       console.log(data);

  //     },
  //     error:(err)=>{
  //       console.log(err);

  //     }
  //   })

  // }
  productsAfterSearch:Iproducts[]=[];
 
  searchwithcategory(cid:string){
    let cidnum  = parseInt(cid) ;
    this.prodWithApiService.getproductbycategoryid(cidnum).subscribe({
      next:(data)=>{
        this.productsAfterSearch=data;
        console.log(data);

      },
      error:(err)=>{
        console.log(err);

      }
    })

  }
}
