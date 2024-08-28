
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Product } from "../../shared/intefaces/product.interface";
import { Observable } from "rxjs";

const LIMIT = 8;

@Injectable()
export class ProductsService extends BaseHttpService {

    getProducts(page: number): Observable<Product[]> {
        return this.http.get<any>(`${this.apiUrl}/products`,{
            params: {
                limit: (page * LIMIT).toString(),
            }
        });
    }
} 