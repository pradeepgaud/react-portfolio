import { useEffect, useState, useRef } from "react";

const SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="hover"], .cursor-hover';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [enabled, setEnabled] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  // Enable/disable when device changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let animationFrame;
    const cursorPos = { x: -100, y: -100 };
    const trailPos = { x: -100, y: -100 };

    const onMove = (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
      setPos({ x: cursorPos.x, y: cursorPos.y });
    };

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const over = (e) => {
      const isHovering = !!e.target.closest(SELECTOR);
      setHovering(isHovering);
    };

    const out = (e) => {
      if (
        !e.relatedTarget ||
        !e.relatedTarget.closest ||
        !e.relatedTarget.closest(SELECTOR)
      ) {
        setHovering(false);
      }
    };

    // Smooth trail animation
    const updateTrail = () => {
      const dx = cursorPos.x - trailPos.x;
      const dy = cursorPos.y - trailPos.y;
      
      trailPos.x += dx * 0.1;
      trailPos.y += dy * 0.1;

      if (trailRef.current) {
        const trailSize = hovering ? 40 : 32;
        const trailX = trailPos.x - trailSize / 2;
        const trailY = trailPos.y - trailSize / 2;
        
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(updateTrail);
    };

    updateTrail();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", over, true);
    document.addEventListener("mouseout", out, true);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", over, true);
      document.removeEventListener("mouseout", out, true);
    };
  }, [enabled]);

  if (!enabled) return null;

  const cursorSize = hovering ? 12 : 8;
  const trailSize = hovering ? 40 : 32;
  
  const cursorX = pos.x - cursorSize / 2;
  const cursorY = pos.y - cursorSize / 2;

  return (
    <>
      {/* Trail/Outer ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          willChange: "transform",
        }}
      >
        <div
          className={[
            "rounded-full border-2 transition-all duration-300 ease-out",
            visible ? "opacity-60" : "opacity-0",
            hovering 
              ? "border-blue-400 bg-blue-400/10 scale-110" 
              : "border-white/60 bg-white/5 scale-100",
            down ? "scale-75 border-purple-400 bg-purple-400/20" : "",
          ].join(" ")}
          style={{ 
            width: trailSize, 
            height: trailSize,
            backdropFilter: "blur(2px)",
          }}
        />
      </div>

      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className={[
            "rounded-full transition-all duration-200 ease-out mix-blend-difference",
            visible ? "opacity-100" : "opacity-0",
            hovering 
              ? "bg-blue-500 scale-150 shadow-lg shadow-blue-500/50" 
              : "bg-white scale-100",
            down ? "scale-75 bg-purple-500 shadow-lg shadow-purple-500/50" : "",
          ].join(" ")}
          style={{ 
            width: cursorSize, 
            height: cursorSize,
            boxShadow: down
              ? "0 0 20px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)"
              : hovering 
                ? "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)"
                : "0 0 10px rgba(255, 255, 255, 0.5)"
          }}
        />
      </div>

      {/* Particles effect on hover */}
      {hovering && visible && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            transform: `translate3d(${pos.x - 25}px, ${pos.y - 25}px, 0)`,
            willChange: "transform",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${20 + Math.cos((i * Math.PI) / 3) * 15}px`,
                top: `${20 + Math.sin((i * Math.PI) / 3) * 15}px`,
                animationDelay: `${i * 100}ms`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      )}

      {/* Click ripple effect */}
      {down && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            transform: `translate3d(${pos.x - 15}px, ${pos.y - 15}px, 0)`,
            willChange: "transform",
          }}
        >
          <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-ping opacity-75" />
          <div className="w-6 h-6 border-2 border-blue-400 rounded-full animate-ping opacity-50 absolute top-1 left-1" 
               style={{ animationDelay: "0.1s" }} />
        </div>
      )}

      {/* Additional click burst effect */}
      {down && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            transform: `translate3d(${pos.x - 20}px, ${pos.y - 20}px, 0)`,
            willChange: "transform",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"
              style={{
                left: `${18 + Math.cos((i * Math.PI) / 4) * 12}px`,
                top: `${18 + Math.sin((i * Math.PI) / 4) * 12}px`,
                animationDelay: `${i * 50}ms`,
                animationDuration: "0.8s",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}