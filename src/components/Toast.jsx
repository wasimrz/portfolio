import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast" onClick={onDismiss}>
        <CheckCircle2 size={16} color="#10b981" />
        <span>{message}</span>
      </div>
    </div>
  );
}
