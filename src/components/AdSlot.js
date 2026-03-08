export default function AdSlot({ label = 'Advertisement' }) {
    return (
        <div className="ad-slot" aria-label={label}>
            {/* Google AdSense unit will be placed here after approval */}
            <span>{label}</span>
        </div>
    );
}
