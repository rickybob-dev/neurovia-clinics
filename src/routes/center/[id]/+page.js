import { error } from '@sveltejs/kit';
import { centers } from '$lib/data/centers.js';

export const prerender = true;

export function entries() {
  return centers.map((center) => ({ id: center.id }));
}

export function load({ params }) {
  const center = centers.find((item) => item.id === params.id);
  if (!center) {
    throw error(404, 'Center not found');
  }
  return { center };
}
