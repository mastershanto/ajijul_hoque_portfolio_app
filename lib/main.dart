import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:ajijul_hoque_app/widgets/responsive_layout.dart';
import 'package:ajijul_hoque_app/sections/portfolio_sections.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ajijul Hoque | AI Engineer & Full-Stack Developer',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: const Color(0xFF38BDF8),
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF38BDF8),
          brightness: Brightness.dark,
          primary: const Color(0xFF38BDF8),
          secondary: const Color(0xFF818CF8),
          surface: const Color(0xFF0F172A),
        ),
        useMaterial3: true,
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: Color(0xFF94A3B8)),
          bodyMedium: TextStyle(color: Color(0xFF94A3B8)),
        ),
      ),
      home: const PortfolioShell(),
    );
  }
}

class PortfolioShell extends StatefulWidget {
  const PortfolioShell({super.key});

  @override
  State<PortfolioShell> createState() => _PortfolioShellState();
}

class _PortfolioShellState extends State<PortfolioShell> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  final ScrollController _scrollController = ScrollController();
  final List<GlobalKey> _keys = List.generate(5, (index) => GlobalKey());

  void _scrollTo(int index) {
    // If the drawer is open on mobile, close it before scrolling.
    if (_scaffoldKey.currentState?.isEndDrawerOpen ?? false) {
      Navigator.pop(context);
    }

    final targetContext = _keys[index].currentContext;
    if (targetContext != null) {
      Scrollable.ensureVisible(
        targetContext,
        duration: const Duration(milliseconds: 700),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveLayout.isMobile(context);
    final size = MediaQuery.sizeOf(context);

    // Padding helper to center content nicely on large screens
    double horizontalPadding = 24.0;
    if (size.width > 1200) {
      horizontalPadding = size.width * 0.12; // 12% margin left/right
    } else if (size.width > 800) {
      horizontalPadding = size.width * 0.06; // 6% margin
    }

    return Scaffold(
      key: _scaffoldKey,
      extendBodyBehindAppBar: true,
      appBar: GlassAppBar(
        onMenuPressed: () => _scaffoldKey.currentState?.openEndDrawer(),
        onNavTap: _scrollTo,
        isMobile: isMobile,
      ),
      endDrawer: isMobile ? _buildMobileDrawer() : null,
      body: Stack(
        children: [
          // Background atmospheric glows
          Positioned(
            top: -200,
            left: -200,
            child: Container(
              width: 600,
              height: 600,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: const Color(0xFF38BDF8).withOpacity(0.04),
              ),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 120, sigmaY: 120),
                child: Container(color: Colors.transparent),
              ),
            ),
          ),
          Positioned(
            bottom: size.height * 0.2,
            right: -200,
            child: Container(
              width: 500,
              height: 500,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: const Color(0xFF818CF8).withOpacity(0.04),
              ),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 100, sigmaY: 100),
                child: Container(color: Colors.transparent),
              ),
            ),
          ),
          // Main content scroll view
          SafeArea(
            top: false, // Allows content to flow under the GlassAppBar
            child: SingleChildScrollView(
              controller: _scrollController,
              padding: EdgeInsets.symmetric(horizontal: horizontalPadding),
              child: Column(
                children: [
                  const SizedBox(height: 80), // AppBar offset spacing
                  
                  // 0. Hero Section
                  Container(
                    key: _keys[0],
                    padding: const EdgeInsets.symmetric(vertical: 40),
                    child: HeroSection(
                      onViewWork: () => _scrollTo(2),
                      onContact: () => _scrollTo(4),
                    ),
                  ),

                  // 1. About Section
                  Container(
                    key: _keys[1],
                    padding: const EdgeInsets.symmetric(vertical: 60),
                    child: const AboutSection(),
                  ),

                  // 2. Projects Section
                  Container(
                    key: _keys[2],
                    padding: const EdgeInsets.symmetric(vertical: 60),
                    child: const ProjectsSection(),
                  ),

                  // 3. Experience Section
                  Container(
                    key: _keys[3],
                    padding: const EdgeInsets.symmetric(vertical: 60),
                    child: const ExperienceSection(),
                  ),

                  // 4. Contact Section
                  Container(
                    key: _keys[4],
                    padding: const EdgeInsets.symmetric(vertical: 60),
                    child: const ContactSection(),
                  ),

                  const SizedBox(height: 60),
                  
                  // Footer
                  _buildFooter(),
                  
                  const SizedBox(height: 40),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMobileDrawer() {
    return Drawer(
      backgroundColor: const Color(0xFF0F172A),
      child: SafeArea(
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(24),
              alignment: Alignment.centerLeft,
              decoration: const BoxDecoration(
                border: Border(
                  bottom: BorderSide(color: Color(0xFF1E293B)),
                ),
              ),
              child: const Text(
                'AH. Navigation',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.symmetric(vertical: 16),
                children: [
                  _buildDrawerItem('Home', Icons.home_outlined, 0),
                  _buildDrawerItem('About', Icons.person_outline_rounded, 1),
                  _buildDrawerItem('Projects', Icons.layers_outlined, 2),
                  _buildDrawerItem('Experience', Icons.work_history_outlined, 3),
                  _buildDrawerItem('Contact', Icons.mail_outline_rounded, 4),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: OutlinedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFF38BDF8),
                  side: const BorderSide(color: Color(0xFF38BDF8)),
                  minimumSize: const Size(double.infinity, 50),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                child: const Text(
                  'Close Menu',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDrawerItem(String title, IconData icon, int index) {
    return ListTile(
      leading: Icon(icon, color: const Color(0xFF38BDF8)),
      title: Text(
        title,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.w600,
        ),
      ),
      onTap: () => _scrollTo(index),
    );
  }

  Widget _buildFooter() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 24),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: Color(0xFF1E293B)),
        ),
      ),
      alignment: Alignment.center,
      child: Column(
        children: [
          Text(
            'Designed & Built by Ajijul Hoque',
            style: TextStyle(
              color: const Color(0xFF94A3B8).withOpacity(0.8),
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Powered by Flutter & Dart',
            style: TextStyle(
              color: const Color(0xFF94A3B8).withOpacity(0.5),
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}

class GlassAppBar extends StatelessWidget implements PreferredSizeWidget {
  final VoidCallback onMenuPressed;
  final Function(int) onNavTap;
  final bool isMobile;

  const GlassAppBar({
    super.key,
    required this.onMenuPressed,
    required this.onNavTap,
    required this.isMobile,
  });

  @override
  Size get preferredSize => const Size.fromHeight(80.0);

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
        child: Container(
          height: 80,
          padding: const EdgeInsets.symmetric(horizontal: 24),
          decoration: BoxDecoration(
            color: const Color(0xFF0F172A).withOpacity(0.8),
            border: Border(
              bottom: BorderSide(
                color: const Color(0xFF334155).withOpacity(0.3),
                width: 1,
              ),
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // Logo
              HoverWidget(
                builder: (context, isHovered) {
                  return InkWell(
                    onTap: () => onNavTap(0),
                    child: Text(
                      'AH.',
                      style: TextStyle(
                        color: isHovered ? const Color(0xFF38BDF8) : Colors.white,
                        fontSize: 24,
                        fontWeight: FontWeight.w900,
                        letterSpacing: 1.2,
                      ),
                    ),
                  );
                },
              ),
              // Menu items
              if (isMobile)
                IconButton(
                  icon: const Icon(Icons.menu_rounded, color: Colors.white, size: 28),
                  onPressed: onMenuPressed,
                )
              else
                Row(
                  children: [
                    _buildNavItem('About', () => onNavTap(1)),
                    _buildNavItem('Projects', () => onNavTap(2)),
                    _buildNavItem('Experience', () => onNavTap(3)),
                    _buildNavItem('Contact', () => onNavTap(4)),
                    const SizedBox(width: 16),
                    OutlinedButton(
                      onPressed: () {},
                      style: OutlinedButton.styleFrom(
                        foregroundColor: const Color(0xFF38BDF8),
                        side: const BorderSide(color: Color(0xFF38BDF8), width: 1.5),
                        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      child: const Text(
                        'Resume',
                        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                      ),
                    ),
                  ],
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNavItem(String label, VoidCallback onTap) {
    return HoverWidget(
      builder: (context, isHovered) {
        return Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: InkWell(
            onTap: onTap,
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            hoverColor: Colors.transparent,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: TextStyle(
                    color: isHovered ? const Color(0xFF38BDF8) : const Color(0xFF94A3B8),
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4),
                AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  width: isHovered ? 24 : 0,
                  height: 2,
                  color: const Color(0xFF38BDF8),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
