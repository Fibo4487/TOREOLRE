import { Product } from "../../db";
import { v4 as uuidv4 } from "uuid";

class productService {
    static async getProductList() {
        const products = await Product.findAll();
        if (!products) {
            const errorMessage = "해당 데이터가 없습니다.";
            return { errorMessage };
        }
        return products;
    }

    static async getProduct({ productId }) {
        const product = await Product.findByProductId({ productId });
        if (!product) {
            const errorMessage = "해당 데이터가 없습니다.";
            return { errorMessage };
        }
        return product;
    }

    static async getProductByQuery({cid, pid}) {
        const product = await Product.findByQuery({cid, pid});
        if (!product) {
            const errorMessage = "해당 데이터가 없습니다.";
            return { errorMessage };
        }
        return product;
    }
}

export { productService };
