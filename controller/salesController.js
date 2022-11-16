const User = require("../models/User");
const Product = require("../models/product");
const sales = require("../models/sales");

// methods for managing sales

// get all sales

module.exports.getSales = async (req, res) => {
  try {
    const salesdata = await sales.find();
    if (salesdata) {
      console.log(salesdata);
    }
   // sort the salesdata by date
    salesdata.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });


    res.render("sales", { salesdata });
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getSalesDataOnly = async (req, res) => {
  try {
    const salesdata = await sales.find();
    if (salesdata) {
      console.log(salesdata);
    }
   // sort the salesdata by date
    salesdata.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });


   res.json(salesdata);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// get a specific sale

module.exports.getSale = async (req, res) => {
  try {
    const saledata = await sales.findById(req.params.salesId);
    console.log(saledata);
    res.json(saledata);
  } catch (err) {
    console.log({ message: err });
    res.json({ message: err });
  }
};

// add a sale

module.exports.addSale = async (req, res) => {

  console.log(req.body, "req.body");

  for (const soldProduct of req.body.products) {

    console.log(soldProduct, 'soldProduct');
    const product = await Product.findById(soldProduct._id);

    product.quantity -= soldProduct.quantity;

     product.save();
  }


  // date already exists

  req.body.date = new Date();
  req.body.date.setUTCHours(0, 0, 0, 0);
  var hasProduct = false;

  console.log(req.body.date);
  const salesData = await sales.findOne({ date: req.body.date });

  if (salesData) {
    req.body.products.forEach((product) => {
      console.log("checking product", product);
      // if salesData already has the product

      if (salesData.products.find((prod) => prod._id == product._id)) {
        hasProduct = true;

        // find the product in salesData

        // console.log(prod, 'aaa');//

        const prod = salesData.products.find((prod) => prod._id == product._id);

        console.log(prod, "bbb");

        // add the quantity

        // prod.quantity += product.quantity;

        prod.quantity = Number(prod.quantity) + Number(product.quantity);

        console.log(prod.quantity, "ccc");
        console.log(salesData.products, "ddd");
      }

      if (!hasProduct) {
        // if salesData does not have the product
        console.log(salesData, "a");
        salesData.products.push(...req.body.products);
        console.log(salesData, "b");
      }
    });

    // update the totalBillAmount

    // salesData.totalBillAmount =
    //   salesData.totalBillAmount + req.body.totalBillAmount;

    salesData.totalBillAmount = req.body.totalBillAmount;

    try {
      const savedSale = await salesData.save();
      console.log("Added Sale Successfully");
      res.json(savedSale);
    } catch (err) {
      res.json({ message: err });
    } finally {
      console.log("finally");
      return;
    }
  } else {
    // new date
    const salew = new sales({
      // array of products and date
      products: req.body.products,
      date: req.body.date,
      totalBillAmount: req.body.totalBillAmount,
    });
    console.log(salew);
    try {
      const savedSale = salew.save();
      console.log("Added Sale Successfully");
      res.json(savedSale);
    } catch (err) {
      res.json({ message: err.message });
    }
  }
};

// get today's sales
module.exports.getTodaysSales = async (req, res) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const salesdata = await sales.find({ date: today });
    if (salesdata) {
      console.log(salesdata);
    }
    res.json(salesdata);
  } catch (err) {
    res.json({ message: err.message });
  }
};





//ignore this comment