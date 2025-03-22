---
title: Home | Nyree Hinton | Financial Analyst & Product Manager
slug: /
date: '2025-03-26'
excerpt: 'Portfolio showcasing ETF data product management experience at Capital Group, featuring ETF fundamentals, strategy, and data management achievements.'
isFeatured: true
type: CustomHTMLLayout
author: content/data/nyree.json
allowed_elements:
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
  - p
  - a
  - img
  - ul
  - ol
  - li
  - strong
  - em
  - blockquote
  - hr
  - br
  - div
  - span
  - table
  - thead
  - tbody
  - tr
  - th
  - td
  - header
  - nav
  - main
  - footer
  - section
  - article
  - aside
  - figure
  - figcaption
  - canvas
seo:
  metaTitle: Nyree Hinton | Financial Analyst & Product Manager Portfolio
  metaDescription: Portfolio showcasing ETF data product management experience at Capital Group, featuring ETF fundamentals, strategy, and data management achievements.
  socialImage: /images/Capital_Group_Companies.jpg
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nyree Hinton | Portfolio</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- TailwindCSS CDN (for demo purposes) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Chart.js for data visualization -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    
    <style>
        /* Additional styles not covered by Tailwind */
        html {
            scroll-behavior: smooth;
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-delay-100 {
            animation-delay: 100ms;
        }
        
        .animate-delay-200 {
            animation-delay: 200ms;
        }
        
        .animate-delay-300 {
            animation-delay: 300ms;
        }
        
        /* Service card hover effect */
        .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Processing step indicators */
        .step-indicator::before {
            content: '';
            position: absolute;
            top: 0;
            left: 24px;
            bottom: 0;
            width: 1px;
            background-color: #e5e7eb;
            z-index: -1;
        }
        
        .process-step:last-child .step-indicator::before {
            display: none;
        }
        
        /* Form inputs focus styles */
        .form-input:focus, .form-select:focus, .form-textarea:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 1px #3b82f6;
        }
        
        /* Hero section styles from index.html */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
            margin: 0;
            opacity: 0;
            transform: translateY(20px);
            animation: slideIn 1s ease forwards;
            animation-delay: 0.5s;
        }

        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-size: 1.5rem;
            font-weight: 400;
            letter-spacing: 0.1em;
            margin: 0;
            color: #111111;
            text-transform: uppercase;
        }

        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            animation: fadeIn 1s ease forwards;
            animation-delay: 1.5s;
        }

        .scroll-text {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #a1a1aa;
        }

        :root {
            --text-color: #111111;
        }
    </style>

</head>

<body class="font-sans text-gray-900 antialiased">
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-16 md:h-20">
                <a href="#" class="text-xl font-semibold tracking-tight">
                    Nyree Hinton
                </a>
                
                <!-- Mobile menu button -->
                <button class="md:hidden flex items-center p-2" aria-label="Toggle menu" id="mobile-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                
                <!-- Desktop Navigation -->
                <ul class="hidden md:flex items-center space-x-8">
                    <li>
                        <a href="/" class="text-sm font-medium hover:text-blue-500 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/capital" class="text-sm font-medium hover:text-blue-500 transition-colors">
                            Capital Group
                        </a>
                    </li>
                    <li>
                        <a href="/thirdbridge" class="text-sm font-medium hover:text-blue-500 transition-colors">
                            Third Bridge
                        </a>
                    </li>
                    <li>
                        <a href="/bloomberg" class="text-sm font-medium hover:text-blue-500 transition-colors">
                            Bloomberg
                        </a>
                    </li>
                    <li>
                        <a href="/teslaa" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-blue-500 text-white hover:bg-blue-600 h-9 px-4 py-2">
                            Tesla
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div class="hidden md:hidden bg-white border-t border-gray-100 px-4 py-5 shadow-lg" id="mobile-menu">
            <ul class="space-y-4">
                <li>
                    <a href="/" class="block py-2 text-sm font-medium hover:text-blue-500 transition-colors w-full text-left">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/capital" class="block py-2 text-sm font-medium hover:text-blue-500 transition-colors w-full text-left">
                        Capital Group
                    </a>
                </li>
                <li>
                    <a href="/thirdbridgee" class="block py-2 text-sm font-medium hover:text-blue-500 transition-colors w-full text-left">
                        Third Bridge
                    </a>
                </li>
                <li>
                    <a href="/bloomberg" class="block py-2 text-sm font-medium hover:text-blue-500 transition-colors w-full text-left">
                        Bloomberg
                    </a>
                </li>
                <li>
                    <a href="/tesla" class="block text-center w-full rounded-md bg-blue-500 text-white py-2 px-4 mt-4 hover:bg-blue-600 transition-colors">
                        Tesla
                    </a>
                </li>
            </ul>
            </div>
    </header>

    <!-- Hero Section (from index.html) -->
    <section class="hero" id="home">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="hero-content flex items-center justify-center gap-12">
                <div class="flex flex-col">
                    <h1>Explore My Work</h1>
                        </div>
                <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                    <img src="/images/nyree-hinton-headshot.png" alt="Nyree Hinton" class="w-full h-full object-cover">
                    </div>
                        </div>
                    </div>
        <div class="scroll-indicator">
            <span class="scroll-text">Scroll</span>
                </div>
    </section>

    <!-- Portfolio Highlights -->
    <section class="py-16">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-16">Portfolio Highlights</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Bloomberg Card -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <img src="/images/bloomberg-logo-vector.png.jpg" alt="Bloomberg" class="h-12 mb-8">
                    <h3 class="text-2xl font-bold mb-4">Bloomberg Intelligence</h3>
                    <p class="text-gray-600 mb-6">
                        Analyzed mobile, IoT, and automotive segments within Apple semiconductor suppliers (ams-SW) during my internship - returned full-time as an Equity Research Data Analyst evaluating financial performance and market opportunities across technology, media, and telecommunication (TMT) companies.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Financial Analysis</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Market Research</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Technology Evaluation</span>
                        </div>
                    </div>

                <!-- Capital Group Card -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <img src="/images/CaptialGroup_Logo_Horizontal.png" alt="Capital Group" class="h-12 mb-8">
                    <h3 class="text-2xl font-bold mb-4">Capital Group</h3>
                    <p class="text-gray-600 mb-6">
                        Engineered robust ETL pipelines integrating 9 data sources, accelerating processing by 70% and ensuring reliable insights for both internal and external stakeholders.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">ETL Pipelines</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Data Integration</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Process Optimization</span>
                    </div>
                </div>

                <!-- Third Bridge Card -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <img src="/images/Thirdbrige.png.jpg" alt="Third Bridge" class="h-12 mb-8">
                    <h3 class="text-2xl font-bold mb-4">Third Bridge</h3>
                    <p class="text-gray-600 mb-6">
                        Conducted 125+ executive-level discussions, uncovering vital trends in consumer staples, services, and agricultural markets that informed strategic investment decisions.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Market Research</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Investment Strategy</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Trend Analysis</span>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="/portfolio" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Full Portfolio
                </a>
            </div>
        </div>
    </section>

    <!-- Subject Matter -->
    <section class="py-16">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center mb-16">Subject Matter</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Financial Analysis -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <div class="text-blue-600 mb-6">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M5 15C3.34315 15 2 13.6569 2 12C2 10.3431 3.34315 9 5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Financial Analysis</h3>
                    <p class="text-gray-600 mb-6">
                        Specialized in ETF analytics, transaction data analysis, and financial modeling to drive strategic decision-making and product development.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">ETF Analytics</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Transaction Analysis</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Financial Modeling</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Market Research</span>
                        </div>
                    <div class="mt-8 text-gray-500">Expert Level</div>
        </div>

                <!-- Product Management -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <div class="text-blue-600 mb-6">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M9 8H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M9 12H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M9 16H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Product Management</h3>
                    <p class="text-gray-600 mb-6">
                        Leading product development initiatives with a focus on data-driven decision making, stakeholder management, and agile methodologies.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Product Strategy</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Stakeholder Management</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Agile Methodologies</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Product Roadmapping</span>
                    </div>
                </div>

                <!-- Data Governance -->
                <div class="rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow">
                    <div class="text-blue-600 mb-6">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                            <path d="M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M5 15C3.34315 15 2 13.6569 2 12C2 10.3431 3.34315 9 5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
            </div>
                    <h3 class="text-2xl font-bold mb-4">Data Governance</h3>
                    <p class="text-gray-600 mb-6">
                        Designing and implementing robust ETL pipelines and data governance frameworks to ensure data quality, compliance, and accessibility.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">ETL Pipeline Design</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Data Integration</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Data Quality Management</span>
                        <span class="px-3 py-1 border border-blue-200 text-blue-600 rounded-full text-sm">Compliance Frameworks</span>
        </div>
                    <div class="mt-8 text-gray-500">Proficient Level</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer with Social Links -->
    <footer class="py-12 border-t">
        <div class="container mx-auto px-4 md:px-6 lg:px-8">
            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="flex items-center space-x-6">
                    <a href="https://github.com/nyreehinton" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-500 transition-colors">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nyreehinton" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-500 transition-colors">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="mailto:nyree.hinton@gmail.com" class="text-gray-600 hover:text-blue-500 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        </a>
                    </div>
                <p class="text-gray-500 text-sm">© 2024 Nyree Hinton. All rights reserved.</p>
                </div>
            </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking on links
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                });
            });


            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Scroll animations
            function checkVisibility() {
                const elements = document.querySelectorAll('.service-card, .process-step, .pricing-card');
                elements.forEach(element => {
                    const position = element.getBoundingClientRect();
                    // If element is in viewport
                    if (position.top < window.innerHeight * 0.8) {
                        element.classList.add('animate-fade-in');
                    }
                });
            }

            // Check visibility on load
            checkVisibility();

            // Check visibility on scroll
            window.addEventListener('scroll', checkVisibility);
        });
    </script>

</body>
</html>
