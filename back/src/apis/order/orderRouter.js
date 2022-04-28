import is from "@sindresorhus/is";
import { Router } from "express";
import { loginRequired } from "../../middlewares/loginRequired";
import { orderService } from "./orderService";
import { userService } from "../user/userService";
import mongoose from 'mongoose'

const orderRouter = Router();
orderRouter.use(loginRequired);

orderRouter.post("/", async (req, res, next) => {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요",
            );
        }
        const orderId = mongoose.Types.ObjectId()
        const userId = req.currentUserId;
        const products = await userService.getUserCarts({
            userId,
        });
        if (products.errorMessage) {
            throw new Error(products.errorMessage);
        }
        const cartlist = products.cart
        const cartPrices = cartlist.map((v) => {
            return v.price
        })
        const totalPrice = cartPrices.reduce((a,b) =>{
            return a += b
        })
        const isPayed = false;

        const { orderName, zipcode, message, paymentMethod } = req.body; // 입력받을 것

        const orderData = {
            products,
            userId,
            orderId,
            totalPrice,
            orderName,
            zipcode,
            message,
            paymentMethod,
            isPayed,
        };

        const newOrder = await orderService.createOrder(orderData);

        if (newOrder.errorMessage) {
            throw new Error(newOrder.errorMessage);
        }

        res.status(201).json(products);
    } catch (error) {
        next(error);
    }
});

orderRouter.get("/", async function (req, res, next) {
    try {
        const userId = req.currentUserId;
        const isPayed = req.query.ispayed;
        if (isPayed == "true" || isPayed == "false") {
            const order = await orderService.getIspayedByQuery({isPayed, userId});

            if (order.errorMessage) {
                throw new Error(order.errorMessage);
            }
    
            res.status(200).send(order);
        }
        else {
            const orders = await orderService.getOrders({userId});
        
        if (orders.errorMessage) {
            throw new Error(orders.errorMessage);
        }
        res.status(200).send(orders);
    }
    } catch (error) {
        next(error);
    }
});

orderRouter.get("/:orderId", async function (req, res, next) {
    try {
        const orderId = req.params.orderId;
        const order = await orderService.getOrder({ orderId });

        if (order.errorMessage) {
            throw new Error(order.errorMessage);
        }

        res.status(200).send(order);
    } catch (error) {
        next(error);
    }
});

orderRouter.put("/orderId", async (req, res, next) => {
    try {
        const orderId = req.params.orderId;

        const products = req.body.products ?? null;
        const totalPrice = req.body.totalPrice ?? null;
        const orderName = req.body.orderName ?? null;
        const zipcode = req.body.zipcode ?? null;
        const message = req.body.message ?? null;
        const paymentMethod = req.body.paymentMethod ?? null;

        const toUpdate = {
            products,
            totalPrice,
            orderName,
            zipcode,
            message,
            paymentMethod,
        };
        const updatedOrder = await orderService.updateOrder({
            orderId,
            toUpdate,
        });

        if (updatedOrder.errorMessage) {
            throw new Error(updatedOrder.errorMessage);
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
});

orderRouter.delete("/orderId", async (req, res, next) => {
    try {
        const orderId = req.params.orderId;

        const deletedOrder = await orderService.deleteOrder({ orderId });

        if (deletedOrder.errorMessage) {
            throw new Error(deletedOrder.errorMessage);
        }

        res.status(200).json(deletedOrder);
    } catch (err) {
        next(err);
    }
});

export { orderRouter };
