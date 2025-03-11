# V Vite Starter <span><img src="https://github.com/siguici/art/blob/HEAD/images/v-vite.svg" alt="⚡" width="24" /></span>

**V Vite Starter** is a minimal and ready-to-use template for building
**Veb** applications with **V Vite** integration. Easily set up your
Vlang project with **Vite.js** for a smooth frontend development experience.

## 🎯 Features

- ✅ Preconfigured **Veb** server with **V Vite**
- ⚡ Automatic asset handling using **Vite.js**
- 🔥 Hot Module Replacement (HMR) enabled
- 🛠️ Simple and flexible project structure

## ⚙️ Requirements

Ensure you have the following installed:

- [V](https://vlang.io) (latest version)
- [Bun](https://bun.sh) (for development scripts)

## 🚀 Installation

Clone the repository and start your project:

```sh
git clone https://github.com/v-vite/starter.git my-project
cd my-project
v run main.v
```

### Install dependencies

Ensure you have **V** and **Bun** installed:

```sh
v install
bun install
```

## 📚 Usage

### Running the Development Server

Start the **Veb** and **Vite** in development mode:

```sh
bun dev
```

### Building for Production

```sh
bun prod
```

## 🛠️ Project Structure

```txt
my-project/
├── public/         # Static assets
├── src/
│   ├── resources/  # Frontend source (JS, CSS, etc.)
│   ├── templates/  # HTML templates
│   └── main.v      # Main Veb app
├── vite.config.ts  # Vite configuration
├── package.json    # Frontend dependencies
├── v.mod           # Vlang module config
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 🐜 License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.
