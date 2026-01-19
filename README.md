# SolarOps

Solar installation operations platform for managing jobs, inventory, and client visibility.

## Highlights

- Phase-based install tracking with approvals and photo proof
- Real-time inventory allocation to prevent overbooking
- Map view for active, completed, and scheduled installs
- Timeline + inspection scheduling

## MVP Screens

1. Home (ops snapshot)
2. Jobs (active installs list)
3. Inventory (stock + allocation)
4. Map (job visibility)
5. Timeline (install phases)
6. Settings (alerts + notifications)

## Quick Start

```bash
cd vdapp11-solarops
npm install
npm run ios
```

## Project Structure

```
vdapp11-solarops/
├── App.tsx
├── app.json
├── src/
│   ├── navigation/
│   ├── screens/
│   ├── store/
│   └── theme/
```

## Notes

- Replace placeholder data in `src/screens` with live job + inventory feeds.
