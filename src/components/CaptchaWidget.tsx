import React, { forwardRef } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

interface CaptchaWidgetProps {
  onToken: (token: string) => void;
  className?: string;
  size?: 'normal' | 'compact' | 'flexible';
}

export const CaptchaWidget = forwardRef<TurnstileInstance, CaptchaWidgetProps>(
  ({ onToken, className, size = 'normal' }, ref) => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
    if (!siteKey) return null;

    return (
      <Turnstile
        ref={ref}
        siteKey={siteKey}
        onSuccess={onToken}
        onExpire={() => onToken('')}
        onError={() => onToken('')}
        className={className}
        options={{ size }}
      />
    );
  }
);

CaptchaWidget.displayName = 'CaptchaWidget';
