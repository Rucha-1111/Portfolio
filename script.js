const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    // Basic cursor movement
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Smooth follower movement
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Hover effect for links
const links = document.querySelectorAll('a, .project-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        follower.style.transform = 'scale(2)';
        follower.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        follower.style.transform = 'scale(1)';
        follower.style.backgroundColor = 'transparent';
    });
});

const typewriterEl = document.getElementById("typewriter");
const words = ["Curious Developer", "Fueled by Tea Person", "Writer of Codes, Conditions, and Thoughts", "Story Collector"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    // Determine if we are adding or removing letters
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Update the text content
    typewriterEl.textContent = currentWord.substring(0, charIndex);

    let pause = 100; // Default speed

    if (!isDeleting && charIndex === currentWord.length) {
        // Word is finished, wait before deleting
        pause = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Word is gone, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        pause = 500;
    } else if (isDeleting) {
        // Speed up when deleting
        pause = 50;
    }

    setTimeout(type, pause);
}

// Start the animation
document.addEventListener("DOMContentLoaded", type);
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusText = document.getElementById("formStatus");

    if (!form) return; // safety check

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // ✅ prevent page reload

        statusText.textContent = "Sending...";
        statusText.style.color = "#aaa";

        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzSlvq8AGyXkzeEkVT4kUDXd6k1jOqqrDfsrN0Zz99KG3fOtXYiL7rI1S2KE5JaTS4G/exec",
                { method: "POST", body: formData }
            );

            const textResult = await response.text(); // <-- use text() instead of json()

            // Check if the response contains "success"
            if (textResult.toLowerCase().includes("success")) {
                statusText.textContent = "Message sent successfully ✔";
                statusText.style.color = "#4caf50";
                form.reset();
            } else {
                statusText.textContent = "Failed to send message ❌";
                statusText.style.color = "#ff5252";
            }
        } catch (err) {
            console.error(err);
            statusText.textContent = "Something went wrong. Try again later.";
            statusText.style.color = "#ff5252";
        }
    });
});
