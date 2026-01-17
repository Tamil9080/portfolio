import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Background from '../../components/Background';
import ClickSpark from '../../components/ClickSpark.jsx';
import SpiderScroll from '../../components/SpiderScroll';

export default function ContactPage() {
  return (
    <ClickSpark sparkColor="#00ffff" sparkSize={12} sparkRadius={20} sparkCount={10} duration={500} easing="ease-out" extraScale={1.2}>
      <div className="w-full bg-black text-white selection:bg-cyan-500/40 font-sans min-h-screen">
        <Background />
        <SpiderScroll />
        
        <div className="relative z-10">
          <Navbar />
          <div className="pt-32 page-content">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </ClickSpark>
  );
}
