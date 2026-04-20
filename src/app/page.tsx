import { Hero } from "@/components/hero";
import { Navigation } from "@/components/landing/navigation";
import ShapeGrid from "@/components/ShapeGrid";

export default function Home() {
  return (
    // <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),linear-gradient(to_bottom,#fff,#f8fafc)] px-6 py-16 text-slate-950 dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),linear-gradient(to_bottom,#020617,#0f172a)] dark:text-slate-50">
    <main className="min-h-screen dark:text-slate-50 light:text-red-500">
      <div className="h-screen w-screen absolute top-0 left-0 -z-10">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square" // square, hexagon, circle, triangle
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
          direction="diagonal"
          hoverColor="#222222"
          size={40}
          shape="square"
        />
      </div>
      <Navigation />
      <Hero />
    </main>
  );
}
