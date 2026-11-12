import { Suspense } from "react";
import { NotFoundContent } from "@/shared/errors/NotFoundContent";

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
}
