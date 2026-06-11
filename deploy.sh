#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  CycasKhodro — Production Deploy Script
#  Usage (first time):  bash deploy.sh
#  Usage (update):      bash deploy.sh update
# ─────────────────────────────────────────────────────────────

set -e

REPO="https://github.com/vahidelahi777/cycaskhodro.git"
APP_DIR="/var/www/cycaskhodro"
APP_NAME="cycaskhodro"
PORT=3001
NODE_REQUIRED="20"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()   { echo -e "${GREEN}[✓]${NC} $1"; }
warn()  { echo -e "${YELLOW}[!]${NC} $1"; }
error() { echo -e "${RED}[✗]${NC} $1"; exit 1; }

# ─── 1. Check OS ──────────────────────────────────────────────
if [[ "$EUID" -ne 0 ]]; then
  error "Please run as root: sudo bash deploy.sh"
fi

OS=$(grep -oP '(?<=^ID=).+' /etc/os-release 2>/dev/null | tr -d '"' || echo "unknown")
log "OS: $OS"

# ─── 2. Install Node.js 20 ────────────────────────────────────
if ! command -v node &>/dev/null || [[ $(node -e "process.exit(+process.versions.node.split('.')[0]<$NODE_REQUIRED)") ]]; then
  warn "Installing Node.js $NODE_REQUIRED..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
log "Node.js: $(node --version)"

# ─── 3. Install PM2 ───────────────────────────────────────────
if ! command -v pm2 &>/dev/null; then
  warn "Installing PM2..."
  npm install -g pm2
fi
log "PM2: $(pm2 --version)"

# ─── 4. Install git ───────────────────────────────────────────
if ! command -v git &>/dev/null; then
  apt-get install -y git
fi

# ─── 5. Clone or update repo ──────────────────────────────────
export GIT_TERMINAL_PROMPT=0

if [[ "$1" == "update" ]] && [[ -d "$APP_DIR/.git" ]]; then
  log "Pulling latest code..."
  cd "$APP_DIR"
  git pull origin master
else
  if [[ -d "$APP_DIR/.git" ]]; then
    log "Repo exists — pulling latest..."
    cd "$APP_DIR"
    git pull origin master
  else
    log "Cloning repo..."
    rm -rf "$APP_DIR"
    git clone "$REPO" "$APP_DIR"
    cd "$APP_DIR"
  fi
fi

# ─── 6. Install dependencies ──────────────────────────────────
log "Installing dependencies..."
cd "$APP_DIR/apps/frontend"
npm ci --prefer-offline 2>/dev/null || npm install

# ─── 7. Build ─────────────────────────────────────────────────
log "Building production bundle..."
NODE_OPTIONS="--max-old-space-size=4096" \
NEXT_TELEMETRY_DISABLED=1 \
npm run build

# ─── 8. Start / Restart with PM2 ─────────────────────────────
log "Starting app with PM2 on port $PORT..."

if pm2 describe "$APP_NAME" &>/dev/null; then
  pm2 reload "$APP_NAME" --update-env
  log "App reloaded."
else
  pm2 start npm \
    --name "$APP_NAME" \
    --cwd "$APP_DIR/apps/frontend" \
    -- start
  log "App started."
fi

# ─── 9. Save PM2 + enable on boot ────────────────────────────
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null | tail -1 | bash 2>/dev/null || true

# ─── 10. Status ───────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
pm2 list
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
log "CycasKhodro running at http://localhost:$PORT"
echo ""
warn "To view logs:    pm2 logs $APP_NAME"
warn "To monitor:      pm2 monit"
warn "To update later: bash $APP_DIR/deploy.sh update"
