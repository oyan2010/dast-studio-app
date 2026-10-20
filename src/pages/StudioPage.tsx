import { useState } from 'react';
import { TypingAnimation } from '../components/TypingAnimation';
import { GallerySection } from '../components/GallerySection';
import { generateDesign } from '../lib/whisk';
import { Sparkles, Check, RotateCCW, ZoomIn, Sun } from 'lucide-react';

export default function StudioPage() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        try {
            const result = await generateDesign(prompt);
            console.log("Generated:", result);
            alert(`Design generated from prompt: ${result.prompt}`);
        } catch (error) {
            alert("Generation failed. Check console.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden ethereal-bg text-[#181112] font-display">
            {/* Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-rose-gold/10 px-6 md:px-10 py-4 sticky top-0 z-50 bg-white/30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <div className="size-6 text-primary">
                        {/* Logo SVG */}
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <TypingAnimation />
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-9 uppercase tracking-widest text-[10px] font-medium">
                        <a className="hover:text-primary transition-colors" href="#">Collections</a>
                        <a className="text-primary" href="#">Studio</a>
                        <a className="hover:text-primary transition-colors" href="#">Bespoke</a>
                        <a className="hover:text-primary transition-colors" href="#">Heritage</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="flex min-w-[100px] items-center justify-center rounded-full h-10 px-6 bg-[#181112] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex flex-1 flex-col md:flex-row">
                {/* Left Customization Panel */}
                <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col justify-center gap-8 relative z-10">
                    <div className="max-w-[520px] mx-auto w-full">
                        <h1 className="text-[#181112] tracking-[0.3em] text-[42px] font-extralight leading-tight uppercase pb-2">
                            Studio <span className="text-primary font-light">Variant</span>
                        </h1>
                        <p className="text-sm text-rose-gold font-light tracking-wide mb-10 uppercase">AI-Driven Customization Experience</p>

                        <div className="space-y-6">
                            {/* Tabs */}
                            <div className="glass-panel rounded-xl p-2">
                                <div className="flex gap-2">
                                    {['Material', 'Color', 'Heel', 'Details'].map((tab, i) => (
                                        <button key={tab} className={`flex-1 text-center py-3 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all ${i === 0 ? "bg-white/60 text-[#181112] shadow-sm" : "text-[#896168] hover:bg-white/40"}`}>
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Selector */}
                            <div className="glass-panel rounded-xl p-6">
                                <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Select Base Finish</h3>
                                <div className="flex gap-3 flex-wrap">
                                    <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-primary/40 px-5 cursor-pointer shadow-sm">
                                        <div className="size-3 rounded-full bg-[#004d40]"></div>
                                        <p className="text-[#181112] text-xs font-medium uppercase tracking-tighter">Emerald Satin</p>
                                    </div>
                                    {/* More items would go here */}
                                </div>
                            </div>

                            {/* AI Prompt */}
                            <div className="glass-panel rounded-xl p-1 pr-1 flex items-center">
                                <input
                                    className="bg-transparent border-none focus:ring-0 text-sm italic font-light px-4 py-3 flex-1 outline-none w-full"
                                    placeholder="Refine your vision... 'add a morning mist effect'"
                                    type="text"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />
                                <button onClick={handleGenerate} disabled={isGenerating} className="bg-primary text-white p-2 size-10 rounded-lg flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50">
                                    <Sparkles size={20} className={isGenerating ? "animate-spin" : ""} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-between gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-gold">Estimate</span>
                                <span className="text-2xl font-light">$1,850.00</span>
                            </div>
                            <button className="flex-1 bg-primary text-white h-14 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                                Finalize Design
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Visualization Panel */}
                <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
                    {/* Background Gradients handled by CSS in wrapper but extra here */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blush/30 to-background-light -z-10"></div>

                    {/* Background Decorative Text */}
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-[0.03]">
                        <h2 className="text-[20vw] font-bold leading-none select-none tracking-tighter">DAST</h2>
                    </div>

                    {/* Pedestal */}
                    <div className="absolute bottom-20 w-80 h-12 bg-white rounded-full blur-2xl opacity-40"></div>

                    {/* Shoe Stage */}
                    <div className="relative z-10 aura-glow flex items-center justify-center p-12 group">
                        {/* Image */}
                        <div className="relative transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx1yqx9DsYEk5EQpYUiay8S7lITqI1zx7roF5l7oTQpS43nfABMFn10rOirlH9ClQDR2hy20uDGyKtbMFalA6EuItZzJm_tJTPtgmwda5RKqEyROZIHk3eL6VeW_GaQJGWP6T30evk3lKdUXlmsSSeQMUuIJDcMQRwtgqbhSgWSDkykO-071FDUadeZ8s2hobgzkdE6FGapR4hpoDyv1vBC8wLOky_U2j43Y-xxvgP92HcmyVc9GHb_s9T0KQzweRGhTO6Yd7a54w"
                                alt="Shoe"
                                className="max-w-md w-full drop-shadow-2xl mix-blend-multiply"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-rose-gold/10 to-transparent blur-3xl rounded-full opacity-60 animate-pulse"></div>
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute top-1/4 -right-8 glass-panel px-4 py-2 rounded-full flex items-center gap-2 animate-bounce opacity-80">
                            <Check size={16} className="text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Silver Rose Detailing</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-8 right-8 flex gap-3">
                        {[RotateCCW, ZoomIn, Sun].map((Icon, i) => (
                            <button key={i} className="size-12 rounded-full glass-panel flex items-center justify-center text-rose-gold hover:text-primary transition-colors">
                                <Icon size={24} />
                            </button>
                        ))}
                    </div>

                    {/* Status */}
                    <div className="absolute top-8 right-8 glass-panel px-6 py-3 rounded-full flex items-center gap-3">
                        <div className="flex gap-1">
                            <div className="size-1.5 rounded-full bg-primary/40 animate-pulse"></div>
                            <div className="size-1.5 rounded-full bg-primary/60 animate-pulse delay-75"></div>
                            <div className="size-1.5 rounded-full bg-primary animate-pulse delay-150"></div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">AI Enhancing Visual...</span>
                    </div>
                </div>
            </main>

            <GallerySection />
        </div >
    );
}
