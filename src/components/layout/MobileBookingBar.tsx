import { useRouter } from '../../lib/router';
import { CalendarCheck } from 'lucide-react';

export function MobileBookingBar() {
  const { navigate } = useRouter();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
      <div className="glass-strong border-t border-white/30 px-4 py-2.5 dark:border-white/10">
        <button onClick={() => navigate('/booking')} className="btn-gold w-full !py-3">
          <CalendarCheck className="h-4 w-4" />
          Book Free Consultation
        </button>
      </div>
    </div>
  );
}
