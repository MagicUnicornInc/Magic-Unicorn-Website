# Magic Unicorn Tech Website

## Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### Deploy with Single Command
```bash
# Make deploy script executable
chmod +x scripts/deploy.sh

# Run deployment
./scripts/deploy.sh
```

Or manually with Docker Compose:
```bash
docker-compose up --build -d
```

The site will be available at http://localhost:3000

### Stop the Application
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

## Development

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```


## License

Magic-Unicorn-Website is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0-or-later) — see [LICENSE](LICENSE).

A **commercial license** is available for organizations that cannot meet the AGPL's network-copyleft obligations (for example, offering Magic-Unicorn-Website as a hosted service without releasing their modifications). Contact **licensing@unicorncommander.ai**.

© 2026 Magic Unicorn Unconventional Technology & Stuff Inc.
