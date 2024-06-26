# Sell and Buy Product App

Welcome to the Sell and Buy Product App, the ultimate Node.js solution for managing product transactions in your shop with ease and efficiency. Our application streamlines the process of tracking products bought and sold, ensuring that you stay on top of your business operations.

## 🚀 Getting Started

Embark on your journey to simplified shop management by setting up the Sell and Buy Product App with these simple steps:

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/baleashvar/Wings1-buy-and-sell-product

2. **Install dependencies** to equip your app with all the necessary tools:
npm install

3. **Launch the application** and watch as your server springs into action:
npm start


Upon successful startup, you’ll be greeted with a confirmation message stating that your **server is running on port 8001**.


## 📚 Usage

Explore the available endpoints to interact with the application:

- **GET /sellProduct**
  - Retrieve a comprehensive list of all transactions from the sellbuys collection.
  - Query Parameters:
    - sortBy: Organize your data by lowerSoldPrice or higherSoldPrice.
  - Sample Requests:
    - `/sellProduct`
    - `/sellProduct?sortBy=lowerSoldPrice`
    - `/sellProduct?sortBy=higherSoldPrice`
- **POST /sellProduct**
  - Commit new transaction data to the sellbuys collection.
  - Sample Request Body: JSON
    ```json
    { "productName": "Table", "costPrice": 1000, "soldPrice": 1500 }
    ```
- **PATCH /sellProduct/:**
  - Update existing transaction details in the sellbuys collection.
  - Sample Request Body: JSON
    ```json
    { "soldPrice": 2000 }
    ```
- **DELETE /sellProduct/:**
  - Remove transaction records using their unique identifier.
## 🛠 Dependencies
Equip your app with these powerful tools:

- **express:** ^4.17.1 - The fast, unopinionated, minimalist web framework for Node.js.
- **mongoose:** ^5.13.3 - Elegant MongoDB object modeling for Node.js.

## 🤝 Contributing

Join our community of contributors! If you stumble upon bugs or have suggestions for enhancements, feel free to open an issue or propose changes through a pull request.

## 📄 License

This project embraces open-source spirit and is proudly licensed under the MIT License. For more details, see the LICENSE file included in this repository.

Thank you for choosing Sell and Buy Product App for your shop management needs. Happy selling and buying!

