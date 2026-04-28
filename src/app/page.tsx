import { Hero } from "@/components/hero";
import { Navigation } from "@/components/landing/navigation";
import ShapeGrid from "@/components/ShapeGrid";
import { Experience } from "@/modules/about/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen dark:text-slate-50 light:text-red-500">
      <div className="fixed inset-0 -z-20">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          borderColor="#2F293A"
          hoverFillColor="#222"
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
          direction="diagonal"
          shape="square"
        />
      </div>
      <Navigation />
      <div className="flex flex-col gap-10">
        <Hero />
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Experiência
          </h2>
          <Experience />
        </div>
      </div>
    </main>
  );
}
