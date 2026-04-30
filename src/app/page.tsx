import { Hero } from "@/components/hero";
import { Navigation } from "@/components/landing/navigation";
import ShapeGrid from "@/components/ShapeGrid";
import { Separator } from "@/components/ui/separator";
import { Expertise } from "@/modules/about/components/expertise";
import { StackAndTools } from "@/modules/about/components/StackAndTools";

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
        <Separator />
        <StackAndTools />
        <Separator />
        <Expertise />
        <Separator />
      </div>
    </main>
  );
}
