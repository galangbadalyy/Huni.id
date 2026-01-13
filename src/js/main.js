/**
 * Main.js
 * Entry point aplikasi
 * Mengimport dan menginisialisasi semua components
 */

import { initNavbar } from './components/navbar.js';
import { initTestimonial } from './components/testimonial.js';

// Tunggu DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi property renderer

    // Inisialisasi navbar
    initNavbar();

    // Inisialisasi testimonial slider
    initTestimonial();

    console.log("All components initialized");
});