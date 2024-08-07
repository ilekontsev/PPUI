import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  exposes: {
    './Routes': 'apps/main/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
