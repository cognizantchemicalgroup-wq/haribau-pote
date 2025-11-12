// ===================================
// Haribau Pote - Main JavaScript
// ===================================

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('haribaupote_cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNav();
    initializeCart();
    initializeContactForm();
    initializeNewsletterForm();
    initializeProductFilters();
    updateCartCount();
});

// ===================================
// Navigation
// ===================================

function initializeNav() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-wrapper')) {
            navLinks?.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Shopping Cart Functions
// ===================================

function initializeCart() {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeBtn = cartModal?.querySelector('.close');

    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });

        closeBtn?.addEventListener('click', function() {
            cartModal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }
}

function addToCart(productName, price) {
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('haribaupote_cart', JSON.stringify(cart));

    // Update UI
    updateCartCount();
    showNotification(`${productName} added to cart!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('haribaupote_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQuantity;
        localStorage.setItem('haribaupote_cart', JSON.stringify(cart));
        renderCart();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function openCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'block';
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }

    let html = '<div style="max-height: 400px; overflow-y: auto;">';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e0e0e0;">
                <div style="flex: 1;">
                    <strong>${item.name}</strong><br>
                    <span style="color: #666;">₹${item.price} × ${item.quantity}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button onclick="updateQuantity(${index}, ${item.quantity - 1})"
                            style="background: #f0f0f0; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 1.2rem;">-</button>
                    <span style="width: 30px; text-align: center; font-weight: 600;">${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, ${item.quantity + 1})"
                            style="background: #f0f0f0; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 1.2rem;">+</button>
                    <span style="font-weight: 700; color: #ff6b35; margin-left: 1rem; width: 80px; text-align: right;">₹${itemTotal}</span>
                    <button onclick="removeFromCart(${index})"
                            style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-left: 0.5rem;">✕</button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    cartItems.innerHTML = html;
    cartTotal.textContent = total;
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Contact Form
// ===================================

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            const formMessage = document.getElementById('formMessage');
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
            formMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);

            console.log('Form submitted:', formData);
        });
    }
}

// ===================================
// Newsletter Form
// ===================================

function initializeNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            showNotification('Successfully subscribed to newsletter!');
            this.reset();

            console.log('Newsletter subscription:', email);
        });
    }
}

// ===================================
// Product Filters
// ===================================

function initializeProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter products
            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add fadeIn animation
    const filterStyle = document.createElement('style');
    filterStyle.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(filterStyle);
}

// ===================================
// Scroll Animations
// ===================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .value-card, .recipe-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Back to Top Button
// ===================================

// Create back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
`;
document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

backToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// ===================================
// Utility Functions
// ===================================

// Format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const re = /^[+]?[\d\s-()]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

console.log('Haribau Pote website initialized successfully! 🌶️');






// ===================================
// Razorpay Payment Integration
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const totalAmount = parseInt(document.getElementById('cartTotal').textContent);

            if (totalAmount <= 0) {
                alert('Your cart is empty!');
                return;
            }

            // Razorpay options
            const options = {
                key: "rzp_test_Reqa4cvEfFSehR", // Replace with yoour Razorpay Key ID
                amount: totalAmount * 100, // Convert to paise
                currency: "INR",
                name: "Haribau Pote",
                description: "Order Payment",
                image: "https://yourlogo.com/logo.png", // optional
                handler: function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                    // You can clear cart or send data to backend here
                    localStorage.removeItem('haribaupote_cart');
                    updateCartCount();
                    renderCart();
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999"
                },
                notes: {
                    address: "Haribau Pote Store"
                },
                theme: {
                    color: "#ff6b35"
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    }
});
