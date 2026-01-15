# Hytale Developer Documentation

Community-driven documentation for Hytale server development, plugin creation, and modding.

> **Note:** Hytale is in Early Access. This documentation is based on community research, Discord discussions, and analysis of the server software. APIs and features may change.

## About

This project aims to create comprehensive developer documentation for Hytale, helping developers get started with:

- **Server Setup** - Installation, configuration, and hosting
- **Plugin Development** - Creating plugins with the Java API
- **Event System** - Handling game events
- **ECS Architecture** - Working with the Entity Component System
- **Custom UI** - Building custom interfaces and HUDs
- **Networking** - Transfer packets and multi-server setups

## Live Documentation

Visit the documentation site: **[Coming Soon]**

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.x
- **Documentation:** [Nextra](https://nextra.site/) 4.x
- **Language:** MDX (Markdown + JSX)
- **Styling:** Tailwind CSS

## Local Development

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/hytale-dev-doc.git
cd hytale-dev-doc

# Navigate to docs folder
cd hytale-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
hytale-dev-doc/
├── hytale-docs/              # Documentation site
│   ├── src/
│   │   └── content/          # MDX documentation files
│   │       ├── index.mdx
│   │       ├── getting-started/
│   │       ├── server-setup/
│   │       ├── plugin-development/
│   │       └── ...
│   ├── public/               # Static assets
│   ├── package.json
│   └── next.config.mjs
├── PROJECT_SUMMARY.md        # Project overview
├── .gitignore
└── README.md
```

## Documentation Sections

### Getting Started
- Java setup and requirements
- Development environment
- First plugin tutorial

### Server Setup
- Installation guide
- Configuration options
- Port forwarding
- **Networking & Transfer Packets** - Multi-server architecture
- Hosting providers
- Performance tuning

### Plugin Development
- Getting started with plugins
- `manifest.json` format
- Event system (sync, async, ECS events)
- Command registration
- ECS architecture
- Player data access
- **Custom UI** - Pages, windows, and HUDs
- Configuration management
- Permissions system
- Plugin lifecycle

### Common Issues
- Troubleshooting guide
- Community solutions
- Known bugs and workarounds

## Contributing

Contributions are welcome! Here's how you can help:

1. **Report Issues** - Found incorrect information? Open an issue.
2. **Submit PRs** - Fix typos, add examples, improve explanations.
3. **Share Knowledge** - Have insights from the Discord? Help document them.
4. **Test Examples** - Verify code examples work correctly.

### Contribution Guidelines

- Keep documentation accurate and up-to-date
- Include code examples where helpful
- Credit community members for their discoveries
- Use clear, concise language
- Follow the existing documentation style

## Sources

This documentation is compiled from:

- **Official Sources** - Hytale blog posts and announcements
- **Discord Community** - Developer discussions and Q&A
- **Server Analysis** - Research of the server software
- **Community Testing** - Real-world experimentation

## Disclaimer

This is an **unofficial** community project. It is not affiliated with or endorsed by Hypixel Studios or Riot Games.

- Hytale™ is a trademark of Hypixel Studios
- All game content and materials are property of their respective owners
- This documentation is for educational purposes

## License

This documentation is released under the [MIT License](LICENSE).

## Acknowledgments

Thanks to the Hytale developer community for sharing knowledge and discoveries, especially the active members in the Discord server who have helped piece together the plugin API.

---

**Happy coding!** If you create something cool with Hytale, we'd love to hear about it.
