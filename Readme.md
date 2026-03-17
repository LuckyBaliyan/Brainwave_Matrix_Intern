🛍 MERN E-Commerce Website
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A fully functional MERN stack e-commerce platform with a modern user interface, smooth scrolling animations, secure payment integration, and an admin panel for product management.

## 🚀 Features  

### Example Request (Create Product)

`http
POST /api/products
Content-Type: application/json
Authorization: Bearer <admin_jwt_token>

{
  "name": "New Product",
  "price": 1999,
  "description": "A great product",
  "category": "Electronics",
  "countInStock": 10,
  "image": "https://example.com/image.jpg"
}

Response:

{
  "message": "Product created successfully",
  "product": {
    "_id": "64b1a5c2f21c9f0d88a7f123",
    "name": "New Product",
    "price": 1999,
    "description": "A great product",
    "category": "Electronics",
    "countInStock": 10,
    "image": "https://example.com/image.jpg"
  }
}
`

---

## Contributing

We welcome contributions to improve this project! Follow these steps:

1. Fork the repository.
2. Clone your fork.
`ash
git clone https://github.com/<your-username>/mern-ecommerce.git
cd mern-ecommerce
`
3. Create a new branch.
`ash
git checkout -b feature/your-feature-name
`
4. Make your changes.
5. Commit your changes.
`ash
git add .
git commit -m "Add: your descriptive commit message"
`
6. Push to your branch.
`ash
git push origin feature/your-feature-name
`
7. Open a pull request from your fork and describe your changes clearly.

**Contribution Guidelines**

- Keep code clean and readable.
- Do not commit sensitive information (like .env values).
- Test your code before submitting a PR.
- Respect existing design patterns.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## 📜 License

This project is licensed under the **MIT License**.

You are free to:

- ✅ Use it for **learning purposes**.  
- ✅ Modify and adapt it for your own projects.  
- ✅ Share it with attribution to the original author.

---

**Disclaimer:**  
This project is intended **for educational purposes only**. While you are free to use and modify the code, the author assumes **no liability** for any issues arising from its use in production environments.

---

## 📬 Contact

Feel free to reach out if you have questions, suggestions, or just want to connect!  

- **GitHub:** [LuckyBaliyan](https://github.com/LuckyBaliyan)  
- **LinkedIn:** [Lucky Baliyan](https://www.linkedin.com/in/lucky-baliyan-67b487299/)  
- **Email:** [baliyanlucky85@gmail.com](mailto:baliyanlucky85@gmail.com)  





