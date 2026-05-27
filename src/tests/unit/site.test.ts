import { describe, it, expect } from 'vitest';
import { siteConfig } from '../../data/site';

describe('Site config', () => {
  describe('información básica', () => {
    it('debe tener nombre del negocio', () => {
      expect(siteConfig.name).toBe('Ferretería Dismafer');
    });

    it('debe tener tagline', () => {
      expect(siteConfig.tagline).toBeTruthy();
    });

    it('debe tener descripción', () => {
      expect(siteConfig.description).toBeTruthy();
      expect(siteConfig.description.length).toBeGreaterThan(50);
    });

    it('url debe ser una URL válida', () => {
      expect(() => new URL(siteConfig.url)).not.toThrow();
    });

    it('url debe usar https', () => {
      expect(siteConfig.url).toMatch(/^https:\/\//);
    });
  });

  describe('contacto', () => {
    it('debe tener teléfono en formato internacional', () => {
      expect(siteConfig.contact.phone).toMatch(/^\+\d+/);
    });

    it('debe tener número de WhatsApp', () => {
      expect(siteConfig.contact.whatsapp).toBeTruthy();
      expect(siteConfig.contact.whatsapp).toMatch(/^\+\d+/);
    });

    it('whatsappUrl debe apuntar a wa.me', () => {
      expect(siteConfig.contact.whatsappUrl).toMatch(/^https:\/\/wa\.me\//);
    });

    it('debe tener email válido', () => {
      expect(siteConfig.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('email debe ser del dominio dismafer.shop', () => {
      expect(siteConfig.contact.email).toMatch(/@dismafer\.shop$/);
    });

    it('debe tener dirección completa', () => {
      expect(siteConfig.contact.address).toBeTruthy();
      expect(siteConfig.contact.address.length).toBeGreaterThan(10);
    });

    it('debe tener URL de Google Maps', () => {
      expect(siteConfig.contact.mapUrl).toMatch(/^https:\/\/maps\.google\.com/);
    });
  });

  describe('horarios', () => {
    it('debe tener horario de días de semana', () => {
      expect(siteConfig.hours.weekdays).toBeTruthy();
    });

    it('debe tener horario de sábado', () => {
      expect(siteConfig.hours.saturday).toBeTruthy();
    });

    it('domingo debe indicar cerrado', () => {
      expect(siteConfig.hours.sunday.toLowerCase()).toContain('cerrado');
    });

    it('horario de semana debe tener formato HH:MM – HH:MM', () => {
      expect(siteConfig.hours.weekdays).toMatch(/\d{2}:\d{2}/);
    });
  });

  describe('redes sociales', () => {
    it('debe tener URL de Facebook', () => {
      expect(siteConfig.social.facebook).toMatch(/^https:\/\/www\.facebook\.com/);
    });
  });

  describe('slogan', () => {
    it('debe tener slogan', () => {
      expect(siteConfig.slogan).toBeTruthy();
    });

    it('el slogan debe mencionar "conseguimos" (promesa de marca)', () => {
      expect(siteConfig.slogan.toLowerCase()).toContain('conseguimos');
    });
  });
});
