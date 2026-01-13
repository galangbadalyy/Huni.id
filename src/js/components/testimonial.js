/**
 * Testimonial Component
 * Mengelola slider testimonial
 */

let testimonialTrack;
let nextBtn;
let prevBtn;
let index = 0;
let total = 0;

/**
 * Memperbarui posisi slide testimonial berdasarkan indeks saat ini
 */
function updateSlide() {
    if (testimonialTrack) {
        testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    }
}

/**
 * Menampilkan slide berikutnya
 */
function nextSlide() {
    index = (index + 1) % total;
    updateSlide();
}

/**
 * Menampilkan slide sebelumnya
 */
function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlide();
}

/**
 * Menginisialisasi testimonial slider component
 */
export function initTestimonial() {
    testimonialTrack = document.getElementById("testimonialTrack");
    nextBtn = document.getElementById("nextBtn");
    prevBtn = document.getElementById("prevBtn");

    if (!testimonialTrack || !nextBtn || !prevBtn) {
        console.warn("Testimonial elements not found");
        return;
    }

    total = testimonialTrack.children.length;

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
}