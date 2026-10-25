'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, CheckCircle2, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../../shared/components/BrandIcons';
import { SectionHeader } from '../../shared/components/SectionHeader';
import { GlassCard } from '../../shared/components/GlassCard';
import { Button } from '../../shared/components/Button';
import { Profile } from '../../core/domain/entities';
import { openCVModal } from '../cv/CVModalContainer';
import { container } from '../../infrastructure/container';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  profile: Profile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Agent Architecture Inquiry',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    const contactGateway = container.getContactGateway();
    const result = await contactGateway.submitInquiry({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(result.data.note || 'Thank you! Your message has been transmitted successfully.');
      setFormData({
        name: '',
        email: '',
        subject: 'AI Agent Architecture Inquiry',
        message: '',
      });
    } else {
      setSubmitError(result.error?.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <section id="contact" className={`section-wrapper ${styles.contactSection}`}>
      <div className="container">
        <SectionHeader
          number="07"
          title="Initiate Collaboration"
          subtitle="Whether you require a dedicated Flutter Mobile Application Developer, a cross-platform architectural consultation, or a custom iOS/Android application—let's build together."
        />

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Details */}
          <div className={styles.infoColumn}>
            <GlassCard className={styles.infoCard}>
              <h3 className={styles.infoHeading}>Direct Channels</h3>
              <p className={styles.infoText}>
                With 2 years of professional mobile experience and 1 year 7 months currently contributing at Softvence IT Limited, I am receptive to mobile engineering opportunities, cross-platform consulting, and collaborative projects.
              </p>

              <div className={styles.channelList}>
                {/* Email Item with Copy Button */}
                <div className={styles.channelItem}>
                  <div className={styles.channelIconWrapper}>
                    <Mail size={18} className={styles.channelIcon} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Email Address</span>
                    <span className={styles.channelValue}>{profile.email}</span>
                  </div>
                  <button
                    className={styles.copyBtn}
                    onClick={copyEmailToClipboard}
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className={styles.channelItem}>
                  <div className={styles.channelIconWrapper}>
                    <MapPin size={18} className={styles.channelIcon} />
                  </div>
                  <div className={styles.channelDetails}>
                    <span className={styles.channelLabel}>Location / Timezone</span>
                    <span className={styles.channelValue}>{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className={styles.socialsBlock}>
                <span className={styles.socialsLabel}>Verified Networks:</span>
                <div className={styles.socialButtons}>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIconBtn}
                    title="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIconBtn}
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  {profile.twitterUrl && (
                    <a
                      href={profile.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIconBtn}
                      title="Twitter / X"
                    >
                      <TwitterIcon size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Button
                  variant="primary"
                  size="md"
                  icon={<FileText size={16} />}
                  onClick={openCVModal}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View & Download Full CV
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className={styles.formColumn}>
            <GlassCard className={styles.formCard}>
              <h3 className={styles.formHeading}>Transmit an Inquiry</h3>

              {submitSuccess && (
                <div className={styles.successAlert}>
                  <CheckCircle2 size={20} className={styles.successIcon} />
                  <p>{submitSuccess}</p>
                </div>
              )}

              {submitError && (
                <div className={styles.errorAlert}>
                  <p>{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@enterprise.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Topic / Domain Focus</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={styles.select}
                  >
                    <option value="AI Agent Architecture Inquiry">AI Agent & LangGraph Architecture</option>
                    <option value="Cross-Platform Flutter Development">Cross-Platform Flutter & Web App</option>
                    <option value="Clean Architecture & Polyglot Backend">Clean Architecture & Polyglot Backends</option>
                    <option value="System Advisory / Technical Consulting">Senior Technical Advisory</option>
                    <option value="General Engineering Question">General Engineering Discussion</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Project Scope & Specifications</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your system requirements, timeline, and architectural objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? 'Transmitting...' : 'Dispatch Message'}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
