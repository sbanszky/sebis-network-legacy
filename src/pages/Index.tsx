
import Hero from "@/components/Hero";
import CareerTimeline from "@/components/CareerTimeline";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <CareerTimeline />
      <PhotoGallery />
    </div>
  );
};

export default Index;
