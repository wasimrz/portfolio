import React, { useState } from 'react';
import { 
  Smartphone, 
  Wifi, 
  WifiOff, 
  Battery, 
  CheckCircle2, 
  Layers, 
  Radio, 
  Heart, 
  Eye, 
  UserPlus, 
  MessageCircle, 
  Share2, 
  Gift, 
  Search, 
  QrCode, 
  Menu, 
  Video, 
  Hand, 
  ExternalLink,
  Activity,
  Plus
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function MobileShowcase({ onShowToast }) {
  const { interactiveMobileApps, personal } = portfolioData;
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [deviceOS, setDeviceOS] = useState('ios'); // 'ios' | 'android'
  const [isOnline, setIsOnline] = useState(true);
  const [likeCount, setLikeCount] = useState(1420);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [sheetStep, setSheetStep] = useState('menu'); // 'menu' | 'confirm'
  const [coHostQueueState, setCoHostQueueState] = useState('3rd');
  const [interactedCardIndex, setInteractedCardIndex] = useState(null);

  const currentApp = interactiveMobileApps[activeAppIndex];
  const isReelty = currentApp.id === 'reelty';

  // Handle Like Button Click (Spawns floating hearts)
  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
    const newHeartId = Date.now() + Math.random();
    setFloatingHearts((prev) => [...prev, newHeartId]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((id) => id !== newHeartId));
    }, 2000);
  };

  const handleOpenBottomSheet = () => {
    setSheetStep('menu');
    setIsBottomSheetOpen(true);
  };

  const handleSendCoHostRequest = () => {
    setIsBottomSheetOpen(false);
    setCoHostQueueState('2nd');
    if (onShowToast) {
      onShowToast("NestJS WebSocket Gateway: Co-host join request dispatched via Agora RTC channel!");
    }
  };

  const handleToggleOnline = () => {
    const newState = !isOnline;
    setIsOnline(newState);
    if (onShowToast) {
      onShowToast(newState ? "Network restored: Reconnected to Agora RTC edge gateway" : "Offline mode: WatermelonDB / local queue active");
    }
  };

  return (
    <section id="mobile-showcase" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Smartphone size={14} />
            <span>Interactive Mobile Simulator</span>
          </div>
          <h2 className="section-title">Production Mobile & Streaming Architecture</h2>
          <p className="section-desc">
            Explore live interactive mobile applications engineered with React Native, Agora RTC, NestJS, and WebSockets. Test real workflows, live stream co-hosting, and backstage drawer animations.
          </p>
        </div>

        <div className="mobile-showcase-container">
          {/* Left Info Pane */}
          <div className="showcase-info-pane">
            {/* App Selector Tabs */}
            <div className="app-selector-tabs">
              {interactiveMobileApps.map((app, idx) => (
                <button
                  key={app.id}
                  onClick={() => {
                    setActiveAppIndex(idx);
                    setIsBottomSheetOpen(false);
                    setInteractedCardIndex(null);
                  }}
                  className={`app-tab-btn ${activeAppIndex === idx ? 'active' : ''}`}
                >
                  {app.id === 'reelty' && <Radio size={14} color="#ef4444" />}
                  {app.id === 'dailydoc' && <Activity size={14} color="#0284c7" />}
                  {app.id === 'vodservice' && <Layers size={14} color="#8b5cf6" />}
                  <span>{app.name}</span>
                </button>
              ))}
            </div>

            {/* App Details Card */}
            <div className="app-details-card">
              <div className="app-details-header">
                <div>
                  <h3 className="app-name">{currentApp.name}</h3>
                  <p className="app-tagline">{currentApp.tagline}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <span className="category-badge">{currentApp.badge}</span>
                </div>
              </div>

              <p className="app-desc">{currentApp.description}</p>

              <div className="tech-tags-list">
                {currentApp.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="spec-section-title">
                Engineering & Architecture Implementation:
              </h4>

              <ul className="architecture-highlights">
                {currentApp.architecturePoints.map((point, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Phone Simulator Frame */}
          <div className="phone-wrapper">
            {/* Phone Controls Toolbar */}
            <div className="phone-controls-toolbar">
              <div className="phone-toggle-group">
                <button
                  onClick={() => setDeviceOS('ios')}
                  className={`phone-toggle-btn ${deviceOS === 'ios' ? 'active' : ''}`}
                >
                  iPhone 16
                </button>
                <button
                  onClick={() => setDeviceOS('android')}
                  className={`phone-toggle-btn ${deviceOS === 'android' ? 'active' : ''}`}
                >
                  Pixel 9
                </button>
              </div>

              <button
                onClick={handleToggleOnline}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.74rem',
                  color: isOnline ? '#10b981' : '#f59e0b',
                  fontWeight: 600
                }}
              >
                {isOnline ? <Wifi size={13} /> : <WifiOff size={13} />}
                <span>{isOnline ? 'Online' : 'Offline'}</span>
              </button>
            </div>

            {/* The Phone Chassis */}
            <div className={`phone-chassis ${deviceOS === 'android' ? 'android' : ''}`}>
              <div className="phone-screen">
                {/* Dynamic Island / Notch */}
                {deviceOS === 'ios' ? (
                  <div className="dynamic-island">
                    <div className="sensor-dot" />
                    <div className="camera-dot" />
                  </div>
                ) : (
                  <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#000', zIndex: 40 }} />
                )}

                {/* Status Bar */}
                <div className="phone-status-bar">
                  <span>9:41</span>
                  <div className="status-bar-icons">
                    {isOnline ? <Wifi size={12} /> : <WifiOff size={12} color="#f59e0b" />}
                    <span style={{ fontSize: '0.65rem' }}>5G</span>
                    <Battery size={13} />
                  </div>
                </div>

                {/* ==========================================================
                    SCREEN 1: REELTY™ REAL ESTATE LIVE STREAM (FIGMA REPLICA)
                    ========================================================== */}
                {isReelty ? (
                  <div className="reelty-live-container">
                    {/* Background Video Simulator */}
                    <div 
                      className="reelty-video-backdrop"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80')`
                      }}
                    />
                    <div className="reelty-video-overlay" />

                    {/* Top Header Bar */}
                    <div className="reelty-header">
                      <div className="reelty-header-top">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <QrCode size={16} color="#ffffff" />
                          <span className="reelty-logo-text">
                            REEL<span className="reelty-logo-t">T</span>Y™
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Search size={16} color="#ffffff" />
                          <Menu size={16} color="#ffffff" />
                        </div>
                      </div>

                      {/* Property Info Overlay */}
                      <div className="reelty-property-info">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span className="live-badge-red">
                            <span className="live-dot-white" />
                            LIVE
                          </span>
                          <span className="agent-name">{currentApp.screens.agentName || "Martin Luthor"}</span>
                        </div>
                        <div className="property-address">123 Renner Avenue, Newark, NJ 07112</div>
                        <div className="property-specs">1 Fam | 4 Bed | 3 Bath | 3,500 sq.ft. | $500,000</div>
                      </div>
                    </div>

                    {/* Co-Host Picture-in-Picture Box (Agora RTC Surface) */}
                    <div 
                      className="reelty-pip-cohost"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80')`
                      }}
                    >
                      <div className="pip-power-chat-bar">
                        <span className="pip-chat-text">Show me the pool again...</span>
                        <span className="power-chat-gold">$10 POWER CHAT</span>
                      </div>
                    </div>

                    {/* Right-Hand Vertical Action Bar */}
                    <div className="reelty-right-actions">
                      <div className="action-circle-btn">
                        <div className="circle-icon-wrap">
                          <Eye size={16} />
                        </div>
                        <span className="action-count-label">1.4k</span>
                      </div>

                      <div className="action-circle-btn" onClick={handleOpenBottomSheet}>
                        <div className="circle-icon-wrap">
                          <UserPlus size={16} />
                        </div>
                        <span className="action-count-label">Join</span>
                      </div>

                      <div className="action-circle-btn" onClick={handleLike}>
                        <div className="circle-icon-wrap" style={{ color: '#ef4444' }}>
                          <Heart size={16} fill="#ef4444" />
                        </div>
                        <span className="action-count-label">{likeCount}</span>
                      </div>

                      <div className="action-circle-btn">
                        <div className="circle-icon-wrap">
                          <MessageCircle size={16} />
                        </div>
                        <span className="action-count-label">1k</span>
                      </div>

                      <div className="action-circle-btn">
                        <div className="circle-icon-wrap">
                          <Share2 size={16} />
                        </div>
                        <span className="action-count-label">1</span>
                      </div>

                      <div className="action-circle-btn">
                        <div className="circle-icon-wrap" style={{ color: '#f59e0b' }}>
                          <Gift size={16} />
                        </div>
                        <span className="action-count-label">8</span>
                      </div>

                      <img 
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=100&q=80" 
                        alt="Property Thumbnail" 
                        className="property-mini-thumb" 
                      />
                    </div>

                    {/* Floating Hearts Layer */}
                    <div className="floating-hearts-layer">
                      {floatingHearts.map((hId) => (
                        <div key={hId} className="floating-heart">❤️</div>
                      ))}
                    </div>

                    {/* Live Chat Stream Overlay */}
                    <div className="reelty-live-chat">
                      {currentApp.screens.chatMessages.map((msg, mIdx) => (
                        <div key={mIdx} className="chat-bubble">
                          <span>{msg.country}</span>
                          <span className="chat-user-name" style={{ color: msg.color }}>{msg.user}</span>
                          <span>{msg.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="reelty-bottom-bar">
                      <button 
                        className="hand-queue-btn" 
                        onClick={handleOpenBottomSheet}
                        title="Click to open @gorhom/bottom-sheet"
                      >
                        <Hand size={18} />
                        <span>{coHostQueueState}</span>
                      </button>

                      <button 
                        className="add-stream-btn"
                        onClick={handleOpenBottomSheet}
                        title="Co-Host Actions"
                      >
                        +
                      </button>
                    </div>

                    {/* ==========================================================
                        INTERACTIVE BOTTOM SHEET (@gorhom/bottom-sheet FIGMA MODAL)
                        ========================================================== */}
                    {isBottomSheetOpen && (
                      <div className="reelty-bottom-sheet">
                        <div className="sheet-handle" onClick={() => setIsBottomSheetOpen(false)} />

                        {sheetStep === 'menu' ? (
                          <div>
                            <div 
                              className="sheet-option-card"
                              onClick={() => {
                                if (onShowToast) onShowToast("Go Live workflow triggered: Initializing Agora broadcast stream");
                                setIsBottomSheetOpen(false);
                              }}
                            >
                              <Video size={20} color="#ef4444" />
                              <div>
                                <div className="sheet-option-title">Go Live</div>
                                <div className="sheet-option-sub">Start your own live real estate stream</div>
                              </div>
                            </div>

                            <div 
                              className="sheet-option-card"
                              onClick={() => setSheetStep('confirm')}
                            >
                              <Hand size={20} color="#ef4444" />
                              <div>
                                <div className="sheet-option-title">Join Live</div>
                                <div className="sheet-option-sub">Request to join this live stream as co-host</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Figma Frame 18 Request Modal */
                          <div className="sheet-confirm-modal">
                            <div className="sheet-modal-title">Request to join live?</div>
                            <div className="sheet-modal-sub">
                              The agent ({currentApp.screens.agentName || "Martin Luthor"}) will see your request before you join.
                            </div>

                            <img 
                              src={personal.avatar} 
                              alt="Your Profile" 
                              className="sheet-user-avatar"
                            />

                            <div className="sheet-btn-row">
                              <button 
                                className="sheet-cancel-btn"
                                onClick={() => setSheetStep('menu')}
                              >
                                Cancel
                              </button>
                              <button 
                                className="sheet-send-btn"
                                onClick={handleSendCoHostRequest}
                              >
                                Send Request
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  /* ==========================================================
                     GENERIC APP VIEW (DailyDoc / VOD)
                     ========================================================== */
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0b0f17' }}>
                    <div style={{ padding: '16px 16px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>{currentApp.screens.headerTitle}</span>
                        <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(16,185,129,0.15)', color: '#10b981', fontFamily: 'monospace' }}>
                          Online
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{currentApp.screens.subtitle}</span>
                    </div>

                    <div style={{ flex: 1, padding: '14px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{currentApp.screens.stat1.label}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>{currentApp.screens.stat1.value}</div>
                        </div>
                        <div style={{ padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{currentApp.screens.stat2.label}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>{currentApp.screens.stat2.value}</div>
                        </div>
                      </div>

                      {currentApp.screens.cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            padding: '12px',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            cursor: 'pointer'
                          }}
                          onClick={() => {
                            setInteractedCardIndex(cIdx);
                            if (onShowToast) onShowToast(`Triggered: ${card.actionText}`);
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff' }}>{card.title}</span>
                            <span style={{ fontSize: '0.62rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(56,189,248,0.15)', color: '#38bdf8' }}>{card.badge}</span>
                          </div>
                          <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#94a3b8', marginBottom: 4 }}>{card.time}</div>
                          <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginBottom: 8 }}>{card.subtitle}</div>
                          <button style={{ width: '100%', padding: '6px', borderRadius: '4px', background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)', color: '#38bdf8', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}>
                            {interactedCardIndex === cIdx ? '✓ Active' : card.actionText}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Home Indicator */}
                <div style={{ position: 'absolute', bottom: '6px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', zIndex: 40 }} />
              </div>
            </div>

            {/* Architecture Telemetry Strip */}
            <div className="telemetry-strip">
              <div className="telemetry-item">
                <span>RTC Engine: </span>
                <strong>Agora / LiveKit</strong>
              </div>
              <div className="telemetry-item">
                <span>UI Thread: </span>
                <strong>60.0 FPS</strong>
              </div>
              <div className="telemetry-item">
                <span>WS Gateway: </span>
                <strong>NestJS</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
