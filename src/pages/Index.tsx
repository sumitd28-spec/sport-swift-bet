<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BetPro - Sports Betting</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary-orange: #FF7700;
            --secondary-orange: #FF9933;
            --primary-green: #00AA50;
            --secondary-green: #00CC66;
            --dark-bg: #1A1A1A;
            --darker-bg: #121212;
            --card-bg: #222222;
            --text-light: #FFFFFF;
            --text-gray: #AAAAAA;
        }

        body {
            background-color: var(--dark-bg);
            color: var(--text-light);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        /* Header Styles */
        header {
            background-color: var(--darker-bg);
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .logo h1 {
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(to right, var(--primary-orange), var(--primary-green));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .logo-icon {
            font-size: 28px;
            margin-right: 10px;
            color: var(--primary-orange);
        }

        .user-actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .btn {
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
        }

        .btn-login {
            background-color: transparent;
            color: var(--text-light);
            border: 1px solid var(--primary-orange);
        }

        .btn-login:hover {
            background-color: var(--primary-orange);
        }

        .btn-register {
            background-color: var(--primary-green);
            color: var(--text-light);
        }

        .btn-register:hover {
            background-color: var(--secondary-green);
        }

        .balance {
            background: linear-gradient(to right, var(--primary-orange), var(--secondary-orange));
            padding: 8px 15px;
            border-radius: 4px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Navigation */
        .main-nav {
            background-color: var(--card-bg);
            margin: 20px 0;
            border-radius: 8px;
            overflow-x: auto;
        }

        .nav-list {
            display: flex;
            list-style: none;
            padding: 0;
        }

        .nav-item {
            padding: 15px 20px;
            cursor: pointer;
            white-space: nowrap;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;
        }

        .nav-item:hover {
            background-color: rgba(255, 119, 0, 0.1);
        }

        .nav-item.active {
            border-bottom: 3px solid var(--primary-orange);
            color: var(--primary-orange);
        }

        /* Sports Grid */
        .sports-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }

        .sport-card {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .sport-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .sport-icon {
            font-size: 32px;
            margin-bottom: 10px;
            color: var(--primary-orange);
        }

        .sport-name {
            font-weight: 600;
        }

        /* Live Matches */
        .section-title {
            display: flex;
            align-items: center;
            margin: 30px 0 15px;
        }

        .section-title h2 {
            font-size: 22px;
            margin-right: 15px;
        }

        .live-badge {
            background-color: #FF0000;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
        }

        .matches-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .match-card {
            background-color: var(--card-bg);
            border-radius: 8px;
            overflow: hidden;
        }

        .match-header {
            background: linear-gradient(to right, var(--primary-green), var(--secondary-green));
            padding: 10px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .match-tournament {
            font-weight: 600;
            font-size: 14px;
        }

        .match-time {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
        }

        .match-content {
            padding: 15px;
        }

        .teams {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .team {
            text-align: center;
            width: 40%;
        }

        .team-name {
            font-weight: 600;
            margin-top: 8px;
        }

        .vs {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: var(--text-gray);
        }

        .odds {
            display: flex;
            justify-content: space-between;
        }

        .odd-btn {
            width: 30%;
            padding: 8px 0;
            text-align: center;
            background-color: var(--darker-bg);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .odd-btn:hover {
            background-color: var(--primary-orange);
        }

        .odd-value {
            font-weight: 700;
            font-size: 16px;
            color: var(--primary-orange);
        }

        .odd-btn:hover .odd-value {
            color: white;
        }

        .odd-name {
            font-size: 12px;
            color: var(--text-gray);
        }

        .odd-btn:hover .odd-name {
            color: white;
        }

        /* Promotions Section */
        .promotions {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .promo-card {
            background: linear-gradient(135deg, var(--primary-orange), var(--primary-green));
            border-radius: 8px;
            padding: 20px;
            display: flex;
            align-items: center;
        }

        .promo-icon {
            font-size: 36px;
            margin-right: 15px;
        }

        .promo-content h3 {
            margin-bottom: 5px;
        }

        .promo-content p {
            font-size: 14px;
            opacity: 0.9;
        }

        /* Footer */
        footer {
            background-color: var(--darker-bg);
            padding: 30px 0;
            margin-top: 50px;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .footer-section {
            width: 23%;
            min-width: 250px;
            margin-bottom: 20px;
        }

        .footer-section h3 {
            color: var(--primary-orange);
            margin-bottom: 15px;
            font-size: 18px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: var(--text-gray);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--primary-green);
        }

        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }

        .social-icons a {
            color: var(--text-light);
            font-size: 20px;
            transition: color 0.3s ease;
        }

        .social-icons a:hover {
            color: var(--primary-orange);
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            margin-top: 20px;
            border-top: 1px solid #333;
            color: var(--text-gray);
            font-size: 14px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .sports-grid {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            }
            
            .footer-section {
                width: 48%;
            }
            
            .user-actions {
                display: none;
            }
            
            .mobile-menu {
                display: block;
            }
        }

        @media (max-width: 480px) {
            .matches-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-section {
                width: 100%;
            }
            
            .logo h1 {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-dice logo-icon"></i>
                    <h1>BetPro</h1>
                </div>
                <div class="user-actions">
                    <button class="btn btn-login">Login</button>
                    <button class="btn btn-register">Register</button>
                    <div class="balance">
                        <i class="fas fa-wallet"></i>
                        $0.00
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <!-- Navigation -->
        <nav class="main-nav">
            <ul class="nav-list">
                <li class="nav-item active">Live</li>
                <li class="nav-item">Sports</li>
                <li class="nav-item">Casino</li>
                <li class="nav-item">Live Casino</li>
                <li class="nav-item">Virtual Sports</li>
                <li class="nav-item">Promotions</li>
                <li class="nav-item">Results</li>
            </ul>
        </nav>

        <!-- Sports Grid -->
        <div class="sports-grid">
            <div class="sport-card">
                <i class="fas fa-futbol sport-icon"></i>
                <div class="sport-name">Football</div>
            </div>
            <div class="sport-card">
                <i class="fas fa-basketball-ball sport-icon"></i>
                <div class="sport-name">Basketball</div>
            </div>
            <div class="sport-card">
                <i class="fas fa-tennis-ball sport-icon"></i>
                <div class="sport-name">Tennis</div>
            </div>
            <div class="sport-card">
                <i class="fas fa-baseball-ball sport-icon"></i>
                <div class="sport-name">Baseball</div>
            </div>
            <div class="sport-card">
                <i class="fas fa-hockey-puck sport-icon"></i>
                <div class="sport-name">Ice Hockey</div>
            </div>
            <div class="sport-card">
                <i class="fas fa-flag-checkered sport-icon"></i>
                <div class="sport-name">Motorsport</div>
            </div>
        </div>

        <!-- Live Matches -->
        <div class="section-title">
            <h2>Live Now</h2>
            <div class="live-badge">LIVE</div>
        </div>

        <div class="matches-grid">
            <!-- Match 1 -->
            <div class="match-card">
                <div class="match-header">
                    <div class="match-tournament">UEFA Champions League</div>
                    <div class="match-time">65'</div>
                </div>
                <div class="match-content">
                    <div class="teams">
                        <div class="team">
                            <i class="fas fa-shield-alt" style="font-size: 24px; color: #FF7700;"></i>
                            <div class="team-name">Barcelona</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <i class="fas fa-shield-alt" style="font-size: 24px; color: #00AA50;"></i>
                            <div class="team-name">Juventus</div>
                        </div>
                    </div>
                    <div class="odds">
                        <div class="odd-btn">
                            <div class="odd-value">2.35</div>
                            <div class="odd-name">1</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">3.40</div>
                            <div class="odd-name">X</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">3.10</div>
                            <div class="odd-name">2</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Match 2 -->
            <div class="match-card">
                <div class="match-header">
                    <div class="match-tournament">NBA</div>
                    <div class="match-time">Q3</div>
                </div>
                <div class="match-content">
                    <div class="teams">
                        <div class="team">
                            <i class="fas fa-basketball-ball" style="font-size: 24px; color: #FF7700;"></i>
                            <div class="team-name">Lakers</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <i class="fas fa-basketball-ball" style="font-size: 24px; color: #00AA50;"></i>
                            <div class="team-name">Bulls</div>
                        </div>
                    </div>
                    <div class="odds">
                        <div class="odd-btn">
                            <div class="odd-value">1.85</div>
                            <div class="odd-name">1</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">8.50</div>
                            <div class="odd-name">X</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">2.10</div>
                            <div class="odd-name">2</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Match 3 -->
            <div class="match-card">
                <div class="match-header">
                    <div class="match-tournament">ATP Tour</div>
                    <div class="match-time">Set 2</div>
                </div>
                <div class="match-content">
                    <div class="teams">
                        <div class="team">
                            <i class="fas fa-tennis-ball" style="font-size: 24px; color: #FF7700;"></i>
                            <div class="team-name">Nadal</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <i class="fas fa-tennis-ball" style="font-size: 24px; color: #00AA50;"></i>
                            <div class="team-name">Djokovic</div>
                        </div>
                    </div>
                    <div class="odds">
                        <div class="odd-btn">
                            <div class="odd-value">2.20</div>
                            <div class="odd-name">1</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">1.95</div>
                            <div class="odd-name">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Upcoming Matches -->
        <div class="section-title">
            <h2>Upcoming Matches</h2>
        </div>

        <div class="matches-grid">
            <!-- Match 4 -->
            <div class="match-card">
                <div class="match-header">
                    <div class="match-tournament">Premier League</div>
                    <div class="match-time">Today 19:45</div>
                </div>
                <div class="match-content">
                    <div class="teams">
                        <div class="team">
                            <i class="fas fa-shield-alt" style="font-size: 24px; color: #FF7700;"></i>
                            <div class="team-name">Chelsea</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <i class="fas fa-shield-alt" style="font-size: 24px; color: #00AA50;"></i>
                            <div class="team-name">Arsenal</div>
                        </div>
                    </div>
                    <div class="odds">
                        <div class="odd-btn">
                            <div class="odd-value">2.10</div>
                            <div class="odd-name">1</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">3.50</div>
                            <div class="odd-name">X</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">3.30</div>
                            <div class="odd-name">2</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Match 5 -->
            <div class="match-card">
                <div class="match-header">
                    <div class="match-tournament">NFL</div>
                    <div class="match-time">Tomorrow 01:20</div>
                </div>
                <div class="match-content">
                    <div class="teams">
                        <div class="team">
                            <i class="fas fa-football-ball" style="font-size: 24px; color: #FF7700;"></i>
                            <div class="team-name">Patriots</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <i class="fas fa-football-ball" style="font-size: 24px; color: #00AA50;"></i>
                            <div class="team-name">Eagles</div>
                        </div>
                    </div>
                    <div class="odds">
                        <div class="odd-btn">
                            <div class="odd-value">1.95</div>
                            <div class="odd-name">1</div>
                        </div>
                        <div class="odd-btn">
                            <div class="odd-value">1.90</div>
                            <div class="odd-name">2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Promotions -->
        <div class="section-title">
            <h2>Promotions & Bonuses</h2>
        </div>

        <div class="promotions">
            <div class="promo-card">
                <i class="fas fa-gift promo-icon"></i>
                <div class="promo-content">
                    <h3>Welcome Bonus</h3>
                    <p>Get 100% bonus up to $200 on your first deposit</p>
                </div>
            </div>
            <div class="promo-card">
                <i class="fas fa-ticket-alt promo-icon"></i>
                <div class="promo-content">
                    <h3>Free Bet</h3>
                    <p>Get a $10 free bet when you place 5 bets</p>
                </div>
            </div>
            <div class="promo-card">
                <i class="fas fa-coins promo-icon"></i>
                <div class="promo-content">
                    <h3>Cashback</h3>
                    <p>Get 10% cashback on your losses every week</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>BetPro</h3>
                    <p>The best online betting experience with competitive odds and fast payouts.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Sports</h3>
                    <ul class="footer-links">
                        <li><a href="#">Football</a></li>
                        <li><a href="#">Basketball</a></li>
                        <li><a href="#">Tennis</a></li>
                        <li><a href="#">Ice Hockey</a></li>
                        <li><a href="#">Volleyball</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Help</h3>
                    <ul class="footer-links">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Responsible Gaming</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul class="footer-links">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies Policy</a></li>
                        <li><a href="#">Bonus Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 BetPro. All rights reserved. 18+ | Please gamble responsibly.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple interactivity for demonstration
        document.addEventListener('DOMContentLoaded', function() {
            // Add active class to nav items on click
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navItems.forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Add click effect to odd buttons
            const oddButtons = document.querySelectorAll('.odd-btn');
            oddButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove selected class from all buttons in the same match
                    const allInMatch = this.closest('.odds').querySelectorAll('.odd-btn');
                    allInMatch.forEach(btn => btn.classList.remove('selected'));
                    
                    // Add selected class to clicked button
                    this.classList.add('selected');
                });
            });

            // Add hover effect to sport cards
            const sportCards = document.querySelectorAll('.sport-card');
            sportCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
        });
    </script>
</body>
</html>