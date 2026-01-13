/**
 * Navbar Component
 * Mengelola scroll effect navbar dan scroll spy
 */

const navbar = document.getElementById("navbar");
const logo = document.getElementById("navbar-logo");
const navLinks = document.querySelectorAll(".nav-link");

const defaultLogo = "../public/img/logo.png";
const scrollLogo = "../public/img/logo3.png";
const offset = 120;

/**
 * Helper: mengatur link aktif pada navbar
 * @param {string} id - ID section yang aktif
 */
function setActiveLink(id) {
    navLinks.forEach(link => {
        link.classList.remove(
            "underline",
            "underline-offset-8",
            "font-semibold"
        );

        if (link.getAttribute("href") === `#${id}`) {
            link.classList.add(
                "underline",
                "underline-offset-8",
                "font-semibold"
            );
        }
    });
}

/**
 * Menangani scroll navbar dan scroll spy
 * Mengubah style navbar dan mengatur active link berdasarkan scroll position
 */
function handleNavbar() {
    const scrolled = window.scrollY > 10;

    // Navbar style
    navbar.classList.toggle("bg-white", scrolled);
    navbar.classList.toggle("border-b", scrolled);
    navbar.classList.toggle("border-default", scrolled);
    navbar.classList.toggle("shadow-sm", scrolled);

    // Logo
    logo.src = scrolled ? scrollLogo : defaultLogo;

    // Warna text nav
    navLinks.forEach(link => {
        if (scrolled) {
            link.classList.remove("text-white", "hover:text-white/80");
            link.classList.add("text-brand", "hover:text-brand-strong");
        } else {
            link.classList.remove("text-brand", "hover:text-brand-strong");
            link.classList.add("text-white", "hover:text-white/80");
        }
    });

    // Scroll spy
    // 1. Beranda (paling atas)
    if (window.scrollY < 50) {
        setActiveLink("home");
        return;
    }

    // 2. Kontak (paling bawah)
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
    ) {
        setActiveLink("kontak");
        return;
    }

    // 3. Section lain
    document.querySelectorAll("[id]").forEach(section => {
        const top = section.offsetTop - offset;
        const height = section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            setActiveLink(section.id);
        }
    });
}

/**
 * Menginisialisasi navbar component
 */
export function initNavbar() {
    // Click nav (instant active)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href").replace("#", "");
            setActiveLink(id);
        });
    });

    window.addEventListener("scroll", handleNavbar);
    window.addEventListener("load", handleNavbar);
}