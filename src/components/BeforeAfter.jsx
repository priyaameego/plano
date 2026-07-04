import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle">Real Results</span>
          <h2 className="heading-lg">
            Transformations that <span className="text-navy-900">Speak for Themselves</span>
          </h2>
          <p className="text-slate-600 text-lg">
            See the difference our advanced cosmetic and restorative treatments can make. Slide to compare before and after.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1590664216390-34fa79bf39b8?q=80&w=2070&auto=format&fit=crop" alt="Before" />}
            itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" alt="After" />}
            className="h-[400px] md:h-[600px] w-full"
            handle={
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-900">
                  <path d="M18 8L22 12L18 16"/>
                  <path d="M6 8L2 12L6 16"/>
                  <path d="M2 12H22"/>
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
