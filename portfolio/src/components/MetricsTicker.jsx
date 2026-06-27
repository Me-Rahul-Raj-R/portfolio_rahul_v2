import React, { useState, useEffect, useRef } from 'react';
import { metrics } from '../data/portfolioData';

// Animate number from 0 to target
const useCountUp = (target, duration = 1800, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, shouldStart]);

  return count;
};

// Individual metric item with intersection-triggered counter
const MetricItem = ({ metric, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericValue = parseInt(metric.value.replace(/\D/g, ''), 10);
  const count = useCountUp(numericValue, 1600 + index * 200, visible);

  return (
    <div
      className="metrics-item"
      ref={ref}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="metrics-number">
        <span className="metrics-value">
          {visible ? count.toLocaleString() : '0'}
        </span>
        <span className="metrics-suffix">{metric.suffix}</span>
      </div>
      <div className="metrics-label">{metric.label}</div>
      <div className="metrics-desc">{metric.description}</div>
    </div>
  );
};

const MetricsTicker = () => {
  return (
    <div className="metrics" aria-label="Key achievements at a glance">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((metric, i) => (
            <MetricItem key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsTicker;
