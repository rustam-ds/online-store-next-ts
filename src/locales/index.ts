import { components } from './components';

export interface Locales {
  components: typeof components;
}

export const locales: Locales = {
  components,
};
