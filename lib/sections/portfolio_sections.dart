import 'package:flutter/material.dart';
import 'package:ajijul_hoque_app/widgets/responsive_layout.dart';

/// A wrapper widget that enables hover state detection and cursor changes.
class HoverWidget extends StatefulWidget {
  final Widget Function(BuildContext context, bool isHovered) builder;
  const HoverWidget({super.key, required this.builder});

  @override
  State<HoverWidget> createState() => _HoverWidgetState();
}

class _HoverWidgetState extends State<HoverWidget> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      cursor: SystemMouseCursors.click,
      child: widget.builder(context, _isHovered),
    );
  }
}

/// Glassmorphic Card that responds to hover animations.
class GlassCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry padding;
  final double borderRadius;
  final bool highlighted;

  const GlassCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(24.0),
    this.borderRadius = 16.0,
    this.highlighted = false,
  });

  @override
  Widget build(BuildContext context) {
    return HoverWidget(
      builder: (context, isHovered) {
        final active = isHovered || highlighted;
        return AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOutCubic,
          transform: active
              ? (Matrix4.identity()
                ..translate(0, -6, 0)
                ..scale(1.02))
              : Matrix4.identity(),
          padding: padding,
          decoration: BoxDecoration(
            color: active
                ? const Color(0xFF1E293B).withOpacity(0.95)
                : const Color(0xFF1E293B).withOpacity(0.70),
            borderRadius: BorderRadius.circular(borderRadius),
            border: Border.all(
              color: active
                  ? const Color(0xFF38BDF8).withOpacity(0.5)
                  : const Color(0xFF334155).withOpacity(0.4),
              width: active ? 1.5 : 1.0,
            ),
            boxShadow: [
              BoxShadow(
                color: active
                    ? const Color(0xFF38BDF8).withOpacity(0.15)
                    : Colors.black.withOpacity(0.2),
                blurRadius: active ? 24 : 12,
                offset: active ? const Offset(0, 10) : const Offset(0, 4),
              ),
            ],
          ),
          child: child,
        );
      },
    );
  }
}

// ==========================================
// 1. HERO SECTION
// ==========================================
class HeroSection extends StatelessWidget {
  final VoidCallback onViewWork;
  final VoidCallback onContact;

  const HeroSection({
    super.key,
    required this.onViewWork,
    required this.onContact,
  });

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);

    return Container(
      constraints: BoxConstraints(minHeight: size.height - 80),
      alignment: Alignment.center,
      child: ResponsiveLayout(
        mobileBody: _buildMobileHero(context),
        desktopBody: _buildDesktopHero(context),
      ),
    );
  }

  Widget _buildDesktopHero(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Expanded(
          flex: 6,
          child: _buildHeroText(context, false),
        ),
        const SizedBox(width: 40),
        Expanded(
          flex: 4,
          child: _buildHeroGraphics(context, false),
        ),
      ],
    );
  }

  Widget _buildMobileHero(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SizedBox(height: 40),
        _buildHeroGraphics(context, true),
        const SizedBox(height: 40),
        _buildHeroText(context, true),
        const SizedBox(height: 40),
      ],
    );
  }

  Widget _buildHeroText(BuildContext context, bool isMobile) {
    final crossAlign = isMobile ? CrossAxisAlignment.center : CrossAxisAlignment.start;
    final textAlign = isMobile ? TextAlign.center : TextAlign.left;

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: crossAlign,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          decoration: BoxDecoration(
            color: const Color(0xFF38BDF8).withOpacity(0.1),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: const Color(0xFF38BDF8).withOpacity(0.2)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 8,
                height: 8,
                decoration: const BoxDecoration(
                  color: Color(0xFF10B981),
                  shape: BoxShape.circle,
                ),
              ),
              const SizedBox(width: 8),
              const Text(
                'Available for Projects',
                style: TextStyle(
                  color: Color(0xFF38BDF8),
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 24),
        ShaderMask(
          shaderCallback: (bounds) => const LinearGradient(
            colors: [Color(0xFF38BDF8), Color(0xFF818CF8), Color(0xFFF472B6)],
          ).createShader(bounds),
          child: Text(
            'Ajijul Hoque',
            textAlign: textAlign,
            style: TextStyle(
              fontSize: isMobile ? 42 : 64,
              fontWeight: FontWeight.w900,
              color: Colors.white,
              letterSpacing: -1.0,
            ),
          ),
        ),
        const SizedBox(height: 12),
        Text(
          'AI Engineer & Full-Stack Developer',
          textAlign: textAlign,
          style: TextStyle(
            fontSize: isMobile ? 20 : 28,
            fontWeight: FontWeight.w700,
            color: const Color(0xFFE2E8F0),
          ),
        ),
        const SizedBox(height: 20),
        Text(
          'I orchestrate self-correcting multi-agent systems using LangGraph & LLMs, and craft responsive, fluid, and high-performance user interfaces in Flutter.',
          textAlign: textAlign,
          style: TextStyle(
            fontSize: isMobile ? 15 : 18,
            color: const Color(0xFF94A3B8),
            height: 1.6,
          ),
        ),
        const SizedBox(height: 36),
        Row(
          mainAxisAlignment: isMobile ? MainAxisAlignment.center : MainAxisAlignment.start,
          children: [
            ElevatedButton(
              onPressed: onViewWork,
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF38BDF8),
                foregroundColor: const Color(0xFF0F172A),
                padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 20),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 0,
              ),
              child: const Row(
                children: [
                  Text(
                    'View My Work',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                  ),
                  SizedBox(width: 8),
                  Icon(Icons.arrow_forward_rounded, size: 18),
                ],
              ),
            ),
            const SizedBox(width: 16),
            OutlinedButton(
              onPressed: onContact,
              style: OutlinedButton.styleFrom(
                foregroundColor: Colors.white,
                side: const BorderSide(color: Color(0xFF475569)),
                padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 20),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text(
                'Let\'s Connect',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildHeroGraphics(BuildContext context, bool isMobile) {
    return Center(
      child: SizedBox(
        width: isMobile ? 260 : 360,
        height: isMobile ? 260 : 360,
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Background glowing pulse circles
            AnimatedContainer(
              duration: const Duration(seconds: 2),
              width: isMobile ? 240 : 320,
              height: isMobile ? 240 : 320,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    const Color(0xFF818CF8).withOpacity(0.15),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
            Container(
              width: isMobile ? 200 : 280,
              height: isMobile ? 200 : 280,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: const LinearGradient(
                  colors: [Color(0xFF1E293B), Color(0xFF0F172A)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                border: Border.all(
                  color: const Color(0xFF38BDF8).withOpacity(0.3),
                  width: 2,
                ),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF38BDF8).withOpacity(0.2),
                    blurRadius: 40,
                    spreadRadius: 2,
                  ),
                ],
              ),
              child: const Icon(
                Icons.psychology_outlined,
                size: 90,
                color: Color(0xFF38BDF8),
              ),
            ),
            Positioned(
              right: 15,
              top: 40,
              child: _buildFloatingBadge('LangGraph', const Color(0xFF818CF8)),
            ),
            Positioned(
              left: 5,
              bottom: 60,
              child: _buildFloatingBadge('Flutter', const Color(0xFF38BDF8)),
            ),
            Positioned(
              right: 25,
              bottom: 20,
              child: _buildFloatingBadge('AI Agents', const Color(0xFFF472B6)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFloatingBadge(String label, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B).withOpacity(0.85),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withOpacity(0.4)),
        boxShadow: [
          BoxShadow(
            color: color.withOpacity(0.1),
            blurRadius: 8,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Text(
        label,
        style: TextStyle(
          color: color,
          fontWeight: FontWeight.bold,
          fontSize: 13,
        ),
      ),
    );
  }
}

// ==========================================
// 2. ABOUT & SKILLS SECTION
// ==========================================
class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveLayout.isMobile(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader('01. About Me & Technical Skills'),
        const SizedBox(height: 36),
        if (isMobile) ...[
          _buildBioText(),
          const SizedBox(height: 40),
          _buildSkillsCategories(context),
        ] else
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(flex: 5, child: _buildBioText()),
              const SizedBox(width: 50),
              Expanded(flex: 5, child: _buildSkillsCategories(context)),
            ],
          ),
      ],
    );
  }

  Widget _buildBioText() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Who is Ajijul Hoque?',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w700,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 16),
        const Text(
          'I am a passionate software creator focused heavily on the intersection of AI Engineering and Modern App Interfaces. With the emergence of advanced Large Language Models, I\'ve specialized in architecting custom agents and memory-enabled workflows that act dynamically to solve production challenges.',
          style: TextStyle(
            fontSize: 16,
            color: Color(0xFF94A3B8),
            height: 1.6,
          ),
        ),
        const SizedBox(height: 16),
        const Text(
          'On the frontend, I rely on Flutter to manifest highly optimized, single-codebase experiences that look stunning on Web, Android, iOS, and Desktop. I build with responsiveness, robust state machines, and detailed visual aesthetics at the center of my design workflow.',
          style: TextStyle(
            fontSize: 16,
            color: Color(0xFF94A3B8),
            height: 1.6,
          ),
        ),
      ],
    );
  }

  Widget _buildSkillsCategories(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSkillGroup(
          'AI & Agentic Engineering',
          ['LangGraph', 'Gemini API', 'OpenAI', 'RAG / Vector DBs', 'Prompt Flow', 'Ollama'],
          const Color(0xFF818CF8),
        ),
        const SizedBox(height: 24),
        _buildSkillGroup(
          'Frontend / Cross-Platform',
          ['Flutter & Dart', 'Material 3', 'Web Responsive', 'React', 'HTML5 / CSS3 / ES6'],
          const Color(0xFF38BDF8),
        ),
        const SizedBox(height: 24),
        _buildSkillGroup(
          'Backend & Database',
          ['Python (FastAPI, Flask)', 'Node.js', 'Firebase Suite', 'PostgreSQL', 'Git / CI/CD'],
          const Color(0xFFF472B6),
        ),
      ],
    );
  }

  Widget _buildSkillGroup(String title, List<String> skills, Color themeColor) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.bold,
            color: themeColor,
            letterSpacing: 0.5,
          ),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 10,
          runSpacing: 10,
          children: skills.map((skill) => _buildSkillChip(skill, themeColor)).toList(),
        ),
      ],
    );
  }

  Widget _buildSkillChip(String label, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: color.withOpacity(0.06),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: color.withOpacity(0.2)),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: color.withOpacity(0.9),
          fontWeight: FontWeight.w600,
          fontSize: 13,
        ),
      ),
    );
  }
}

// ==========================================
// 3. PROJECTS SECTION
// ==========================================
class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveLayout.isMobile(context);
    final isTablet = ResponsiveLayout.isTablet(context);

    int crossAxisCount = 3;
    if (isMobile) {
      crossAxisCount = 1;
    } else if (isTablet) {
      crossAxisCount = 2;
    }

    final projects = [
      _ProjectData(
        title: 'Agentic Workflow Orchestrator',
        description: 'A multi-agent network developed using LangGraph that automatically conducts web research, formats technical articles, and critiques writing via recursive loops.',
        tags: ['LangGraph', 'Python', 'Gemini API', 'FastAPI'],
        icon: Icons.hub_outlined,
        accentColor: const Color(0xFF818CF8),
      ),
      _ProjectData(
        title: 'Production RAG Suite',
        description: 'Enterprise search system with document parsing, chunking pipelines, vector database storage, and low-latency streamed responses with source attributions.',
        tags: ['Python', 'Pinecone', 'LangChain', 'OpenAI'],
        icon: Icons.search_outlined,
        accentColor: const Color(0xFF38BDF8),
      ),
      _ProjectData(
        title: 'Responsive Portfolio Web App',
        description: 'This exact workspace! A sleek, glassmorphic portfolio design configured to scale seamlessly across devices with high performance rendering loops.',
        tags: ['Flutter', 'Dart', 'Responsive UI'],
        icon: Icons.layers_outlined,
        accentColor: const Color(0xFFF472B6),
      ),
      _ProjectData(
        title: 'Multi-Tenant Firebase CRM',
        description: 'A modern desktop and mobile business CRM with real-time sync, auth guards, row-level rules, analytics dashboards, and Cloud Functions integrations.',
        tags: ['Flutter', 'Firebase', 'Cloud Functions'],
        icon: Icons.dashboard_customize_outlined,
        accentColor: const Color(0xFF10B981),
      ),
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader('02. Selected Projects'),
        const SizedBox(height: 36),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: crossAxisCount,
            crossAxisSpacing: 20,
            mainAxisSpacing: 20,
            mainAxisExtent: 260,
          ),
          itemCount: projects.length,
          itemBuilder: (context, index) {
            final p = projects[index];
            return GlassCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Icon(p.icon, color: p.accentColor, size: 36),
                      Row(
                        children: [
                          IconButton(
                            icon: const Icon(Icons.code_rounded, color: Color(0xFF94A3B8), size: 20),
                            onPressed: () {},
                            tooltip: 'Source Code',
                          ),
                          IconButton(
                            icon: const Icon(Icons.open_in_new_rounded, color: Color(0xFF94A3B8), size: 20),
                            onPressed: () {},
                            tooltip: 'Live Demo',
                          ),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                  Text(
                    p.title,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 10),
                  Expanded(
                    child: Text(
                      p.description,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Color(0xFF94A3B8),
                        height: 1.5,
                      ),
                      maxLines: 4,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: p.tags.map((tag) {
                      return Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: p.accentColor.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(4),
                        ),
                        child: Text(
                          tag,
                          style: TextStyle(
                            color: p.accentColor,
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                ],
              ),
            );
          },
        ),
      ],
    );
  }
}

class _ProjectData {
  final String title;
  final String description;
  final List<String> tags;
  final IconData icon;
  final Color accentColor;

  _ProjectData({
    required this.title,
    required this.description,
    required this.tags,
    required this.icon,
    required this.accentColor,
  });
}

// ==========================================
// 4. EXPERIENCE SECTION
// ==========================================
class ExperienceSection extends StatelessWidget {
  const ExperienceSection({super.key});

  @override
  Widget build(BuildContext context) {
    final experiences = [
      _ExpData(
        period: '2025 - Present',
        title: 'Lead AI Application Engineer',
        organization: 'AI Innovation Hub & Projects',
        description: 'Designing autonomous workflows, structured information extractors, and LLM-agent tools using LangGraph, Python, and Flutter frontend dashboards.',
      ),
      _ExpData(
        period: '2024 - 2025',
        title: 'Full-Stack App Developer',
        organization: 'Independent Digital Labs',
        description: 'Built cross-platform Flutter applications for web and mobile. Engineered backend systems using FastAPI and Firebase integrations.',
      ),
      _ExpData(
        period: '2023 - 2024',
        title: 'Software Development Associate',
        organization: 'Tech Academy & Open Source',
        description: 'Assisted in building responsive dashboards, optimized state machines, and maintained Git CI/CD flows.',
      ),
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader('03. Experience Timeline'),
        const SizedBox(height: 36),
        ListView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: experiences.length,
          itemBuilder: (context, index) {
            final exp = experiences[index];
            return Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Timeline tracker
                Column(
                  children: [
                    Container(
                      width: 14,
                      height: 14,
                      decoration: BoxDecoration(
                        color: const Color(0xFF38BDF8),
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF38BDF8).withOpacity(0.5),
                            blurRadius: 8,
                          ),
                        ],
                      ),
                    ),
                    if (index != experiences.length - 1)
                      Container(
                        width: 2,
                        height: 160,
                        color: const Color(0xFF334155),
                      ),
                  ],
                ),
                const SizedBox(width: 24),
                // Card Details
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 24.0),
                    child: GlassCard(
                      padding: const EdgeInsets.all(20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                exp.period,
                                style: const TextStyle(
                                  color: Color(0xFF38BDF8),
                                  fontWeight: FontWeight.bold,
                                  fontSize: 14,
                                ),
                              ),
                              const Icon(Icons.work_history_outlined, color: Color(0xFF475569), size: 18),
                            ],
                          ),
                          const SizedBox(height: 10),
                          Text(
                            exp.title,
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            exp.organization,
                            style: TextStyle(
                              color: Colors.white.withOpacity(0.7),
                              fontSize: 14,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                          const SizedBox(height: 12),
                          Text(
                            exp.description,
                            style: const TextStyle(
                              color: Color(0xFF94A3B8),
                              fontSize: 14,
                              height: 1.5,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ],
    );
  }
}

class _ExpData {
  final String period;
  final String title;
  final String organization;
  final String description;

  _ExpData({
    required this.period,
    required this.title,
    required this.organization,
    required this.description,
  });
}

// ==========================================
// 5. CONTACT SECTION
// ==========================================
class ContactSection extends StatefulWidget {
  const ContactSection({super.key});

  @override
  State<ContactSection> createState() => _ContactSectionState();
}

class _ContactSectionState extends State<ContactSection> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _messageController = TextEditingController();

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Row(
            children: [
              const Icon(Icons.check_circle, color: Color(0xFF10B981)),
              const SizedBox(width: 8),
              Text(
                'Thank you ${_nameController.text}! Message simulated successfully.',
                style: const TextStyle(fontWeight: FontWeight.w600),
              ),
            ],
          ),
          backgroundColor: const Color(0xFF1E293B),
          duration: const Duration(seconds: 4),
          behavior: SnackBarBehavior.floating,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          margin: const EdgeInsets.only(bottom: 20, left: 20, right: 20),
        ),
      );
      _nameController.clear();
      _emailController.clear();
      _messageController.clear();
    }
  }

  @override
  Widget build(BuildContext context) {
    final isMobile = ResponsiveLayout.isMobile(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader('04. Get In Touch'),
        const SizedBox(height: 36),
        if (isMobile) ...[
          _buildContactInfo(),
          const SizedBox(height: 40),
          _buildContactForm(),
        ] else
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(flex: 4, child: _buildContactInfo()),
              const SizedBox(width: 50),
              Expanded(flex: 6, child: _buildContactForm()),
            ],
          ),
      ],
    );
  }

  Widget _buildContactInfo() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text(
          'Let\'s build something together',
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w700,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 16),
        const Text(
          'I am always looking for interesting projects, collaboration opportunities, or technical talks about agentic models and AI tooling. Drop me a note and I\'ll respond as fast as possible.',
          style: TextStyle(
            fontSize: 16,
            color: Color(0xFF94A3B8),
            height: 1.6,
          ),
        ),
        const SizedBox(height: 32),
        _buildContactDetailItem(Icons.email_outlined, 'Email Address', 'ajijul.hoque.dev@gmail.com'),
        const SizedBox(height: 20),
        _buildContactDetailItem(Icons.location_on_outlined, 'Location', 'Dhaka, Bangladesh'),
        const SizedBox(height: 36),
        const Text(
          'Find me on social networks:',
          style: TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            _buildSocialIcon(Icons.code_rounded, 'GitHub', 'https://github.com'),
            const SizedBox(width: 16),
            _buildSocialIcon(Icons.connect_without_contact_rounded, 'LinkedIn', 'https://linkedin.com'),
            const SizedBox(width: 16),
            _buildSocialIcon(Icons.alternate_email_rounded, 'Twitter', 'https://twitter.com'),
          ],
        ),
      ],
    );
  }

  Widget _buildContactDetailItem(IconData icon, String label, String value) {
    return Row(
      children: [
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: const Color(0xFF1E293B),
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: const Color(0xFF334155)),
          ),
          child: Icon(icon, color: const Color(0xFF38BDF8), size: 20),
        ),
        const SizedBox(width: 16),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              label,
              style: const TextStyle(color: Color(0xFF64748B), fontSize: 13),
            ),
            const SizedBox(height: 4),
            Text(
              value,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 15),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildSocialIcon(IconData icon, String tooltip, String url) {
    return HoverWidget(
      builder: (context, isHovered) {
        return Tooltip(
          message: tooltip,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: isHovered ? const Color(0xFF38BDF8) : const Color(0xFF1E293B),
              shape: BoxShape.circle,
              border: Border.all(
                color: isHovered ? const Color(0xFF38BDF8) : const Color(0xFF334155),
              ),
            ),
            child: Icon(
              icon,
              color: isHovered ? const Color(0xFF0F172A) : Colors.white,
              size: 20,
            ),
          ),
        );
      },
    );
  }

  Widget _buildContactForm() {
    return GlassCard(
      padding: const EdgeInsets.all(28),
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Send a Message',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            const SizedBox(height: 24),
            _buildTextField(
              controller: _nameController,
              label: 'Your Name',
              hint: 'John Doe',
              validator: (v) => v == null || v.isEmpty ? 'Please enter your name' : null,
            ),
            const SizedBox(height: 20),
            _buildTextField(
              controller: _emailController,
              label: 'Email Address',
              hint: 'john@example.com',
              keyboardType: TextInputType.emailAddress,
              validator: (v) {
                if (v == null || v.isEmpty) return 'Please enter your email';
                if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(v)) {
                  return 'Please enter a valid email address';
                }
                return null;
              },
            ),
            const SizedBox(height: 20),
            _buildTextField(
              controller: _messageController,
              label: 'Message',
              hint: 'Type your message details...',
              maxLines: 4,
              validator: (v) => v == null || v.isEmpty ? 'Please enter your message' : null,
            ),
            const SizedBox(height: 28),
            ElevatedButton(
              onPressed: _submitForm,
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF38BDF8),
                foregroundColor: const Color(0xFF0F172A),
                padding: const EdgeInsets.symmetric(vertical: 20),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                elevation: 0,
              ),
              child: const Text(
                'Submit Message',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required String hint,
    int maxLines = 1,
    TextInputType keyboardType = TextInputType.text,
    String? Function(String?)? validator,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(color: Color(0xFF94A3B8), fontWeight: FontWeight.w600, fontSize: 13),
        ),
        const SizedBox(height: 8),
        TextFormField(
          controller: controller,
          maxLines: maxLines,
          keyboardType: keyboardType,
          validator: validator,
          style: const TextStyle(color: Colors.white, fontSize: 14),
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: const TextStyle(color: Color(0xFF475569)),
            filled: true,
            fillColor: const Color(0xFF0F172A).withOpacity(0.5),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: const BorderSide(color: Color(0xFF334155)),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: const BorderSide(color: Color(0xFF334155)),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: const BorderSide(color: Color(0xFF38BDF8)),
            ),
            errorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: const BorderSide(color: Color(0xFFEF4444)),
            ),
            focusedErrorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
              borderSide: const BorderSide(color: Color(0xFFEF4444)),
            ),
          ),
        ),
      ],
    );
  }

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _messageController.dispose();
    super.dispose();
  }
}

// ==========================================
// UTILITY HELPERS
// ==========================================
Widget _buildSectionHeader(String title) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        title,
        style: const TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.w900,
          color: Color(0xFF38BDF8),
          letterSpacing: 0.5,
        ),
      ),
      const SizedBox(height: 8),
      Container(
        width: 60,
        height: 4,
        decoration: BoxDecoration(
          color: const Color(0xFF38BDF8),
          borderRadius: BorderRadius.circular(2),
        ),
      ),
    ],
  );
}
