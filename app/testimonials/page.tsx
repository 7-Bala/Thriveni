// import Image from 'next/image';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      
      {/* HERO */}
      <section className="bg-metal-900 py-20 relative">
        <div className="container-custom text-center">
          <h1 className="font-display text-5xl text-metal-50 mb-4">Real Customers. Real Stories.</h1>
          <p className="text-metal-400 max-w-2xl mx-auto mb-16">10,000+ families have trusted Thriveni Cars. Here&apos;s what they say.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { num: '4.9/5', label: 'Average Rating' },
              { num: '10,000+', label: 'Customers' },
              { num: '98%', label: 'Recommend Us' },
              { num: '15+ Years', label: 'Serving Chennai' },
            ].map(stat => (
              <div key={stat.label} className="bg-metal-800 border border-metal-700 rounded-xl p-5 text-center">
                <div className="font-display text-4xl text-amber-cta mb-1">{stat.num}</div>
                <div className="text-metal-400 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXT REVIEWS */}
      <section className="py-24 bg-bg-section">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield', 'Service'].map((tab, i) => (
              <button key={tab} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-olive-700 text-white' : 'bg-white text-metal-600 border border-metal-200 hover:border-olive-400'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map(i => (
              <div key={i} className="break-inside-avoid mb-6 bg-white rounded-xl p-6 border border-metal-100 hover:shadow-automotive transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 text-amber-cta">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>
                  <span className="text-xs text-metal-400">2 days ago</span>
                </div>
                
                <p className="font-body text-metal-600 text-sm leading-relaxed italic mb-6">
                  &quot;The entire process from booking to delivery was extremely smooth. The sales executive explained all features patiently. Got a great exchange value for my old car too!&quot;
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-metal-100">
                  <div className="w-10 h-10 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center font-bold text-sm shrink-0">VK</div>
                  <div>
                    <div className="font-medium text-metal-800 text-sm">Vikram Kumar</div>
                    <div className="text-xs text-metal-500 mb-1">Anna Nagar Branch</div>
                    <div className="bg-olive-50 text-olive-700 text-[10px] px-2 py-0.5 rounded-full inline-block">Bought: NEXA Grand Vitara</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-olive-700 text-olive-700 px-10 py-3.5 hover:bg-olive-700 hover:text-white transition-all font-semibold rounded">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* RATING BREAKDOWN */}
      <section className="py-20 bg-white">
        <div className="container-custom flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-end justify-center md:justify-start gap-2 mb-4">
              <span className="font-display text-7xl text-olive-700 leading-none">4.9</span>
              <span className="text-metal-400 text-2xl mb-1">/5</span>
            </div>
            <div className="flex gap-1 text-amber-cta justify-center md:justify-start mb-2">
              {[1,2,3,4,5].map(star => (
                <svg key={star} className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
            <p className="text-metal-500 text-sm">Based on 10,247 verified reviews</p>
          </div>
          
          <div className="md:w-1/2 w-full max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              {[
                { label: 'Service Quality', score: '4.9' },
                { label: 'Staff Behaviour', score: '4.9' },
                { label: 'Vehicle Condition', score: '4.8' },
                { label: 'Value for Money', score: '4.7' },
                { label: 'Process Ease', score: '4.9' }
              ].map(cat => (
                <div key={cat.label} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-metal-600">{cat.label}</div>
                  <div className="flex-1 h-2.5 bg-metal-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-cta rounded-full" style={{ width: `${(parseFloat(cat.score)/5)*100}%` }}></div>
                  </div>
                  <div className="w-8 text-right text-sm font-semibold text-metal-800">{cat.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
